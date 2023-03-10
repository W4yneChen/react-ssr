const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  entry: './server/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/build'),
  },
  resolve: {
    // resove.extensions 用于按给定的后缀名顺序解析文件后缀名
    extensions: ['.jsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  // externals 用于防止某些依赖包被打包
  // webpack-node-externals 用于防止 node_modules 中的包被打包
  externals: [webpackNodeExternals()],
};
