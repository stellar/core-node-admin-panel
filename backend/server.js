require("dotenv").config();

const restify = require("restify");
const axios = require("axios");
const corsMiddleware = require("restify-cors-middleware");

const server = restify.createServer();
const cors = corsMiddleware({
  origins: ["*"]
});
server.use(cors.actual);
console.log(process.env.CORE_URL);
server.get("/quorum", async (req, res, next) => {
  const response = await axios.get(
    `http://${process.env.CORE_URL}/quorum?transitive=true`
  );
  res.send(response.data);
  next();
});

server.listen(process.env.SERVER_PORT, function() {
  console.log("Server listening at %s", server.url);
});
