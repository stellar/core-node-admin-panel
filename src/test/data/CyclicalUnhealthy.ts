import { NetworkGraphNode } from "../../Types/NetworkTypes";
import { makeGraph } from "../util/makeNode";

// A unhealhty graph with a cycle
const cyclical: NetworkGraphNode[] = makeGraph({
  a: {
    distance: 0,
    qset: { t: 2, v: ["b", "c"] }
  },
  b: {
    qset: { t: 1, v: ["c"] }
  },
  c: {
    qset: { t: 1, v: ["b"] }
  }
});

export default cyclical;
