import Koa from 'koa';
import Router from '@koa/router';

import React from 'react';
import { renderToString } from 'react-dom/server';

const app = new Koa();
const router = new Router();

const Hello = () => 'hello world';

router.get('/', (ctx, next) => {
  const content = renderToString(<Hello />);
  ctx.body = content;
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);