// A QuorumSetGroup can be either a grouping of validators as a single
// quorum set, or a group of inner quorum sets
export type QuorumSet = {
  // Threshold, the number of validators that need to agree
  readonly t: number;
  // List of validators or subquorum sets
  readonly v: (string | QuorumSet)[];
};

export type NetworkGraphNode = {
  // How far that node is from the root node (ie. how many quorum set hops)
  // 0 means this is the node being administrated
  readonly distance: number;
  // The latest ledger sequence number that this node voted at
  readonly heard?: number;
  // The identity of the validator
  readonly node: string;
  // Quorum set.  Missing or unknown nodes will be undefined.
  readonly qset?: QuorumSet;
  // one of behind|tracking|ahead (compared to the root node) or missing|unknown (when there are no recent SCP messages for that node)
  readonly status: "behind" | "tracking" | "ahead" | "missing" | "unknown";
  // what the node is voting for
  readonly value?: string;
  // a unique ID for what the node is voting for (allows to quickly tell if nodes are voting for the same thing)
  readonly value_id?: number;
};
