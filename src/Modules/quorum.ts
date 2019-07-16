import { GraphData } from "../Types/GraphTypes";
import {
  NetworkGraphNode,
  haltingAnalysis,
  HaltingFailure
} from "@stellar/halting-analysis";

import { networkNodesToGraphData } from "../util/QuorumParsing";
import ProxyService from "./ProxyService";
import { Dispatch } from "redux";

type Action =
  | { type: "USE_QUORUM"; data: NetworkGraphNode[]; failures: HaltingFailure[] }
  | { type: "SELECT_FAILURE"; data: HaltingFailure }
  | { type: "UNKNOWN" };

export function fetchQuorum() {
  return async (dispatch: Dispatch) => {
    const response = await ProxyService.get("/quorum");
    const nodes = response.data.nodes as NetworkGraphNode[];
    const failures = haltingAnalysis(nodes, 2);
    dispatch({ type: "USE_QUORUM", name: "actual", data: nodes, failures });
  };
}

export function selectFailure(failure: HaltingFailure): Action {
  return { type: "SELECT_FAILURE", data: failure };
}

export type QuorumStateShape = {
  transitiveQuorum: GraphData;
  failures: HaltingFailure[];
  selectedFailure?: HaltingFailure;
};

export default function reducer(
  state: QuorumStateShape = {
    transitiveQuorum: {
      links: [],
      nodes: []
    },
    failures: [],
    selectedFailure: undefined
  },
  action: Action = { type: "UNKNOWN" }
) {
  switch (action.type) {
    case "USE_QUORUM":
      return {
        ...state,
        transitiveQuorum: networkNodesToGraphData(action.data),
        failures: action.failures,
        selectedFailure: action.failures[0]
      };
    case "SELECT_FAILURE":
      return {
        ...state,
        selectedFailure: action.data
      };
    default:
      return state;
  }
}
