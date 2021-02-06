module.exports = {
    entry: './app.js',
    mode: 'production',
    output: {
      path: `${__dirname}/dist`,
      filename: 'bundle.js',
    },

    module: {
        rules: [
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
  };