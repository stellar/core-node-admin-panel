import { GraphData } from "../GraphTypes";
import dummydata from "../dummydata";

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
          transitiveQuorum: dummydata
        }
      );
      break;
    default:
      return state;
  }
  return state;
}
