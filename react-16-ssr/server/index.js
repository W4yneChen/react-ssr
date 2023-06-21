import * as path from 'path'
import express from 'express';
import { _renderToNodeStream, _renderToString } from '../utils';

const app = express();

// 文件执行时 __dirname 的值为 dist/build
// 原因：server/index.js 会被编译成 dist/build/bundle.js 再执行
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  // _renderToString(res);

  _renderToNodeStream(res);
});

app.listen(3000);
