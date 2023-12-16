'use strict';

const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@pages': path.resolve(__dirname, '../pages'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@utils': path.resolve(__dirname, '../src/utils'),
      '@api': path.resolve(__dirname, '../src/api'),
      '@hooks': path.resolve(__dirname, '../src/hooks'),
      '@ctx': path.resolve(__dirname, '../src/context'),
      '@locale': path.resolve(__dirname, '../src/locales')
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.less', '.scss', '.sass', '.md']
  }
};
