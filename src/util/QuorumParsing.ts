import { GraphData } from "../Types/GraphTypes";
import { NetworkGraphNode, QuorumSet } from "../Types/NetworkTypes";

// Type guards for determining dependency types
function isQuorumSet(n: string | QuorumSet): n is QuorumSet {
  return (n as QuorumSet).v !== undefined;
}

export function networkNodesToGraphData(nodes: NetworkGraphNode[]): GraphData {
  let data: GraphData = {
    nodes: nodes.map(ngn => Object.assign({}, ngn, { id: ngn.node })),
    links: []
  };
  nodes.forEach(node => {
    let targetValidatorNames: string[] = [];

    const applyQuorumSetToNode = (node: NetworkGraphNode, set: QuorumSet) => {
      let quorum = set.v;
      quorum.forEach(quorumEntry => {
        if (isQuorumSet(quorumEntry)) {
          applyQuorumSetToNode(node, quorumEntry);
        } else {
          targetValidatorNames.push(quorumEntry);
        }
      });
    };

    if (node.qset) {
      applyQuorumSetToNode(node, node.qset);
    }

    targetValidatorNames.forEach(target => {
      if (typeof target !== "string") {
        console.log("Source", node.node);
        console.log(target);
      }
      data.links.push({
        source: node.node,
        target: target
      });
    });
  });

  return data;
}
