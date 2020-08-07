'use strict';

module.exports = function (api) {
  api.cache(false);
  const presets = [
    'next/babel'
  ];

  const plugins = [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      'import',
      {
        'libraryName': 'antd',
        'libraryDirectory': 'es',
        'style': true
      },
      'antd'
    ]
  ];

  return {
    presets,
    plugins
  };
};
