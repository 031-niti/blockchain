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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst Poke = ()=>{\n    _s();\n    const [poke, setPoke] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [number, setNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let abortController = new AbortController();\n        const loadPoke = async ()=>{\n            try {\n                setLoading(true);\n                let res = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"https://pokeapi.co/api/v2/pokemon/\".concat(number), {\n                    signal: abortController.signal\n                });\n                setPoke(res.data);\n            } catch (error) {\n                setError(error);\n            }\n        };\n        loadPoke();\n        return ()=>abortController.abort();\n    }, []);\n    const prevPoke = ()=>{\n        setNumber((number)=>number - 1);\n    };\n    const nextPoke = ()=>{\n        setNumber((number)=>number + 1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl\",\n                    children: [\n                        \"Pokemon Name\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-xl\",\n                            children: poke.name\n                        }, void 0, false, {\n                            fileName: \"D:\\\\blockchain\\\\app\\\\Poke.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\blockchain\\\\app\\\\Poke.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, undefined),\n                poke.sprites && poke.sprites.other && poke.sprites.other.home && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: poke.sprites.other.home.front_default,\n                    alt: poke.name\n                }, void 0, false, {\n                    fileName: \"D:\\\\blockchain\\\\app\\\\Poke.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 21\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"mt-8\",\n                    children: (poke === null || poke === void 0 ? void 0 : poke.abilities) ? poke.abilities.map((abil, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: abil.ability.name\n                        }, index, false, {\n                            fileName: \"D:\\\\blockchain\\\\app\\\\Poke.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 29\n                        }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: \"No abilities available\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\blockchain\\\\app\\\\Poke.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\blockchain\\\\app\\\\Poke.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"join justify-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn btn-info\",\n                            onClick: prevPoke,\n                            children: \"Previous\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\blockchain\\\\app\\\\Poke.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn btn-info\",\n                            onClick: nextPoke,\n                            children: \"Next\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\blockchain\\\\app\\\\Poke.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\blockchain\\\\app\\\\Poke.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\blockchain\\\\app\\\\Poke.jsx\",\n            lineNumber: 36,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(Poke, \"TLe4mFyMwjfD+zIXOOFJizdg1os=\");\n_c = Poke;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Poke);\nvar _c;\n$RefreshReg$(_c, \"Poke\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Qb2tlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBCO0FBQ3dCO0FBRWxELE1BQU1JLE9BQU87O0lBQ1QsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ0ssU0FBU0MsV0FBVyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNPLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUyxRQUFRQyxVQUFVLEdBQUdWLCtDQUFRQSxDQUFDO0lBRXJDQyxnREFBU0EsQ0FBQztRQUNOLElBQUlVLGtCQUFrQixJQUFJQztRQUMxQixNQUFNQyxXQUFXO1lBQ2IsSUFBSTtnQkFDQVAsV0FBVztnQkFDWCxJQUFJUSxNQUFNLE1BQU1oQiw2Q0FBS0EsQ0FBQ2lCLEdBQUcsQ0FBQyxxQ0FBNEMsT0FBUE4sU0FBVTtvQkFDckVPLFFBQVFMLGdCQUFnQkssTUFBTTtnQkFDbEM7Z0JBQ0FaLFFBQVFVLElBQUlHLElBQUk7WUFDcEIsRUFBRSxPQUFPVixPQUFPO2dCQUNaQyxTQUFTRDtZQUNiO1FBQ0o7UUFDQU07UUFDQSxPQUFPLElBQU1GLGdCQUFnQk8sS0FBSztJQUN0QyxHQUFHLEVBQUU7SUFFTCxNQUFNQyxXQUFXO1FBQ2JULFVBQVUsQ0FBQ0QsU0FBU0EsU0FBTztJQUMvQjtJQUNBLE1BQU1XLFdBQVc7UUFDYlYsVUFBVSxDQUFDRCxTQUFTQSxTQUFPO0lBQy9CO0lBRUEscUJBQ0k7a0JBQ0ksNEVBQUNZOzs4QkFDRyw4REFBQ0M7b0JBQUdDLFdBQVU7O3dCQUFXO3NDQUNyQiw4REFBQ0M7NEJBQUVELFdBQVU7c0NBQVdwQixLQUFLc0IsSUFBSTs7Ozs7Ozs7Ozs7O2dCQUVwQ3RCLEtBQUt1QixPQUFPLElBQUl2QixLQUFLdUIsT0FBTyxDQUFDQyxLQUFLLElBQUl4QixLQUFLdUIsT0FBTyxDQUFDQyxLQUFLLENBQUNDLElBQUksa0JBQzFELDhEQUFDQztvQkFBSUMsS0FBSzNCLEtBQUt1QixPQUFPLENBQUNDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDRyxhQUFhO29CQUFFQyxLQUFLN0IsS0FBS3NCLElBQUk7Ozs7Ozs4QkFFbkUsOERBQUNRO29CQUFHVixXQUFVOzhCQUNUcEIsQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNK0IsU0FBUyxJQUNaL0IsS0FBSytCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUN0Qiw4REFBQ0M7c0NBQWdCRixLQUFLRyxPQUFPLENBQUNkLElBQUk7MkJBQXpCWTs7Ozt1REFHYiw4REFBQ0M7a0NBQUc7Ozs7Ozs7Ozs7OzhCQUdaLDhEQUFDakI7b0JBQUlFLFdBQVU7O3NDQUNYLDhEQUFDaUI7NEJBQU9qQixXQUFVOzRCQUFla0IsU0FBU3RCO3NDQUFVOzs7Ozs7c0NBQ3BELDhEQUFDcUI7NEJBQU9qQixXQUFVOzRCQUFla0IsU0FBU3JCO3NDQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3hFO0dBdkRNbEI7S0FBQUE7QUF5RE4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL1Bva2UuanN4PzI5MjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuY29uc3QgUG9rZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtwb2tlLCBzZXRQb2tlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbbnVtYmVyLCBzZXROdW1iZXJdID0gdXNlU3RhdGUoMSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgYWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xyXG4gICAgICAgIGNvbnN0IGxvYWRQb2tlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8ke251bWJlcn1gLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2lnbmFsOiBhYm9ydENvbnRyb2xsZXIuc2lnbmFsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHNldFBva2UocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxvYWRQb2tlKCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IGFib3J0Q29udHJvbGxlci5hYm9ydCgpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IHByZXZQb2tlID0gKCkgPT57XHJcbiAgICAgICAgc2V0TnVtYmVyKChudW1iZXIpPT5udW1iZXItMSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBuZXh0UG9rZSA9ICgpID0+e1xyXG4gICAgICAgIHNldE51bWJlcigobnVtYmVyKT0+bnVtYmVyKzEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtMnhsJz5Qb2tlbW9uIE5hbWVcclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQteGwnPntwb2tlLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIHtwb2tlLnNwcml0ZXMgJiYgcG9rZS5zcHJpdGVzLm90aGVyICYmIHBva2Uuc3ByaXRlcy5vdGhlci5ob21lICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cG9rZS5zcHJpdGVzLm90aGVyLmhvbWUuZnJvbnRfZGVmYXVsdH0gYWx0PXtwb2tlLm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nbXQtOCc+XHJcbiAgICAgICAgICAgICAgICAgICAge3Bva2U/LmFiaWxpdGllcyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9rZS5hYmlsaXRpZXMubWFwKChhYmlsLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PnthYmlsLmFiaWxpdHkubmFtZX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5ObyBhYmlsaXRpZXMgYXZhaWxhYmxlPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdqb2luIGp1c3RpZnktY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1pbmZvJyBvbkNsaWNrPXtwcmV2UG9rZX0+UHJldmlvdXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1pbmZvJyBvbkNsaWNrPXtuZXh0UG9rZX0+TmV4dDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9rZTtcclxuIl0sIm5hbWVzIjpbImF4aW9zIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlBva2UiLCJwb2tlIiwic2V0UG9rZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsIm51bWJlciIsInNldE51bWJlciIsImFib3J0Q29udHJvbGxlciIsIkFib3J0Q29udHJvbGxlciIsImxvYWRQb2tlIiwicmVzIiwiZ2V0Iiwic2lnbmFsIiwiZGF0YSIsImFib3J0IiwicHJldlBva2UiLCJuZXh0UG9rZSIsImRpdiIsImgxIiwiY2xhc3NOYW1lIiwicCIsIm5hbWUiLCJzcHJpdGVzIiwib3RoZXIiLCJob21lIiwiaW1nIiwic3JjIiwiZnJvbnRfZGVmYXVsdCIsImFsdCIsInVsIiwiYWJpbGl0aWVzIiwibWFwIiwiYWJpbCIsImluZGV4IiwibGkiLCJhYmlsaXR5IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Poke.jsx\n"));

/***/ })

});