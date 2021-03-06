const webpack = require('webpack'); 
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js',
      },

      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test: /\.scss$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: 'sass/[name].css',
                }
              },
              {
                loader: 'extract-loader'
              },
              {
                loader: 'css-loader?-url'
              },
              {
                loader: 'postcss-loader'
              },
              {
                loader: 'sass-loader'
              }
            ]
          }
        ]
      }
  };
