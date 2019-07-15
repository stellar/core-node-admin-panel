require("dotenv").config();

const restify = require("restify");
const axios = require("axios");
const corsMiddleware = require("restify-cors-middleware");
const lookup = require("./sep20");

const server = restify.createServer();
const cors = corsMiddleware({
  origins: ["*"]
});
server.use(cors.actual);
server.use(restify.plugins.queryParser());

server.get("/quorum", async (req, res, next) => {
  const response = await axios.get(
    `http://${process.env.CORE_URL}/quorum?transitive=true&fullkeys=true`
  );
  res.send(response.data);
  next();
});

/**
 * Request Organizational info from a list of nodes via sep20
 *
 * @param {string} nodes - A comma seperated list of nodes to fetch
 *
 * @typedef Sep20Info
 * @type {Object}
 * @property {string} homeDomain The home domain of the organization running the node
 * @property {string} organization The name of the organization running the node
 *
 * @return {Object.<string, Sep20Info>} A json map of node keys to node info
 */
server.get("/node-info", async (req, res, next) => {
  const nodeIds = req.query.nodes.split(",");
  const results = {};
  await Promise.all(
    nodeIds.map(async id => {
      results[id] = await lookup(id);
    })
  );
  res.send(results);
});

server.get("/", (req, res) => {
  res.send("Hello from the stellar proxy");
});

server.listen(process.env.REACT_APP_SERVER_PORT, function() {
  console.log("Server listening at %s", server.url);
});
