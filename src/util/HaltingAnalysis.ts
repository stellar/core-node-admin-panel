import { NetworkGraphNode, QuorumSet } from "../Types/NetworkTypes";

export type HaltingFailure = {
  // The nodes which can go down and cause havoc
  vulnerableNodes: NetworkGraphNode[];
  // The nodes which will go down in response to the vulnerable nodes
  affectedNodes: NetworkGraphNode[];
};

type AnalysisGraphNode = {
  node: NetworkGraphNode;
  dependents: AnalysisGraphNode[];
  dependencies: AnalysisGraphNode[];
  live: boolean;
};

function uniqueArray<T>(array: Array<T>): Array<T> {
  const unique = (value: T, index: number, self: Array<T>) => {
    return self.indexOf(value) === index;
  };
  return array.filter(unique);
}

/*
 * Run the halting analysis on a node graph. Iterate through making each node faulty and seeing what quorums
 * it affects, and whether or not it halts your own node.
 * @param {number} numberOfNodesToTest - Maximum number of nodes to fault test at each pass
 * @return {HaltingFailure[]} List of failure cases
 */
export function haltingAnalysis(
  nodes: NetworkGraphNode[],
  numberOfNodesToTest: number
): HaltingFailure[] {
  const failureCases: HaltingFailure[] = [];

  let analysisNodes: AnalysisGraphNode[] = nodes.map(n => {
    return {
      node: n,
      dependents: [],
      dependencies: [],
      live: true
    };
  });

  const myNode = analysisNodes.find(n => n.node.distance == 0);
  if (!myNode) {
    throw new Error("No node with distance 0 in halting analysis");
  }

  analysisNodes.forEach(n => {
    (n.node.qset.v as string[]).forEach(targetId => {
      const target = analysisNodes.find(node => node.node.node == targetId);
      if (target) {
        target.dependents.push(n);
        n.dependencies.push(target);
      } else {
        throw new Error(
          `Bad node definition: Node ${n.node.node} is dependent on missing node ${targetId}`
        );
      }
    });
  });

  analysisNodes.forEach(nodeToHalt => {
    if (nodeToHalt === myNode) return;

    // Reset on each pass
    analysisNodes.forEach(n => (n.live = true));

    let deadNodes: NetworkGraphNode[] = [];

    function checkDependents(node: AnalysisGraphNode) {
      node.dependents.forEach(node => {
        let threshold = node.node.qset.t;
        node.dependencies.forEach(dependent => {
          if (dependent.live) {
            threshold--;
          } else {
            deadNodes.push(dependent.node);
          }
        });

        // If we don't have enough live nodes
        if (threshold > 0) {
          node.live = false;
        }
        checkDependents(node);
      });
    }

    nodeToHalt.live = false;
    checkDependents(nodeToHalt);

    if (!myNode.live) {
      deadNodes = uniqueArray(deadNodes);
      failureCases.push({
        vulnerableNodes: [nodeToHalt.node],
        affectedNodes: deadNodes
      });
    }
  });
  return failureCases;
}
