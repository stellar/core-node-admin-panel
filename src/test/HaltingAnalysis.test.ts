import { haltingAnalysis } from "../util/HaltingAnalysis";
import healthy from "./data/HealthyQuorum";
import healthySubquorums from "./data/HealthySubquorums";
import highlyDependent from "./data/HighlyDependent";

describe("halting analysis", () => {
  it("must return an empty set for a healthy quorum", () => {
    const failureCases = haltingAnalysis(healthy, 1);
    expect(failureCases).toHaveLength(0);
  });

  it("must return an empty set for healthy quorums with subquorums", () => {
    const failureCases = haltingAnalysis(healthySubquorums, 1);
    expect(failureCases).toHaveLength(0);
  });

  it("must return a node that is too highly depended on", () => {
    const failureCases = haltingAnalysis(highlyDependent, 1);
    expect(failureCases).toHaveLength(1);
    expect(failureCases[0].vulnerableNodes[0]).toHaveProperty("node", "e");
  });
});

export {};
