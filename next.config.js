const path = require('path');
const withTM = require('next-transpile-modules');
const withCss = require('@zeit/next-css');
const withLess = require('@zeit/next-less');
const withPlugin = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});
const merge = require('webpack-merge');
const webpackConfig = require('./configs/webpack.config.js');
const omniConfig = require('./configs/omni.config');
const isProd = process.env.NODE_ENV === 'production';

module.exports = withPlugin([
  withCss({
    cssModules: true,
      cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:6]",
    }
  }),
  withLess,
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