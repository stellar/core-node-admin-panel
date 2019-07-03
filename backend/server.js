const restify = require("restify");
const axios = require("axios");
const corsMiddleware = require("restify-cors-middleware");

const server = restify.createServer();
const cors = corsMiddleware({
  origins: ["*"]
});
server.use(cors.actual);
server.get("/quorum", async (req, res, next) => {
  const response = await axios.get(
    "http://0.0.0.0:11626/quorum?transitive=true"
  );
  res.send(response.data);
  next();
});

server.listen(process.env.PORT || 8080, function() {
  console.log("Server listening at %s", server.url);
});
