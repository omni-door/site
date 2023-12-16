(() => {
var exports = {};
exports.id = 219;
exports.ids = [219];
exports.modules = {

/***/ 692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ start)
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
;// CONCATENATED MODULE: ./src/components/Start/start-cn.md
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function _createMdxContent(props) {
  const _components = _objectSpread(_objectSpread({
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong"
  }, (0,lib/* useMDXComponents */.a)()), props.components);

  return (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [jsx_runtime_.jsx(_components.h1, {
      children: "快速开始"
    }), "\n", jsx_runtime_.jsx(_components.p, {
      children: "说三遍："
    }), "\n", jsx_runtime_.jsx(_components.p, {
      children: jsx_runtime_.jsx(_components.strong, {
        children: "node >= 10.13.0"
      })
    }), "\n", jsx_runtime_.jsx(_components.p, {
      children: jsx_runtime_.jsx(_components.strong, {
        children: "node >= 10.13.0"
      })
    }), "\n", jsx_runtime_.jsx(_components.p, {
      children: jsx_runtime_.jsx(_components.strong, {
        children: "node >= 10.13.0"
      })
    }), "\n", jsx_runtime_.jsx(_components.h2, {
      children: "初始化一个项目"
    }), "\n", (0,jsx_runtime_.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
          children: ["可以使用 ", jsx_runtime_.jsx(_components.code, {
            children: "npx"
          }), " 来初始化项目："]
        }), "\n", jsx_runtime_.jsx(_components.pre, {
          children: jsx_runtime_.jsx(_components.code, {
            className: "language-shell",
            children: "npx @omni-door/cli init -s myProject\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "若要创建多个项目，把脚手架安装到全局："
        }), "\n"]
      }), "\n"]
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-shell",
        children: "npm i -g @omni-door/cli\n"
      })
    }), "\n", jsx_runtime_.jsx(_components.p, {
      children: "安装完成后执行初始化操作："
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-shell",
        children: "omni init -s myProject\n"
      })
    }), "\n", (0,jsx_runtime_.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
        children: ["注意: 该项目的名称为 ", jsx_runtime_.jsx(_components.code, {
          children: "myProject"
        })]
      }), "\n"]
    }), "\n", jsx_runtime_.jsx(_components.h2, {
      children: "运行开发环境"
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-shell",
        children: "npm run dev\n"
      })
    }), "\n", jsx_runtime_.jsx(_components.h2, {
      children: "新建一个组件"
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-shell",
        children: "npm run new\n"
      })
    }), "\n", jsx_runtime_.jsx(_components.h2, {
      children: "构建项目"
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-shell",
        children: "npm run build\n"
      })
    }), "\n", jsx_runtime_.jsx(_components.h2, {
      children: "发布项目"
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-shell",
        children: "npm run release\n"
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
;// CONCATENATED MODULE: ./src/components/Start/start-en.md
function start_en_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function start_en_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { start_en_ownKeys(Object(source), true).forEach(function (key) { start_en_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { start_en_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function start_en_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function start_en_createMdxContent(props) {
  const _components = start_en_objectSpread(start_en_objectSpread({
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong"
  }, (0,lib/* useMDXComponents */.a)()), props.components);

  return (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [jsx_runtime_.jsx(_components.h1, {
      children: "Quick Start"
    }), "\n", jsx_runtime_.jsx(_components.p, {
      children: "Note："
    }), "\n", jsx_runtime_.jsx(_components.p, {
      children: jsx_runtime_.jsx(_components.strong, {
        children: "node >= 10.13.0"
      })
    }), "\n", jsx_runtime_.jsx(_components.p, {
      children: jsx_runtime_.jsx(_components.strong, {
        children: "node >= 10.13.0"
      })
    }), "\n", jsx_runtime_.jsx(_components.p, {
      children: jsx_runtime_.jsx(_components.strong, {
        children: "node >= 10.13.0"
      })
    }), "\n", jsx_runtime_.jsx(_components.h2, {
      children: "Initialize a project"
    }), "\n", (0,jsx_runtime_.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "One method is use npx："
        }), "\n", jsx_runtime_.jsx(_components.pre, {
          children: jsx_runtime_.jsx(_components.code, {
            className: "language-shell",
            children: "npx @omni-door/cli init -s myProject\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime_.jsxs)(_components.li, {
        children: ["\n", jsx_runtime_.jsx(_components.p, {
          children: "Otherwise you can install cli to the global："
        }), "\n"]
      }), "\n"]
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-shell",
        children: "npm i -g @omni-door/cli\n"
      })
    }), "\n", jsx_runtime_.jsx(_components.p, {
      children: "Then Perform initialization after installation："
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-shell",
        children: "omni init -s myProject\n"
      })
    }), "\n", (0,jsx_runtime_.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime_.jsxs)(_components.p, {
        children: ["note: The project name will be ", jsx_runtime_.jsx(_components.code, {
          children: "myProject"
        })]
      }), "\n"]
    }), "\n", jsx_runtime_.jsx(_components.h2, {
      children: "Run project"
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-shell",
        children: "npm run dev\n"
      })
    }), "\n", jsx_runtime_.jsx(_components.h2, {
      children: "Create a Component"
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-shell",
        children: "npm run new\n"
      })
    }), "\n", jsx_runtime_.jsx(_components.h2, {
      children: "Build project"
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-shell",
        children: "npm run build\n"
      })
    }), "\n", jsx_runtime_.jsx(_components.h2, {
      children: "Release project"
    }), "\n", jsx_runtime_.jsx(_components.pre, {
      children: jsx_runtime_.jsx(_components.code, {
        className: "language-shell",
        children: "npm run release\n"
      })
    })]
  });
}

