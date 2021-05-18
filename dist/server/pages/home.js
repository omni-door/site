module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+YsH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: mapCtxToProps

// CONCATENATED MODULE: ./src/utils/paramsToQueryString.ts
const isObject = param => param === Object(param);

const paramsToStringList = entries => entries.reduce((result, [key, value]) => result.concat(Array.isArray(value) ? paramsToStringList(value.map(arrayValue => [`${key}[]`, arrayValue])) : [typeof value === 'string' || typeof value === 'number' ? `${key}=${value}` : '']), []);

function paramsToQueryString(params) {
  const paramsString = isObject(params) ? paramsToStringList(Object.keys(params).sort().map(key => [String(key), params[key]])).filter(chunk => chunk.length > 0).join('&') : '';
  return paramsString.length > 0 ? `?${paramsString}` : '';
}
// CONCATENATED MODULE: ./src/utils/mapCtxToProps.ts

function mapCtxToProps(ctx) {
  const {
    pathname,
    query,
    asPath
  } = ctx;
  return {
    page: pathname.replace(/\//g, '') || 'home',
    query: query,
    path: asPath || `${pathname}${paramsToQueryString(query)}`
  };
}
/* harmony default export */ var utils_mapCtxToProps = __webpack_exports__["a"] = (mapCtxToProps);

/***/ }),

/***/ "0rFR":
/***/ (function(module, exports) {

module.exports = require("next-url-prettifier");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("KI7k");


/***/ }),

/***/ "5rRV":
/***/ (function(module, exports) {

module.exports = require("antd/lib/card");

/***/ }),

/***/ "I008":
/***/ (function(module, exports) {

module.exports = {
	"layout": "layout___3A7bD",
	"layout-header": "layout-header___Q3gM3",
	"layout-header-nav": "layout-header-nav___2mLmA",
	"layout-header-logo": "layout-header-logo___3mId9",
	"layout-header-menu": "layout-header-menu___1vMUS",
	"layout-header-menu-item": "layout-header-menu-item___zi16w",
	"layout-header-right": "layout-header-right___1E1pF",
	"layout-header-lang": "layout-header-lang___z0mmG",
	"layout-header-github": "layout-header-github___2TvOP",
	"layout-footer": "layout-footer___cAFTp"
};

/***/ }),

/***/ "KI7k":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/context/UseLocale.tsx + 2 modules
var UseLocale = __webpack_require__("y63i");

// EXTERNAL MODULE: ./src/components/Layout/index.ts + 1 modules
var Layout = __webpack_require__("Ng2+");

// EXTERNAL MODULE: ./src/utils/mapCtxToProps.ts + 1 modules
var mapCtxToProps = __webpack_require__("+YsH");

// EXTERNAL MODULE: ./node_modules/antd/lib/card/style/index.js
var style = __webpack_require__("mN36");

// EXTERNAL MODULE: external "antd/lib/card"
var card_ = __webpack_require__("5rRV");
var card_default = /*#__PURE__*/__webpack_require__.n(card_);

// EXTERNAL MODULE: ./node_modules/antd/lib/button/style/index.js
var button_style = __webpack_require__("MaXC");

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__("eGmO");
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: ./src/components/Link/index.ts + 1 modules
var Link = __webpack_require__("ROha");

// EXTERNAL MODULE: ./src/components/Home/style/Home.module.less
var Home_module = __webpack_require__("h47O");
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);

// CONCATENATED MODULE: ./src/components/Home/Home.tsx




var __jsx = external_react_default.a.createElement;




/* import types */

