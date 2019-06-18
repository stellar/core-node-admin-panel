import { GraphData } from "../Types/GraphTypes";
import { NetworkGraphNode } from "../Types/NetworkTypes";
import dummydata from "../dummydata";
import { networkNodesToGraphData } from "../util/QuorumParsing";

const networkData = dummydata as { nodes: NetworkGraphNode[] };

type Action = { type: "FETCH_QUORUM" } | { type: "UNKNOWN" };

export function fetchQuorum(): Action {
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
          transitiveQuorum: networkNodesToGraphData(networkData.nodes)
        }
      );
    default:
      return state;
  }
}
