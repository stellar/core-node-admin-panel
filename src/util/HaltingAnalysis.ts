import {
  NetworkGraphNode,
  QuorumSet as NetworkQuorumSet
} from "../Types/NetworkTypes";

// Represents a failure case where a set of N nodes can take down your network
export type HaltingFailure = {
  // The nodes which can go down and cause havoc
  vulnerableNodes: NetworkGraphNode[];
  // The nodes which will go down in response to the vulnerable nodes
  affectedNodes: NetworkGraphNode[];
};

type AnalysisNode = {
  name: string;
  live: boolean;
  status: string;
  quorumSet: AnalysisQuorumSet;
  dependentsNames: string[];
  networkObject: NetworkGraphNode;
};

type AnalysisQuorumSet = {
  threshold: number;
  dependencies: (string | AnalysisQuorumSet)[];
};

// Type guards for determining dependency types
function isQuorumSet(n: string | AnalysisQuorumSet): n is AnalysisQuorumSet {
  return (n as AnalysisQuorumSet).threshold !== undefined;
}

function isNested(set: string | NetworkQuorumSet): set is NetworkQuorumSet {
  return typeof set != "string";
}

// Create the data structure needed for analysis
// Returns tuple of root node and an array of all nodes
export function createAnalysisStructure(
  nodes: NetworkGraphNode[]
): { root: AnalysisNode; entries: AnalysisNode[] } {
  const myNode = nodes.find(n => n.distance === 0);
  if (!myNode) {
    throw new Error("No node with distance 0 in halting analysis");
  }

  const entryCache: Map<String, AnalysisNode> = new Map<String, AnalysisNode>();
  const root = generateNode(myNode);
  function generateNode(node: NetworkGraphNode): AnalysisNode {
    const cached = entryCache.get(node.node);
    if (cached) return cached;

    const entry: AnalysisNode = {
      networkObject: node,
      name: node.node,
      live: true,
      status: node.status,
      quorumSet: {
        threshold: 0,
        dependencies: []
      },
      dependentsNames: []
    };
    entryCache.set(entry.name, entry);
    if (node.qset) {
      entry.quorumSet.threshold = node.qset.t;
      generateQuorumset(node.qset, entry);
    } else if (node.status === "missing") {
      entry.live = false;
    } else {
      throw new Error("Bad state, No Qset on non-missing node " + node.node);
    }
    function generateQuorumset(set: NetworkQuorumSet, entry: AnalysisNode) {
      set.v.forEach(dependent => {
        if (isNested(dependent)) {
          generateQuorumset(dependent, entry);
        } else {
          let dependentName = dependent;
          const dependentNetworkNode = nodes.find(
            n => n.node === dependentName
          );
          if (!dependentNetworkNode) {
            throw new Error(
              "Bad network graph: no node named " + dependentName
            );
          }
          const depNode = generateNode(dependentNetworkNode);
          entry.quorumSet.dependencies.push(depNode.name);
          depNode.dependentsNames.push(entry.name);
        }
      });
    }

    return entry;
  }

  return { root, entries: Array.from(entryCache.values()) };
}

// Reset any analysis data between passes
function reset(nodes: AnalysisNode[]) {
  nodes.forEach(n => (n.live = true));
}

/*
 * Create all sets of maxSize or fewer combinations of nodes
 */
export function generateCombinations<T>(items: T[], maxSize: number): (T[])[] {
  const results: T[][] = [];
  if (maxSize <= 0) return results;
  items.forEach(item => {
    results.push([item]);
    const others = items.slice(items.indexOf(item) + 1);
    const otherCombos = generateCombinations(others, maxSize - 1);
    otherCombos.forEach(otherCombo => results.push([item, ...otherCombo]));
  });
  return results.sort((a, b) => a.length - b.length);
}

/*
 * Run the halting analysis on a node graph. Iterate through making each node faulty and seeing what quorums
 * it affects, and whether or not it halts your own node.
 * @param {number} numberOfNodesToTest - Maximum number of nodes to fault test at each pass
 * @return {HaltingFailure[]} List of failure cases
 */
export function haltingAnalysis(
  nodes: NetworkGraphNode[],
  numberOfNodesToTest: number = 1
): HaltingFailure[] {
  const failureCases: HaltingFailure[] = [];
  const { root, entries: analysisNodes } = createAnalysisStructure(nodes);
  function getNode(name: string): AnalysisNode {
    return analysisNodes.find(n => n.name === name) as AnalysisNode;
  }
  // Actual analysis
  // Run through each node and observe the effects of failing it
  const failureSets = generateCombinations(analysisNodes, numberOfNodesToTest);
  failureSets.forEach(nodesToHalt => {
    if (nodesToHalt.indexOf(root) !== -1) return;

    // Don't search a node set if there's an existing failure case with a subset of these nodes.
    // IE no need to test (NodeA U NodeB) for failure if we know (NodeA) alone will already cause it.
    if (
      failureCases.some(fc =>
        fc.vulnerableNodes.every(n =>
          nodesToHalt.some(an => an.networkObject === n)
        )
      )
    ) {
      return;
    }
    reset(analysisNodes);

    let deadNodes: NetworkGraphNode[] = [];
    nodesToHalt.forEach(n => (n.live = false));
    nodesToHalt.forEach(n => checkDependents(n));
    /*
     * Check all the nodes that are dependent on this newly dead node to see if they go
     * down as well
     * @param { AnalysisNode } deadNode - A node that is no longer live
     */
    function checkDependents(deadNode: AnalysisNode) {
      deadNode.dependentsNames.forEach(nodeName => {
        const dependentNode = getNode(nodeName);
        // If this node is currently live, but can't make threshold it
        // goes down, and this error can propagate out.
        if (
          dependentNode.live &&
          !quorumSetMeetsThreshold(dependentNode.quorumSet)
        ) {
          dependentNode.live = false;
          deadNodes.push(dependentNode.networkObject);
          checkDependents(dependentNode);
        }
      });
    }

    /*
     *  Check if this quorum set has enough live nodes to validate
     *  @param { AnalysisQuorumSet } quorum - Quorum set to test
     *  @return { boolean } true if this quorum set meets its threshold of valid nodes
     */

    function quorumSetMeetsThreshold(quorum: AnalysisQuorumSet): boolean {
      let threshold = quorum.threshold;
      quorum.dependencies.forEach(dependent => {
        if (isQuorumSet(dependent)) {
          if (quorumSetMeetsThreshold(dependent)) {
            threshold--;
          }
        } else {
          let dependentNode = getNode(dependent);
          if (dependentNode.live) {
            threshold--;
          } else {
            deadNodes.push(dependentNode.networkObject);
          }
        }
      });
      return threshold <= 0;
    }

    if (!root.live) {
      deadNodes = Array.from(new Set(deadNodes));
      failureCases.push({
        vulnerableNodes: nodesToHalt.map(n => n.networkObject),
        affectedNodes: deadNodes
      });
    }
  });

  // Sort by vulnerable node length since we want to prioritize the most fragile cases
  return failureCases.sort(
    (a, b) => a.vulnerableNodes.length - b.vulnerableNodes.length
  );
}
