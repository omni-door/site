# Documentation

## Project Type

### SPA
- [x] Based on [React](https://reactjs.org/)

- [x] Based on [React-Router](https://reacttraining.com/react-router/web/example/basic) to implement front-end routing

- [x] Use [typescript](https://www.typescriptlang.org/) to develop

- [x] Use [webpack](https://webpack.js.org/) to package

- [x] Comply [eslint](https://eslint.org/) standard

- [x] Comply [stylelint](https://stylelint.io/) standard

- [x] Apply [prettier](https://prettier.io/docs/en/install.html) to format code

- [x] Seamless support [CSS Modules](https://github.com/css-modules/css-modules) and global-css without extra configuration

  ……

### SSR
- [x] Based on [React](https://reactjs.org/)

- [x] Based on [nextjs](https://nextjs.org/) enterprise high performance node framework

- [x] Use [typescript](https://www.typescriptlang.org/) to develop

- [x] Support use [koa](https://koajs.com/) to custom node server

- [x] Search engine friendly [SEO](https://zh.wikipedia.org/wiki/%E6%90%9C%E5%B0%8B%E5%BC%95%E6%93%8E%E6%9C%80%E4%BD%B3%E5%8C%96)

  ……

### Component(library)
- [x] Support multiple component library demo and document framework such as [storybook](https://storybook.js.org/), [docz](https://docz.site/) and [styleguidist](https://react-styleguidist.js.org/)

- [x] Based on [React](https://reactjs.org/)

- [x] Use [typescript](https://www.typescriptlang.org/) to develop

- [x] Use [gulp](https://gulpjs.com/) to package

- [x] Comply [eslint](https://eslint.org/) standard

- [x] Comply [stylelint](https://stylelint.io/) standard

- [x] Comply [commitlint](https://commitlint.js.org/) standard

- [x] Apply [prettier](https://prettier.io/docs/en/install.html) to format code

  ……

### Toolkit
- [x] Use [typescript](https://www.typescriptlang.org/) to develop

- [x] Use [rollup](https://rollupjs.org/guide/en) to package

- [x] Comply [eslint](https://eslint.org/) standard

- [x] Apply [prettier](https://prettier.io/docs/en/install.html) to format code

  ……


## Commands
You can input `omni -h` in the command-line-tool to check all support commands：

```shell
  Commands:

    init [options] [strategy]  initialize your project, [strategy] could be stable(default) or latest
    dev [options]              omni dev [-p <port>] [-H <host>] [-P <path>]
    start [options]            omni start [-p <port>] [-H <host>] [-P <path>]
    new [options] [name]       omni new [name] [-f | -c] [-P <path>]
    build [options]            build your project according to the [omni.config.js]'s build field
    release [options]          publish your project according to the [omni.config.js]'s release field
```

### omni init

#### Initial your project by answer several questions
```shell
omni init
```

#### Initial your project with lastest denpendencies
```shell
omni init lastest
```

#### Initial your project without install dependencies
```shell
omni init -n
```

#### Initial your project according to some template
```shell
omni init -t [projectName]
```
or
```shell
omni init --react_entire [projectName]
```

#### Options
```shell
Usage: omni init [strategy] [options]

initialize your project, [strategy] could be stable(default) or latest

Arguments:

  strategy                 stable or latest

Options:
  -rb, --react_basic [name]       create a basic React SPA project
  -rs, --react_standard [name]    create a standard React SPA project
  -re, --react_entire [name]      create a most versatile React SPA project
  -rS, --react_ssr [name]         create a React component library
  -rc, --react_components [name]  create a React component library
  -t, --toolkit [name]            create a toolkit project
  -n, --no-install                init project without install dependencies
  -P, --path <path>               the workpath for init the project
  -h, --help                      output usage information
```

### omni dev

#### Usage
```sh
  omni dev

  omni dev -p 8200 // Start a dev-server with port 8200

  omni dev -h dev.domain.com // Start a dev-server with hostname dev.domain.com


  omni dev -p 8200 -h dev.domain.com // Start a dev-server with port 8200 and hostname dev.domain.com

```

#### Options
```shell
Usage: omni dev [options]

omni dev [-p <port>] [-H <host>] [-P <path>]

Options:
  -p, --port <port>      start the dev-server according to the specified port
  -H, --hostname <host>  start the dev-server according to the specified hostname
  -P, --path <path>      the workpath for start the dev-server
  -h, --help             output usage information
```

### omni start
The usage same as `omni dev`

#### Options
```shell
Usage: omni start [options]

omni start [-p <port>] [-H <host>] [-P <path>]

Options:
  -p, --port <port>      start the prod-server according to the specified port
  -H, --hostname <host>  start the prod-server according to the specified hostname
  -P, --path <path>      the workpath for start the prod-server
  -h, --help             output usage information
```

### omni new

#### Usage
```sh
  omni new

  omni new Button // Create a component which name is Button

  omni new -c // Create a component which type is class

  omni new -c Button // Create a component which name is Button and type is class
```

#### Options
```shell
Usage: omni new [name] [options]

omni new [name] [-f | -c] [-P <path>]

Arguments:

  name              optional! The name of component.

Options:
  -f, --function    create a functional component
  -c, --class       create a class component
  -P, --path <path>  the workpath for create component
  -h, --help        output usage information
```

### omni build

#### Usage
```sh
  omni build

  omni build -n // Build project bypass all pre-flight

  omni build -c $pathTo/build.config.js // Build project according to specify config path
```

#### Options
```shell
Usage: omni build [options]

build your project according to the [omni.config.js]'s build field

Options:
  -c, --config <path>  specify the path of config file
  -n, --no-verify      bypass all pre-check before building
  -P, --path <path>    the workpath for build project
  -h, --help           output usage information
```

### omni release

#### Usage
```sh
  omni release

  omni release -n // Release project bypass all pre-flight

  omni release -a // Release project that automatic iteration version

  omni release -i // Release project that ignore automatic iteration version

  omni release -m // Release project that manual iteration version

  omni release -t // Release project that the tag will add to npm-package
```

#### Options
```shell
Usage: omni release [options]

publish your project according to the [omni.config.js]'s release field

Options:
  -a, --automatic         automatic iteration version
  -i, --ignore            ignore automatic iteration version
  -m, --manual <version>  manual iteration version
  -t, --tag <tag>         the tag will add to npm-package
  -n, --no-verify         bypass unit-test eslint and stylelint check
  -P, --path <path>       the workpath for release project
  -h, --help              output usage information
```


# About「omni.config.js」config file

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
