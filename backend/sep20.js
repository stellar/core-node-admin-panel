const axios = require("axios");

const lookup = async function(nodeId) {
  let accountResp;
  try {
    accountResp = await axios.get(
      `https://horizon.stellar.org/accounts/${nodeId}`
    );
  } catch (e) {
    // This key doens't exist on the ledger, it doesn't support SEP20
    return null;
  }
  const homeDomain = accountResp.data.home_domain;
  // This key doesn't set a homeDomain option, it doesn't support sep20
  if (!homeDomain) return null;
  const tomlURL = `http://${homeDomain}/.well-known/stellar.toml`;
  const tomlResp = await axios.get(tomlURL);
  const toml = tomlResp.data;
  const lines = toml.split("\n");

  // Check to ensure the toml matches the public key
  let verified = false;
  lines.forEach(line => {
    const parts = line.split("=");
    const nodeStr = `"${nodeId}"`;

    if (parts[0] === "PUBLIC_KEY" && parts[1] === nodeStr) {
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
