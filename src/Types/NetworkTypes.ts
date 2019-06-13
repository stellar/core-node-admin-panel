import { node } from "prop-types";

export type NetworkGraphNode = {
  distance: number;
  //
  heard: number;
  // The identity of the validator
  node: string;
  // Quorum set.
  qset: {
    t: number;
    v: string[] | { t: number; v: string[] }[];
  };
  // one of behind|tracking|ahead (compared to the root node) or missing|unknown (when there are no recent SCP messages for that node)
  status: string;
  // what the node is voting for
  value: string;
  // a unique ID for what the node is voting for (allows to quickly tell if nodes are voting for the same thing)
  value_id: number;
};
