const axios = require("axios");
const TOML = require("toml");

const lookup = async function(nodeId) {
  let accountResp;
  try {
    accountResp = await axios.get(
      `https://horizon.stellar.org/accounts/${nodeId}`
    );
  } catch (e) {
    // This key doesn't exist on the ledger, it doesn't support SEP20
    return null;
  }
  const homeDomain = accountResp.data.home_domain;
  // This key doesn't set a homeDomain option, it doesn't support sep20
  if (!homeDomain) return null;

  const tomlURL = `http://${homeDomain}/.well-known/stellar.toml`;
  const tomlResp = await axios.get(tomlURL);
  const toml = TOML.parse(tomlResp.data);

  // Check to ensure the toml has a validator that matches the public key
  let verified = false;
  toml.VALIDATORS.forEach(validator => {
    if (validator.PUBLIC_KEY === nodeId) {
      verified = true;
    }
  });

  if (verified) {
    return homeDomain;
  }
  // If the toml didn't verify the public key it could be a pretender
  throw new Error("Home Domain not verified on node " + nodeId);
};

module.exports = lookup;
