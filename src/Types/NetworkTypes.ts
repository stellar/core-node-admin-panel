export type NetworkGraphNode = {
  // How far that node is from the root node (ie. how many quorum set hops)
  // 0 means this is the node being administrated
  distance: number;
  // The latest ledger sequence number that this node voted at
  heard: number;
  // The identity of the validator
  node: string;
  // Quorum set
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
