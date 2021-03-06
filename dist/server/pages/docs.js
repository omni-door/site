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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("jxtp");


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

/***/ "c2Xn":
/***/ (function(module, exports) {

module.exports = require("@mdx-js/react");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "eGmO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "fZ0C":
/***/ (function(module, exports) {

module.exports = {
	"docs": "docs___3NQIG"
};

/***/ }),

/***/ "jxtp":
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

// EXTERNAL MODULE: external "@mdx-js/react"
var react_ = __webpack_require__("c2Xn");

// CONCATENATED MODULE: ./src/components/Docs/docs-cn.md
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */

const layoutProps = {};
const MDXLayout = "wrapper";
function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(react_["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(react_["mdx"])("h1", null, `文档`), Object(react_["mdx"])("h2", null, `支持的项目类型简介`), Object(react_["mdx"])("h3", null, `React SPA 应用`), Object(react_["mdx"])("ul", {
    "className": "contains-task-list"
  }, Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `基于 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://reactjs.org/"
  }, `React`), ` UI 框架`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `基于 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://reacttraining.com/react-router/web/example/basic"
  }, `React-Router`), ` 实现前端路由`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `使用 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://www.typescriptlang.org/"
  }, `typescript`), ` 进行开发`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `使用 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://webpack.js.org/"
  }, `webpack`), ` 打包`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `遵守 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://eslint.org/"
  }, `eslint`), ` 规范`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `遵守 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://stylelint.io/"
  }, `stylelint`), ` 规范`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `采用 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://prettier.io/docs/en/install.html"
  }, `prettier`), ` 美化代码格式`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `无缝支持 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://github.com/css-modules/css-modules"
  }, `CSS Modules`), ` 和 全局CSS，无需额外配置`), Object(react_["mdx"])("p", {
    parentName: "li"
  }, `……`))), Object(react_["mdx"])("h3", null, `Vue SPA 应用`), Object(react_["mdx"])("ul", {
    "className": "contains-task-list"
  }, Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `基于 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://vuejs.org/"
  }, `Vue`), ` UI 框架`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `基于 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://router.vuejs.org/"
  }, `Vue-Router`), ` 实现前端路由`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `使用 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://www.typescriptlang.org/"
  }, `typescript`), ` 进行开发`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `使用 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://webpack.js.org/"
  }, `webpack`), ` 打包`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `遵守 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://eslint.org/"
  }, `eslint`), ` 规范`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `遵守 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://stylelint.io/"
  }, `stylelint`), ` 规范`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `采用 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://prettier.io/docs/en/install.html"
  }, `prettier`), ` 美化代码格式`), Object(react_["mdx"])("p", {
    parentName: "li"
  }, `……`))), Object(react_["mdx"])("h3", null, `React SSR 应用`), Object(react_["mdx"])("ul", {
    "className": "contains-task-list"
  }, Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `基于 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://reactjs.org/"
  }, `React`), ` 框架`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `基于 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://nextjs.org/"
  }, `nextjs`), ` 企业级高性能 Node 框架`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `使用 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://www.typescriptlang.org/"
  }, `typescript`), ` 进行开发`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `支持 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://koajs.com/"
  }, `koa`), ` 自定义 node 服务`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `搜索引擎友好 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://zh.wikipedia.org/wiki/%E6%90%9C%E5%B0%8B%E5%BC%95%E6%93%8E%E6%9C%80%E4%BD%B3%E5%8C%96"
  }, `SEO`)), Object(react_["mdx"])("p", {
    parentName: "li"
  }, `……`))), Object(react_["mdx"])("h3", null, `React Component 组件(库)项目`), Object(react_["mdx"])("ul", {
    "className": "contains-task-list"
  }, Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `支持 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://storybook.js.org/"
  }, `storybook`), `、`, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://docz.site/"
  }, `docz`), `、`, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://react-styleguidist.js.org/"
  }, `styleguidist`), ` 多种组件库Demo和文档框架`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `基于 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://reactjs.org/"
  }, `React`), ` 的组件库`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `使用 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://jestjs.io/"
  }, `Jest`), ` 进行组件的单页测试`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `使用 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://gulpjs.com/"
  }, `gulp`), ` 打包`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `使用 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://www.typescriptlang.org/"
  }, `typescript`), ` 进行开发`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `遵守 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://eslint.org/"
  }, `eslint`), ` 规范`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `遵守 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://stylelint.io/"
  }, `stylelint`), ` 规范`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `采用 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://prettier.io/docs/en/install.html"
  }, `prettier`), ` 美化代码格式`), Object(react_["mdx"])("p", {
    parentName: "li"
  }, `……`))), Object(react_["mdx"])("h3", null, `Vue Component 组件(库)项目`), Object(react_["mdx"])("ul", {
    "className": "contains-task-list"
  }, Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `基于 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://vuejs.org/"
  }, `Vue`), ` 的组件库`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `使用 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://jestjs.io/"
  }, `Jest`), ` 进行组件的单页测试`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `使用 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://gulpjs.com/"
  }, `gulp`), ` 打包`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `使用 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://www.typescriptlang.org/"
  }, `typescript`), ` 进行开发`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `遵守 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://eslint.org/"
  }, `eslint`), ` 规范`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `遵守 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://stylelint.io/"
  }, `stylelint`), ` 规范`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `采用 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://prettier.io/docs/en/install.html"
  }, `prettier`), ` 美化代码格式`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `基于 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://storybook.js.org/"
  }, `storybook`), ` 组件库Demo和文档框架`), Object(react_["mdx"])("p", {
    parentName: "li"
  }, `……`))), Object(react_["mdx"])("h3", null, `Toolkit 工具库项目`), Object(react_["mdx"])("ul", {
    "className": "contains-task-list"
  }, Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `基于 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://d.umijs.org/"
  }, `dumi`), ` 开发和Demo框架`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `使用 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://mochajs.org/"
  }, `mocha`), ` 进行Node端的单页测试`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `使用 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://karma-runner.github.io/latest/index.html"
  }, `karma`), ` 进行浏览器端的单页测试`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `使用 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://rollupjs.org/guide/en/"
  }, `rollup`), ` 构建项目`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `使用 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://www.typescriptlang.org/"
  }, `typescript`), ` 进行开发`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `遵守 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://eslint.org/"
  }, `eslint`), ` 规范`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `采用 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://prettier.io/docs/en/install.html"
  }, `prettier`), ` 美化代码格式`), Object(react_["mdx"])("p", {
    parentName: "li"
  }, `……`))), Object(react_["mdx"])("h2", null, `脚手架命令清单`), Object(react_["mdx"])("p", null, `你可以在命令行中简单输入 `, Object(react_["mdx"])("inlineCode", {
    parentName: "p"
  }, `omni -h`), ` 查看所有的命令：`), Object(react_["mdx"])("pre", null, Object(react_["mdx"])("code", {
    parentName: "pre",
    "className": "language-shell"
  }, `  Commands:

    init [strategy] [options]  初始化你的项目，[strategy(策略)] 可用是stable(默认) 或 lastst
    dev [options]              omni dev -p [port]
    new <module> [options]     omni new [module] [-f | -c]
    build                      根据 [omni.config.js] 打包构建你的项目
    release [options]          根据 [omni.config.js] 发布你的项目
