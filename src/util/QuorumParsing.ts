import { GraphData } from "../Types/GraphTypes";
import { NetworkGraphNode, QuorumSet } from "../Types/NetworkTypes";

export function networkNodesToGraphData(nodes: NetworkGraphNode[]): GraphData {
  let data: GraphData = {
    nodes: nodes.map(ngn => Object.assign({}, ngn, { id: ngn.node })),
    links: []
  };
  nodes.forEach(node => {
    let targetValidatorNames: string[] = [];

    const applyQuorumSetToNode = (node: NetworkGraphNode, set: QuorumSet) => {
      let quorum = set.v;
      if (quorum[0] && quorum[0] instanceof Object) {
        (quorum as QuorumSet[]).forEach(quorumSet => {
          applyQuorumSetToNode(node, quorumSet);
        });
      } else {
        (set.v as string[]).forEach(validator => {
          targetValidatorNames.push(validator);
        });
      }
    };

    if (node.qset) {
      applyQuorumSetToNode(node, node.qset);
    }

    targetValidatorNames.forEach(target => {
      data.links.push({
        source: node.node,
        target: target
      });
    });
  });

  return data;
}
