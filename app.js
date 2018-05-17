import logger from "koa-logger";
import koa from "koa";
import cors from "@koa/cors";
import forward from "koa-forward-request";
import serve from "koa-static";
import path from "path";
import mount from "koa-mount";
import Api from "./api";
import koaRouter from "koa-router";
import koaRewrite from "koa-rewrite";

import enforceHttps from "koa-sslify";

import Frontend from "./frontend";

function App() {
  const app = new koa();
  const router = new koaRouter();

  if (process.env.NODE_ENV === "production") {
    app.use(enforceHttps());
  }
  app.use(logger());
  app.use(cors());
  forward(app);

  app
    .use(mount("/", Frontend()))
    .use(mount("/search", Frontend()))
    .use(mount("/gallery", Frontend()))
    .use(mount("/account", Frontend()))
    .use(mount("/dashboard", Frontend()))
    .use(mount("/about", Frontend()))
    .use(mount("/rsg/*", Frontend(), true))
    .use(mount("/register", Frontend()))
    .use(mount("/edit/profile", Frontend()))
    .use(mount("/api", Api()));

  // Serve static files
  app.use(async ctx => {
    await serve(path.join(__dirname, "/client/build"));
  });

  return app;
}
export default App;
