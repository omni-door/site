'use strict';

const path = require('path');
const WebpackBar = require('webpackbar');

const cliConfig = require(path.resolve(__dirname, 'omni.config.js'));
const hash = cliConfig && cliConfig.build && cliConfig.build.hash;


module.exports = {
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|svg|jpg|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: hash ? `assets/[name].[${typeof hash === 'string' ? hash : 'contenthash'}:8].[ext]` : 'assets/[name].[ext]'
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new WebpackBar({
      name: '[OMNI-DOOR]:'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@pages': path.resolve(__dirname, '../pages'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@utils': path.resolve(__dirname, '../src/utils'),
      '@api': path.resolve(__dirname, '../src/api')
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.less', '.scss', '.sass']
  }
};
