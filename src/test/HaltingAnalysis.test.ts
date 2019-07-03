import {
  haltingAnalysis,
  createAnalysisStructure,
  generateCombinations,
  HaltingFailure
} from "../util/HaltingAnalysis";
import healthy from "./data/HealthyQuorum";
import healthySubquorums from "./data/HealthySubquorums";
import highlyDependent from "./data/HighlyDependent";
import cyclical from "./data/CyclicalUnhealthy";
import mixed from "./data/MixedQuorumType";
import missing from "./data/MissingNodes";
import twonode from "./data/TwoNodeFailure";
import prehalt from "./data/PreHalt";
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

  it("must not return supersets of existing failure cases", () => {
    const failureCases = haltingAnalysis(highlyDependent, 2);
    // Would return 7 if we were returning failure cases with e+something else
    // expect e, b+c, b+d, c+d
    // and filter out e+b, e+c, e+d
    expect(failureCases).toHaveLength(4);
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

  it("must handle topology with missing nodes", () => {
    const failureCases = haltingAnalysis(missing);
    expect(failureCases).toHaveLength(1);
  });

  it("must handle mixed type quorum sets", () => {
    const failureCases = haltingAnalysis(mixed);
    expect(failureCases).not.toHaveLength(0);
  });

  it("must find failure cases for 2 node vulnerabilities", () => {
    const fc = haltingAnalysis(twonode, 2);
    expect(fc).toHaveLength(1);
  });

  it("must generate correct subsets for n>1 groups", () => {
    const nodes = ["a", "b", "c", "d", "e"];
    const sets = generateCombinations(nodes, 3);
    expect(sets).toHaveLength(25); // 5choose3 + 5choose2 + 5choose1 = 10 + 10 + 5
  });

  it("must find failure cases in PreHalt quorums", () => {
    const fc = haltingAnalysis(prehalt, 2);
    expect(fc).not.toHaveLength(0);
    const sdfFailureCase = fc.find(failure => {
      return !!failure.vulnerableNodes.find(n => n.node === "SDF_validator_1");
    });
    expect(sdfFailureCase).toBeDefined();
  });
});

export {};
