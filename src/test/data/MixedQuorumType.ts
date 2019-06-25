import { NetworkGraphNode } from "../../Types/NetworkTypes";
import { makeGraph } from "../util/makeNode";

// Some quorums can be lists of both nodes and subquorums
const halfdead: NetworkGraphNode[] = makeGraph({
  a: {
    distance: 0,
    qset: {
      t: 3,
      v: [
        "b",
        "c",
        {
          t: 1,
          v: ["d"]
        }
      ]
    }
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