const Home = props => {
  const {
    lang,
    locale: {
      home
    }
  } = Object(external_react_["useContext"])(UseLocale["a" /* UseLocale */]);
  return __jsx("div", {
    className: Home_module_default.a.home
  }, __jsx("main", {
    className: Home_module_default.a.main
  }, __jsx("h1", {
    className: Home_module_default.a.title
  }, home.title), __jsx("h2", {
    className: Home_module_default.a.subtitle
  }, home.subtitle), __jsx("p", {
    className: Home_module_default.a.description
  }, home.description), __jsx("div", {
    className: Home_module_default.a.btn
  }, __jsx(button_default.a, {
    type: "primary",
    className: Home_module_default.a['btn-start']
  }, __jsx(Link["a" /* default */], {
    page: "start",
    params: {
      lang
    }
  }, __jsx("a", {
    className: Home_module_default.a['btn-start-link']
  }, " ", home.btn_start, " "))), __jsx(button_default.a, {
    className: Home_module_default.a['btn-docs']
  }, __jsx(Link["a" /* default */], {
    page: "docs",
    params: {
      lang
    }
  }, __jsx("a", {
    className: Home_module_default.a['btn-docs-link']
  }, " ", home.btn_docs, " ")))), __jsx("div", {
    className: Home_module_default.a.grid
  }, home.why.map(v => {
    const {
      route
    } = v;
    return __jsx(card_default.a, {
      key: v.title,
      size: "small",
      className: Home_module_default.a.card,
      hoverable: true,
      title: v.title,
      headStyle: {
        fontSize: '1.5rem',
        minHeight: '1vh'
      },
      bodyStyle: {
        paddingTop: '1rem'
      }
    }, __jsx(Link["a" /* default */], {
      page: route.page,
      params: route.params
    }, __jsx("a", {
      className: Home_module_default.a['card-link']
    }, __jsx("h3", {
      className: Home_module_default.a['card-subtitle']
    }, v.subtitle, " \u2192"), __jsx("p", {
      className: Home_module_default.a['card-content']
    }, v.intro))));
  }))));
};
/* harmony default export */ var Home_Home = (/*#__PURE__*/Object(external_react_["memo"])(Home));
// CONCATENATED MODULE: ./src/components/Home/index.ts


/* harmony default export */ var components_Home = (Home_Home);
// CONCATENATED MODULE: ./pages/home.tsx

var home_jsx = external_react_default.a.createElement;






function HomePage(props) {
  const {
    locale: {
      home: {
        pageTitle
      }
    }
  } = Object(external_react_["useContext"])(UseLocale["a" /* UseLocale */]);
  return home_jsx(Layout["a" /* default */], {
    title: pageTitle,
    page: props.page
  }, home_jsx(components_Home, props));
}

HomePage.getInitialProps = async ctx => {
  return Object(mapCtxToProps["a" /* default */])(ctx);
};

/* harmony default export */ var pages_home = __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "MaXC":
/***/ (function(module, exports) {



/***/ }),

/***/ "Ng2+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: Layout

// EXTERNAL MODULE: ./node_modules/antd/lib/button/style/index.js
var style = __webpack_require__("MaXC");

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__("eGmO");
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: ./node_modules/antd/lib/menu/style/index.js
var menu_style = __webpack_require__("PFYH");

// EXTERNAL MODULE: external "antd/lib/menu"
var menu_ = __webpack_require__("a5Fm");
var menu_default = /*#__PURE__*/__webpack_require__.n(menu_);

// EXTERNAL MODULE: ./node_modules/antd/lib/layout/style/index.js
var layout_style = __webpack_require__("ppZR");

// EXTERNAL MODULE: external "antd/lib/layout"
var layout_ = __webpack_require__("VzA1");
var layout_default = /*#__PURE__*/__webpack_require__.n(layout_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/context/UseLocale.tsx + 2 modules
var UseLocale = __webpack_require__("y63i");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./src/components/Link/index.ts + 1 modules
var Link = __webpack_require__("ROha");

// EXTERNAL MODULE: ./src/components/Layout/style/Layout.module.less
var Layout_module = __webpack_require__("I008");
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);

// CONCATENATED MODULE: ./src/components/Layout/Layout.tsx






var __jsx = external_react_default.a.createElement;





/* import types */

