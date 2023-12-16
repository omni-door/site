(() => {
var exports = {};
exports.id = 172;
exports.ids = [172];
exports.modules = {

/***/ 857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ docs)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./src/context/UseLocale.tsx + 2 modules
var UseLocale = __webpack_require__(764);
// EXTERNAL MODULE: ./src/components/Layout/index.ts + 1 modules
var Layout = __webpack_require__(827);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.0.0_@types+react@18.0.38_react@18.2.0/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(627);
;// CONCATENATED MODULE: ./src/components/Docs/docs-cn.md
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function _createMdxContent(props) {
  const _components = _objectSpread(_objectSpread({
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul"
  }, (0,lib/* useMDXComponents */.a)()), props.components);

  return (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [jsx_runtime_.jsx(_components.h1, {
      children: "文档"
    }), "\n", jsx_runtime_.jsx(_components.h2, {
      children: "支持的项目类型简介"
    }), "\n", jsx_runtime_.jsx(_components.h3, {
      children: "React SPA 应用"
    }), "\n", (0,jsx_runtime_.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] 基于 ", jsx_runtime_.jsx(_components.a, {
            href: "https://reactjs.org/",
            children: "React"
          }), " UI 框架"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] 基于 ", jsx_runtime_.jsx(_components.a, {
            href: "https://reacttraining.com/react-router/web/example/basic",
            children: "React-Router"
          }), " 实现前端路由"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] 使用 ", jsx_runtime_.jsx(_components.a, {
            href: "https://www.typescriptlang.org/",
            children: "typescript"
          }), " 进行开发"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] 使用 ", jsx_runtime_.jsx(_components.a, {
            href: "https://webpack.js.org/",
            children: "webpack"
          }), " 打包"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] 遵守 ", jsx_runtime_.jsx(_components.a, {
            href: "https://eslint.org/",
            children: "eslint"
          }), " 规范"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] 遵守 ", jsx_runtime_.jsx(_components.a, {
            href: "https://stylelint.io/",
            children: "stylelint"
          }), " 规范"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] 采用 ", jsx_runtime_.jsx(_components.a, {
            href: "https://prettier.io/docs/en/install.html",
            children: "prettier"
          }), " 美化代码格式"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] 无缝支持 ", jsx_runtime_.jsx(_components.a, {
            href: "https://github.com/css-modules/css-modules",
            children: "CSS Modules"
          }), " 和 全局CSS，无需额外配置"]
        }), "\n", jsx_runtime_.jsx(_components.p, {
          children: "……"
        }), "\n"]
      }), "\n"]
    }), "\n", jsx_runtime_.jsx(_components.h3, {
      children: "Vue SPA 应用"
    }), "\n", (0,jsx_runtime_.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] 基于 ", jsx_runtime_.jsx(_components.a, {
            href: "https://vuejs.org/",
            children: "Vue"
          }), " UI 框架"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] 基于 ", jsx_runtime_.jsx(_components.a, {
            href: "https://router.vuejs.org/",
            children: "Vue-Router"
          }), " 实现前端路由"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] 使用 ", jsx_runtime_.jsx(_components.a, {
            href: "https://www.typescriptlang.org/",
            children: "typescript"
          }), " 进行开发"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] 使用 ", jsx_runtime_.jsx(_components.a, {
            href: "https://webpack.js.org/",
            children: "webpack"
          }), " 打包"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] 遵守 ", jsx_runtime_.jsx(_components.a, {
            href: "https://eslint.org/",
            children: "eslint"
          }), " 规范"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] 遵守 ", jsx_runtime_.jsx(_components.a, {
            href: "https://stylelint.io/",
            children: "stylelint"
          }), " 规范"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] 采用 ", jsx_runtime_.jsx(_components.a, {
            href: "https://prettier.io/docs/en/install.html",
            children: "prettier"
          }), " 美化代码格式"]
        }), "\n", jsx_runtime_.jsx(_components.p, {
          children: "……"
        }), "\n"]
      }), "\n"]
    }), "\n", jsx_runtime_.jsx(_components.h3, {
      children: "React SSR 应用"
    }), "\n", (0,jsx_runtime_.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] 基于 ", jsx_runtime_.jsx(_components.a, {
            href: "https://reactjs.org/",
            children: "React"
          }), " 框架"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] 基于 ", jsx_runtime_.jsx(_components.a, {
            href: "https://nextjs.org/",
            children: "nextjs"
          }), " 企业级高性能 Node 框架"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] 使用 ", jsx_runtime_.jsx(_components.a, {
            href: "https://www.typescriptlang.org/",
            children: "typescript"
          }), " 进行开发"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] 支持 ", jsx_runtime_.jsx(_components.a, {
            href: "https://koajs.com/",
            children: "koa"
          }), " 自定义 node 服务"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] 搜索引擎友好 ", jsx_runtime_.jsx(_components.a, {
            href: "https://zh.wikipedia.org/wiki/%E6%90%9C%E5%B0%8B%E5%BC%95%E6%93%8E%E6%9C%80%E4%BD%B3%E5%8C%96",
            children: "SEO"
          })]
        }), "\n", jsx_runtime_.jsx(_components.p, {
          children: "……"
        }), "\n"]
      }), "\n"]
    }), "\n", jsx_runtime_.jsx(_components.h3, {
      children: "React Component 组件(库)项目"
    }), "\n", (0,jsx_runtime_.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] 支持 ", jsx_runtime_.jsx(_components.a, {
            href: "https://storybook.js.org/",
            children: "storybook"
          }), "、", jsx_runtime_.jsx(_components.a, {
            href: "https://docz.site/",
            children: "docz"
          }), "、", jsx_runtime_.jsx(_components.a, {
            href: "https://react-styleguidist.js.org/",
            children: "styleguidist"
          }), " 多种组件库Demo和文档框架"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] 基于 ", jsx_runtime_.jsx(_components.a, {
            href: "https://reactjs.org/",
            children: "React"
          }), " 的组件库"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] 使用 ", jsx_runtime_.jsx(_components.a, {
            href: "https://jestjs.io/",
            children: "Jest"
          }), " 进行组件的单页测试"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] 使用 ", jsx_runtime_.jsx(_components.a, {
            href: "https://gulpjs.com/",
            children: "gulp"
          }), " 打包"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] 使用 ", jsx_runtime_.jsx(_components.a, {
            href: "https://www.typescriptlang.org/",
            children: "typescript"
          }), " 进行开发"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] 遵守 ", jsx_runtime_.jsx(_components.a, {
            href: "https://eslint.org/",
            children: "eslint"
          }), " 规范"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] 遵守 ", jsx_runtime_.jsx(_components.a, {
            href: "https://stylelint.io/",
            children: "stylelint"
          }), " 规范"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] 采用 ", jsx_runtime_.jsx(_components.a, {
            href: "https://prettier.io/docs/en/install.html",
            children: "prettier"
          }), " 美化代码格式"]
        }), "\n", jsx_runtime_.jsx(_components.p, {
          children: "……"
        }), "\n"]
      }), "\n"]
    }), "\n", jsx_runtime_.jsx(_components.h3, {
      children: "Vue Component 组件(库)项目"
    }), "\n", (0,jsx_runtime_.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] 基于 ", jsx_runtime_.jsx(_components.a, {
            href: "https://vuejs.org/",
            children: "Vue"
          }), " 的组件库"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] 使用 ", jsx_runtime_.jsx(_components.a, {
            href: "https://jestjs.io/",
            children: "Jest"
          }), " 进行组件的单页测试"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] 使用 ", jsx_runtime_.jsx(_components.a, {
            href: "https://gulpjs.com/",
            children: "gulp"
          }), " 打包"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] 使用 ", jsx_runtime_.jsx(_components.a, {
            href: "https://www.typescriptlang.org/",
            children: "typescript"
          }), " 进行开发"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] 遵守 ", jsx_runtime_.jsx(_components.a, {
            href: "https://eslint.org/",
            children: "eslint"
          }), " 规范"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] 遵守 ", jsx_runtime_.jsx(_components.a, {
            href: "https://stylelint.io/",
            children: "stylelint"
          }), " 规范"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] 采用 ", jsx_runtime_.jsx(_components.a, {
            href: "https://prettier.io/docs/en/install.html",
            children: "prettier"
          }), " 美化代码格式"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] 基于 ", jsx_runtime_.jsx(_components.a, {
            href: "https://storybook.js.org/",
            children: "storybook"
          }), " 组件库Demo和文档框架"]
        }), "\n", jsx_runtime_.jsx(_components.p, {
          children: "……"
        }), "\n"]
      }), "\n"]
    }), "\n", jsx_runtime_.jsx(_components.h3, {
      children: "Toolkit 工具库项目"
    }), "\n", (0,jsx_runtime_.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] 基于 ", jsx_runtime_.jsx(_components.a, {
            href: "https://d.umijs.org/",
            children: "dumi"
          }), " 开发和Demo框架"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] 使用 ", jsx_runtime_.jsx(_components.a, {
            href: "https://mochajs.org/",
            children: "mocha"
          }), " 进行Node端的单页测试"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] 使用 ", jsx_runtime_.jsx(_components.a, {
            href: "https://karma-runner.github.io/latest/index.html",
            children: "karma"
          }), " 进行浏览器端的单页测试"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] 使用 ", jsx_runtime_.jsx(_components.a, {
            href: "https://rollupjs.org/guide/en/",
            children: "rollup"
          }), " 构建项目"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] 使用 ", jsx_runtime_.jsx(_components.a, {
            href: "https://www.typescriptlang.org/",
            children: "typescript"
          }), " 进行开发"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] 遵守 ", jsx_runtime_.jsx(_components.a, {
            href: "https://eslint.org/",
            children: "eslint"
          }), " 规范"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] 采用 ", jsx_runtime_.jsx(_components.a, {
            href: "https://prettier.io/docs/en/install.html",
            children: "prettier"
          }), " 美化代码格式"]
        }), "\n", jsx_runtime_.jsx(_components.p, {
          children: "……"
        }), "\n"]
      }), "\n"]
    }), "\n", jsx_runtime_.jsx(_components.h2, {
      children: "脚手架命令清单"
    }), "\n", (0,jsx_runtime_.jsxs)(_components.p, {
      children: ["你可以在命令行中简单输入 ", jsx_runtime_.jsx(_components.code, {
        children: "omni -h"
      }), " 查看所有的命令："]
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-shell",
        children: "  Commands:\n\n    init [strategy] [options]  初始化你的项目，[strategy(策略)] 可用是stable(默认) 或 lastst\n    dev [options]              omni dev -p [port]\n    new <module> [options]     omni new [module] [-f | -c]\n    build                      根据 [omni.config.js] 打包构建你的项目\n    release [options]          根据 [omni.config.js] 发布你的项目\n"
      })
    }), "\n", jsx_runtime_.jsx(_components.h3, {
      children: "omni init"
    }), "\n", jsx_runtime_.jsx(_components.h4, {
      children: "初始化一个项目"
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-shell",
        children: "omni init\n"
      })
    }), "\n", jsx_runtime_.jsx(_components.h4, {
      children: "用最新的依赖@lastest初始化项目"
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-shell",
        children: "omni init lastest\n"
      })
    }), "\n", jsx_runtime_.jsx(_components.h4, {
      children: "初始化项目但不安装依赖"
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-shell",
        children: "omni init -n\n"
      })
    }), "\n", jsx_runtime_.jsx(_components.h4, {
      children: "套用模板一键初始化项目"
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-shell",
        children: "omni init -t [projectName]\n"
      })
    }), "\n", jsx_runtime_.jsx(_components.p, {
      children: "or"
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-shell",
        children: "omni init --entire [projectName]\n"
      })
    }), "\n", jsx_runtime_.jsx(_components.h4, {
      children: "选项"
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-shell",
        children: "使用: omni init [strategy] [options]\n\nArguments:\n\n  strategy                 stable or latest\n\n  Options:\n    -rb, --react_basic [name]       创建一个最基本的 React 单页应用\n    -rs, --react_standard [name]    创建一个标准的 React 单页应用\n    -re, --react_entire [name]      创建一个全量的 React 单页应用\n    -vb, --vue_basic [name]         创建一个最基本的 Vue 单页应用\n    -vs, --vue_standard [name]      创建一个标准的 Vue 单页应用\n    -ve, --vue_entire [name]        创建一个全量的 Vue 单页应用\n    -rS, --react_ssr [name]         创建一个 React SSR 应用\n    -rc, --react_components [name]  创建一个 React 组件库\n    -vc, --vue_components [name]    创建一个 Vue 组件库\n    -t, --toolkit [name]            创建一个工具库\n    -n, --no-install                初始化项目不安装任何依赖\n    -P, --path <path>               创建项目的工作路径\n    -h, --help               output usage information\n"
      })
    }), "\n", jsx_runtime_.jsx(_components.h3, {
      children: "omni dev"
    }), "\n", jsx_runtime_.jsx(_components.h4, {
      children: "各种用法"
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-sh",
        children: "  omni dev\n\n  omni dev -p 8200 // 启动一个端口号为 8200 的开发服务\n\n  omni dev -h dev.domain.com // 启动一个host为 dev.domain.com 的开发服务\n\n\n  omni dev -p 8200 -h dev.domain.com // 启动一个端口号为 8200 且 host为 dev.domain.com 的 开发服务\n\n"
      })
    }), "\n", jsx_runtime_.jsx(_components.h4, {
      children: "选项"
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-shell",
        children: "使用: omni dev [options]\n\nomni dev [-p <port>] [-H <host>] [-P <path>]\n\nOptions:\n  -p, --port <port>      根据指定的端口号启动开发服务\n  -H, --hostname <host>  根据指定的hostname启动开发服务\n  -P, --path <path>      启动开发服务的工作路径\n  -h, --help             output usage information\n"
      })
    }), "\n", jsx_runtime_.jsx(_components.h3, {
      children: "omni start"
    }), "\n", (0,jsx_runtime_.jsxs)(_components.p, {
      children: ["用法和 ", jsx_runtime_.jsx(_components.code, {
        children: "omni dev"
      }), " 略同"]
    }), "\n", jsx_runtime_.jsx(_components.h4, {
      children: "选项"
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-shell",
        children: "使用: omni start [options]\n\nomni start [-p <port>] [-H <host>] [-P <path>]\n\nOptions:\n  -p, --port <port>      根据指定的端口号启动生产服务\n  -H, --hostname <host>  根据指定的hostname启动生产服务\n  -P, --path <path>      启动生产服务的工作路径\n  -h, --help             output usage information\n"
      })
    }), "\n", jsx_runtime_.jsx(_components.h3, {
      children: "omni new"
    }), "\n", jsx_runtime_.jsx(_components.h4, {
      children: "各种用法"
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-sh",
        children: "  omni new\n\n  omni new Button // 新建一个名为 Button 的组件\n\n  omni new -c // 新建一个类组件\n\n  omni new -c Button // 新建一个名为 Button 的类组件\n"
      })
    }), "\n", jsx_runtime_.jsx(_components.h4, {
      children: "选项"
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-shell",
        children: "使用: omni new [name] [options]\n\nomni new [name] [-f | -c] [-P <path>]\n\nArguments:\n\n  module           可选！组件名称。\n\nOptions:\n  -f, --function     创建一个函数组件\n  -c, --class        创建一个类组件\n  -P, --path <path>  创建组件的工作路径\n  -h, --help        output usage information\n"
      })
    }), "\n", jsx_runtime_.jsx(_components.h3, {
      children: "omni build"
    }), "\n", jsx_runtime_.jsx(_components.h4, {
      children: "各种用法"
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-sh",
        children: "  omni build\n\n  omni build -n // 构建时避开所有预校验\n\n  omni build -c $pathTo/build.config.js // 根据指定路径构建项目\n"
      })
    }), "\n", jsx_runtime_.jsx(_components.h4, {
      children: "选项"
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-shell",
        children: "使用: omni build [options]\n\n根据 [omni.config.js] 的 build 字段构建项目\n\nOptions:\n  -c, --config <path>  指定构建的配置文件路径\n  -n, --no-verify      绕过所有预检直接构建\n  -P, --path <path>    构建的工作路径\n  -h, --help           output usage information\n"
      })
    }), "\n", jsx_runtime_.jsx(_components.h3, {
      children: "omni release"
    }), "\n", jsx_runtime_.jsx(_components.h4, {
      children: "各种用法"
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-sh",
        children: "  omni release\n\n  omni release -n // 发布时避开所有预校验\n\n  omni release -a // 发布时自动迭代版本号\n\n  omni release -i // 发布时忽略版本号的迭代\n\n  omni release -m // 发布时手动输入迭代版本号\n\n  omni release -t // 发布时指定 tag 名\n"
      })
    }), "\n", jsx_runtime_.jsx(_components.h4, {
      children: "选项"
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-shell",
        children: "使用: omni release [options]\n\n根据 [omni.config.js] 的 release 字段发布项目\n\nOptions:\n  -a, --automatic         发布并自动迭代版本号\n  -i, --ignore            发布并忽视版本号的迭代\n  -m, --manual <version>  发布并手动指定版本号\n  -t, --tag <tag>         发布时指定tag\n  -n, --no-verify         绕过所有的预检直接发布\n  -P, --path <path>       发布的工作路径\n  -h, --help              output usage information\n"
      })
    }), "\n", jsx_runtime_.jsx(_components.h2, {
      children: "关于 「omni.config.js」 配置文件"
    }), "\n", jsx_runtime_.jsx(_components.h3, {
      children: "type 项目类型"
    }), "\n", jsx_runtime_.jsx(_components.p, {
      children: "OMNI 会根据不同的项目类型决定整个初始化、构建、创建模板的过程"
    }), "\n", jsx_runtime_.jsx(_components.p, {
      children: "目前支持的项目类型有："
    }), "\n", (0,jsx_runtime_.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "spa-react - React单页应用"
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "ssr-react - React服务端渲染应用"
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "component-react - React组件库"
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "toolkit - SDK工具包"
        }), "\n"]
      }), "\n"]
    }), "\n", jsx_runtime_.jsx(_components.h3, {
      children: "dev 开发服务"
    }), "\n", jsx_runtime_.jsx(_components.p, {
      children: "开发服务基于express，搭配 webpack-dev-middleware、webpack-hot-middleware、http-proxy-middleware 等中间件，实现了热更新、接口代理等常用功能，并提供了中间件的自定义、端口号、log日志输出级别、webpack配置等个性化定制方案。"
    }), "\n", (0,jsx_runtime_.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "middleware - 中间件配置，参考下面👇的类型："
        }), "\n", jsx_runtime_.jsx(_components.pre, {
          children: jsx_runtime_.jsx(_components.code, {
            className: "language-ts",
            children: "{\n  route: string;\n  callback: (req: any, res: any) => Promise<void>;\n}\n"
          })
        }), "\n", jsx_runtime_.jsx(_components.p, {
          children: "or"
        }), "\n", jsx_runtime_.jsx(_components.pre, {
          children: jsx_runtime_.jsx(_components.code, {
            className: "language-ts",
            children: "(params: {\n  ip: string;\n  port: number;\n  host?: string;\n  logLevel: LOGLEVEL;\n  proxyConfig?: (ProxyItem | ProxyFn)[];\n}) => {\n  route: string;\n  callback: (req: any, res: any) => Promise<void>;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "webpack - 开发服务端webpack配置"
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "proxy - 开发服务代理配置"
        }), "\n", jsx_runtime_.jsx(_components.pre, {
          children: jsx_runtime_.jsx(_components.code, {
            className: "language-ts",
            children: "{\n  route: '/api', // 代理API的本地服务的地址\n  config: {\n    target: 'http://www.api.com/api', // 代理API的实际地址\n    changeOrigin: true // 是否改变host\n  }\n}\n"
          })
        }), "\n", jsx_runtime_.jsx(_components.p, {
          children: "or"
        }), "\n", jsx_runtime_.jsx(_components.pre, {
          children: jsx_runtime_.jsx(_components.code, {
            className: "language-ts",
            children: "(params: {\n  ip: string;\n  port: number;\n  host?: string;\n  logLevel: LOGLEVEL;\n  middlewareConfig?: (MiddlewareItem | MiddlewareFn)[];\n}) => {\n  route: string;\n  config: Config;\n}\n"
          })
        }), "\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["更多配置详见 ", jsx_runtime_.jsx(_components.a, {
            href: "https://github.com/chimurai/http-proxy-middleware",
            children: "http-proxy-middleware"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "port - 开发服务启动的端口号"
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "host - 开发服务启动的host"
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["https - 开发服务以https协议启动，可自定义 ", jsx_runtime_.jsx(_components.code, {
            children: "key"
          }), " 和 ", jsx_runtime_.jsx(_components.code, {
            children: "cert"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "serverType - 开发服务的类型"
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "logLevel - 开发服务日志输出等级，可选 'debug'、'info'、'warn'、'error'、'silent'"
        }), "\n"]
      }), "\n"]
    }), "\n", jsx_runtime_.jsx(_components.h3, {
      children: "build 构建配置"
    }), "\n", (0,jsx_runtime_.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "autoRelease - 构建完成后是否自动发布"
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "srcDir - 构建资源输入路径"
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "outDir - 构建结果输出路径"
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "esmDir - 构建结果输出路径(符合es6 module规范)"
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "hash - 构建的资源是否加上hash，可选 'contenthash'、'chunkhash'、'hash'(传入true则是contenthash)"
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "configuration - 构建阶段的自定义配置回调，返回自定义的配置"
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "reserve - 配置未经过打包，但需要保留进构建结果的资源"
        }), "\n", (0,jsx_runtime_.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime_.jsxs)(_components.li, {
            children: ["\n", jsx_runtime_.jsx(_components.p, {
              children: "style - 构建结果是否保留样式文件"
            }), "\n"]
          }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
            children: ["\n", jsx_runtime_.jsx(_components.p, {
              children: "assets - 构建结果保留其他资源的路径"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "preflight - 构建前的飞行检查"
        }), "\n", (0,jsx_runtime_.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime_.jsxs)(_components.li, {
            children: ["\n", jsx_runtime_.jsx(_components.p, {
              children: "typescript - 是否处理ts或tsx文件"
            }), "\n"]
          }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
            children: ["\n", jsx_runtime_.jsx(_components.p, {
              children: "test - 是否进行单元测试"
            }), "\n"]
          }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
            children: ["\n", jsx_runtime_.jsx(_components.p, {
              children: "eslint - 是否进行eslint检测"
            }), "\n"]
          }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
            children: ["\n", jsx_runtime_.jsx(_components.p, {
              children: "prettier - 是否进行prettier检测"
            }), "\n"]
          }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
            children: ["\n", jsx_runtime_.jsx(_components.p, {
              children: "stylelint - 是否进行stylelint检测"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", jsx_runtime_.jsx(_components.h3, {
      children: "release"
    }), "\n", (0,jsx_runtime_.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "autoBuild - 发布之前是否自动构建项目"
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "autoTag - 发布到npm仓库时会自动根据当前版本号设定tag"
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "git - 发布的git仓库地址"
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "npm - 发布的npm仓库地址"
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "preflight - 发布前的飞行检查"
        }), "\n", (0,jsx_runtime_.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime_.jsxs)(_components.li, {
            children: ["\n", jsx_runtime_.jsx(_components.p, {
              children: "test - 发布前是否进行单元测试"
            }), "\n"]
          }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
            children: ["\n", jsx_runtime_.jsx(_components.p, {
              children: "eslint - 发布前是否进行eslint检测"
            }), "\n"]
          }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
            children: ["\n", jsx_runtime_.jsx(_components.p, {
              children: "prettier - 发布前是否进行prettier检测"
            }), "\n"]
          }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
            children: ["\n", jsx_runtime_.jsx(_components.p, {
              children: "stylelint - 发布前是否进行stylelint检测"
            }), "\n"]
          }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
            children: ["\n", jsx_runtime_.jsx(_components.p, {
              children: "commitlint - 发布前是否进行commitlint检测"
            }), "\n"]
          }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
            children: ["\n", jsx_runtime_.jsx(_components.p, {
              children: "branch - 发布前进行分支检测，设置为空字符串则不会检测"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", jsx_runtime_.jsx(_components.h3, {
      children: "template 新建模板配置"
    }), "\n", (0,jsx_runtime_.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "root - 生成模板的根路径"
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "typescript - 是否创建ts文件"
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "test - 是否创建单元测试文件"
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "stylesheet - 样式文件类型"
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "readme - [true, 'mdx'] ([是否生成ReadMe文件, 创建md 或 mdx文件])"
        }), "\n"]
      }), "\n"]
    }), "\n", jsx_runtime_.jsx(_components.h3, {
      children: "plugins"
    }), "\n", jsx_runtime_.jsx(_components.p, {
      children: "插件集合，插件需满足下面的类型："
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-ts",
        children: "type OmniPlugin = {\n  name: string;\n  stage: PluginStage;\n  handler: PluginHandler;\n};\n\ntype PluginStage = 'new' | 'build' | 'release';\ninterface PluginHandler {\n  (config: Omit<OmniConfig, 'plugins'>): Promise<any>;\n}\n"
      })
    })]
  });
}

