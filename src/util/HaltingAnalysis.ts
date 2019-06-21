import { NetworkGraphNode, QuorumSet } from "../Types/NetworkTypes";

// Represents a failure case where a set of N nodes can take down your network
export type HaltingFailure = {
  // The nodes which can go down and cause havoc
  vulnerableNodes: NetworkGraphNode[];
  // The nodes which will go down in response to the vulnerable nodes
  affectedNodes: NetworkGraphNode[];
};

export type AnalysisNode = {
  name: string;
  live: boolean;
  quorumSet: AnalysisQuorumSet;
  dependentsNames: string[];
  networkObject: NetworkGraphNode;
};

type AnalysisQuorumSet = {
  threshold: number;
  dependencies: (string | AnalysisQuorumSet)[];
};

const NoDependencies = {
  threshold: 0,
  dependencies: []
};

function isQuorumSet(n: string | AnalysisQuorumSet): n is AnalysisQuorumSet {
  return (<AnalysisQuorumSet>n).threshold !== undefined;
}

// Create the data structure needed for analysis
// Returns tuple of root node and an array of all nodes
export function createAnalysisStructure(
  nodes: NetworkGraphNode[]
): [AnalysisNode, AnalysisNode[]] {
  const myNode = nodes.find(n => n.distance == 0);
  if (!myNode) {
    throw new Error("No node with distance 0 in halting analysis");
  }
  const entries: AnalysisNode[] = [];

  const entryCache: Map<String, AnalysisNode> = new Map<String, AnalysisNode>();

  function generateNode(node: NetworkGraphNode): AnalysisNode {
    const cached = entryCache.get(node.node);
    if (cached) {
      return cached;
    }
    const entry: AnalysisNode = {
      networkObject: node,
      name: node.node,
      live: true,
      quorumSet: {
        threshold: node.qset.t,
        dependencies: []
      },
      dependentsNames: []
    };
    entryCache.set(node.node, entry);

    function generateQuorumset(set: QuorumSet, entry: AnalysisNode) {
      if (set.v.length > 0 && typeof set.v[0] == "string") {
        (set.v as string[]).forEach(dependentName => {
          const dependentNetworkNode = nodes.find(n => n.node == dependentName);
          if (!dependentNetworkNode)
            throw new Error(
              "Bad network graph: no node named " + dependentName
            );
          const depNode = generateNode(dependentNetworkNode);
          entry.quorumSet.dependencies.push(depNode.name);
          depNode.dependentsNames.push(entry.name);
        });
      } else {
        (set.v as QuorumSet[]).forEach(set => {
          generateQuorumset(set, entry);
        });
      }
    }
    generateQuorumset(node.qset, entry);

    entries.push(entry);

    return entry;
  }
  const root = generateNode(myNode);
  return [root, entries];
}

// Reset any analysis data between passes
function reset(nodes: AnalysisNode[]) {
  nodes.forEach(n => (n.live = true));
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
  if (numberOfNodesToTest != 1) {
    throw new Error("Halting analysis only supports order 1 at this point");
  }
  const failureCases: HaltingFailure[] = [];
  const [root, analysisNodes] = createAnalysisStructure(nodes);
  function getNode(name: string): AnalysisNode {
    return analysisNodes.find(n => n.name == name) as AnalysisNode;
  }
  // Actual analysis
  // Run through each node and observe the effects of failing it
  analysisNodes.forEach(nodeToHalt => {
    if (nodeToHalt === root) return;

    reset(analysisNodes);

    let deadNodes: NetworkGraphNode[] = [];

    function checkSubquorum(quorum: AnalysisQuorumSet): boolean {
      let threshold = quorum.threshold;
      quorum.dependencies.forEach(dependent => {
        if (isQuorumSet(dependent)) {
          if (checkSubquorum(dependent)) {
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

    function checkDependents(deadNode: AnalysisNode) {
      deadNode.dependentsNames.forEach(nodeName => {
        const node = getNode(nodeName);
        // If this node is currently live, but can't make threshold it
        // goes down, and this error can propagate out.
        if (node.live && !checkSubquorum(node.quorumSet)) {
          node.live = false;
          checkDependents(node);
        }
      });
    }

    nodeToHalt.live = false;
    checkDependents(nodeToHalt);

    if (!root.live) {
      deadNodes = Array.from(new Set(deadNodes));
      failureCases.push({
        vulnerableNodes: [nodeToHalt.networkObject],
        affectedNodes: deadNodes
      });
    }
  });
  return failureCases;
}
