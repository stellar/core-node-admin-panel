import { GraphData, GraphLink, GraphNode } from "../Types/GraphTypes";
import { NetworkGraphNode } from "../Types/NetworkTypes";
import dummydata from "../dummydata";

function convertResponseToGraphData(json: {
  nodes: NetworkGraphNode[];
}): GraphData {
  const convertedNodes: GraphNode[] = json.nodes.map(gn =>
    Object.assign({}, gn, { id: gn.node })
  );

  const data: GraphData = {
    nodes: convertedNodes,
    links: []
  };
  json.nodes.forEach(n => {
    let targets: string[] = [];
    let others = n.qset.v;
    if (others[0] && others[0] instanceof Object) {
      (others as { t: number; v: string[] }[]).forEach(other => {
        other.v.forEach(other => {
          targets.push(other);
        });
      });
    } else {
      targets = n.qset.v as string[];
    }
    targets.forEach(target => {
      data.links.push({
        source: n.node,
        target: target
      });
    });
  });
  return data;
}

type Action =
  | { type: "FETCH_QUORUM"; payload: GraphData }
  | { type: "UNKNOWN" };

export function fetchQuorum() {
  return { type: "FETCH_QUORUM" };
}

type QuorumStateShape = {
  transitiveQuorum: GraphData;
};

export default function reducer(
  state: QuorumStateShape = {
    transitiveQuorum: {
      links: [],
      nodes: []
    }
  },
  action: Action = { type: "UNKNOWN" }
) {
  switch (action.type) {
    case "FETCH_QUORUM":
      return Object.assign(
        {},
        {
          transitiveQuorum: convertResponseToGraphData(dummydata)
        }
      );
      break;
    default:
      return state;
  }
  return state;
}