function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = _objectSpread(_objectSpread({}, (0,lib/* useMDXComponents */.a)()), props.components);

  return MDXLayout ? jsx_runtime_.jsx(MDXLayout, _objectSpread(_objectSpread({}, props), {}, {
    children: jsx_runtime_.jsx(_createMdxContent, _objectSpread({}, props))
  })) : _createMdxContent(props);
}
;// CONCATENATED MODULE: ./src/components/Docs/docs-en.md
function docs_en_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function docs_en_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { docs_en_ownKeys(Object(source), true).forEach(function (key) { docs_en_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { docs_en_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function docs_en_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function docs_en_createMdxContent(props) {
  const _components = docs_en_objectSpread(docs_en_objectSpread({
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul"
  }, (0,lib/* useMDXComponents */.a)()), props.components);

  return (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [jsx_runtime_.jsx(_components.h1, {
      children: "Documentation"
    }), "\n", jsx_runtime_.jsx(_components.h2, {
      children: "Project Type"
    }), "\n", jsx_runtime_.jsx(_components.h3, {
      children: "React SPA"
    }), "\n", (0,jsx_runtime_.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] Based on ", jsx_runtime_.jsx(_components.a, {
            href: "https://reactjs.org/",
            children: "React"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] Based on ", jsx_runtime_.jsx(_components.a, {
            href: "https://reacttraining.com/react-router/web/example/basic",
            children: "React-Router"
          }), " to implement front-end routing"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] Use ", jsx_runtime_.jsx(_components.a, {
            href: "https://www.typescriptlang.org/",
            children: "typescript"
          }), " to develop"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] Use ", jsx_runtime_.jsx(_components.a, {
            href: "https://webpack.js.org/",
            children: "webpack"
          }), " to package"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] Comply ", jsx_runtime_.jsx(_components.a, {
            href: "https://eslint.org/",
            children: "eslint"
          }), " standard"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] Comply ", jsx_runtime_.jsx(_components.a, {
            href: "https://stylelint.io/",
            children: "stylelint"
          }), " standard"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] Apply ", jsx_runtime_.jsx(_components.a, {
            href: "https://prettier.io/docs/en/install.html",
            children: "prettier"
          }), " to format code"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] Seamless support ", jsx_runtime_.jsx(_components.a, {
            href: "https://github.com/css-modules/css-modules",
            children: "CSS Modules"
          }), " and global-css without extra configuration"]
        }), "\n", jsx_runtime_.jsx(_components.p, {
          children: "……"
        }), "\n"]
      }), "\n"]
    }), "\n", jsx_runtime_.jsx(_components.h3, {
      children: "Vue SPA"
    }), "\n", (0,jsx_runtime_.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] Based on ", jsx_runtime_.jsx(_components.a, {
            href: "https://vuejs.org/",
            children: "Vue"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] Based on ", jsx_runtime_.jsx(_components.a, {
            href: "https://router.vuejs.org/",
            children: "Vue-Router"
          }), " to implement front-end routing"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] Use ", jsx_runtime_.jsx(_components.a, {
            href: "https://www.typescriptlang.org/",
            children: "typescript"
          }), " to develop"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] Use ", jsx_runtime_.jsx(_components.a, {
            href: "https://webpack.js.org/",
            children: "webpack"
          }), " to package"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] Comply ", jsx_runtime_.jsx(_components.a, {
            href: "https://eslint.org/",
            children: "eslint"
          }), " standard"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] Comply ", jsx_runtime_.jsx(_components.a, {
            href: "https://stylelint.io/",
            children: "stylelint"
          }), " standard"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] Apply ", jsx_runtime_.jsx(_components.a, {
            href: "https://prettier.io/docs/en/install.html",
            children: "prettier"
          }), " to format code"]
        }), "\n", jsx_runtime_.jsx(_components.p, {
          children: "……"
        }), "\n"]
      }), "\n"]
    }), "\n", jsx_runtime_.jsx(_components.h3, {
      children: "React SSR"
    }), "\n", (0,jsx_runtime_.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] Based on ", jsx_runtime_.jsx(_components.a, {
            href: "https://reactjs.org/",
            children: "React"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] Based on ", jsx_runtime_.jsx(_components.a, {
            href: "https://nextjs.org/",
            children: "nextjs"
          }), " enterprise high performance node framework"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] Use ", jsx_runtime_.jsx(_components.a, {
            href: "https://www.typescriptlang.org/",
            children: "typescript"
          }), " to develop"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] Support use ", jsx_runtime_.jsx(_components.a, {
            href: "https://koajs.com/",
            children: "koa"
          }), " to custom node server"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] Search engine friendly ", jsx_runtime_.jsx(_components.a, {
            href: "https://zh.wikipedia.org/wiki/%E6%90%9C%E5%B0%8B%E5%BC%95%E6%93%8E%E6%9C%80%E4%BD%B3%E5%8C%96",
            children: "SEO"
          })]
        }), "\n", jsx_runtime_.jsx(_components.p, {
          children: "……"
        }), "\n"]
      }), "\n"]
    }), "\n", jsx_runtime_.jsx(_components.h3, {
      children: "React Component(library)"
    }), "\n", (0,jsx_runtime_.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] Support multiple component library demo and document framework such as ", jsx_runtime_.jsx(_components.a, {
            href: "https://storybook.js.org/",
            children: "storybook"
          }), ", ", jsx_runtime_.jsx(_components.a, {
            href: "https://docz.site/",
            children: "docz"
          }), " and ", jsx_runtime_.jsx(_components.a, {
            href: "https://react-styleguidist.js.org/",
            children: "styleguidist"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] Based on ", jsx_runtime_.jsx(_components.a, {
            href: "https://reactjs.org/",
            children: "React"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] Use ", jsx_runtime_.jsx(_components.a, {
            href: "https://jestjs.io/",
            children: "Jest"
          }), " to cover components unit-test"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] Use ", jsx_runtime_.jsx(_components.a, {
            href: "https://gulpjs.com/",
            children: "gulp"
          }), " to package"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] Use ", jsx_runtime_.jsx(_components.a, {
            href: "https://www.typescriptlang.org/",
            children: "typescript"
          }), " to develop"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] Comply ", jsx_runtime_.jsx(_components.a, {
            href: "https://eslint.org/",
            children: "eslint"
          }), " standard"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] Comply ", jsx_runtime_.jsx(_components.a, {
            href: "https://stylelint.io/",
            children: "stylelint"
          }), " standard"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] Apply ", jsx_runtime_.jsx(_components.a, {
            href: "https://prettier.io/docs/en/install.html",
            children: "prettier"
          }), " to format code"]
        }), "\n", jsx_runtime_.jsx(_components.p, {
          children: "……"
        }), "\n"]
      }), "\n"]
    }), "\n", jsx_runtime_.jsx(_components.h3, {
      children: "Vue Component(library)"
    }), "\n", (0,jsx_runtime_.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] Based on ", jsx_runtime_.jsx(_components.a, {
            href: "https://vuejs.org/",
            children: "Vue"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] Use ", jsx_runtime_.jsx(_components.a, {
            href: "https://jestjs.io/",
            children: "Jest"
          }), " to cover components unit-test"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] Use ", jsx_runtime_.jsx(_components.a, {
            href: "https://gulpjs.com/",
            children: "gulp"
          }), " to package"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] Use ", jsx_runtime_.jsx(_components.a, {
            href: "https://www.typescriptlang.org/",
            children: "typescript"
          }), " to develop"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] Comply ", jsx_runtime_.jsx(_components.a, {
            href: "https://eslint.org/",
            children: "eslint"
          }), " standard"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] Comply ", jsx_runtime_.jsx(_components.a, {
            href: "https://stylelint.io/",
            children: "stylelint"
          }), " standard"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] Apply ", jsx_runtime_.jsx(_components.a, {
            href: "https://prettier.io/docs/en/install.html",
            children: "prettier"
          }), " to format code"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] Based on ", jsx_runtime_.jsx(_components.a, {
            href: "https://storybook.js.org/",
            children: "storybook"
          }), " which is component library demo and document framework"]
        }), "\n", jsx_runtime_.jsx(_components.p, {
          children: "……"
        }), "\n"]
      }), "\n"]
    }), "\n", jsx_runtime_.jsx(_components.h3, {
      children: "Toolkit"
    }), "\n", (0,jsx_runtime_.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] Based on ", jsx_runtime_.jsx(_components.a, {
            href: "https://d.umijs.org/",
            children: "dumi"
          }), " which is demo and document framework for the project"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] 使用 ", jsx_runtime_.jsx(_components.a, {
            href: "https://mochajs.org/",
            children: "mocha"
          }), " 进行Node端的单页测试"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] 使用 ", jsx_runtime_.jsx(_components.a, {
            href: "https://karma-runner.github.io/latest/index.html",
            children: "karma"
          }), " 进行浏览器端的单页测试"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] Use ", jsx_runtime_.jsx(_components.a, {
            href: "https://rollupjs.org/guide/en",
            children: "rollup"
          }), " to package"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] Use ", jsx_runtime_.jsx(_components.a, {
            href: "https://www.typescriptlang.org/",
            children: "typescript"
          }), " to develop"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] Comply ", jsx_runtime_.jsx(_components.a, {
            href: "https://eslint.org/",
            children: "eslint"
          }), " standard"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["[x] Apply ", jsx_runtime_.jsx(_components.a, {
            href: "https://prettier.io/docs/en/install.html",
            children: "prettier"
          }), " to format code"]
        }), "\n", jsx_runtime_.jsx(_components.p, {
          children: "……"
        }), "\n"]
      }), "\n"]
    }), "\n", jsx_runtime_.jsx(_components.h2, {
      children: "Commands"
    }), "\n", (0,jsx_runtime_.jsxs)(_components.p, {
      children: ["You can input ", jsx_runtime_.jsx(_components.code, {
        children: "omni -h"
      }), " in the command-line-tool to check all support commands："]
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-shell",
        children: "  Commands:\n\n    init [options] [strategy]  initialize your project, [strategy] could be stable(default) or latest\n    dev [options]              omni dev [-p <port>] [-H <host>] [-P <path>]\n    start [options]            omni start [-p <port>] [-H <host>] [-P <path>]\n    new [options] [name]       omni new [name] [-f | -c] [-P <path>]\n    build [options]            build your project according to the [omni.config.js]'s build field\n    release [options]          publish your project according to the [omni.config.js]'s release field\n"
      })
    }), "\n", jsx_runtime_.jsx(_components.h3, {
      children: "omni init"
    }), "\n", jsx_runtime_.jsx(_components.h4, {
      children: "Initial your project by answer several questions"
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-shell",
        children: "omni init\n"
      })
    }), "\n", jsx_runtime_.jsx(_components.h4, {
      children: "Initial your project with lastest denpendencies"
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-shell",
        children: "omni init lastest\n"
      })
    }), "\n", jsx_runtime_.jsx(_components.h4, {
      children: "Initial your project without install dependencies"
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-shell",
        children: "omni init -n\n"
      })
    }), "\n", jsx_runtime_.jsx(_components.h4, {
      children: "Initial your project according to some template"
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-shell",
        children: "omni init -t [projectName]\n"
      })
    }), "\n", jsx_runtime_.jsx(_components.p, {
      children: "or"
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-shell",
        children: "omni init --react_entire [projectName]\n"
      })
    }), "\n", jsx_runtime_.jsx(_components.h4, {
      children: "Options"
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-shell",
        children: "Usage: omni init [strategy] [options]\n\ninitialize your project, [strategy] could be stable(default) or latest\n\nArguments:\n\n  strategy                 stable or latest\n\nOptions:\n  -rb, --react_basic [name]       create a basic React SPA project\n  -rs, --react_standard [name]    create a standard React SPA project\n  -re, --vue_entire [name]        create a most versatile React SPA project\n  -vb, --vue_basic [name]         create a basic Vue SPA project\n  -vs, --vue_standard [name]      create a standard Vue SPA project\n  -ve, --vue_entire [name]        create a most versatile Vue SPA project\n  -rS, --react_ssr [name]         create a React component library\n  -rc, --react_components [name]  create a React component library\n  -vc, --vue_components [name]    create a Vue component library\n  -t, --toolkit [name]            create a toolkit project\n  -n, --no-install                init project without install dependencies\n  -P, --path <path>               the workpath for init the project\n  -h, --help                      output usage information\n"
      })
    }), "\n", jsx_runtime_.jsx(_components.h3, {
      children: "omni dev"
    }), "\n", jsx_runtime_.jsx(_components.h4, {
      children: "Usage"
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-sh",
        children: "  omni dev\n\n  omni dev -p 8200 // Start a dev-server with port 8200\n\n  omni dev -h dev.domain.com // Start a dev-server with hostname dev.domain.com\n\n\n  omni dev -p 8200 -h dev.domain.com // Start a dev-server with port 8200 and hostname dev.domain.com\n\n"
      })
    }), "\n", jsx_runtime_.jsx(_components.h4, {
      children: "Options"
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-shell",
        children: "Usage: omni dev [options]\n\nomni dev [-p <port>] [-H <host>] [-P <path>]\n\nOptions:\n  -p, --port <port>      start the dev-server according to the specified port\n  -H, --hostname <host>  start the dev-server according to the specified hostname\n  -P, --path <path>      the workpath for start the dev-server\n  -h, --help             output usage information\n"
      })
    }), "\n", jsx_runtime_.jsx(_components.h3, {
      children: "omni start"
    }), "\n", (0,jsx_runtime_.jsxs)(_components.p, {
      children: ["The usage same as ", jsx_runtime_.jsx(_components.code, {
        children: "omni dev"
      })]
    }), "\n", jsx_runtime_.jsx(_components.h4, {
      children: "Options"
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-shell",
        children: "Usage: omni start [options]\n\nomni start [-p <port>] [-H <host>] [-P <path>]\n\nOptions:\n  -p, --port <port>      start the prod-server according to the specified port\n  -H, --hostname <host>  start the prod-server according to the specified hostname\n  -P, --path <path>      the workpath for start the prod-server\n  -h, --help             output usage information\n"
      })
    }), "\n", jsx_runtime_.jsx(_components.h3, {
      children: "omni new"
    }), "\n", jsx_runtime_.jsx(_components.h4, {
      children: "Usage"
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-sh",
        children: "  omni new\n\n  omni new Button // Create a component which name is Button\n\n  omni new -c // Create a component which type is class\n\n  omni new -c Button // Create a component which name is Button and type is class\n"
      })
    }), "\n", jsx_runtime_.jsx(_components.h4, {
      children: "Options"
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-shell",
        children: "Usage: omni new [name] [options]\n\nomni new [name] [-f | -c] [-P <path>]\n\nArguments:\n\n  name              optional! The name of component.\n\nOptions:\n  -f, --function    create a functional component\n  -c, --class       create a class component\n  -P, --path <path>  the workpath for create component\n  -h, --help        output usage information\n"
      })
    }), "\n", jsx_runtime_.jsx(_components.h3, {
      children: "omni build"
    }), "\n", jsx_runtime_.jsx(_components.h4, {
      children: "Usage"
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-sh",
        children: "  omni build\n\n  omni build -n // Build project bypass all pre-flight\n\n  omni build -c $pathTo/build.config.js // Build project according to specify config path\n"
      })
    }), "\n", jsx_runtime_.jsx(_components.h4, {
      children: "Options"
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-shell",
        children: "Usage: omni build [options]\n\nbuild your project according to the [omni.config.js]'s build field\n\nOptions:\n  -c, --config <path>  specify the path of config file\n  -n, --no-verify      bypass all pre-check before building\n  -P, --path <path>    the workpath for build project\n  -h, --help           output usage information\n"
      })
    }), "\n", jsx_runtime_.jsx(_components.h3, {
      children: "omni release"
    }), "\n", jsx_runtime_.jsx(_components.h4, {
      children: "Usage"
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-sh",
        children: "  omni release\n\n  omni release -n // Release project bypass all pre-flight\n\n  omni release -a // Release project that automatic iteration version\n\n  omni release -i // Release project that ignore automatic iteration version\n\n  omni release -m // Release project that manual iteration version\n\n  omni release -t // Release project that the tag will add to npm-package\n"
      })
    }), "\n", jsx_runtime_.jsx(_components.h4, {
      children: "Options"
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-shell",
        children: "Usage: omni release [options]\n\npublish your project according to the [omni.config.js]'s release field\n\nOptions:\n  -a, --automatic         automatic iteration version\n  -i, --ignore            ignore automatic iteration version\n  -m, --manual <version>  manual iteration version\n  -t, --tag <tag>         the tag will add to npm-package\n  -n, --no-verify         bypass unit-test eslint and stylelint check\n  -P, --path <path>       the workpath for release project\n  -h, --help              output usage information\n"
      })
    }), "\n", jsx_runtime_.jsx(_components.h1, {
      children: "About「omni.config.js」config file"
    }), "\n", jsx_runtime_.jsx(_components.h3, {
      children: "type"
    }), "\n", jsx_runtime_.jsx(_components.p, {
      children: "OMNI will process of initialization, construction and template creation according to different project types"
    }), "\n", jsx_runtime_.jsx(_components.p, {
      children: "The project types:"
    }), "\n", (0,jsx_runtime_.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "spa-react - React single-page-application"
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "ssr-react - React server-side-render application"
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "component-react - React Component Library"
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "toolkit - SDK Library"
        }), "\n"]
      }), "\n"]
    }), "\n", jsx_runtime_.jsx(_components.h3, {
      children: "dev"
    }), "\n", jsx_runtime_.jsx(_components.p, {
      children: "The dev-server based on express, realizing hot-update, api-proxy and other common functions. Provide personalized customization schemes such as middleware customization, port number, log output level and webpack configuration."
    }), "\n", (0,jsx_runtime_.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "middleware - middleware configuration:"
        }), "\n", jsx_runtime_.jsx(_components.pre, {
          children: jsx_runtime_.jsx(_components.code, {
            className: "language-ts",
            children: "{\n  route: string;\n  callback: (req: any, res: any) => Promise<void>;\n}\n"
          })
        }), "\n", jsx_runtime_.jsx(_components.p, {
          children: "or"
        }), "\n", jsx_runtime_.jsx(_components.pre, {
          children: jsx_runtime_.jsx(_components.code, {
            className: "language-ts",
            children: "(params: {\n  ip: string;\n  port: number;\n  host?: string;\n  logLevel: LOGLEVEL;\n  proxyConfig?: (ProxyItem | ProxyFn)[];\n}) => {\n  route: string;\n  callback: (req: any, res: any) => Promise<void>;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "webpack - dev-server webpack configuration"
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "proxy - dev-server proxy configuration"
        }), "\n", jsx_runtime_.jsx(_components.pre, {
          children: jsx_runtime_.jsx(_components.code, {
            className: "language-ts",
            children: "{\n  route: '/api', // Address of the local service for the proxy API\n  config: {\n    target: 'http://www.api.com/api', // The actual address of the proxy API\n    changeOrigin: true // whether change the host\n  }\n}\n"
          })
        }), "\n", jsx_runtime_.jsx(_components.p, {
          children: "or"
        }), "\n", jsx_runtime_.jsx(_components.pre, {
          children: jsx_runtime_.jsx(_components.code, {
            className: "language-ts",
            children: "(params: {\n  ip: string;\n  port: number;\n  host?: string;\n  logLevel: LOGLEVEL;\n  middlewareConfig?: (MiddlewareItem | MiddlewareFn)[];\n}) => {\n  route: string;\n  config: Config;\n}\n"
          })
        }), "\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["For more configuration, see ", jsx_runtime_.jsx(_components.a, {
            href: "https://github.com/chimurai/http-proxy-middleware",
            children: "http-proxy-middleware"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "port - dev-server port"
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "host - dev-server host"
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["https - start dev-server with https protocol which could custom ", jsx_runtime_.jsx(_components.code, {
            children: "key"
          }), " and ", jsx_runtime_.jsx(_components.code, {
            children: "cert"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "serverType - dev-server type"
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "logLevel - The log-level which dev-server will apply, optional 'debug', 'info', 'warn', 'error', 'silent'"
        }), "\n"]
      }), "\n"]
    }), "\n", jsx_runtime_.jsx(_components.h3, {
      children: "build"
    }), "\n", (0,jsx_runtime_.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "autoRelease - auto release project after build success"
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "srcDir - the build source directory"
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "outDir - the directory for compiled project"
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "esmDir - es6 module compiled directory"
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "hash - whether the hash tag add to building result, optional 'contenthash', 'chunkhash' and 'hash'(true equal 'contenthash')"
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "configuration - The callback will be call in the build-process, you can return your custom build configuration"
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "reserve - Configure resources that are not packaged but need to be kept in the build result"
        }), "\n", (0,jsx_runtime_.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime_.jsxs)(_components.li, {
            children: ["\n", jsx_runtime_.jsx(_components.p, {
              children: "style - whether or not reserve the stylesheet files"
            }), "\n"]
          }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
            children: ["\n", jsx_runtime_.jsx(_components.p, {
              children: "assets - reserve other asset paths"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "preflight - the flight check before build"
        }), "\n", (0,jsx_runtime_.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime_.jsxs)(_components.li, {
            children: ["\n", jsx_runtime_.jsx(_components.p, {
              children: "typescript - whether or not process the ts or tsx files"
            }), "\n"]
          }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
            children: ["\n", jsx_runtime_.jsx(_components.p, {
              children: "test - whether or not process unit-test"
            }), "\n"]
          }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
            children: ["\n", jsx_runtime_.jsx(_components.p, {
              children: "eslint - whether or not process eslint check"
            }), "\n"]
          }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
            children: ["\n", jsx_runtime_.jsx(_components.p, {
              children: "prettier - whether or not process prettier check"
            }), "\n"]
          }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
            children: ["\n", jsx_runtime_.jsx(_components.p, {
              children: "stylelint - whether or not process stylelint check"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", jsx_runtime_.jsx(_components.h3, {
      children: "release"
    }), "\n", (0,jsx_runtime_.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "autoBuild - auto build project before release process"
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "autoTag - npm publish will auto set tag according to the current version"
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "git - project git repo url"
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "npm - npm depository url"
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "preflight - the flight check before release"
        }), "\n", (0,jsx_runtime_.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime_.jsxs)(_components.li, {
            children: ["\n", jsx_runtime_.jsx(_components.p, {
              children: "test - whether or not process unit-test"
            }), "\n"]
          }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
            children: ["\n", jsx_runtime_.jsx(_components.p, {
              children: "eslint - whether or not process eslint check"
            }), "\n"]
          }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
            children: ["\n", jsx_runtime_.jsx(_components.p, {
              children: "prettier - whether or not process prettier check"
            }), "\n"]
          }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
            children: ["\n", jsx_runtime_.jsx(_components.p, {
              children: "stylelint - whether or not process stylelint check"
            }), "\n"]
          }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
            children: ["\n", jsx_runtime_.jsx(_components.p, {
              children: "commitlint - whether or not process commitlint check"
            }), "\n"]
          }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
            children: ["\n", jsx_runtime_.jsx(_components.p, {
              children: "branch - only can release in this branch, set empty string to ignore this check"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", jsx_runtime_.jsx(_components.h3, {
      children: "template"
    }), "\n", (0,jsx_runtime_.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "root - the root directory for generate template"
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "typescript - whether or not apply typescript"
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "test - whether or not generate unit-test file"
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "stylesheet - stylesheet type"
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "readme - [true, 'mdx'] ([whether or not README.md, generate mdx or md file])"
        }), "\n"]
      }), "\n"]
    }), "\n", jsx_runtime_.jsx(_components.h3, {
      children: "plugins"
    }), "\n", jsx_runtime_.jsx(_components.p, {
      children: "plugin must meet following types:"
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-ts",
        children: "type OmniPlugin = {\n  name: string;\n  stage: PluginStage;\n  handler: PluginHandler;\n};\n\ntype PluginStage = 'new' | 'build' | 'release';\ninterface PluginHandler {\n  (config: Omit<OmniConfig, 'plugins'>): Promise<any>;\n}\n"
      })
    })]
  });
}

