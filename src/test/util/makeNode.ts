import { NetworkGraphNode } from "../../Types/NetworkTypes";

function makeid(length: number) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function makeNode(options: any): NetworkGraphNode {
  return Object.assign(
    {
      distance: 1,
      heard: 1,
      node: makeid(5),
      // Quorum set
      qset: { t: 1, v: [] },
      status: "unknown",
      value: "val",
      value_id: 1
    },
    options
  );
}
