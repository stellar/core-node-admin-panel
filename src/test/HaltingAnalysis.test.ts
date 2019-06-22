import {
  haltingAnalysis,
  createAnalysisStructure
} from "../util/HaltingAnalysis";
import healthy from "./data/HealthyQuorum";
import healthySubquorums from "./data/HealthySubquorums";
import highlyDependent from "./data/HighlyDependent";
import cyclical from "./data/CyclicalUnhealthy";
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
    const affected = failureCases[0].affectedNodes.map(n => n.node);
    expect(affected).toContain("b");
    expect(affected).toContain("c");
    expect(affected).toContain("d");
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

  it("must complete with a cyclical graph", () => {
    const failureCases = haltingAnalysis(cyclical);
    expect(failureCases).toHaveLength(2);
  });

  it("must set up nodes inner quorum dependencies correctly", () => {
    const { entries } = createAnalysisStructure(simpleSubquorum);
    const c = entries.find(n => n.name == "c");
    if (!c) {
      throw "Analysis structure error";
    }
    expect(c).not.toBeNull();
    // C should have both a (direct) and b (inner) listed as dependents
    expect(c.dependentsNames).toContain("b");
    expect(c.dependentsNames).toContain("a");
  });

  it("must set up nodes regular dependencies correctly", () => {
    const { entries } = createAnalysisStructure(highlyDependent);
    const e = entries.find(n => n.name == "e");
    if (!e) {
      throw "Analysis structure error";
    }
    expect(e).not.toBeNull();
    // b, c, and d all depend on e and should be dead as well
    expect(e.dependentsNames).toContain("b");
    expect(e.dependentsNames).toContain("c");
    expect(e.dependentsNames).toContain("d");
  });
});

export {};
