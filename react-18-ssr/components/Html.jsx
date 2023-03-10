import React from 'react';

export const Html = ({ children }) => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>React SSR</title>
      </head>
      <body>
        <div id="root">
          { children }
        </div>
      </body>
    </html>
  );
};