`)), Object(react_["mdx"])("h3", null, `omni init`), Object(react_["mdx"])("h4", null, `初始化一个项目`), Object(react_["mdx"])("pre", null, Object(react_["mdx"])("code", {
    parentName: "pre",
    "className": "language-shell"
  }, `omni init
`)), Object(react_["mdx"])("h4", null, `用最新的依赖@lastest初始化项目`), Object(react_["mdx"])("pre", null, Object(react_["mdx"])("code", {
    parentName: "pre",
    "className": "language-shell"
  }, `omni init lastest
`)), Object(react_["mdx"])("h4", null, `初始化项目但不安装依赖`), Object(react_["mdx"])("pre", null, Object(react_["mdx"])("code", {
    parentName: "pre",
    "className": "language-shell"
  }, `omni init -n
`)), Object(react_["mdx"])("h4", null, `套用模板一键初始化项目`), Object(react_["mdx"])("pre", null, Object(react_["mdx"])("code", {
    parentName: "pre",
    "className": "language-shell"
  }, `omni init -t [projectName]
`)), Object(react_["mdx"])("p", null, `or`), Object(react_["mdx"])("pre", null, Object(react_["mdx"])("code", {
    parentName: "pre",
    "className": "language-shell"
  }, `omni init --entire [projectName]
`)), Object(react_["mdx"])("h4", null, `选项`), Object(react_["mdx"])("pre", null, Object(react_["mdx"])("code", {
    parentName: "pre",
    "className": "language-shell"
  }, `使用: omni init [strategy] [options]

Arguments:

  strategy                 stable or latest

  Options:
    -rb, --react_basic [name]       创建一个最基本的 React 单页应用
    -rs, --react_standard [name]    创建一个标准的 React 单页应用
    -re, --react_entire [name]      创建一个全量的 React 单页应用
    -vb, --vue_basic [name]         创建一个最基本的 Vue 单页应用
    -vs, --vue_standard [name]      创建一个标准的 Vue 单页应用
    -ve, --vue_entire [name]        创建一个全量的 Vue 单页应用
    -rS, --react_ssr [name]         创建一个 React SSR 应用
    -rc, --react_components [name]  创建一个 React 组件库
    -vc, --vue_components [name]    创建一个 Vue 组件库
    -t, --toolkit [name]            创建一个工具库
    -n, --no-install                初始化项目不安装任何依赖
    -P, --path <path>               创建项目的工作路径
    -h, --help               output usage information
`)), Object(react_["mdx"])("h3", null, `omni dev`), Object(react_["mdx"])("h4", null, `各种用法`), Object(react_["mdx"])("pre", null, Object(react_["mdx"])("code", {
    parentName: "pre",
    "className": "language-sh"
  }, `  omni dev

  omni dev -p 8200 // 启动一个端口号为 8200 的开发服务

  omni dev -h dev.domain.com // 启动一个host为 dev.domain.com 的开发服务


  omni dev -p 8200 -h dev.domain.com // 启动一个端口号为 8200 且 host为 dev.domain.com 的 开发服务

`)), Object(react_["mdx"])("h4", null, `选项`), Object(react_["mdx"])("pre", null, Object(react_["mdx"])("code", {
    parentName: "pre",
    "className": "language-shell"
  }, `使用: omni dev [options]

omni dev [-p <port>] [-H <host>] [-P <path>]

Options:
  -p, --port <port>      根据指定的端口号启动开发服务
  -H, --hostname <host>  根据指定的hostname启动开发服务
  -P, --path <path>      启动开发服务的工作路径
  -h, --help             output usage information
