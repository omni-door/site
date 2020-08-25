# 文档

## 命令
1. init [strategy] [options]
    - omni init

    - omni init latest

    - omni init stable

    - omni init -n

    - omni init -rb basicReactSpaProject

    - omni init -rs stardardReactSpaProject

    - omni init -re entrieReactSpaProject

    - omni init -rc reactComponentProject

    - omni init -t toolkitProject

    - omni init latest -rs stardardReactSpaProject -n

2. dev [options]
    - omni dev

    - omni dev -p 8200

    - omni dev -h dev.domain.com

    - omni dev -p 8200 -h dev.domain.com

3. new [name] [options]
    - omni new

    - omni new Button

    - omni new -c

    - omni new -c Button

4. build [options]
    - omni build

    - omni build -n

    - omni build -c $pathTo/build.config.js

5. release [options]
    - omni release

    - omni release -n

    - omni release -a

    - omni release -i

    - omni release -m

    - omni release -t

## 项目类型简介

### SPA 应用
- [x] 基于 [React](https://reactjs.org/) UI 框架

- [x] 基于 [React-Router](https://reacttraining.com/react-router/web/example/basic) 实现前端路由

- [x] 使用 [typescript](https://www.typescriptlang.org/) 进行开发

- [x] 使用 [webpack](https://webpack.js.org/) 打包

- [x] 遵守 [eslint](https://eslint.org/) 规范

- [x] 遵守 [stylelint](https://stylelint.io/) 规范

- [x] 采用 [prettier](https://prettier.io/docs/en/install.html) 美化代码格式

- [x] 无缝支持 [CSS Modules](https://github.com/css-modules/css-modules) 和 全局CSS，无需额外配置

  ……

### SSR 应用
- [x] 基于 [React](https://reactjs.org/) 框架

- [x] 基于 [nextjs](https://nextjs.org/) 企业级高性能 Node 框架

- [x] 使用 [typescript](https://www.typescriptlang.org/) 进行开发

- [x] 支持 [koa](https://koajs.com/) 自定义 node 服务

- [x] 搜索引擎友好 [SEO](https://zh.wikipedia.org/wiki/%E6%90%9C%E5%B0%8B%E5%BC%95%E6%93%8E%E6%9C%80%E4%BD%B3%E5%8C%96)

  ……

### Component 组件(库)项目
- [x] 支持 [storybook](https://storybook.js.org/)、[docz](https://docz.site/)、[styleguidist](https://react-styleguidist.js.org/) 多种组件库Demo和文档框架

- [x] 基于 [React](https://reactjs.org/) 的组件库

- [x] 使用 [typescript](https://www.typescriptlang.org/) 进行开发

- [x] 使用 [gulp](https://gulpjs.com/) 打包

- [x] 遵守 [eslint](https://eslint.org/) 规范

- [x] 遵守 [stylelint](https://stylelint.io/) 规范

- [x] 遵守 [commitlint](https://commitlint.js.org/) 规范

- [x] 采用 [prettier](https://prettier.io/docs/en/install.html) 美化代码格式

  ……

### toolkit 工具库项目
- [x] 集成标准化初始化、构建、发布虎扑 [bridge-plugin](https://hupu.feishu.cn/docs/doccn8pGr7IYYV54ytpBsHT3tDd#bcLZTY) (@hupu/dandelion) 项目的能力

- [x] 使用 [typescript](https://www.typescriptlang.org/) 进行开发

- [x] 使用 [rollup](https://rollupjs.org/guide/en) 打包

- [x] 遵守 [eslint](https://eslint.org/) 规范

- [x] 采用 [prettier](https://prettier.io/docs/en/install.html) 美化代码格式

  ……

# omni.config.js Detail

### type
OMNI will process of initialization, construction and template creation according to different project types

The project types:

- spa-react - React single-page-application

- ssr-react - React server-side-render application

- component-react - React Component Library

- toolkit - SDK Library 

### dev
The dev-server based on express, realizing hot-update, api-proxy and other common functions. Provide personalized customization schemes such as middleware customization, port number, log output level and webpack configuration.

- middleware - middleware configuration:

    ```ts
    {
      route: string;
      callback: (req: any, res: any) => Promise<void>;
    }
    ```

    or

    ```ts
    (params: {
      ip: string;
      port: number;
      host?: string;
      logLevel: LOGLEVEL;
      proxyConfig?: (ProxyItem | ProxyFn)[];
    }) => {
      route: string;
      callback: (req: any, res: any) => Promise<void>;
    }
    ```

- webpack - dev-server webpack configuration

- proxy - dev-server proxy configuration

    ```ts
    {
      route: '/api', // Address of the local service for the proxy API
      config: {
        target: 'http://www.api.com/api', // The actual address of the proxy API
        changeOrigin: true // whether change the host
      }
    }
    ```

    or

    ```ts
    (params: {
      ip: string;
      port: number;
      host?: string;
      logLevel: LOGLEVEL;
      middlewareConfig?: (MiddlewareItem | MiddlewareFn)[];
    }) => {
      route: string;
      config: Config;
    }
    ```

    For more configuration, see [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware)

- port - dev-server port

- host - dev-server host

- https - start dev-server with https protocol which could custom `key` and `cert`

- serverType - dev-server type

- logLevel - The log-level which dev-server will apply, optional 'debug', 'info', 'warn', 'error', 'silent'

### build

- autoRelease - auto release project after build success

- srcDir - the build source directory

- outDir - the directory for compiled project

- esmDir - es6 module compiled directory

- hash - whether the hash tag add to building result, optional 'contenthash', 'chunkhash' and 'hash'(true equal 'contenthash')

- configuration - The callback will be call in the build-process, you can return your custom build configuration

- reserve - Configure resources that are not packaged but need to be kept in the build result
  - style - whether or not reserve the stylesheet files

  - assets - reserve other asset paths

- preflight - the flight check before build
  - typescript - whether or not process the ts or tsx files

  - test - whether or not process unit-test

  - eslint - whether or not process eslint check

  - prettier - whether or not process prettier check

  - stylelint - whether or not process stylelint check

### release
- git - project git repo url

- npm - npm depository url

- preflight - the flight check before release
  - test - whether or not process unit-test

  - eslint - whether or not process eslint check

  - prettier - whether or not process prettier check

  - stylelint - whether or not process stylelint check

  - commitlint - whether or not process commitlint check

  - branch - only can release in this branch, set empty string to ignore this check

### template
- root - the root directory for generate template

- typescript - whether or not apply typescript

- test - whether or not generate unit-test file

- stylesheet - stylesheet type

- readme - [true, 'mdx'] ([whether or not README.md, generate mdx or md file])

### plugins
plugin must meet following types:

```ts
type OmniPlugin = {
  name: string;
  stage: PluginStage;
  handler: PluginHandler;
};

type PluginStage = 'new' | 'build' | 'release';
interface PluginHandler {
  (config: Omit<OmniConfig, 'plugins'>): Promise<any>;
}
```
