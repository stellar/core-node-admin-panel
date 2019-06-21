import {
  haltingAnalysis,
  createAnalysisStructure
} from "../util/HaltingAnalysis";
import healthy from "./data/HealthyQuorum";
import healthySubquorums from "./data/HealthySubquorums";
import highlyDependent from "./data/HighlyDependent";
import {
  simple as simpleSubquorum,
  complex as complexSubquorum
} from "./data/HighlyDependentSubquorum";

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

  it("must return failures for nested transitive quorum sets", () => {
    const failureCases = haltingAnalysis(simpleSubquorum);
    expect(failureCases).toHaveLength(1);
    expect(failureCases[0].vulnerableNodes[0]).toHaveProperty("node", "c");
  });

  it("must return failures for complicated transitive quorum sets", () => {
    const failureCases = haltingAnalysis(complexSubquorum);
    expect(failureCases).toHaveLength(1);
    expect(failureCases[0].vulnerableNodes[0]).toHaveProperty("node", "g");
  });

  it("must set up nodes inner quorum dependencies correctly", () => {
    const [root, structure] = createAnalysisStructure(simpleSubquorum);
    const c = structure.find(n => n.name == "c");
    if (!c) {
      throw "Analysis structure error";
    }
    expect(c).not.toBeNull();
    // C should have both a (direct) and b (inner) listed as dependents
    expect(c.dependents.find(d => d.name == "b")).toBeDefined();
    expect(c.dependents.find(d => d.name == "a")).toBeDefined();
  });
});

export {};
