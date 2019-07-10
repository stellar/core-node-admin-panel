const axios = require("axios");
const MockAdapter = require("axios-mock-adapter");

var mock = new MockAdapter(axios);
mock
  .onGet(
    "https://horizon.stellar.org/accounts/GCGB2S2KGYARPVIA37HYZXVRM2YZUEXA6S33ZU5BUDC6THSB62LZSTYH"
  )
  .reply(
    200,
    require("./GCGB2S2KGYARPVIA37HYZXVRM2YZUEXA6S33ZU5BUDC6THSB62LZSTYH.json")
  );

mock
  .onGet("http://www.stellar.org/.well-known/stellar.toml")
  .reply(200, require("./stellar.org.toml.js"));

mock
  .onGet(
    "https://horizon.stellar.org/accounts/IMPOSTERKEY000000000000000000000000000000000000000000000"
  )
  .reply(
    200,
    require("./IMPOSTERKEY000000000000000000000000000000000000000000000.json")
  );