`)), Object(react_["mdx"])("h3", null, `omni start`), Object(react_["mdx"])("p", null, `用法和 `, Object(react_["mdx"])("inlineCode", {
    parentName: "p"
  }, `omni dev`), ` 略同`), Object(react_["mdx"])("h4", null, `选项`), Object(react_["mdx"])("pre", null, Object(react_["mdx"])("code", {
    parentName: "pre",
    "className": "language-shell"
  }, `使用: omni start [options]

omni start [-p <port>] [-H <host>] [-P <path>]

Options:
  -p, --port <port>      根据指定的端口号启动生产服务
  -H, --hostname <host>  根据指定的hostname启动生产服务
  -P, --path <path>      启动生产服务的工作路径
  -h, --help             output usage information
`)), Object(react_["mdx"])("h3", null, `omni new`), Object(react_["mdx"])("h4", null, `各种用法`), Object(react_["mdx"])("pre", null, Object(react_["mdx"])("code", {
    parentName: "pre",
    "className": "language-sh"
  }, `  omni new

  omni new Button // 新建一个名为 Button 的组件

  omni new -c // 新建一个类组件

  omni new -c Button // 新建一个名为 Button 的类组件
`)), Object(react_["mdx"])("h4", null, `选项`), Object(react_["mdx"])("pre", null, Object(react_["mdx"])("code", {
    parentName: "pre",
    "className": "language-shell"
  }, `使用: omni new [name] [options]

omni new [name] [-f | -c] [-P <path>]

Arguments:

  module           可选！组件名称。

Options:
  -f, --function     创建一个函数组件
  -c, --class        创建一个类组件
  -P, --path <path>  创建组件的工作路径
  -h, --help        output usage information
`)), Object(react_["mdx"])("h3", null, `omni build`), Object(react_["mdx"])("h4", null, `各种用法`), Object(react_["mdx"])("pre", null, Object(react_["mdx"])("code", {
    parentName: "pre",
    "className": "language-sh"
  }, `  omni build

  omni build -n // 构建时避开所有预校验

  omni build -c $pathTo/build.config.js // 根据指定路径构建项目
`)), Object(react_["mdx"])("h4", null, `选项`), Object(react_["mdx"])("pre", null, Object(react_["mdx"])("code", {
    parentName: "pre",
    "className": "language-shell"
  }, `使用: omni build [options]

根据 [omni.config.js] 的 build 字段构建项目

Options:
  -c, --config <path>  指定构建的配置文件路径
  -n, --no-verify      绕过所有预检直接构建
  -P, --path <path>    构建的工作路径
  -h, --help           output usage information
`)), Object(react_["mdx"])("h3", null, `omni release`), Object(react_["mdx"])("h4", null, `各种用法`), Object(react_["mdx"])("pre", null, Object(react_["mdx"])("code", {
    parentName: "pre",
    "className": "language-sh"
  }, `  omni release

  omni release -n // 发布时避开所有预校验

  omni release -a // 发布时自动迭代版本号

  omni release -i // 发布时忽略版本号的迭代

  omni release -m // 发布时手动输入迭代版本号

  omni release -t // 发布时指定 tag 名
`)), Object(react_["mdx"])("h4", null, `选项`), Object(react_["mdx"])("pre", null, Object(react_["mdx"])("code", {
    parentName: "pre",
    "className": "language-shell"
  }, `使用: omni release [options]

根据 [omni.config.js] 的 release 字段发布项目

Options:
  -a, --automatic         发布并自动迭代版本号
  -i, --ignore            发布并忽视版本号的迭代
  -m, --manual <version>  发布并手动指定版本号
  -t, --tag <tag>         发布时指定tag
  -n, --no-verify         绕过所有的预检直接发布
  -P, --path <path>       发布的工作路径
  -h, --help              output usage information
