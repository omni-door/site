'use strict';

const fs = require('fs')
const path = require('path');
const withLess = require('next-with-less');
const withTM = require('next-transpile-modules');
const withPlugin = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});
const withMDX = require('@next/mdx')({
  extension: /\.(mdx|md)?$/,
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
});
const lessToJS = require('less-vars-to-js');
const merge = require('webpack-merge');
const webpackConfig = require('./configs/webpack.config.js');
const configs = require('./configs/omni.config');
const isProd = process.env.NODE_ENV === 'production';

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './src/styles/variable.less'), 'utf8')
);

module.exports = withPlugin([
  withLess({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: '[local]___[hash:base64:5]'
    },
    lessLoaderOptions: {
      lessOptions: {
        javascriptEnabled: true,
        modifyVars: themeVariables
      }
    }
  }),
  withTM([]),
  withMDX,
  withBundleAnalyzer
], {
  // assetPrefix: isProd ? 'https://cdn.domain.com' : '',
  target: 'server',
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  distDir: path.relative(__dirname, configs.build.outDir) || 'dist',
  reactStrictMode: true,
  webpack: config => merge(config, webpackConfig)
});
