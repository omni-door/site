"use strict";
exports.id = 764;
exports.ids = [764];
exports.modules = {

/***/ 764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Rx": () => (/* binding */ UseLocale),
  "ZP": () => (/* binding */ context_UseLocale)
});

// UNUSED EXPORTS: UseLocaleProvider

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./src/locales/cn.ts
const locale = {
  global: {
    logo: '任意门',
    start: '开始',
    docs: '文档',
    lang: 'English'
  },
  home: {
    pageTitle: '任意门',
    title: '任意门',
    subtitle: '你的项目想去哪里？不妨让任意门帮你！',
    description: `为前端项目的创建、开发、构建、发布提供一条龙服务。
    支持基于 React和Vue 的单页应用(SPA)、服务端渲染应用(SSR)、组件库、类lodash工具集等多种前端常见项目。
    `,
    btn_start: '开始使用',
    btn_docs: '文档',
    license: 'MIT',
    why: [{
      title: '各种轮子随你挑',
      subtitle: '一行命令即可构建一个完整的前端项目工程',
      intro: `集成typescript；
          可无缝对接 ESlint、Prettier、Stylelint、Commitlint 等各种 lint 工具，
          更可以接入单元测试
          `,
      route: {
        page: 'start',
        params: {
          lang: 'cn'
        }
      }
    }, {
      title: 'React单页应用',
      subtitle: '基于 React 和 React-Router 的 SPA 项目',
      intro: `SPA(Single-Application-App) 单页应用是现在的前端开发者使用频率最高的一种项目模式，
          无论是适配于移动端的H5，还是服务于中后台的PC项目，都很好的满足了开发周期短、成本低、
          项目结构简单、前后端分离等需求…
          `,
      route: {
        page: 'docs',
        params: {
          lang: 'cn',
          article: 'spa-react'
        }
      }
    }, {
      title: 'Vue单页应用',
      subtitle: '基于 Vue3 和 Vue-Router 的 SPA 项目',
      intro: `SPA(Single-Application-App) 单页应用是现在的前端开发者使用频率最高的一种项目模式，
          无论是适配于移动端的H5，还是服务于中后台的PC项目，都很好的满足了开发周期短、成本低、
          项目结构简单、前后端分离等需求…
          `,
      route: {
        page: 'docs',
        params: {
          lang: 'cn',
          article: 'spa-vue'
        }
      }
    }, {
      title: 'React服务端渲染应用',
      subtitle: '基于 React 和 NextJs 的 SSR 项目',
      intro: `基于 React + NextJs 的 SSR(Server-Side-Render) 服务端渲染应用解决了 SEO 和前后端分离的问题，
          同时相比于 SPA 应用，也能有效的降低白屏时间，
          无论是 PC 官网 还是 M 站，都是一个很好的选择…
          `,
      route: {
        page: 'docs',
        params: {
          lang: 'cn',
          article: 'ssr-react'
        }
      }
    }, {
      title: 'React组件库',
      subtitle: '基于 React 的组件库项目',
      intro: `一套属于自己团队或公司内部使用的组件库，几乎是每个公司前端团队的标配；
          借助社区开源的组件库 Demo-UI 框架，如 docz、storybook、styleguidist 等，
          让组件库的开发不再是遥不可及的技术难题…
          `,
      route: {
        page: 'docs',
        params: {
          lang: 'cn',
          article: 'component-react'
        }
      }
    }, {
      title: 'Vue组件库',
      subtitle: '基于 Vue 的组件库项目',
      intro: `一套属于自己团队或公司内部使用的组件库，几乎是每个公司前端团队的标配；
          借助社区开源的组件库 storybook 框架，
          让组件库的开发不再是遥不可及的技术难题…
          `,
      route: {
        page: 'docs',
        params: {
          lang: 'cn',
          article: 'component-vue'
        }
      }
    }, {
      title: '工具库',
      subtitle: '类lodash、ramda工具库',
      intro: '纯逻辑组件？耦合了业务需求的功能模块？不想耦合任何 UI 框架 —— 工具库项目很可能是你需要的…',
      route: {
        page: 'docs',
        params: {
          lang: 'cn',
          article: 'toolkit'
        }
      }
    }],
    demo: []
  },
  docs: {
    pageTitle: '任意门 - 文档'
  },
  start: {
    pageTitle: '任意门 - 开始使用'
  }
};
/* harmony default export */ const cn = (locale);
;// CONCATENATED MODULE: ./src/locales/en.ts
const en_locale = {
  global: {
    logo: 'Omni-Door',
    start: 'Start',
    docs: 'Docs',
    lang: '中文'
  },
  home: {
    pageTitle: 'Omni-Door',
    title: 'Omni-Door',
    subtitle: 'What your project do? Leave it to Omni-Door!',
    description: `Provide front-end projects from the initialization, development, construction, release and other one-stop services.
      It supports many front-end projects such as single page application (SPA), server-side rendering application (SSR), component library, lodash like toolset, etc.`,
    btn_start: 'Getting Started',
    btn_docs: 'Documentation',
    license: 'MIT',
    why: [{
      title: 'Many kinds of wheels are up to you',
      subtitle: 'A complete front-end project project can be built in one line of command',
      intro: `Integrating typescript;
          Seamless docking of eslint, prettier, stylelint, commitlint,
          It can also access unit-test
          `,
      route: {
        page: 'start',
        params: {
          lang: 'en'
        }
      }
    }, {
      title: 'React-SPA',
      subtitle: 'The SPA project based on react and react-router',
      intro: `SPA(Single-Application-App)  is the most frequently used project mode by front-end developers,
          Whether it is the H5 suitable for mobile terminal or the PC project serving for the middle and back office, it can meet the requirements of short development cycle, low cost, and low cost
          Project structure is simple, front and back end separation and other requirements…
          `,
      route: {
        page: 'docs',
        params: {
          lang: 'en',
          article: 'spa-react'
        }
      }
    }, {
      title: 'Vue-SPA',
      subtitle: 'The SPA project based on vue and vue-router',
      intro: `SPA(Single-Application-App)  is the most frequently used project mode by front-end developers,
          Whether it is the H5 suitable for mobile terminal or the PC project serving for the middle and back office, it can meet the requirements of short development cycle, low cost, and low cost
          Project structure is simple, front and back end separation and other requirements…
          `,
      route: {
        page: 'docs',
        params: {
          lang: 'en',
          article: 'spa-vue'
        }
      }
    }, {
      title: 'React-SSR',
      subtitle: 'The SSR project based on react and nextjs',
      intro: `SSR (server side render) server-side rendering application based on react + nextjs solves the problem of separation of SEO and front-end,
          At the same time, compared with spa application, it can also effectively reduce the white screen time,
          Whether it is PC official website or m station, it is a good choice…
          `,
      route: {
        page: 'docs',
        params: {
          lang: 'en',
          article: 'ssr-react'
        }
      }
    }, {
      title: 'React-Component',
      subtitle: 'Component library project based on React',
      intro: `A set of component libraries for their own team or internal use is almost the standard configuration for front-end teams of each company;
          With the help of community open source component library demo UI framework, such as docz, storybook, styleguidist, etc,
          The development of component library is no longer a distant technical problem…
          `,
      route: {
        page: 'docs',
        params: {
          lang: 'en',
          article: 'component-react'
        }
      }
    }, {
      title: 'Vue-Component',
      subtitle: 'Component library project based on Vue',
      intro: `A set of component libraries for their own team or internal use is almost the standard configuration for front-end teams of each company;
          With the help of storybook which is community open source component library framework,
          The development of component library is no longer a distant technical problem…
          `,
      route: {
        page: 'docs',
        params: {
          lang: 'en',
          article: 'component-vue'
        }
      }
    }, {
      title: 'toolkit',
      subtitle: 'The tool library same as lodash or ramda',
      intro: `Pure logic component? Function modules coupled with business requirements?
          You don't want to couple any UI Frameworks - the tool library project is probably what you need…`,
      route: {
        page: 'docs',
        params: {
          lang: 'en',
          article: 'toolkit'
        }
      }
    }],
    demo: []
  },
  docs: {
    pageTitle: 'Omni-Door - Docs'
  },
  start: {
    pageTitle: 'Omni-Door - Start'
  }
};
/* harmony default export */ const en = (en_locale);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/context/UseLocale.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const locales = {
  cn: cn,
  en: en
};
const initLang = 'cn';
const ctxInitState = {
  lang: initLang,
  locale: locales[initLang],
  setLang: lang => console.warn('初始化未完成')
};
const UseLocale = /*#__PURE__*/(0,external_react_.createContext)(ctxInitState);
const UseLocaleProvider = props => {
  const setLang = (0,external_react_.useCallback)(function (lang) {
    let locale = locales[lang];

    if (!locale) {
      locale = ctxInitState.locale;
      lang = ctxInitState.lang;
    }

    setState(states => _objectSpread(_objectSpread({}, states), {}, {
      locale,
      lang
    }));
  }, []);
  const initState = {
    lang: (props === null || props === void 0 ? void 0 : props.lang) ?? ctxInitState.lang,
    locale: locales[props === null || props === void 0 ? void 0 : props.lang] ?? ctxInitState.locale,
    setLang
  };
  const {
    0: state,
    1: setState
  } = (0,external_react_.useState)(initState);
  return /*#__PURE__*/jsx_runtime_.jsx(UseLocale.Provider, {
    value: state,
    children: props.children
  });
};
/* harmony default export */ const context_UseLocale = (UseLocaleProvider);

/***/ })

};
;