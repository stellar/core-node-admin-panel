import { NetworkGraphNode } from "../../Types/NetworkTypes";
import { makeNode as n } from "../util/makeNode";

// A healthy node graph in which no node can take down the network
const cyclical: NetworkGraphNode[] = [
  n({
    node: "a",
    distance: 0,
    qset: { t: 2, v: ["b", "c"] }
  }),
  n({
    node: "b",
    distance: 1,
    qset: { t: 1, v: ["c"] }
  }),
  n({
    node: "c",
    distance: 1,
    qset: { t: 1, v: ["b"] }
  })
];

export default cyclical;
