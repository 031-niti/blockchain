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

/***/ "(app-pages-browser)/./app/components/Favpoke.jsx":
/*!************************************!*\
  !*** ./app/components/Favpoke.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Favpoke(param) {\n    let { fav } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-semibold \",\n                children: \"Your Favourite\"\n            }, void 0, false, {\n                fileName: \"D:\\\\blockchain\\\\app\\\\components\\\\Favpoke.jsx\",\n                lineNumber: 6,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-4 mx-auto \",\n                children: fav === null || fav === void 0 ? void 0 : fav.map((data, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"mt-4\",\n                                children: data.name\n                            }, void 0, false, {\n                                fileName: \"D:\\\\blockchain\\\\app\\\\components\\\\Favpoke.jsx\",\n                                lineNumber: 10,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: data.sprites.other.home.front_default,\n                                alt: data.name\n                            }, void 0, false, {\n                                fileName: \"D:\\\\blockchain\\\\app\\\\components\\\\Favpoke.jsx\",\n                                lineNumber: 11,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"D:\\\\blockchain\\\\app\\\\components\\\\Favpoke.jsx\",\n                        lineNumber: 9,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"D:\\\\blockchain\\\\app\\\\components\\\\Favpoke.jsx\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\blockchain\\\\app\\\\components\\\\Favpoke.jsx\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this);\n}\n_c = Favpoke;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Favpoke);\nvar _c;\n$RefreshReg$(_c, \"Favpoke\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0ZhdnBva2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQXlCO0FBRXpCLFNBQVNDLFFBQVEsS0FBTztRQUFQLEVBQUVDLEdBQUcsRUFBRSxHQUFQO0lBQ2IscUJBQ0ksOERBQUNDOzswQkFDRyw4REFBQ0M7Z0JBQUdDLFdBQVU7MEJBQTBCOzs7Ozs7MEJBQ3hDLDhEQUFDRjtnQkFBSUUsV0FBVTswQkFDVkgsZ0JBQUFBLDBCQUFBQSxJQUFLSSxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2IsOERBQUNMOzswQ0FDRyw4REFBQ007Z0NBQUdKLFdBQVU7MENBQVFFLEtBQUtHLElBQUk7Ozs7OzswQ0FDL0IsOERBQUNDO2dDQUFJQyxLQUFLTCxLQUFLTSxPQUFPLENBQUNDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDQyxhQUFhO2dDQUFFQyxLQUFLVixLQUFLRyxJQUFJOzs7Ozs7O3VCQUZ6REY7Ozs7Ozs7Ozs7Ozs7Ozs7QUFROUI7S0FkU1A7QUFnQlQsK0RBQWVBLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvRmF2cG9rZS5qc3g/ZTRmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBGYXZwb2tlKHsgZmF2IH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtMnhsIGZvbnQtc2VtaWJvbGQgJz5Zb3VyIEZhdm91cml0ZTwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy00IG14LWF1dG8gJz5cclxuICAgICAgICAgICAgICAgIHtmYXY/Lm1hcCgoZGF0YSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdtdC00Jz57ZGF0YS5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLnNwcml0ZXMub3RoZXIuaG9tZS5mcm9udF9kZWZhdWx0fSBhbHQ9e2RhdGEubmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmF2cG9rZSJdLCJuYW1lcyI6WyJSZWFjdCIsIkZhdnBva2UiLCJmYXYiLCJkaXYiLCJoMiIsImNsYXNzTmFtZSIsIm1hcCIsImRhdGEiLCJpbmRleCIsImgzIiwibmFtZSIsImltZyIsInNyYyIsInNwcml0ZXMiLCJvdGhlciIsImhvbWUiLCJmcm9udF9kZWZhdWx0IiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Favpoke.jsx\n"));

/***/ })

});