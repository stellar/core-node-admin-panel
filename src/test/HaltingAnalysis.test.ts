import { haltingAnalysis } from "../util/HaltingAnalysis";
import healthy from "./data/HealthyQuorum";
import highlyDependent from "./data/HighlyDependent";

describe("halting analysis", () => {
  it("must return an empty set for a healthy quorum", () => {
    const dangerousNodes = haltingAnalysis(healthy, 1);
    expect(dangerousNodes).toHaveLength(0);
  });

  it("must return a node that is too highly depended on", () => {
    const dangerousNodes = haltingAnalysis(highlyDependent, 1);
    expect(dangerousNodes).toHaveLength(1);
    expect(dangerousNodes[0].vulnerableNodes[0]).toHaveProperty("node", "e");
  });
});

export {};
