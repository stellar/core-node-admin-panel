const axios = require("axios");
const MockAdapter = require("axios-mock-adapter");

var mock = new MockAdapter(axios);

[
  "GCGB2S2KGYARPVIA37HYZXVRM2YZUEXA6S33ZU5BUDC6THSB62LZSTYH",
  "NOHOMEDOMAIN00000000000000000000000000000000000000000000",
  "IMPOSTERKEY000000000000000000000000000000000000000000000"
].forEach(key => {
  mock
    .onGet(`https://horizon.stellar.org/accounts/${key}`)
    .reply(200, require(`./${key}.json`));
});

["www.stellar.org"].forEach(domain => {
  mock
    .onGet(`http://${domain}/.well-known/stellar.toml`)
    .reply(200, require(`./${domain}.toml.js`));
});
