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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst Poke = ()=>{\n    _s();\n    const [pokem, setPokem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let abortController = new AbortController();\n        const loadPoke = async ()=>{\n            try {\n                setLoading(true);\n                let res = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"https://pokeapi.co/api/v2/pokemon/1\", {\n                    signal: abortController.signal\n                });\n                setPokem(res.data);\n            } catch (error) {\n                setError(error);\n            }\n        };\n        loadPoke();\n        return ()=>abortController.abort();\n    }, []);\n    console.log(pokem);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Pokemon Name: \",\n                        pokem.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\blockchain\\\\app\\\\Poke.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: pokem === null || pokem === void 0 ? void 0 : pokem.spri,\n                    alt: \"\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\blockchain\\\\app\\\\Poke.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\blockchain\\\\app\\\\Poke.jsx\",\n            lineNumber: 30,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(Poke, \"fVL6Ys0zA7a8TmSEi6aqz2NJ38o=\");\n_c = Poke;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Poke);\nvar _c;\n$RefreshReg$(_c, \"Poke\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Qb2tlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBCO0FBQ3dCO0FBRWxELE1BQU1JLE9BQU87O0lBQ1QsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ0ssU0FBU0MsV0FBVyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNPLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUM7SUFFbkNDLGdEQUFTQSxDQUFDO1FBQ04sSUFBSVEsa0JBQWtCLElBQUlDO1FBQzFCLE1BQU1DLFdBQVc7WUFDYixJQUFJO2dCQUNBTCxXQUFXO2dCQUNYLElBQUlNLE1BQU0sTUFBTWQsNkNBQUtBLENBQUNlLEdBQUcsQ0FBRSx1Q0FBc0M7b0JBQzdEQyxRQUFRTCxnQkFBZ0JLLE1BQU07Z0JBQ2xDO2dCQUNBVixTQUFTUSxJQUFJRyxJQUFJO1lBQ3JCLEVBQUUsT0FBT1IsT0FBTztnQkFDWkMsU0FBU0Q7WUFDYjtRQUNKO1FBQ0FJO1FBQ0EsT0FBTyxJQUFNRixnQkFBZ0JPLEtBQUs7SUFDdEMsR0FBRyxFQUFFO0lBRUxDLFFBQVFDLEdBQUcsQ0FBQ2Y7SUFFWixxQkFDSTtrQkFDSSw0RUFBQ2dCOzs4QkFDRyw4REFBQ0M7O3dCQUFFO3dCQUFlakIsTUFBTWtCLElBQUk7Ozs7Ozs7OEJBQzVCLDhEQUFDQztvQkFBSUMsR0FBRyxFQUFFcEIsa0JBQUFBLDRCQUFBQSxNQUFPcUIsSUFBSTtvQkFBRUMsS0FBSTs7Ozs7Ozs7Ozs7OztBQUkzQztHQWhDTXZCO0tBQUFBO0FBa0NOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9Qb2tlLmpzeD8yOTI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmNvbnN0IFBva2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbcG9rZW0sIHNldFBva2VtXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTsgICAgXHJcbiAgICAgICAgY29uc3QgbG9hZFBva2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLzFgLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2lnbmFsOiBhYm9ydENvbnRyb2xsZXIuc2lnbmFsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHNldFBva2VtKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICAgXHJcbiAgICAgICAgbG9hZFBva2UoKTsgICAgIFxyXG4gICAgICAgIHJldHVybiAoKSA9PiBhYm9ydENvbnRyb2xsZXIuYWJvcnQoKTtcclxuICAgIH0sIFtdKTtcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2cocG9rZW0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwPlBva2Vtb24gTmFtZToge3Bva2VtLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3Bva2VtPy5zcHJpfSBhbHQ9XCJcIiAvPiAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9rZTtcclxuIl0sIm5hbWVzIjpbImF4aW9zIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlBva2UiLCJwb2tlbSIsInNldFBva2VtIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwiYWJvcnRDb250cm9sbGVyIiwiQWJvcnRDb250cm9sbGVyIiwibG9hZFBva2UiLCJyZXMiLCJnZXQiLCJzaWduYWwiLCJkYXRhIiwiYWJvcnQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwicCIsIm5hbWUiLCJpbWciLCJzcmMiLCJzcHJpIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Poke.jsx\n"));

/***/ })

});