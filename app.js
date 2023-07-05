const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");
const kstatic = require("koa-static");
const config = require("config");

const router = require("./routes/index.routes");

const PORT = config.get("port") || 3030;
const app = new Koa();
app.use(bodyParser());
app.use(router()); 
app.use(cors());
app.use(kstatic());

// app.use((ctx) => {
// //   console.log(ctx);
//     ctx.body = "Salom Koa"
// });

const start = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server ${PORT}portda ishga tushdi`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
// app.listen(3003);
