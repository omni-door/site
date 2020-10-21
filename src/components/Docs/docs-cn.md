# 文档

## 支持的项目类型简介

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
- [x] 使用 [typescript](https://www.typescriptlang.org/) 进行开发

- [x] 使用 [rollup](https://rollupjs.org/guide/en) 打包

- [x] 遵守 [eslint](https://eslint.org/) 规范

- [x] 采用 [prettier](https://prettier.io/docs/en/install.html) 美化代码格式

  ……

## 脚手架命令清单
你可以在命令行中简单输入 `omni -h` 查看所有的命令：

```shell
  Commands:

    init [strategy] [options]  初始化你的项目，[strategy(策略)] 可用是stable(默认) 或 lastst
    dev [options]              omni dev -p [port]
    new <module> [options]     omni new [module] [-f | -c]
    build                      根据 [omni.config.js] 打包构建你的项目
    release [options]          根据 [omni.config.js] 发布你的项目
```

### omni init

#### 初始化一个项目
```shell
omni init
```

#### 用最新的依赖@lastest初始化项目
```shell
omni init lastest
```

#### 初始化项目但不安装依赖
```shell
omni init -n
```

#### 套用模板一键初始化项目
```shell
omni init -t [projectName]
```
or
```shell
omni init --entire [projectName]
```

#### 选项
```shell
使用: omni init [strategy] [options]

Arguments:

  strategy                 stable or latest

  Options:
    -rb, --react_basic [name]       创建一个最基本的 React 单页应用
    -rs, --react_standard [name]    创建一个标准的 React 单页应用
    -re, --react_entire [name]      创建一个全量的 React 单页应用
    -rS, --react_ssr [name]         创建一个 React SSR 应用
    -rc, --react_components [name]  创建一个 React 组件库
    -t, --toolkit [name]            创建一个工具库
    -n, --no-install                初始化项目不安装任何依赖
    -P, --path <path>               创建项目的工作路径
    -h, --help               output usage information
```

### omni dev

#### 各种用法
```sh
  omni dev

  omni dev -p 8200 // 启动一个端口号为 8200 的开发服务

  omni dev -h dev.domain.com // 启动一个host为 dev.domain.com 的开发服务


  omni dev -p 8200 -h dev.domain.com // 启动一个端口号为 8200 且 host为 dev.domain.com 的 开发服务

```

#### 选项
```shell
使用: omni dev [options]

omni dev [-p <port>] [-H <host>] [-P <path>]

Options:
  -p, --port <port>      根据指定的端口号启动开发服务
  -H, --hostname <host>  根据指定的hostname启动开发服务
  -P, --path <path>      启动开发服务的工作路径
  -h, --help             output usage information
```

### omni start
用法和 `omni dev` 略同

#### 选项
```shell
使用: omni start [options]

omni start [-p <port>] [-H <host>] [-P <path>]

Options:
  -p, --port <port>      根据指定的端口号启动生产服务
  -H, --hostname <host>  根据指定的hostname启动生产服务
  -P, --path <path>      启动生产服务的工作路径
  -h, --help             output usage information
```

### omni new

#### 各种用法
```sh
  omni new

  omni new Button // 新建一个名为 Button 的组件

  omni new -c // 新建一个类组件

  omni new -c Button // 新建一个名为 Button 的类组件
```

#### 选项
```shell
使用: omni new [name] [options]

omni new [name] [-f | -c] [-P <path>]

Arguments:

  module           可选！组件名称。

Options:
  -f, --function     创建一个函数组件
  -c, --class        创建一个类组件
  -P, --path <path>  创建组件的工作路径
  -h, --help        output usage information
```

### omni build

#### 各种用法
```sh
  omni build

  omni build -n // 构建时避开所有预校验

  omni build -c $pathTo/build.config.js // 根据指定路径构建项目
```

#### 选项
```shell
使用: omni build [options]

根据 [omni.config.js] 的 build 字段构建项目

Options:
  -c, --config <path>  指定构建的配置文件路径
  -n, --no-verify      绕过所有预检直接构建
  -P, --path <path>    构建的工作路径
  -h, --help           output usage information
```

### omni release

#### 各种用法
```sh
  omni release

  omni release -n // 发布时避开所有预校验

  omni release -a // 发布时自动迭代版本号

  omni release -i // 发布时忽略版本号的迭代

  omni release -m // 发布时手动输入迭代版本号

  omni release -t // 发布时指定 tag 名
```

#### 选项
```shell
使用: omni release [options]

根据 [omni.config.js] 的 release 字段发布项目

Options:
  -a, --automatic         发布并自动迭代版本号
  -i, --ignore            发布并忽视版本号的迭代
  -m, --manual <version>  发布并手动指定版本号
  -t, --tag <tag>         发布时指定tag
  -n, --no-verify         绕过所有的预检直接发布
  -P, --path <path>       发布的工作路径
  -h, --help              output usage information
```

## 关于 「omni.config.js」 配置文件

### type 项目类型
OMNI 会根据不同的项目类型决定整个初始化、构建、创建模板的过程

目前支持的项目类型有：

- spa-react - React单页应用

- ssr-react - React服务端渲染应用

- component-react - React组件库

- toolkit - SDK工具包

### dev 开发服务
开发服务基于express，搭配 webpack-dev-middleware、webpack-hot-middleware、http-proxy-middleware 等中间件，实现了热更新、接口代理等常用功能，并提供了中间件的自定义、端口号、log日志输出级别、webpack配置等个性化定制方案。

- middleware - 中间件配置，参考下面👇的类型：

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

- webpack - 开发服务端webpack配置

- proxy - 开发服务代理配置

    ```ts
    {
      route: '/api', // 代理API的本地服务的地址
      config: {
        target: 'http://www.api.com/api', // 代理API的实际地址
        changeOrigin: true // 是否改变host
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

    更多配置详见 [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware)

- port - 开发服务启动的端口号

- host - 开发服务启动的host

- https - 开发服务以https协议启动，可自定义 `key` 和 `cert`

- serverType - 开发服务的类型

- logLevel - 开发服务日志输出等级，可选 'debug'、'info'、'warn'、'error'、'silent'

### build 构建配置

- autoRelease - 构建完成后是否自动发布

- srcDir - 构建资源输入路径

- outDir - 构建结果输出路径

- esmDir - 构建结果输出路径(符合es6 module规范)

- hash - 构建的资源是否加上hash，可选 'contenthash'、'chunkhash'、'hash'(传入true则是contenthash)

- configuration - 构建阶段的自定义配置回调，返回自定义的配置

- reserve - 配置未经过打包，但需要保留进构建结果的资源
  - style - 构建结果是否保留样式文件

  - assets - 构建结果保留其他资源的路径

- preflight - 构建前的飞行检查
  - typescript - 是否处理ts或tsx文件

  - test - 是否进行单元测试 

  - eslint - 是否进行eslint检测

  - prettier - 是否进行prettier检测

  - stylelint - 是否进行stylelint检测

### release
- git - 发布的git仓库地址

- npm - 发布的npm仓库地址

- preflight - 发布前的飞行检查
  - test - 发布前是否进行单元测试

  - eslint - 发布前是否进行eslint检测

  - prettier - 发布前是否进行prettier检测

  - stylelint - 发布前是否进行stylelint检测

  - commitlint - 发布前是否进行commitlint检测

  - branch - 发布前进行分支检测，设置为空字符串则不会检测

### template 新建模板配置
- root - 生成模板的根路径

- typescript - 是否创建ts文件

- test - 是否创建单元测试文件

- stylesheet - 样式文件类型

- readme - [true, 'mdx'] ([是否生成ReadMe文件, 创建md 或 mdx文件])

### plugins
插件集合，插件需满足下面的类型：

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
