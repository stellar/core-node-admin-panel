import { makeGraph } from "../util/makeNode";

// A fragile node graph in which a node inside an inner quorum can halt the network
const simple = makeGraph({
  a: {
    distance: 0,
    qset: {
      t: 1,
      v: ["b", "c"]
    }
  },
  b: {
    qset: {
      t: 1,
      v: [{ t: 1, v: ["c"] }]
    }
  },
  c: {}
});

// A more complex fragile node graph in which a node inside an inner quorum can halt the network
const dependOnG = {
  t: 1,
  v: [
    {
      t: 1,
      v: ["g"]
    }
  ]
};

const complex = makeGraph({
  a: {
    distance: 0,
    qset: {
      t: 2,
      v: [{ t: 2, v: ["b", "c", "d"] }, { t: 2, v: ["e", "f"] }]
    }
  },
  b: {
    qset: dependOnG
  },
  c: {
    qset: dependOnG
  },
  d: {
    qset: dependOnG
  },
  e: {
    qset: dependOnG
  },
  f: {
    qset: dependOnG
  },
  g: {}
});

export { simple, complex };
