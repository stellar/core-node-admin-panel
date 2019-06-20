import { NetworkGraphNode } from "../../Types/NetworkTypes";
import { makeNode as n } from "../util/makeNode";

// A healthy node graph in which no node can take down the network
const healthy: NetworkGraphNode[] = [
  n({
    node: "a",
    distance: 0,
    qset: { t: 3, v: ["b", "c", "d", "e"] }
  }),
  n({
    node: "b",
    distance: 1
  }),
  n({
    node: "c",
    distance: 1
  }),
  n({
    node: "d",
    distance: 1
  }),
  n({
    node: "e",
    distance: 1
  })
];

export default healthy;
