import serve from "koa-static";
import path from "path";
import mount from "koa-mount";
import koa from "koa";
import koaRouter from "koa-router";

export default function Frontend(ctx) {
  const server = new koa();
  const router = new koaRouter();

  return server
    .use(serve(path.join(__dirname, "/client/build")))
    .use(router.routes());
}
//over here, you can use it to display your api documentation on the index.html page