const {
  Header,
  Content,
  Footer
} = layout_default.a;
const BasicLayout = props => {
  const {
    title = 'OMNI-DOOR',
    className = '',
    page = 'home',
    children
  } = props;
  const {
    locale: {
      global
    },
    lang
  } = Object(external_react_["useContext"])(UseLocale["a" /* UseLocale */]);
  return __jsx(layout_default.a, {
    className: [Layout_module_default.a['layout'], className].join(' ')
  }, __jsx(head_default.a, null, __jsx("title", null, " ", title, " "), __jsx("link", {
    rel: "icon",
    type: "image/x-icon",
    href: "/favicon.ico"
  })), __jsx(Header, {
    className: Layout_module_default.a['layout-header']
  }, __jsx("nav", {
    className: Layout_module_default.a['layout-header-nav']
  }, __jsx(Link["a" /* default */], {
    page: "home",
    params: {
      lang
    }
  }, __jsx("div", {
    className: Layout_module_default.a['layout-header-logo']
  }, global.logo)), __jsx(menu_default.a, {
    className: Layout_module_default.a['layout-header-menu'],
    mode: "horizontal",
    defaultSelectedKeys: [page]
  }, __jsx(menu_default.a.Item, {
    key: "start",
    className: Layout_module_default.a['layout-header-menu-item']
  }, __jsx(Link["a" /* default */], {
    page: "start",
    params: {
      lang
    }
  }, __jsx("a", null, global.start))), __jsx(menu_default.a.Item, {
    key: "docs",
    className: Layout_module_default.a['layout-header-menu-item']
  }, __jsx(Link["a" /* default */], {
    page: "docs",
    params: {
      lang
    }
  }, __jsx("a", null, global.docs)))), __jsx("div", {
    className: Layout_module_default.a['layout-header-right']
  }, __jsx(button_default.a, {
    size: "small",
    className: Layout_module_default.a['layout-header-lang']
  }, __jsx(Link["a" /* default */], {
    href: `/${lang === 'cn' ? 'en' : 'cn'}/${page}`
  }, __jsx("a", null, global.lang))), __jsx("a", {
    className: Layout_module_default.a['layout-header-github'],
    target: "_blank",
    href: "https://github.com/omni-door/cli"
  })))), __jsx(Content, {
    className: Layout_module_default.a['layout-content']
  }, children), __jsx(Footer, {
    className: Layout_module_default.a['layout-footer']
  }, "Copyright \xA9 2020 @omni-door"));
};
/* harmony default export */ var Layout = (/*#__PURE__*/Object(external_react_["memo"])(BasicLayout));
// CONCATENATED MODULE: ./src/components/Layout/index.ts


/* harmony default export */ var components_Layout = __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "PFYH":
/***/ (function(module, exports) {



/***/ }),

/***/ "ROha":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: Link

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next-url-prettifier"
var external_next_url_prettifier_ = __webpack_require__("0rFR");

// EXTERNAL MODULE: ./src/routes.js
var routes = __webpack_require__("VmXB");

// CONCATENATED MODULE: ./src/components/Link/Link.tsx
var __jsx = external_react_default.a.createElement;



/* import types */

const Link = props => {
  const {
    href,
    page,
    params = null,
    children
  } = props;
  return __jsx(external_next_url_prettifier_["Link"], {
    href: href,
    route: page ? routes["nextRouter"].linkPage(page, params) : null
  }, children);
};
/* harmony default export */ var Link_Link = (/*#__PURE__*/Object(external_react_["memo"])(Link));
// CONCATENATED MODULE: ./src/components/Link/index.ts


/* harmony default export */ var components_Link = __webpack_exports__["a"] = (Link_Link);

/***/ }),

