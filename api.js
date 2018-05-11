import koa from "koa";
import mount from "koa-mount";
import cacheControl from "koa-cache-control";

export default function Api() {
  const api = new koa();

  api.use(cacheControl({ maxage: 10 * 1000 }));
  api.use(
    mount("/", async (ctx, next) => {
      ctx.body = "hello";
      await next();
      return;
    })
  );
  api.use(function* terminator() {
    return;
  });

  return api;
}
