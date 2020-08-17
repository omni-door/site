'use strict';

const path = require('path');
const merge = require('webpack-merge');

const server = {
  port: 6600, // 服务端口号 (server port)
  proxy:  [
    // {
    //   route: '/api',
    //   config: {
    //     target: 'http://www.api.com/api',
    //     changeOrigin: true
    //   }
    // }
  ],
  // host: 'dev.domain.com', // 服务端host (server host)
  // https: true, // 以https协议启动服务 (start server with https)
  routes: [
    {
      page: 'index',
      prettyUrl: ({ lang }) => `/${lang}/home`,
      prettyUrlPatterns: [
        { pattern: '/' },
        { pattern: '/home' },
        { pattern: '/:lang/home' }
      ]
    },
    {
      page: 'start',
      prettyUrl: ({ lang, step }) => `/${lang}/start/${step}`,
      prettyUrlPatterns: [
        { pattern: '/start' },
        { pattern: '/start/:step' },
        { pattern: '/:lang/start' },
        { pattern: '/:lang/start/:step' }
      ]
    },
    {
      page: 'docs',
      prettyUrl: ({ lang, article }) => `/${lang}/docz/${article}`,
      prettyUrlPatterns: [
        { pattern: '/docs' },
        { pattern: '/docs/:article' },
        { pattern: '/:lang/docs' },
        { pattern: '/:lang/docs/:article' }
      ]
    }
  ],
  
};

module.exports = {
  type: 'ssr-react', // 项目类型，请勿任意变动 (project type, please don't modify)

  dev: {
    ...server,
    port: 6200, // 自定义开发服务端口号 (custom dev-server port)
    // serverType: 'next',
  },

  server: {
    serverType: 'koa-next',
    ...server
  },

  build: {
    // 构建完成后是否自动发布 (auto release project after build success)
    autoRelease: false,

    // 输入路径 (the build source directory)
    // 务必使用绝对路径 (must be a absolute path)
    srcDir: path.resolve(__dirname, '../src'),

    // 输出路径 (the directory for compiled project)
    // 务必使用绝对路径 (must be a absolute path)
    outDir: path.resolve(__dirname, '../dist'),

    // 构建的资源是否加上hash，可选 'hash'、'contenthash'、'chunkhash' (whether the hash tag add to building result)
    hash: true,

    // 构建阶段的自定义配置回调 (The callback will be call in the build-process)
    // 返回自定义的配置 (You can return your custom build configuration)
    configuration: config => merge(config, require(path.resolve(__dirname, 'webpack.config.prod.js'))),

    reserve: {
      assets: [] // 构建结果保留其他资源的路径 (reserve other asset paths)
    },

    preflight: {
      typescript: true, // 构建时是否处理ts或tsx文件 (whether or not process the ts or tsx files)
      test: false, // 构建时是否进行单元测试 (whether or not process unit-test)
      eslint: true, // 构建时是否进行eslint检测 (whether or not process eslint checking)
      prettier: true, // 构建时是否进行prettier检测 (whether or not process prettier checking)
      stylelint: true, // 构建时是否进行stylelint检测 (whether or not process stylelint checking)
    }
  },

  release: {
    git: '', // 发布的git仓库地址 (project git repo url)
    preflight: {
      test: false, // 发布前是否进行单元测试 (whether or not process unit-test)
      eslint: true, // 发布前是否进行eslint检测 (whether or not process eslint checking)
      prettier: true, // 发布前是否进行prettier检测 (whether or not process prettier checking)
      stylelint: true, // 发布前是否进行stylelint检测 (whether or not process stylelint checking)
      commitlint: true, // 发布前是否进行commitlint检测 (whether or not process commitlint checking)
      branch: 'master' // 发布前进行分支检测，设置为空字符串则不会检测 (only can release in this branch, set empty string to ignore this check)
    }
  },

  template: {
    // 生成模板的根路径 (the root directory for generate template)
    // 务必使用绝对路径 (must be a absolute path)
    root: path.resolve(__dirname, '../src/components'),

    // 是否创建ts文件 (whether or not generate typescript)
    typescript: true,

    // 是否创建单元测试文件 (whether or not generate unit test frame)
    test: false,

    // 样式文件类型 (stylesheet type)
    stylesheet: 'scss'
  },

  plugins: []
};
