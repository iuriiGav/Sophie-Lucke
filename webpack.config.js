
// webpack.config.js
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pug = {
  test: /\.pug$/,
  use: ['html-loader', 'pug-html-loader']
};


const config = {
    entry: './app.js',
    // mode: 'production',
    output: {
      path: `${__dirname}/dist`,
      filename: 'bundle.js',
    },

    module: {
        rules: [
          pug,
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader',
            ],
          },
          {
            test: /\.(svg|gif|png|eot|woff|ttf)$/,
            use: [
              'url-loader',
            ],
          },
          {
            test: /\.(gif|svg|jpg|png)$/,
            use: [
              'file-loader',
            ],
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          filename: 'html-from-pug/index.html',
          template: 'pug-src/index.pug',
          inject: false
        })
     ]

    }
  

  module.exports = config;