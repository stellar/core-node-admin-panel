import { NetworkGraphNode } from "../../Types/NetworkTypes";
import { makeGraph } from "../util/makeNode";

// A quorum in which one node is missing (and causes the graph to fail)
const missing: NetworkGraphNode[] = makeGraph({
  a: {
    distance: 0,
    qset: { t: 1, v: ["b"] }
  },
  b: {
    qset: undefined,
    status: "missing"
  }
});

export default missing;
