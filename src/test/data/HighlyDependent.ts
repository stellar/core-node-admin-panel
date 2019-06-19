import { NetworkGraphNode } from "../../Types/NetworkTypes";
import { makeNode as n } from "../util/makeNode";

// A node graph where every node depends on e, and e going down will halt all quorums
const unhealthy: NetworkGraphNode[] = [
  n({
    node: "a",
    distance: 0,
    qset: { t: 3, v: ["b", "c", "d", "e"] }
  }),
  n({
    node: "b",
    distance: 1,
    qset: { t: 1, v: ["e"] }
  }),
  n({
    node: "c",
    distance: 1,
    qset: { t: 1, v: ["e"] }
  }),
  n({
    node: "d",
    distance: 1,
    qset: { t: 1, v: ["e"] }
  }),
  n({
    node: "e",
    distance: 1,
    qset: { t: 0, v: [] }
  })
];

export default unhealthy;