`)), Object(react_["mdx"])("h2", null, `关于 「omni.config.js」 配置文件`), Object(react_["mdx"])("h3", null, `type 项目类型`), Object(react_["mdx"])("p", null, `OMNI 会根据不同的项目类型决定整个初始化、构建、创建模板的过程`), Object(react_["mdx"])("p", null, `目前支持的项目类型有：`), Object(react_["mdx"])("ul", null, Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `spa-react - React单页应用`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `ssr-react - React服务端渲染应用`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `component-react - React组件库`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `toolkit - SDK工具包`))), Object(react_["mdx"])("h3", null, `dev 开发服务`), Object(react_["mdx"])("p", null, `开发服务基于express，搭配 webpack-dev-middleware、webpack-hot-middleware、http-proxy-middleware 等中间件，实现了热更新、接口代理等常用功能，并提供了中间件的自定义、端口号、log日志输出级别、webpack配置等个性化定制方案。`), Object(react_["mdx"])("ul", null, Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `middleware - 中间件配置，参考下面👇的类型：`), Object(react_["mdx"])("pre", {
    parentName: "li"
  }, Object(react_["mdx"])("code", {
    parentName: "pre",
    "className": "language-ts"
  }, `{
  route: string;
  callback: (req: any, res: any) => Promise<void>;
}
`)), Object(react_["mdx"])("p", {
    parentName: "li"
  }, `  or`), Object(react_["mdx"])("pre", {
    parentName: "li"
  }, Object(react_["mdx"])("code", {
    parentName: "pre",
    "className": "language-ts"
  }, `(params: {
  ip: string;
  port: number;
  host?: string;
  logLevel: LOGLEVEL;
  proxyConfig?: (ProxyItem | ProxyFn)[];
}) => {
  route: string;
  callback: (req: any, res: any) => Promise<void>;
}
`))), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `webpack - 开发服务端webpack配置`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `proxy - 开发服务代理配置`), Object(react_["mdx"])("pre", {
    parentName: "li"
  }, Object(react_["mdx"])("code", {
    parentName: "pre",
    "className": "language-ts"
  }, `{
  route: '/api', // 代理API的本地服务的地址
  config: {
    target: 'http://www.api.com/api', // 代理API的实际地址
    changeOrigin: true // 是否改变host
  }
}
`)), Object(react_["mdx"])("p", {
    parentName: "li"
  }, `  or`), Object(react_["mdx"])("pre", {
    parentName: "li"
  }, Object(react_["mdx"])("code", {
    parentName: "pre",
    "className": "language-ts"
  }, `(params: {
  ip: string;
  port: number;
  host?: string;
  logLevel: LOGLEVEL;
  middlewareConfig?: (MiddlewareItem | MiddlewareFn)[];
}) => {
  route: string;
  config: Config;
}
`)), Object(react_["mdx"])("p", {
    parentName: "li"
  }, `  更多配置详见 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://github.com/chimurai/http-proxy-middleware"
  }, `http-proxy-middleware`))), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `port - 开发服务启动的端口号`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `host - 开发服务启动的host`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `https - 开发服务以https协议启动，可自定义 `, Object(react_["mdx"])("inlineCode", {
    parentName: "p"
  }, `key`), ` 和 `, Object(react_["mdx"])("inlineCode", {
    parentName: "p"
  }, `cert`))), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `serverType - 开发服务的类型`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `logLevel - 开发服务日志输出等级，可选 'debug'、'info'、'warn'、'error'、'silent'`))), Object(react_["mdx"])("h3", null, `build 构建配置`), Object(react_["mdx"])("ul", null, Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `autoRelease - 构建完成后是否自动发布`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `srcDir - 构建资源输入路径`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `outDir - 构建结果输出路径`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `esmDir - 构建结果输出路径(符合es6 module规范)`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `hash - 构建的资源是否加上hash，可选 'contenthash'、'chunkhash'、'hash'(传入true则是contenthash)`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `configuration - 构建阶段的自定义配置回调，返回自定义的配置`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `reserve - 配置未经过打包，但需要保留进构建结果的资源`), Object(react_["mdx"])("ul", {
    parentName: "li"
  }, Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `style - 构建结果是否保留样式文件`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `assets - 构建结果保留其他资源的路径`)))), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `preflight - 构建前的飞行检查`), Object(react_["mdx"])("ul", {
    parentName: "li"
  }, Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `typescript - 是否处理ts或tsx文件`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `test - 是否进行单元测试 `)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `eslint - 是否进行eslint检测`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `prettier - 是否进行prettier检测`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `stylelint - 是否进行stylelint检测`))))), Object(react_["mdx"])("h3", null, `release`), Object(react_["mdx"])("ul", null, Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `autoBuild - 发布之前是否自动构建项目`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `autoTag - 发布到npm仓库时会自动根据当前版本号设定tag`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `git - 发布的git仓库地址`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `npm - 发布的npm仓库地址`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `preflight - 发布前的飞行检查`), Object(react_["mdx"])("ul", {
    parentName: "li"
  }, Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `test - 发布前是否进行单元测试`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `eslint - 发布前是否进行eslint检测`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `prettier - 发布前是否进行prettier检测`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `stylelint - 发布前是否进行stylelint检测`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `commitlint - 发布前是否进行commitlint检测`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `branch - 发布前进行分支检测，设置为空字符串则不会检测`))))), Object(react_["mdx"])("h3", null, `template 新建模板配置`), Object(react_["mdx"])("ul", null, Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `root - 生成模板的根路径`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `typescript - 是否创建ts文件`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `test - 是否创建单元测试文件`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `stylesheet - 样式文件类型`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `readme - `, `[true, 'mdx']`, ` (`, `[是否生成ReadMe文件, 创建md 或 mdx文件]`, `)`))), Object(react_["mdx"])("h3", null, `plugins`), Object(react_["mdx"])("p", null, `插件集合，插件需满足下面的类型：`), Object(react_["mdx"])("pre", null, Object(react_["mdx"])("code", {
    parentName: "pre",
    "className": "language-ts"
  }, `type OmniPlugin = {
  name: string;
  stage: PluginStage;
  handler: PluginHandler;
};

type PluginStage = 'new' | 'build' | 'release';
interface PluginHandler {
  (config: Omit<OmniConfig, 'plugins'>): Promise<any>;
}
`)));
}
;
MDXContent.isMDXComponent = true;
// CONCATENATED MODULE: ./src/components/Docs/docs-en.md
var docs_en_jsx = external_react_default.a.createElement;

function docs_en_extends() { docs_en_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return docs_en_extends.apply(this, arguments); }

function docs_en_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = docs_en_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function docs_en_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */

const docs_en_layoutProps = {};
const docs_en_MDXLayout = "wrapper";
function docs_en_MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = docs_en_objectWithoutProperties(_ref, ["components"]);

  return Object(react_["mdx"])(docs_en_MDXLayout, docs_en_extends({}, docs_en_layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(react_["mdx"])("h1", null, `Documentation`), Object(react_["mdx"])("h2", null, `Project Type`), Object(react_["mdx"])("h3", null, `React SPA`), Object(react_["mdx"])("ul", {
    "className": "contains-task-list"
  }, Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `Based on `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://reactjs.org/"
  }, `React`))), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `Based on `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://reacttraining.com/react-router/web/example/basic"
  }, `React-Router`), ` to implement front-end routing`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `Use `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://www.typescriptlang.org/"
  }, `typescript`), ` to develop`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `Use `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://webpack.js.org/"
  }, `webpack`), ` to package`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `Comply `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://eslint.org/"
  }, `eslint`), ` standard`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `Comply `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://stylelint.io/"
  }, `stylelint`), ` standard`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `Apply `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://prettier.io/docs/en/install.html"
  }, `prettier`), ` to format code`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `Seamless support `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://github.com/css-modules/css-modules"
  }, `CSS Modules`), ` and global-css without extra configuration`), Object(react_["mdx"])("p", {
    parentName: "li"
  }, `……`))), Object(react_["mdx"])("h3", null, `Vue SPA`), Object(react_["mdx"])("ul", {
    "className": "contains-task-list"
  }, Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `Based on `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://vuejs.org/"
  }, `Vue`))), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `Based on `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://router.vuejs.org/"
  }, `Vue-Router`), ` to implement front-end routing`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `Use `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://www.typescriptlang.org/"
  }, `typescript`), ` to develop`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `Use `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://webpack.js.org/"
  }, `webpack`), ` to package`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `Comply `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://eslint.org/"
  }, `eslint`), ` standard`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `Comply `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://stylelint.io/"
  }, `stylelint`), ` standard`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `Apply `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://prettier.io/docs/en/install.html"
  }, `prettier`), ` to format code`), Object(react_["mdx"])("p", {
    parentName: "li"
  }, `……`))), Object(react_["mdx"])("h3", null, `React SSR`), Object(react_["mdx"])("ul", {
    "className": "contains-task-list"
  }, Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `Based on `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://reactjs.org/"
  }, `React`))), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `Based on `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://nextjs.org/"
  }, `nextjs`), ` enterprise high performance node framework`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `Use `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://www.typescriptlang.org/"
  }, `typescript`), ` to develop`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `Support use `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://koajs.com/"
  }, `koa`), ` to custom node server`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `Search engine friendly `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://zh.wikipedia.org/wiki/%E6%90%9C%E5%B0%8B%E5%BC%95%E6%93%8E%E6%9C%80%E4%BD%B3%E5%8C%96"
  }, `SEO`)), Object(react_["mdx"])("p", {
    parentName: "li"
  }, `……`))), Object(react_["mdx"])("h3", null, `React Component(library)`), Object(react_["mdx"])("ul", {
    "className": "contains-task-list"
  }, Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `Support multiple component library demo and document framework such as `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://storybook.js.org/"
  }, `storybook`), `, `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://docz.site/"
  }, `docz`), ` and `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://react-styleguidist.js.org/"
  }, `styleguidist`))), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `Based on `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://reactjs.org/"
  }, `React`))), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `Use `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://jestjs.io/"
  }, `Jest`), ` to cover components unit-test`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `Use `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://gulpjs.com/"
  }, `gulp`), ` to package`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `Use `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://www.typescriptlang.org/"
  }, `typescript`), ` to develop`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `Comply `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://eslint.org/"
  }, `eslint`), ` standard`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `Comply `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://stylelint.io/"
  }, `stylelint`), ` standard`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `Apply `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://prettier.io/docs/en/install.html"
  }, `prettier`), ` to format code`), Object(react_["mdx"])("p", {
    parentName: "li"
  }, `……`))), Object(react_["mdx"])("h3", null, `Vue Component(library)`), Object(react_["mdx"])("ul", {
    "className": "contains-task-list"
  }, Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `Based on `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://vuejs.org/"
  }, `Vue`))), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `Use `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://jestjs.io/"
  }, `Jest`), ` to cover components unit-test`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `Use `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://gulpjs.com/"
  }, `gulp`), ` to package`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `Use `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://www.typescriptlang.org/"
  }, `typescript`), ` to develop`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `Comply `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://eslint.org/"
  }, `eslint`), ` standard`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `Comply `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://stylelint.io/"
  }, `stylelint`), ` standard`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `Apply `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://prettier.io/docs/en/install.html"
  }, `prettier`), ` to format code`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `Based on `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://storybook.js.org/"
  }, `storybook`), ` which is component library demo and document framework`), Object(react_["mdx"])("p", {
    parentName: "li"
  }, `……`))), Object(react_["mdx"])("h3", null, `Toolkit`), Object(react_["mdx"])("ul", {
    "className": "contains-task-list"
  }, Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `Based on `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://d.umijs.org/"
  }, `dumi`), ` which is demo and document framework for the project`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `使用 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://mochajs.org/"
  }, `mocha`), ` 进行Node端的单页测试`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `使用 `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://karma-runner.github.io/latest/index.html"
  }, `karma`), ` 进行浏览器端的单页测试`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `Use `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://rollupjs.org/guide/en"
  }, `rollup`), ` to package`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `Use `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://www.typescriptlang.org/"
  }, `typescript`), ` to develop`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `Comply `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://eslint.org/"
  }, `eslint`), ` standard`)), Object(react_["mdx"])("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, Object(react_["mdx"])("input", {
    parentName: "p",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `Apply `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://prettier.io/docs/en/install.html"
  }, `prettier`), ` to format code`), Object(react_["mdx"])("p", {
    parentName: "li"
  }, `……`))), Object(react_["mdx"])("h2", null, `Commands`), Object(react_["mdx"])("p", null, `You can input `, Object(react_["mdx"])("inlineCode", {
    parentName: "p"
  }, `omni -h`), ` in the command-line-tool to check all support commands：`), Object(react_["mdx"])("pre", null, Object(react_["mdx"])("code", {
    parentName: "pre",
    "className": "language-shell"
  }, `  Commands:

    init [options] [strategy]  initialize your project, [strategy] could be stable(default) or latest
    dev [options]              omni dev [-p <port>] [-H <host>] [-P <path>]
    start [options]            omni start [-p <port>] [-H <host>] [-P <path>]
    new [options] [name]       omni new [name] [-f | -c] [-P <path>]
    build [options]            build your project according to the [omni.config.js]'s build field
    release [options]          publish your project according to the [omni.config.js]'s release field
