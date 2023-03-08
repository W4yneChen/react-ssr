import Koa from 'koa';
import Static from 'koa-static';
import * as path from 'path'

import React from 'react';
import { renderToString } from 'react-dom/server';
import { App } from '../components';
 
const app = new Koa();

// 文件执行时 __dirname 的值为 dist/build
// 原因：server/index.js 会被编译成 dist/build/bundle.js 再执行
app.use(Static(path.join(__dirname, '../public')));

app.use(ctx => {
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
})

app.listen(3000);
