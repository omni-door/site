const fs = require('fs')
const path = require('path');
const withTM = require('next-transpile-modules');
const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withPlugin = require('next-compose-plugins');
const lessToJS = require('less-vars-to-js')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});
const merge = require('webpack-merge');
const webpackConfig = require('./configs/webpack.config.js');
const omniConfig = require('./configs/omni.config');
const withNextAntdLess = require('./configs/next-antd-less.config');
const isProd = process.env.NODE_ENV === 'production';

if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {};
}

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './src/styles/antd.less'), 'utf8')
);

module.exports = withPlugin([
  withNextAntdLess({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: '[local]___[hash:base64:5]',
    },
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: themeVariables
    }
  }),
  withSass,
  withCss,
  withTM,
  withBundleAnalyzer
], {
  transpileModules: [],
  // assetPrefix: isProd ? 'https://cdn.domain.com' : '',
  target: 'server',
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  distDir: path.relative(__dirname, omniConfig.build.outDir) || 'dist',
  reactStrictMode: true,
  webpack: (config) => merge(config, webpackConfig)
});