const Router = require("@koa/router");

clientRouter = require("./client.routes");

const router = new Router();

router.use("/api/client", clientRouter());

module.exports = () => router.routes();