`)), Object(react_["mdx"])("h3", null, `omni init`), Object(react_["mdx"])("h4", null, `Initial your project by answer several questions`), Object(react_["mdx"])("pre", null, Object(react_["mdx"])("code", {
    parentName: "pre",
    "className": "language-shell"
  }, `omni init
`)), Object(react_["mdx"])("h4", null, `Initial your project with lastest denpendencies`), Object(react_["mdx"])("pre", null, Object(react_["mdx"])("code", {
    parentName: "pre",
    "className": "language-shell"
  }, `omni init lastest
`)), Object(react_["mdx"])("h4", null, `Initial your project without install dependencies`), Object(react_["mdx"])("pre", null, Object(react_["mdx"])("code", {
    parentName: "pre",
    "className": "language-shell"
  }, `omni init -n
`)), Object(react_["mdx"])("h4", null, `Initial your project according to some template`), Object(react_["mdx"])("pre", null, Object(react_["mdx"])("code", {
    parentName: "pre",
    "className": "language-shell"
  }, `omni init -t [projectName]
`)), Object(react_["mdx"])("p", null, `or`), Object(react_["mdx"])("pre", null, Object(react_["mdx"])("code", {
    parentName: "pre",
    "className": "language-shell"
  }, `omni init --react_entire [projectName]
`)), Object(react_["mdx"])("h4", null, `Options`), Object(react_["mdx"])("pre", null, Object(react_["mdx"])("code", {
    parentName: "pre",
    "className": "language-shell"
  }, `Usage: omni init [strategy] [options]

initialize your project, [strategy] could be stable(default) or latest

Arguments:

  strategy                 stable or latest

Options:
  -rb, --react_basic [name]       create a basic React SPA project
  -rs, --react_standard [name]    create a standard React SPA project
  -re, --vue_entire [name]        create a most versatile React SPA project
  -vb, --vue_basic [name]         create a basic Vue SPA project
  -vs, --vue_standard [name]      create a standard Vue SPA project
  -ve, --vue_entire [name]        create a most versatile Vue SPA project
  -rS, --react_ssr [name]         create a React component library
  -rc, --react_components [name]  create a React component library
  -vc, --vue_components [name]    create a Vue component library
  -t, --toolkit [name]            create a toolkit project
  -n, --no-install                init project without install dependencies
  -P, --path <path>               the workpath for init the project
  -h, --help                      output usage information
`)), Object(react_["mdx"])("h3", null, `omni dev`), Object(react_["mdx"])("h4", null, `Usage`), Object(react_["mdx"])("pre", null, Object(react_["mdx"])("code", {
    parentName: "pre",
    "className": "language-sh"
  }, `  omni dev

  omni dev -p 8200 // Start a dev-server with port 8200

  omni dev -h dev.domain.com // Start a dev-server with hostname dev.domain.com


  omni dev -p 8200 -h dev.domain.com // Start a dev-server with port 8200 and hostname dev.domain.com

`)), Object(react_["mdx"])("h4", null, `Options`), Object(react_["mdx"])("pre", null, Object(react_["mdx"])("code", {
    parentName: "pre",
    "className": "language-shell"
  }, `Usage: omni dev [options]

omni dev [-p <port>] [-H <host>] [-P <path>]

Options:
  -p, --port <port>      start the dev-server according to the specified port
  -H, --hostname <host>  start the dev-server according to the specified hostname
  -P, --path <path>      the workpath for start the dev-server
  -h, --help             output usage information
`)), Object(react_["mdx"])("h3", null, `omni start`), Object(react_["mdx"])("p", null, `The usage same as `, Object(react_["mdx"])("inlineCode", {
    parentName: "p"
  }, `omni dev`)), Object(react_["mdx"])("h4", null, `Options`), Object(react_["mdx"])("pre", null, Object(react_["mdx"])("code", {
    parentName: "pre",
    "className": "language-shell"
  }, `Usage: omni start [options]

omni start [-p <port>] [-H <host>] [-P <path>]

Options:
  -p, --port <port>      start the prod-server according to the specified port
  -H, --hostname <host>  start the prod-server according to the specified hostname
  -P, --path <path>      the workpath for start the prod-server
  -h, --help             output usage information
