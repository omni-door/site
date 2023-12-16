exports.id = 205;
exports.ids = [205];
exports.modules = {

/***/ 827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// UNUSED EXPORTS: Layout

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./src/context/UseLocale.tsx + 2 modules
var UseLocale = __webpack_require__(764);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/components/Link/index.ts + 1 modules
var Link = __webpack_require__(217);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(725);
// EXTERNAL MODULE: ./src/components/Layout/style/Layout.module.less
var Layout_module = __webpack_require__(12);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Layout/Layout.tsx






/* import types */



const {
  Header,
  Content,
  Footer
} = external_antd_.Layout;
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
  } = (0,external_react_.useContext)(UseLocale/* UseLocale */.Rx);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Layout, {
    className: [(Layout_module_default()).layout, className].join(' '),
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("title", {
        children: [" ", `${title}`, " "]
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "omni-door website"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Header, {
      className: (Layout_module_default())["layout-header"],
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
        className: (Layout_module_default())["layout-header-nav"],
        children: [/*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
          page: "home",
          params: {
            lang
          },
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (Layout_module_default())["layout-header-logo"],
            children: global.logo
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Menu, {
          className: (Layout_module_default())["layout-header-menu"],
          mode: "horizontal",
          style: {
            width: 256
          },
          defaultSelectedKeys: [page],
          items: [{
            key: 'start',
            label: /*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
              page: "start",
              params: {
                lang
              },
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: global.start
              })
            })
          }, {
            key: 'docs',
            label: /*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
              page: "docs",
              params: {
                lang
              },
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: global.docs
              })
            })
          }]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (Layout_module_default())["layout-header-right"],
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
            size: "middle",
            className: (Layout_module_default())["layout-header-lang"],
            children: /*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
              href: `/${lang === 'cn' ? 'en' : 'cn'}/${page}`,
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: global.lang
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: (Layout_module_default())["layout-header-github"],
            target: "_blank",
            href: "https://github.com/omni-door/cli"
          })]
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Content, {
      className: (Layout_module_default())["layout-content"],
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx(Footer, {
      className: (Layout_module_default())["layout-footer"],
      children: "Copyright \xA9 2020~2023 @omni-door"
    })]
  });
};
/* harmony default export */ const Layout = (/*#__PURE__*/(0,external_react_.memo)(BasicLayout));
;// CONCATENATED MODULE: ./src/components/Layout/index.ts


/* harmony default export */ const components_Layout = (Layout);

/***/ }),

/***/ 217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Link)
});

// UNUSED EXPORTS: Link

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "next-url-prettifier"
var external_next_url_prettifier_ = __webpack_require__(665);
// EXTERNAL MODULE: ./src/routes.js
var routes = __webpack_require__(872);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Link/Link.tsx



/* import types */


const Link = props => {
  const {
    href,
    page,
    params = null,
    children
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx(external_next_url_prettifier_.Link, {
    href: href,
    route: page ? routes.nextRouter.linkPage(page, params) : null,
    children: children
  });
};
/* harmony default export */ const Link_Link = (/*#__PURE__*/(0,external_react_.memo)(Link));
;// CONCATENATED MODULE: ./src/components/Link/index.ts


/* harmony default export */ const components_Link = (Link_Link);

/***/ }),

/***/ 872:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// The route base on next-url-prettifier
// https://github.com/BDav24/next-url-prettifier
// Client Usage: https://github.com/BDav24/next-url-prettifier#in-your-components
const UrlPrettifier = (__webpack_require__(665)["default"]);

class NextUrlRouter extends UrlPrettifier {
  constructor(routes, options = {}) {
    super(routes, options);
    this.root = options.root || '';
    this.linkPage = this.linkPage.bind(this);
    this.forEachPattern = this.forEachPattern.bind(this);
  }

  linkPage(pageName, params = {}) {
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

/***/ 280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ utils_mapCtxToProps)
});

// UNUSED EXPORTS: mapCtxToProps

;// CONCATENATED MODULE: ./src/utils/paramsToQueryString.ts
const isObject = param => param === Object(param);

const paramsToStringList = entries => entries.reduce((result, [key, value]) => result.concat(Array.isArray(value) ? paramsToStringList(value.map(arrayValue => [`${key}[]`, arrayValue])) : [typeof value === 'string' || typeof value === 'number' ? `${key}=${value}` : '']), []);

function paramsToQueryString(params) {
  const paramsString = isObject(params) ? paramsToStringList(Object.keys(params).sort().map(key => [String(key), params[key]])).filter(chunk => chunk.length > 0).join('&') : '';
  return paramsString.length > 0 ? `?${paramsString}` : '';
}
;// CONCATENATED MODULE: ./src/utils/mapCtxToProps.ts

/* import types */

function mapCtxToProps(ctx) {
  const {
    pathname,
    query,
    asPath
  } = ctx;
  return {
    page: pathname.replace(/\//g, '') || 'home',
    query,
    path: asPath || `${pathname}${paramsToQueryString(query)}`
  };
}
/* harmony default export */ const utils_mapCtxToProps = (mapCtxToProps);

/***/ }),

/***/ 12:
/***/ ((module) => {

// Exports
module.exports = {
	"layout": "Layout_layout__FvBGI",
	"layout-header": "Layout_layout-header__EVhb0",
	"layout-header-nav": "Layout_layout-header-nav__bo5_Z",
	"layout-header-logo": "Layout_layout-header-logo__VhmFM",
	"layout-header-menu": "Layout_layout-header-menu__RbWoL",
	"layout-header-right": "Layout_layout-header-right__eIBFC",
	"layout-header-lang": "Layout_layout-header-lang___xlgK",
	"layout-header-github": "Layout_layout-header-github__IC2lA",
	"layout-footer": "Layout_layout-footer__RpIPK",
	"layout-header-menu-item": "Layout_layout-header-menu-item__vbEUR"
};


/***/ })

};
;