const lookup = require("../sep20");
const axios = require("axios");
require("./data/mock-axios");

describe("sep20", () => {
  it("finds sdf node", () => {
    const sdfvalidator1 =
      "GCGB2S2KGYARPVIA37HYZXVRM2YZUEXA6S33ZU5BUDC6THSB62LZSTYH";
    return lookup(sdfvalidator1).then(homeDomain => {
      expect(homeDomain).toEqual("www.stellar.org");
    });
  });

  it("returns null for a node id with no key on the ledger", () => {
    const unknownKey =
      "00000000000000000000ZXVRM2YZUEXA6S33ZU5BUDC6THSB62LZSTYH";
    return lookup(unknownKey).then(homeDomain => {
      expect(homeDomain).toBeNull();
    });
  });

  it("returns null for a node id with no home domain set", () => {
    const nohomedomain =
      "NOHOMEDOMAIN00000000000000000000000000000000000000000000";
    return lookup(nohomedomain).then(homeDomain => {
      expect(homeDomain).toBeNull();
    });
  });

  it("throws for an account that points to  a home domain that doesn't validate", async () => {
    const imposter = "IMPOSTERKEY000000000000000000000000000000000000000000000";
    return await expect(lookup(imposter)).rejects.toThrow();
  });
});
