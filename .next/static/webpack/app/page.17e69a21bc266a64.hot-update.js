"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/Poke.jsx":
/*!**********************!*\
  !*** ./app/Poke.jsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst Poke = ()=>{\n    _s();\n    const [pokem, setPokem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let abortController = new AbortController();\n        const loadPoke = async ()=>{\n            try {\n                setLoading(true);\n                let res = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"https://pokeapi.co/api/v2/pokemon/1\", {\n                    signal: abortController.signal\n                });\n                setPokem(res.data);\n            } catch (error) {\n                setError(error);\n            }\n        };\n        return ()=>abortController.abort();\n    }, []);\n    console.log(pokem);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Pokemon Data:\"\n        }, void 0, false, {\n            fileName: \"D:\\\\blockchain\\\\app\\\\Poke.jsx\",\n            lineNumber: 29,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(Poke, \"fVL6Ys0zA7a8TmSEi6aqz2NJ38o=\");\n_c = Poke;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Poke);\nvar _c;\n$RefreshReg$(_c, \"Poke\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Qb2tlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBCO0FBQ3dCO0FBRWxELE1BQU1JLE9BQU87O0lBQ1QsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ0ssU0FBU0MsV0FBVyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNPLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUM7SUFFbkNDLGdEQUFTQSxDQUFDO1FBQ04sSUFBSVEsa0JBQWtCLElBQUlDO1FBQzFCLE1BQU1DLFdBQVc7WUFDYixJQUFJO2dCQUNBTCxXQUFXO2dCQUNYLElBQUlNLE1BQU0sTUFBTWQsNkNBQUtBLENBQUNlLEdBQUcsQ0FBRSx1Q0FBc0M7b0JBQzdEQyxRQUFRTCxnQkFBZ0JLLE1BQU07Z0JBQ2xDO2dCQUNBVixTQUFTUSxJQUFJRyxJQUFJO1lBQ3JCLEVBQUUsT0FBT1IsT0FBTztnQkFDWkMsU0FBU0Q7WUFDYjtRQUNKO1FBQ0EsT0FBTyxJQUFNRSxnQkFBZ0JPLEtBQUs7SUFDdEMsR0FBRyxFQUFFO0lBRUxDLFFBQVFDLEdBQUcsQ0FBQ2Y7SUFFWixxQkFDSTtrQkFDSSw0RUFBQ2dCO3NCQUFJOzs7Ozs7O0FBS2pCO0dBOUJNakI7S0FBQUE7QUFnQ04sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL1Bva2UuanN4PzI5MjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuY29uc3QgUG9rZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtwb2tlbSwgc2V0UG9rZW1dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgYWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpOyAgICBcclxuICAgICAgICBjb25zdCBsb2FkUG9rZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vMWAsIHtcclxuICAgICAgICAgICAgICAgICAgICBzaWduYWw6IGFib3J0Q29udHJvbGxlci5zaWduYWxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0UG9rZW0ocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuICgpID0+IGFib3J0Q29udHJvbGxlci5hYm9ydCgpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyhwb2tlbSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgUG9rZW1vbiBEYXRhOlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBva2U7XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJQb2tlIiwicG9rZW0iLCJzZXRQb2tlbSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImFib3J0Q29udHJvbGxlciIsIkFib3J0Q29udHJvbGxlciIsImxvYWRQb2tlIiwicmVzIiwiZ2V0Iiwic2lnbmFsIiwiZGF0YSIsImFib3J0IiwiY29uc29sZSIsImxvZyIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Poke.jsx\n"));

/***/ })

});