/***/ "VmXB":
/***/ (function(module, exports, __webpack_require__) {

// The route base on next-url-prettifier
// https://github.com/BDav24/next-url-prettifier
// Client Usage: https://github.com/BDav24/next-url-prettifier#in-your-components
const UrlPrettifier = __webpack_require__("0rFR").default;

class NextUrlRouter extends UrlPrettifier {
  constructor(routes, options = {}) {
    super(routes, options);
    this.root = options.root || '';
    this.linkPage = this.linkPage.bind(this);
    this.forEachPattern = this.forEachPattern.bind(this);
  }

  linkPage(pageName, params) {
    const route = this.routes.find(currentRoute => currentRoute.page === pageName);
    const obj = {
      as: '',
      href: `/${pageName}${this.paramsToQueryString(params)}`
    };

    if (route && route.prettyUrl) {
      obj.as = this.root + (typeof route.prettyUrl === 'string' ? route.prettyUrl : route.prettyUrl(params));
    }

    return obj;
  }

  forEachPattern(apply) {
    this.routes.forEach(route => {
      this.getPrettyUrlPatterns(route).forEach(prettyPattern => apply({
        page: route.page,
        beforeRender: route.beforeRender,
        pattern: this.root + prettyPattern.pattern,
        defaultParams: prettyPattern.defaultParams
      }));
    });
  }

}

const routes = [{
  page: 'home',
  prettyUrl: ({
    lang
  }) => `/${lang}/home`,
  prettyUrlPatterns: [{
    pattern: '/'
  }, {
    pattern: '/home'
  }, {
    pattern: '/:lang/home'
  }]
}, {
  page: 'start',
  prettyUrl: ({
    lang,
    step = ''
  }) => `/${lang}/start/${step}`,
  prettyUrlPatterns: [{
    pattern: '/start'
  }, {
    pattern: '/start/:step'
  }, {
    pattern: '/:lang/start'
  }, {
    pattern: '/:lang/start/:step'
  }]
}, {
  page: 'docs',
  prettyUrl: ({
    lang,
    article = ''
  }) => `/${lang}/docs/${article}`,
  prettyUrlPatterns: [{
    pattern: '/docs'
  }, {
    pattern: '/docs/:article'
  }, {
    pattern: '/:lang/docs'
  }, {
    pattern: '/:lang/docs/:article'
  }]
}];
const nextRouter = new NextUrlRouter(routes);
module.exports = {
  nextRouter,
  routes
};

/***/ }),

/***/ "VzA1":
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),

/***/ "a5Fm":
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "eGmO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "h47O":
/***/ (function(module, exports) {

module.exports = {
	"home": "home___2xIEH",
	"main": "main___2grOv",
	"title": "title___2yzyH",
	"subtitle": "subtitle___3FQZf",
	"description": "description___156nj",
	"btn": "btn___24r51",
	"btn-start": "btn-start___27R7y",
	"btn-docs": "btn-docs___kcXk_",
	"btn-start-link": "btn-start-link___2iKbK",
	"btn-docs-link": "btn-docs-link___3IOWr",
	"grid": "grid___1ZFU8",
	"card": "card___3hEUX",
	"card-subtitle": "card-subtitle___2XfpZ",
	"card-content": "card-content___3G1TI",
	"logo": "logo___15sSc"
};

/***/ }),

/***/ "mN36":
/***/ (function(module, exports) {



/***/ }),

/***/ "ppZR":
/***/ (function(module, exports) {



/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "y63i":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ UseLocale; });

// UNUSED EXPORTS: UseLocaleProvider

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./src/locales/cn.ts
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
/* harmony default export */ var cn = (locale);
// CONCATENATED MODULE: ./src/locales/en.ts
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
/* harmony default export */ var en = (en_locale);
// CONCATENATED MODULE: ./src/context/UseLocale.tsx

var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

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
const UseLocale = /*#__PURE__*/Object(external_react_["createContext"])(ctxInitState);
const UseLocaleProvider = props => {
  var _props$lang, _locales;

  const setLang = Object(external_react_["useCallback"])(function (lang) {
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
    lang: (_props$lang = props === null || props === void 0 ? void 0 : props.lang) !== null && _props$lang !== void 0 ? _props$lang : ctxInitState.lang,
    locale: (_locales = locales[props === null || props === void 0 ? void 0 : props.lang]) !== null && _locales !== void 0 ? _locales : ctxInitState.locale,
    setLang
  };
  const {
    0: state,
    1: setState
  } = Object(external_react_["useState"])(initState);
  return __jsx(UseLocale.Provider, {
    value: state
  }, props.children);
};
/* harmony default export */ var context_UseLocale = __webpack_exports__["b"] = (UseLocaleProvider);

/***/ })

/******/ });