export type QuorumSet = {
  // Threshold, the number of validators that need to agree
  t: number;
  // List of validators
  v: string[];
};

// A QuorumSetGroup can be either a grouping of validators as a single
// quorum set, or a group of inner quorum sets
export type QuorumSetGroup = {
  // Threshold, the number of validators that need to agree
  t: number;
  // List of validators or subquorum sets
  v: string[] | QuorumSetGroup[];
};

export type NetworkGraphNode = {
  // How far that node is from the root node (ie. how many quorum set hops)
  // 0 means this is the node being administrated
  distance: number;
  // The latest ledger sequence number that this node voted at
  heard: number;
  // The identity of the validator
  node: string;
  // Quorum set
  qset: QuorumSetGroup;
  // one of behind|tracking|ahead (compared to the root node) or missing|unknown (when there are no recent SCP messages for that node)
  status: "behind" | "tracking" | "ahead" | "missing" | "unknown";
  // what the node is voting for
  value: string;
  // a unique ID for what the node is voting for (allows to quickly tell if nodes are voting for the same thing)
  value_id: number;
};
