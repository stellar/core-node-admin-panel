import { GraphData } from "../Types/GraphTypes";
import { NetworkGraphNode } from "../Types/NetworkTypes";
import dummydata from "../test/data/ServerDefaults";
import { networkNodesToGraphData } from "../util/QuorumParsing";
import { haltingAnalysis, HaltingFailure } from "../util/HaltingAnalysis";

import healthy from "../test/data/HealthyQuorum";
import highlyDependent from "../test/data/HighlyDependent";
import { simple as highlyDependentSubquorum } from "../test/data/HighlyDependentSubquorum";
import halfDead from "../test/data/HalfDead";
import preHalt from "../test/data/PreHalt";

const networkData = dummydata as { nodes: NetworkGraphNode[] };

type ExampleKey =
  | "healthy"
  | "halfDead"
  | "highlyDependent"
  | "highlyDependentSubquorum"
  | "preHalt";

type Action =
  | { type: "FETCH_QUORUM" }
  | {
      type: "USE_EXAMPLE";
      data: NetworkGraphNode[];
      failures: HaltingFailure[];
    }
  | { type: "UNKNOWN" };

export function fetchQuorum(): Action {
  return showExample("preHalt");
}

const examples: Map<ExampleKey, NetworkGraphNode[]> = new Map([
  ["healthy", healthy],
  ["halfDead", halfDead],
  ["highlyDependent", highlyDependent],
  ["highlyDependentSubquorum", highlyDependentSubquorum],
  ["preHalt", preHalt]
]);

export function showExample(example: string): Action {
  const nodes = examples.get(example as ExampleKey);
  if (!nodes) {
    throw new Error("Unknown example key");
  }
  const failures = haltingAnalysis(nodes, 2);
  return { type: "USE_EXAMPLE", data: nodes, failures: failures };
}

export type QuorumStateShape = {
  transitiveQuorum: GraphData;
  validExamples: string[];
  failures: HaltingFailure[];
};

export default function reducer(
  state: QuorumStateShape = {
    validExamples: Array.from(examples.keys()),
    transitiveQuorum: {
      links: [],
      nodes: []
    },
    failures: []
  },
  action: Action = { type: "UNKNOWN" }
) {
  switch (action.type) {
    case "USE_EXAMPLE":
      return Object.assign({}, state, {
        transitiveQuorum: networkNodesToGraphData(action.data),
        failures: action.failures
      });
    case "FETCH_QUORUM":
      return Object.assign({}, state, {
        transitiveQuorum: networkNodesToGraphData(networkData.nodes)
      });
    default:
      return state;
  }
}
