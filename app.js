import logger from 'koa-logger';
import koa from 'koa';
import cors from '@koa/cors';
import forward from 'koa-forward-request';
import serve from 'koa-static';
import path from 'path';
import mount from 'koa-mount';
import Api from './api';
import compress from 'koa-compress';
import cacheControl from 'koa-cache-control';

import Frontend from './frontend';

const forceSsl = (ctx, next) => {
  if (ctx.protocol !== 'https') {
    console.log(
      ctx.get('Host'),
      ctx.url,
      ['https://', ctx.get('Host'), ctx.url].join('')
    );
    return ctx.redirect(['https://', ctx.get('Host'), ctx.url].join(''));
  }
  return next();
};

function App() {
  const app = new koa();

  app.use(forceSsl);
  app.use(logger());
  app.use(cors());

  app.use(compress());
  app.use(cacheControl({ maxage: 10 * 1000, public: true }));

  app.use(async (ctx, next) => {
    ctx.set('Expires', new Date(Date.now() + 2592000000).toUTCString());
    ctx.set('X-Frame-Options', 'SAMEORIGIN');
    ctx.set('X-Content-Type-Options', 'nosniff');
    ctx.set('X-XSS-Protection', '1; mode=block');
    await next();
    return;
  });

  forward(app);

  // if (process.env.NODE_ENV === "production") {
  //   app.use(async (ctx, next) => {
  //     console.log(
  //       "is secure",
  //       ctx.protocol,
  //       ctx.secure,
  //       ctx.request.header.host,
  //       ctx.originalUrl
  //     );
  //     if (ctx.protocol === "http") {
  //       await next();
  //       ctx.status = 301;
  //       ctx.redirect(`https://${ctx.request.header.host}${ctx.originalUrl}`);
  //       ctx.body = "Redirecting to secure site";
  //     } else {
  //       await next();
  //     }
  //   });
  // }

  app
    .use(mount('/', Frontend()))
    .use(mount('/vote', Frontend()))
    .use(mount('/gallery', Frontend()))
    .use(mount('/account', Frontend()))
    .use(mount('/dashboard', Frontend()))
    .use(mount('/about', Frontend()))
    .use(mount('/rsg/*', Frontend(), true))
    .use(mount('/register', Frontend()))
    .use(mount('/edit/profile', Frontend()))
    .use(mount('/api', Api()));

  return app;
}
export default App;
