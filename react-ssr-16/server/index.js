import Koa from 'koa';
import Router from '@koa/router';
import Static from 'koa-static';
import * as path from 'path'

import React from 'react';
import { renderToString } from 'react-dom/server';
import { App } from '../components';
 
const app = new Koa();
const router = new Router();

app.use(Static(path.join(__dirname, '../public')));

router.get('/', (ctx, next) => {
  const content = renderToString(<App />);
  ctx.body = `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
