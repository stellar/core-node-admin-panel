import { NetworkGraphNode } from "../../Types/NetworkTypes";
import { makeGraph } from "../util/makeNode";

// Half the network knocked out when d goes down
const halfdead: NetworkGraphNode[] = makeGraph({
  a: {
    distance: 0,
    qset: { t: 3, v: ["b", "c", "d", "e"] }
  },
  b: {
    qset: { t: 1, v: ["d"] }
  },
  c: {
    qset: { t: 1, v: ["d"] }
  },
  d: {
    qset: { t: 1, v: ["e"] }
  },
  e: {},
  f: {}
});

export default halfdead;
