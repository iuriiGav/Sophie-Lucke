
// webpack.config.js
const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pug = {
  test: /\.pug$/,
  use: ['html-loader', 'pug-html-loader']
};


const config = {
    entry: './app.js',
    mode: 'development',
    output: {
      path: `${__dirname}/dist`,
      filename: 'bundle.js',
    },

    module: {
        rules: [
          pug,
          {
            test: /\.(scss|css)$/,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader'
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
            loader: 'file-loader',
            options: {
              outputPath: 'images'
            }
          },
          {
            test: /\.(ogg|mp3)$/,
            // include: SRC,
            loader: 'file-loader',
            options: {
              outputPath: 'audio'
            }
        }
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: 'pug-src/index.pug',
          inject: false,
        }),
        new HtmlWebpackPlugin({
          filename: 'concerts.html',
          template: 'pug-src/concerts.pug',
          inject: false
        }),
        new HtmlWebpackPlugin({
          filename: 'biography.html',
          template: 'pug-src/biography.pug',
          inject: false
        }),
        new HtmlWebpackPlugin({
          filename: 'listen.html',
          template: 'pug-src/listen.pug',
          inject: false
        }),
        new HtmlWebpackPlugin({
          filename: 'news.html',
          template: 'pug-src/news.pug',
          inject: false
        }),
        new HtmlWebpackPlugin({
          filename: 'gallery.html',
          template: 'pug-src/gallery.pug',
          inject: false
        }),
        new CleanWebpackPlugin(),
    
     ]

    }
  

  module.exports = config;