`)), Object(react_["mdx"])("h3", null, `omni new`), Object(react_["mdx"])("h4", null, `Usage`), Object(react_["mdx"])("pre", null, Object(react_["mdx"])("code", {
    parentName: "pre",
    "className": "language-sh"
  }, `  omni new

  omni new Button // Create a component which name is Button

  omni new -c // Create a component which type is class

  omni new -c Button // Create a component which name is Button and type is class
`)), Object(react_["mdx"])("h4", null, `Options`), Object(react_["mdx"])("pre", null, Object(react_["mdx"])("code", {
    parentName: "pre",
    "className": "language-shell"
  }, `Usage: omni new [name] [options]

omni new [name] [-f | -c] [-P <path>]

Arguments:

  name              optional! The name of component.

Options:
  -f, --function    create a functional component
  -c, --class       create a class component
  -P, --path <path>  the workpath for create component
  -h, --help        output usage information
`)), Object(react_["mdx"])("h3", null, `omni build`), Object(react_["mdx"])("h4", null, `Usage`), Object(react_["mdx"])("pre", null, Object(react_["mdx"])("code", {
    parentName: "pre",
    "className": "language-sh"
  }, `  omni build

  omni build -n // Build project bypass all pre-flight

  omni build -c $pathTo/build.config.js // Build project according to specify config path
`)), Object(react_["mdx"])("h4", null, `Options`), Object(react_["mdx"])("pre", null, Object(react_["mdx"])("code", {
    parentName: "pre",
    "className": "language-shell"
  }, `Usage: omni build [options]

build your project according to the [omni.config.js]'s build field

Options:
  -c, --config <path>  specify the path of config file
  -n, --no-verify      bypass all pre-check before building
  -P, --path <path>    the workpath for build project
  -h, --help           output usage information
`)), Object(react_["mdx"])("h3", null, `omni release`), Object(react_["mdx"])("h4", null, `Usage`), Object(react_["mdx"])("pre", null, Object(react_["mdx"])("code", {
    parentName: "pre",
    "className": "language-sh"
  }, `  omni release

  omni release -n // Release project bypass all pre-flight

  omni release -a // Release project that automatic iteration version

  omni release -i // Release project that ignore automatic iteration version

  omni release -m // Release project that manual iteration version

  omni release -t // Release project that the tag will add to npm-package
`)), Object(react_["mdx"])("h4", null, `Options`), Object(react_["mdx"])("pre", null, Object(react_["mdx"])("code", {
    parentName: "pre",
    "className": "language-shell"
  }, `Usage: omni release [options]

publish your project according to the [omni.config.js]'s release field

Options:
  -a, --automatic         automatic iteration version
  -i, --ignore            ignore automatic iteration version
  -m, --manual <version>  manual iteration version
  -t, --tag <tag>         the tag will add to npm-package
  -n, --no-verify         bypass unit-test eslint and stylelint check
  -P, --path <path>       the workpath for release project
  -h, --help              output usage information
