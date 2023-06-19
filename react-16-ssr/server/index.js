import * as path from 'path'
import express from 'express';

import React from 'react';
import { renderToNodeStream, renderToString } from 'react-dom/server';
import { App } from '../components';
 
const app = express();

// 文件执行时 __dirname 的值为 dist/build
// 原因：server/index.js 会被编译成 dist/build/bundle.js 再执行
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  // const content = renderToString(<App />);
  // const html = `
  //   <html>
  //     <head>
  //       <meta charset="utf-8" />
  //       <title>React SSR</title>
  //     </head>
  //     <body>
  //       <div id="root">${content}</div>
  //       <script src="bundle.js"></script>
  //     </body>
  //   </html>
  // `;

  // res.send(html)

  res.write(`
    <html>
      <head>
        <meta charset="utf-8" />
        <title>React SSR</title>
      </head>
      <body>
        <div id="root">`);
  const stream = renderToNodeStream(<App />);
  // 当 stream(Readable stream) 完结后，nodejs 默认会关闭 res(Writable Stream)
  // 设置 { end: false } 是为了禁用上述默认行为，从而继续写入内容（script 标签）
  stream.pipe(res, { end: false });
  stream.on('end', () => {
    res.write(`</div>
        <script src="bundle.js"></script>
        </body>
      </html>
    `);
    res.end();
  })
});

app.listen(3000);