function docs_en_MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = docs_en_objectSpread(docs_en_objectSpread({}, (0,lib/* useMDXComponents */.a)()), props.components);

  return MDXLayout ? jsx_runtime_.jsx(MDXLayout, docs_en_objectSpread(docs_en_objectSpread({}, props), {}, {
    children: jsx_runtime_.jsx(docs_en_createMdxContent, docs_en_objectSpread({}, props))
  })) : docs_en_createMdxContent(props);
}
// EXTERNAL MODULE: ./src/components/Docs/style/Docs.module.less
var Docs_module = __webpack_require__(732);
var Docs_module_default = /*#__PURE__*/__webpack_require__.n(Docs_module);
;// CONCATENATED MODULE: ./src/components/Docs/Docs.tsx




/* import types */


const Docs = props => {
  const {
    lang
  } = props;
  const Source = lang === 'cn' ? MDXContent : docs_en_MDXContent;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (Docs_module_default()).docs,
    children: /*#__PURE__*/jsx_runtime_.jsx(Source, {})
  });
};
/* harmony default export */ const Docs_Docs = (/*#__PURE__*/(0,external_react_.memo)(Docs));
;// CONCATENATED MODULE: ./src/components/Docs/index.ts


/* harmony default export */ const components_Docs = (Docs_Docs);
// EXTERNAL MODULE: ./src/utils/mapCtxToProps.ts + 1 modules
var mapCtxToProps = __webpack_require__(280);
;// CONCATENATED MODULE: ./pages/docs.tsx
function docs_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function docs_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { docs_ownKeys(Object(source), true).forEach(function (key) { docs_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { docs_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function docs_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function DocsPage(props) {
  const {
    lang,
    locale: {
      docs: {
        pageTitle
      }
    }
  } = (0,external_react_.useContext)(UseLocale/* UseLocale */.Rx);
  return /*#__PURE__*/jsx_runtime_.jsx(Layout/* default */.Z, {
    title: pageTitle,
    page: props.page,
    children: /*#__PURE__*/jsx_runtime_.jsx(components_Docs, docs_objectSpread({
      lang: lang
    }, props))
  });
}

DocsPage.getInitialProps = async ctx => {
  return (0,mapCtxToProps/* default */.Z)(ctx);
};

/* harmony default export */ const docs = (DocsPage);

/***/ }),

/***/ 732:
/***/ ((module) => {

// Exports
module.exports = {
	"docs": "Docs_docs__e2cVc"
};


/***/ }),

/***/ 725:
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next-url-prettifier");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [627,764,205], () => (__webpack_exec__(857)));
module.exports = __webpack_exports__;

})();