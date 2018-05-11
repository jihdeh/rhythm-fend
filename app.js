import logger from "koa-logger";
import koa from "koa";
import cors from "@koa/cors";
import forward from "koa-forward-request";
import mount from "koa-mount";
import Api from "./api";
// import enforceHttps from "koa-sslify";

import Frontend from "./frontend";

function App() {
  const app = new koa();

  // app.use(enforceHttps());
  app.use(logger());
  app.use(cors());

  forward(app);
  app.use(mount("/", Frontend())).use(mount("/api", Api()));

  return app;
}
export default App;
