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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst Poke = ()=>{\n    _s();\n    const [poke, setPoke] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [number, setNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let abortController = new AbortController();\n        const loadPoke = async ()=>{\n            try {\n                setLoading(true);\n                let res = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"https://pokeapi.co/api/v2/pokemon/$\", {\n                    signal: abortController.signal\n                });\n                setPoke(res.data);\n            } catch (error) {\n                setError(error);\n            }\n        };\n        loadPoke();\n        return ()=>abortController.abort();\n    }, []);\n    const prevPoke = ()=>{};\n    const nextPoke = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl\",\n                    children: [\n                        \"Pokemon Name\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-xl\",\n                            children: poke.name\n                        }, void 0, false, {\n                            fileName: \"D:\\\\blockchain\\\\app\\\\Poke.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\blockchain\\\\app\\\\Poke.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, undefined),\n                poke.sprites && poke.sprites.other && poke.sprites.other.home && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: poke.sprites.other.home.front_default,\n                    alt: poke.name\n                }, void 0, false, {\n                    fileName: \"D:\\\\blockchain\\\\app\\\\Poke.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 21\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"mt-8\",\n                    children: (poke === null || poke === void 0 ? void 0 : poke.abilities) ? poke.abilities.map((abil, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: abil.ability.name\n                        }, index, false, {\n                            fileName: \"D:\\\\blockchain\\\\app\\\\Poke.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 29\n                        }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: \"No abilities available\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\blockchain\\\\app\\\\Poke.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\blockchain\\\\app\\\\Poke.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                    fileName: \"D:\\\\blockchain\\\\app\\\\Poke.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\blockchain\\\\app\\\\Poke.jsx\",\n            lineNumber: 36,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(Poke, \"TLe4mFyMwjfD+zIXOOFJizdg1os=\");\n_c = Poke;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Poke);\nvar _c;\n$RefreshReg$(_c, \"Poke\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Qb2tlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBCO0FBQ3dCO0FBRWxELE1BQU1JLE9BQU87O0lBQ1QsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ0ssU0FBU0MsV0FBVyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNPLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUyxRQUFRQyxVQUFVLEdBQUdWLCtDQUFRQSxDQUFDO0lBRXJDQyxnREFBU0EsQ0FBQztRQUNOLElBQUlVLGtCQUFrQixJQUFJQztRQUMxQixNQUFNQyxXQUFXO1lBQ2IsSUFBSTtnQkFDQVAsV0FBVztnQkFDWCxJQUFJUSxNQUFNLE1BQU1oQiw2Q0FBS0EsQ0FBQ2lCLEdBQUcsQ0FBRSx1Q0FBc0M7b0JBQzdEQyxRQUFRTCxnQkFBZ0JLLE1BQU07Z0JBQ2xDO2dCQUNBWixRQUFRVSxJQUFJRyxJQUFJO1lBQ3BCLEVBQUUsT0FBT1YsT0FBTztnQkFDWkMsU0FBU0Q7WUFDYjtRQUNKO1FBQ0FNO1FBQ0EsT0FBTyxJQUFNRixnQkFBZ0JPLEtBQUs7SUFDdEMsR0FBRyxFQUFFO0lBRUwsTUFBTUMsV0FBVyxLQUVqQjtJQUNBLE1BQU1DLFdBQVcsS0FFakI7SUFFQSxxQkFDSTtrQkFDSSw0RUFBQ0M7OzhCQUNHLDhEQUFDQztvQkFBR0MsV0FBVTs7d0JBQVc7c0NBQ3JCLDhEQUFDQzs0QkFBRUQsV0FBVTtzQ0FBV3BCLEtBQUtzQixJQUFJOzs7Ozs7Ozs7Ozs7Z0JBRXBDdEIsS0FBS3VCLE9BQU8sSUFBSXZCLEtBQUt1QixPQUFPLENBQUNDLEtBQUssSUFBSXhCLEtBQUt1QixPQUFPLENBQUNDLEtBQUssQ0FBQ0MsSUFBSSxrQkFDMUQsOERBQUNDO29CQUFJQyxLQUFLM0IsS0FBS3VCLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDQyxJQUFJLENBQUNHLGFBQWE7b0JBQUVDLEtBQUs3QixLQUFLc0IsSUFBSTs7Ozs7OzhCQUVuRSw4REFBQ1E7b0JBQUdWLFdBQVU7OEJBQ1RwQixDQUFBQSxpQkFBQUEsMkJBQUFBLEtBQU0rQixTQUFTLElBQ1ovQixLQUFLK0IsU0FBUyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ3RCLDhEQUFDQztzQ0FBZ0JGLEtBQUtHLE9BQU8sQ0FBQ2QsSUFBSTsyQkFBekJZOzs7O3VEQUdiLDhEQUFDQztrQ0FBRzs7Ozs7Ozs7Ozs7OEJBR1osOERBQUNqQjs7Ozs7Ozs7Ozs7O0FBTWpCO0dBdERNbkI7S0FBQUE7QUF3RE4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL1Bva2UuanN4PzI5MjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuY29uc3QgUG9rZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtwb2tlLCBzZXRQb2tlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbbnVtYmVyLCBzZXROdW1iZXJdID0gdXNlU3RhdGUoMSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgYWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xyXG4gICAgICAgIGNvbnN0IGxvYWRQb2tlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8kYCwge1xyXG4gICAgICAgICAgICAgICAgICAgIHNpZ25hbDogYWJvcnRDb250cm9sbGVyLnNpZ25hbFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRQb2tlKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsb2FkUG9rZSgpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBhYm9ydENvbnRyb2xsZXIuYWJvcnQoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBwcmV2UG9rZSA9ICgpID0+e1xyXG5cclxuICAgIH1cclxuICAgIGNvbnN0IG5leHRQb2tlID0gKCkgPT57XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC0yeGwnPlBva2Vtb24gTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC14bCc+e3Bva2UubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAge3Bva2Uuc3ByaXRlcyAmJiBwb2tlLnNwcml0ZXMub3RoZXIgJiYgcG9rZS5zcHJpdGVzLm90aGVyLmhvbWUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwb2tlLnNwcml0ZXMub3RoZXIuaG9tZS5mcm9udF9kZWZhdWx0fSBhbHQ9e3Bva2UubmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdtdC04Jz5cclxuICAgICAgICAgICAgICAgICAgICB7cG9rZT8uYWJpbGl0aWVzID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2tlLmFiaWxpdGllcy5tYXAoKGFiaWwsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+e2FiaWwuYWJpbGl0eS5uYW1lfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPk5vIGFiaWxpdGllcyBhdmFpbGFibGU8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBva2U7XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJQb2tlIiwicG9rZSIsInNldFBva2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJudW1iZXIiLCJzZXROdW1iZXIiLCJhYm9ydENvbnRyb2xsZXIiLCJBYm9ydENvbnRyb2xsZXIiLCJsb2FkUG9rZSIsInJlcyIsImdldCIsInNpZ25hbCIsImRhdGEiLCJhYm9ydCIsInByZXZQb2tlIiwibmV4dFBva2UiLCJkaXYiLCJoMSIsImNsYXNzTmFtZSIsInAiLCJuYW1lIiwic3ByaXRlcyIsIm90aGVyIiwiaG9tZSIsImltZyIsInNyYyIsImZyb250X2RlZmF1bHQiLCJhbHQiLCJ1bCIsImFiaWxpdGllcyIsIm1hcCIsImFiaWwiLCJpbmRleCIsImxpIiwiYWJpbGl0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Poke.jsx\n"));

/***/ })

});