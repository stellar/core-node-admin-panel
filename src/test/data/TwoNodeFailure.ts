import { NetworkGraphNode } from "../../Types/NetworkTypes";
import { makeGraph } from "../util/makeNode";

// Failure when b and c go down
const twonode: NetworkGraphNode[] = makeGraph({
  a: {
    distance: 0,
    qset: { t: 1, v: ["b", "c"] }
  },
  b: {},
  c: {}
});

export default twonode;