`)), Object(react_["mdx"])("h1", null, `About「omni.config.js」config file`), Object(react_["mdx"])("h3", null, `type`), Object(react_["mdx"])("p", null, `OMNI will process of initialization, construction and template creation according to different project types`), Object(react_["mdx"])("p", null, `The project types:`), Object(react_["mdx"])("ul", null, Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `spa-react - React single-page-application`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `ssr-react - React server-side-render application`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `component-react - React Component Library`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `toolkit - SDK Library `))), Object(react_["mdx"])("h3", null, `dev`), Object(react_["mdx"])("p", null, `The dev-server based on express, realizing hot-update, api-proxy and other common functions. Provide personalized customization schemes such as middleware customization, port number, log output level and webpack configuration.`), Object(react_["mdx"])("ul", null, Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `middleware - middleware configuration:`), Object(react_["mdx"])("pre", {
    parentName: "li"
  }, Object(react_["mdx"])("code", {
    parentName: "pre",
    "className": "language-ts"
  }, `{
  route: string;
  callback: (req: any, res: any) => Promise<void>;
}
`)), Object(react_["mdx"])("p", {
    parentName: "li"
  }, `  or`), Object(react_["mdx"])("pre", {
    parentName: "li"
  }, Object(react_["mdx"])("code", {
    parentName: "pre",
    "className": "language-ts"
  }, `(params: {
  ip: string;
  port: number;
  host?: string;
  logLevel: LOGLEVEL;
  proxyConfig?: (ProxyItem | ProxyFn)[];
}) => {
  route: string;
  callback: (req: any, res: any) => Promise<void>;
}
`))), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `webpack - dev-server webpack configuration`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `proxy - dev-server proxy configuration`), Object(react_["mdx"])("pre", {
    parentName: "li"
  }, Object(react_["mdx"])("code", {
    parentName: "pre",
    "className": "language-ts"
  }, `{
  route: '/api', // Address of the local service for the proxy API
  config: {
    target: 'http://www.api.com/api', // The actual address of the proxy API
    changeOrigin: true // whether change the host
  }
}
`)), Object(react_["mdx"])("p", {
    parentName: "li"
  }, `  or`), Object(react_["mdx"])("pre", {
    parentName: "li"
  }, Object(react_["mdx"])("code", {
    parentName: "pre",
    "className": "language-ts"
  }, `(params: {
  ip: string;
  port: number;
  host?: string;
  logLevel: LOGLEVEL;
  middlewareConfig?: (MiddlewareItem | MiddlewareFn)[];
}) => {
  route: string;
  config: Config;
}
`)), Object(react_["mdx"])("p", {
    parentName: "li"
  }, `  For more configuration, see `, Object(react_["mdx"])("a", {
    parentName: "p",
    "href": "https://github.com/chimurai/http-proxy-middleware"
  }, `http-proxy-middleware`))), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `port - dev-server port`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `host - dev-server host`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `https - start dev-server with https protocol which could custom `, Object(react_["mdx"])("inlineCode", {
    parentName: "p"
  }, `key`), ` and `, Object(react_["mdx"])("inlineCode", {
    parentName: "p"
  }, `cert`))), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `serverType - dev-server type`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `logLevel - The log-level which dev-server will apply, optional 'debug', 'info', 'warn', 'error', 'silent'`))), Object(react_["mdx"])("h3", null, `build`), Object(react_["mdx"])("ul", null, Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `autoRelease - auto release project after build success`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `srcDir - the build source directory`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `outDir - the directory for compiled project`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `esmDir - es6 module compiled directory`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `hash - whether the hash tag add to building result, optional 'contenthash', 'chunkhash' and 'hash'(true equal 'contenthash')`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `configuration - The callback will be call in the build-process, you can return your custom build configuration`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `reserve - Configure resources that are not packaged but need to be kept in the build result`), Object(react_["mdx"])("ul", {
    parentName: "li"
  }, Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `style - whether or not reserve the stylesheet files`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `assets - reserve other asset paths`)))), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `preflight - the flight check before build`), Object(react_["mdx"])("ul", {
    parentName: "li"
  }, Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `typescript - whether or not process the ts or tsx files`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `test - whether or not process unit-test`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `eslint - whether or not process eslint check`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `prettier - whether or not process prettier check`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `stylelint - whether or not process stylelint check`))))), Object(react_["mdx"])("h3", null, `release`), Object(react_["mdx"])("ul", null, Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `autoBuild - auto build project before release process`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `autoTag - npm publish will auto set tag according to the current version`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `git - project git repo url`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `npm - npm depository url`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `preflight - the flight check before release`), Object(react_["mdx"])("ul", {
    parentName: "li"
  }, Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `test - whether or not process unit-test`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `eslint - whether or not process eslint check`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `prettier - whether or not process prettier check`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `stylelint - whether or not process stylelint check`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `commitlint - whether or not process commitlint check`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `branch - only can release in this branch, set empty string to ignore this check`))))), Object(react_["mdx"])("h3", null, `template`), Object(react_["mdx"])("ul", null, Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `root - the root directory for generate template`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `typescript - whether or not apply typescript`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `test - whether or not generate unit-test file`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `stylesheet - stylesheet type`)), Object(react_["mdx"])("li", {
    parentName: "ul"
  }, Object(react_["mdx"])("p", {
    parentName: "li"
  }, `readme - `, `[true, 'mdx']`, ` (`, `[whether or not README.md, generate mdx or md file]`, `)`))), Object(react_["mdx"])("h3", null, `plugins`), Object(react_["mdx"])("p", null, `plugin must meet following types:`), Object(react_["mdx"])("pre", null, Object(react_["mdx"])("code", {
    parentName: "pre",
    "className": "language-ts"
  }, `type OmniPlugin = {
  name: string;
  stage: PluginStage;
  handler: PluginHandler;
};

type PluginStage = 'new' | 'build' | 'release';
interface PluginHandler {
  (config: Omit<OmniConfig, 'plugins'>): Promise<any>;
}
`)));
}
;
docs_en_MDXContent.isMDXComponent = true;
// EXTERNAL MODULE: ./src/components/Docs/style/Docs.module.less
var Docs_module = __webpack_require__("fZ0C");
var Docs_module_default = /*#__PURE__*/__webpack_require__.n(Docs_module);

// CONCATENATED MODULE: ./src/components/Docs/Docs.tsx
var Docs_jsx = external_react_default.a.createElement;




/* import types */

const Docs = props => {
  const {
    lang
  } = props;
  const Source = lang === 'cn' ? MDXContent : docs_en_MDXContent;
  return Docs_jsx("div", {
    className: Docs_module_default.a.docs
  }, Docs_jsx(Source, null));
};
/* harmony default export */ var Docs_Docs = (/*#__PURE__*/Object(external_react_["memo"])(Docs));
// CONCATENATED MODULE: ./src/components/Docs/index.ts


/* harmony default export */ var components_Docs = (Docs_Docs);
// EXTERNAL MODULE: ./src/utils/mapCtxToProps.ts + 1 modules
var mapCtxToProps = __webpack_require__("+YsH");

// CONCATENATED MODULE: ./pages/docs.tsx

var docs_jsx = external_react_default.a.createElement;

function docs_extends() { docs_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return docs_extends.apply(this, arguments); }







function DocsPage(props) {
  const {
    lang,
    locale: {
      docs: {
        pageTitle
      }
    }
  } = Object(external_react_["useContext"])(UseLocale["a" /* UseLocale */]);
  return docs_jsx(Layout["a" /* default */], {
    title: pageTitle,
    page: props.page
  }, docs_jsx(components_Docs, docs_extends({
    lang: lang
  }, props)));
}

DocsPage.getInitialProps = async ctx => {
  return Object(mapCtxToProps["a" /* default */])(ctx);
};

/* harmony default export */ var docs = __webpack_exports__["default"] = (DocsPage);

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