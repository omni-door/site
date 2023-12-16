(() => {
var exports = {};
exports.id = 229;
exports.ids = [229];
exports.modules = {

/***/ 82:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ home)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./src/components/Layout/index.ts + 1 modules
var Layout = __webpack_require__(827);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(725);
// EXTERNAL MODULE: ./src/components/Link/index.ts + 1 modules
var Link = __webpack_require__(217);
// EXTERNAL MODULE: ./src/context/UseLocale.tsx + 2 modules
var UseLocale = __webpack_require__(764);
// EXTERNAL MODULE: ./src/components/Home/style/Home.module.less
var Home_module = __webpack_require__(311);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Home/Home.tsx





/* import types */



const Home = props => {
  const {
    lang,
    locale: {
      home
    }
  } = (0,external_react_.useContext)(UseLocale/* UseLocale */.Rx);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (Home_module_default()).home,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
      className: (Home_module_default()).main,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        className: (Home_module_default()).title,
        children: home.title
      }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: (Home_module_default()).subtitle,
        children: home.subtitle
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: (Home_module_default()).description,
        children: home.description
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Home_module_default()).btn,
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
          type: "primary",
          className: (Home_module_default())["btn-start"],
          children: /*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
            page: "start",
            params: {
              lang
            },
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              className: (Home_module_default())["btn-start-link"],
              children: [" ", home.btn_start, " "]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
          className: (Home_module_default())["btn-docs"],
          children: /*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
            page: "docs",
            params: {
              lang
            },
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              className: (Home_module_default())["btn-docs-link"],
              children: [" ", home.btn_docs, " "]
            })
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Home_module_default()).grid,
        children: home.why.map(v => {
          const {
            route
          } = v;
          return /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Card, {
            size: "small",
            className: (Home_module_default()).card,
            hoverable: true,
            title: v.title,
            headStyle: {
              fontSize: '1.5rem',
              minHeight: '1vh'
            },
            bodyStyle: {
              paddingTop: '1rem'
            },
            children: /*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
              page: route.page,
              params: route.params,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                className: (Home_module_default())["card-link"],
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
                  className: (Home_module_default())["card-subtitle"],
                  children: [v.subtitle, " \u2192"]
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  className: (Home_module_default())["card-content"],
                  children: v.intro
                })]
              })
            })
          }, v.title);
        })
      })]
    })
  });
};
/* harmony default export */ const Home_Home = (/*#__PURE__*/(0,external_react_.memo)(Home));
;// CONCATENATED MODULE: ./src/components/Home/index.ts


/* harmony default export */ const components_Home = (Home_Home);
// EXTERNAL MODULE: ./src/utils/mapCtxToProps.ts + 1 modules
var mapCtxToProps = __webpack_require__(280);
;// CONCATENATED MODULE: ./pages/home.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* import types */



const HomePage = props => {
  return /*#__PURE__*/jsx_runtime_.jsx(Layout/* default */.Z, {
    title: 'Home',
    page: props.page,
    children: /*#__PURE__*/jsx_runtime_.jsx(components_Home, _objectSpread({}, props))
  });
};

HomePage.getInitialProps = async ctx => {
  return (0,mapCtxToProps/* default */.Z)(ctx);
};

/* harmony default export */ const home = (HomePage);

/***/ }),

/***/ 311:
/***/ ((module) => {

// Exports
module.exports = {
	"home": "Home_home__lufYQ",
	"main": "Home_main__mPmvp",
	"title": "Home_title__Oe9fN",
	"subtitle": "Home_subtitle__yvhw2",
	"description": "Home_description__mcBUi",
	"btn": "Home_btn__kbVOk",
	"btn-start": "Home_btn-start__IaDQs",
	"btn-docs": "Home_btn-docs__ZR_cZ",
	"btn-start-link": "Home_btn-start-link___nYSw",
	"btn-docs-link": "Home_btn-docs-link__6vmPp",
	"grid": "Home_grid__oqPmq",
	"card": "Home_card__HfdFC",
	"card-subtitle": "Home_card-subtitle__kuSn3",
	"card-content": "Home_card-content__IbfBx",
	"logo": "Home_logo__WnFp5"
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
var __webpack_exports__ = __webpack_require__.X(0, [764,205], () => (__webpack_exec__(82)));
module.exports = __webpack_exports__;

})();