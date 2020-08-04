const withTM = require('next-transpile-modules');
const withLess = require('@zeit/next-less');
const withPlugin = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

const isProd = process.env.NODE_ENV === 'production';

module.exports = withPlugin([
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
  distDir: 'dist',
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.join(__dirname, '/src/components'),
      '@utils': path.join(__dirname, '/src/utils'),
      '@api': path.join(__dirname, '/src/api')
    };
  }
});