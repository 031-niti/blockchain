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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Favpoke(param) {\n    let { fav } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-semibold \",\n                children: \"Your Favourite\"\n            }, void 0, false, {\n                fileName: \"D:\\\\blockchain\\\\app\\\\components\\\\Favpoke.jsx\",\n                lineNumber: 6,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-4 mx-auto my-5 space-y-4 \",\n                children: fav === null || fav === void 0 ? void 0 : fav.map((data, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: data.name\n                            }, void 0, false, {\n                                fileName: \"D:\\\\blockchain\\\\app\\\\components\\\\Favpoke.jsx\",\n                                lineNumber: 10,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: data.sprites.other.home.front_default,\n                                alt: data.name\n                            }, void 0, false, {\n                                fileName: \"D:\\\\blockchain\\\\app\\\\components\\\\Favpoke.jsx\",\n                                lineNumber: 11,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"D:\\\\blockchain\\\\app\\\\components\\\\Favpoke.jsx\",\n                        lineNumber: 9,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"D:\\\\blockchain\\\\app\\\\components\\\\Favpoke.jsx\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\blockchain\\\\app\\\\components\\\\Favpoke.jsx\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this);\n}\n_c = Favpoke;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Favpoke);\nvar _c;\n$RefreshReg$(_c, \"Favpoke\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0ZhdnBva2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQXlCO0FBRXpCLFNBQVNDLFFBQVEsS0FBTztRQUFQLEVBQUVDLEdBQUcsRUFBRSxHQUFQO0lBQ2IscUJBQ0ksOERBQUNDOzswQkFDRyw4REFBQ0M7Z0JBQUdDLFdBQVU7MEJBQTBCOzs7Ozs7MEJBQ3hDLDhEQUFDRjtnQkFBSUUsV0FBVTswQkFDVkgsZ0JBQUFBLDBCQUFBQSxJQUFLSSxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2IsOERBQUNMOzswQ0FDRyw4REFBQ007MENBQUtGLEtBQUtHLElBQUk7Ozs7OzswQ0FDZiw4REFBQ0M7Z0NBQUlDLEtBQUtMLEtBQUtNLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDQyxJQUFJLENBQUNDLGFBQWE7Z0NBQUVDLEtBQUtWLEtBQUtHLElBQUk7Ozs7Ozs7dUJBRnpERjs7Ozs7Ozs7Ozs7Ozs7OztBQVE5QjtLQWRTUDtBQWdCVCwrREFBZUEsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9GYXZwb2tlLmpzeD9lNGY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIEZhdnBva2UoeyBmYXYgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC0yeGwgZm9udC1zZW1pYm9sZCAnPllvdXIgRmF2b3VyaXRlPC9oMj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTQgbXgtYXV0byBteS01IHNwYWNlLXktNCAnPlxyXG4gICAgICAgICAgICAgICAge2Zhdj8ubWFwKChkYXRhLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyA+e2RhdGEubmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5zcHJpdGVzLm90aGVyLmhvbWUuZnJvbnRfZGVmYXVsdH0gYWx0PXtkYXRhLm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhdnBva2UiXSwibmFtZXMiOlsiUmVhY3QiLCJGYXZwb2tlIiwiZmF2IiwiZGl2IiwiaDIiLCJjbGFzc05hbWUiLCJtYXAiLCJkYXRhIiwiaW5kZXgiLCJoMyIsIm5hbWUiLCJpbWciLCJzcmMiLCJzcHJpdGVzIiwib3RoZXIiLCJob21lIiwiZnJvbnRfZGVmYXVsdCIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Favpoke.jsx\n"));

/***/ })

});