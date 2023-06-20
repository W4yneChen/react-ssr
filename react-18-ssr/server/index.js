import * as path from 'path';
import express from 'express';

import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { App } from '../components';
import { resetPromise } from '../utils';

const app = express();

app.use(express.static(path.resolve(__dirname, '../public')));

app.get('/', (req, res) => {
  resetPromise();

  const { pipe } = renderToPipeableStream(<App />, {
    bootstrapScripts: ['bundle.js'],
    onShellReady() {
      res.setHeader('content-type', 'text/html');
      pipe(res);
    }
  });
});

app.listen(3000);
