import * as path from 'path'
import express from 'express';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { App } from '../components';
 
const app = express();

// 文件执行时 __dirname 的值为 dist/build
// 原因：server/index.js 会被编译成 dist/build/bundle.js 再执行
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  const content = renderToString(<App />);
  const html = `
    <html>
      <head>
        <meta charset="utf-8" />
        <title>React SSR</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;

  res.send(html)
});

app.listen(3000);
