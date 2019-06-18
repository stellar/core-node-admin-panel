import { NetworkGraphNode, QuorumSetGroup } from "../Types/NetworkTypes";
import { networkNodesToGraphData } from "../util/QuorumParsing";

function makeNodeFromQset(qset: QuorumSetGroup, opts?: any): NetworkGraphNode {
  return Object.assign(
    {
      node: "my_test_node",
      distance: 0,
      heard: 0
    },
    opts || {},
    { qset }
  );
}

function arrayContainingObject(key: string, value: string) {
  return expect.arrayContaining([
    expect.objectContaining({
      [key]: value
    })
  ]);
}

describe("quorum parsing", () => {
  it("should parse string array quorum sets", () => {
    const qset = {
      t: 2,
      v: ["sdf1", "sdf2", "sdf3"]
    };
    const nodes = [makeNodeFromQset(qset)];
    const data = networkNodesToGraphData(nodes);
    expect(data.links).toHaveLength(3);
    expect(data.links).toEqual(arrayContainingObject("target", "sdf1"));
  });

  it("should parse single layer deep quorum sets", () => {
    const qset = {
      t: 3,
      v: [
        {
          t: 2,
          v: ["GADLA", "GD6SZ"]
        },
        {
          t: 2,
          v: ["sdf_watcher1", "sdf_watcher2"]
        }
      ]
    };
    const nodes = [makeNodeFromQset(qset)];
    const data = networkNodesToGraphData(nodes);
    expect(data.links).toHaveLength(4);
    expect(data.links).toEqual(arrayContainingObject("target", "GADLA"));
    expect(data.links).toEqual(arrayContainingObject("target", "sdf_watcher1"));
  });

  it("should parse multi layer deep quorum sets", () => {
    const qset = {
      t: 3,
      v: [
        {
          t: 2,
          v: [
            {
              t: 1,
              v: ["othervalidator1", "othervalidator2"]
            }
          ]
        },
        {
          t: 2,
          v: ["sdf_watcher1", "sdf_watcher2"]
        }
      ]
    };
    const nodes = [makeNodeFromQset(qset)];
    const data = networkNodesToGraphData(nodes);
    expect(data.links).toHaveLength(4);
    expect(data.links).toEqual(
      arrayContainingObject("target", "othervalidator1")
    );
    expect(data.links).toEqual(arrayContainingObject("target", "sdf_watcher1"));
  });
});

export {};