function start_en_MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = start_en_objectSpread(start_en_objectSpread({}, (0,lib/* useMDXComponents */.a)()), props.components);

  return MDXLayout ? jsx_runtime_.jsx(MDXLayout, start_en_objectSpread(start_en_objectSpread({}, props), {}, {
    children: jsx_runtime_.jsx(start_en_createMdxContent, start_en_objectSpread({}, props))
  })) : start_en_createMdxContent(props);
}
// EXTERNAL MODULE: ./src/components/Start/style/Start.module.less
var Start_module = __webpack_require__(773);
var Start_module_default = /*#__PURE__*/__webpack_require__.n(Start_module);
;// CONCATENATED MODULE: ./src/components/Start/Start.tsx




/* import types */


const Start = props => {
  const {
    lang
  } = props;
  const Source = lang === 'cn' ? MDXContent : start_en_MDXContent;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (Start_module_default()).start,
    children: /*#__PURE__*/jsx_runtime_.jsx(Source, {})
  });
};
/* harmony default export */ const Start_Start = (/*#__PURE__*/(0,external_react_.memo)(Start));
;// CONCATENATED MODULE: ./src/components/Start/index.ts


/* harmony default export */ const components_Start = (Start_Start);
// EXTERNAL MODULE: ./src/utils/mapCtxToProps.ts + 1 modules
var mapCtxToProps = __webpack_require__(280);
;// CONCATENATED MODULE: ./pages/start.tsx
function start_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function start_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { start_ownKeys(Object(source), true).forEach(function (key) { start_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { start_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function start_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function StartPage(props) {
  const {
    lang,
    locale: {
      start: {
        pageTitle
      }
    }
  } = (0,external_react_.useContext)(UseLocale/* UseLocale */.Rx);
  return /*#__PURE__*/jsx_runtime_.jsx(Layout/* default */.Z, {
    title: pageTitle,
    page: props.page,
    children: /*#__PURE__*/jsx_runtime_.jsx(components_Start, start_objectSpread({
      lang: lang
    }, props))
  });
}

StartPage.getInitialProps = async ctx => {
  return (0,mapCtxToProps/* default */.Z)(ctx);
};

/* harmony default export */ const start = (StartPage);

/***/ }),

/***/ 773:
/***/ ((module) => {

// Exports
module.exports = {
	"start": "Start_start__JH9yl",
	"code_size_default": "Start_code_size_default__oXh2F",
	"code_size_tight": "Start_code_size_tight__cMZqC"
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
var __webpack_exports__ = __webpack_require__.X(0, [627,764,205], () => (__webpack_exec__(692)));
module.exports = __webpack_exports__;

})();