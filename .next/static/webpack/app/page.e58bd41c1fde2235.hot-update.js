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

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ \"(app-pages-browser)/./node_modules/@web3-react/core/dist/index.js\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3_react_metamask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/metamask */ \"(app-pages-browser)/./node_modules/@web3-react/metamask/dist/index.js\");\n/* harmony import */ var _web3_react_metamask__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_web3_react_metamask__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/NavBar */ \"(app-pages-browser)/./app/components/NavBar.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst [metaMask, hooks] = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.initializeConnector)((actions)=>new _web3_react_metamask__WEBPACK_IMPORTED_MODULE_2__.MetaMask({\n        actions\n    }));\nconst { useChainId, useAccounts, useIsActive, useProvider } = hooks;\nfunction Page() {\n    _s();\n    const chainid = useChainId();\n    const accounts = useAccounts();\n    const isActive = useIsActive();\n    const provider = useProvider();\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(undefined);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        void metaMask.connectEagerly().catch(()=>{\n            console.debug(\"Failed to connect eagerly to metamask\");\n        });\n    }, []);\n    const handleConnect = ()=>{\n        metaMask.activate();\n    };\n    const handleDisconnect = ()=>{\n        metaMask.resetState();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                lineNumber: 33,\n                columnNumber: 6\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"flex justify-center items-center m-24\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"card w-96 bg-base-200 shadow-lg w-[35rem]\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"card-body\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                class: \"card-title\",\n                                children: [\n                                    \"ChainId : \",\n                                    chainid\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"IsActive : \",\n                                    isActive.toString()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Accounts : \",\n                                    accounts ? accounts[0] : \"\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"card-actions justify-center mt-5\",\n                                children: isActive ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    class: \"btn btn-ghost hover:hover:bg-currentColor text-error\",\n                                    type: \"button\",\n                                    onClick: handleDisconnect,\n                                    value: \"Disconnect\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 17\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    class: \"btn btn-ghost hover:hover:bg-currentColor text-primary\",\n                                    type: \"button\",\n                                    onClick: handleConnect,\n                                    value: \"Connect\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Page, \"q/JYZqsUloU2cT1G3ifO5q46Ob8=\", false, function() {\n    return [\n        useChainId,\n        useAccounts,\n        useIsActive,\n        useProvider\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQzhEO0FBQ1I7QUFDUDtBQUNoQjtBQUNtQjtBQUNWO0FBRXhDLE1BQU0sQ0FBQ1MsVUFBVUMsTUFBTSxHQUFHUixxRUFBbUJBLENBQUMsQ0FBQ1MsVUFBWSxJQUFJUiwwREFBUUEsQ0FBQztRQUFFUTtJQUFRO0FBQ2xGLE1BQU0sRUFBRUMsVUFBVSxFQUFFQyxXQUFXLEVBQUVDLFdBQVcsRUFBRUMsV0FBVyxFQUFFLEdBQUdMO0FBRS9DLFNBQVNNOztJQUN0QixNQUFNQyxVQUFVTDtJQUNoQixNQUFNTSxXQUFXTDtJQUNqQixNQUFNTSxXQUFXTDtJQUNqQixNQUFNTSxXQUFXTDtJQUNqQixNQUFNLENBQUNNLE9BQU9DLFNBQVMsR0FBR2hCLCtDQUFRQSxDQUFDaUI7SUFFbkNoQixnREFBU0EsQ0FBQztRQUNSLEtBQUtFLFNBQVNlLGNBQWMsR0FBR0MsS0FBSyxDQUFDO1lBQ25DQyxRQUFRQyxLQUFLLENBQUM7UUFDaEI7SUFDRixHQUFHLEVBQUU7SUFDTCxNQUFNQyxnQkFBZ0I7UUFDcEJuQixTQUFTb0IsUUFBUTtJQUNuQjtJQUNBLE1BQU1DLG1CQUFtQjtRQUN2QnJCLFNBQVNzQixVQUFVO0lBQ3JCO0lBRUEscUJBQ0U7OzBCQUNDLDhEQUFDdkIsMERBQU1BOzs7OzswQkFFTiw4REFBQ3dCO2dCQUFJQyxPQUFNOzBCQUNULDRFQUFDRDtvQkFBSUMsT0FBTTs4QkFDWCw0RUFBQ0Q7d0JBQUlDLE9BQU07OzBDQUNQLDhEQUFDQztnQ0FBR0QsT0FBTTs7b0NBQWE7b0NBQVdoQjs7Ozs7OzswQ0FDbEMsOERBQUNrQjs7b0NBQUU7b0NBQVloQixTQUFTaUIsUUFBUTs7Ozs7OzswQ0FDaEMsOERBQUNEOztvQ0FBRTtvQ0FBWWpCLFdBQVdBLFFBQVEsQ0FBQyxFQUFFLEdBQUc7Ozs7Ozs7MENBQzFDLDhEQUFDYztnQ0FBSUMsT0FBTTswQ0FDUmQseUJBQ0csOERBQUNrQjtvQ0FBTUosT0FBTTtvQ0FBdURLLE1BQUs7b0NBQVNDLFNBQVNUO29DQUFrQlUsT0FBTzs7Ozs7eURBRXBILDhEQUFDSDtvQ0FBTUosT0FBTTtvQ0FBeURLLE1BQUs7b0NBQVNDLFNBQVNYO29DQUFlWSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFuSTtHQXpDd0J4Qjs7UUFDTko7UUFDQ0M7UUFDQUM7UUFDQUM7OztLQUpLQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qcz9iZTY3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCB7IGZvcm1hdEV0aGVyLCBwYXJzZVVuaXRzIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L3VuaXRzXCJcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZUNvbm5lY3RvciB9IGZyb20gXCJAd2ViMy1yZWFjdC9jb3JlXCJcclxuaW1wb3J0IHsgTWV0YU1hc2sgfSBmcm9tIFwiQHdlYjMtcmVhY3QvbWV0YW1hc2tcIlxyXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuL2NvbXBvbmVudHMvTmF2QmFyXCJcclxuXHJcbmNvbnN0IFttZXRhTWFzaywgaG9va3NdID0gaW5pdGlhbGl6ZUNvbm5lY3RvcigoYWN0aW9ucykgPT4gbmV3IE1ldGFNYXNrKHsgYWN0aW9ucyB9KSk7XHJcbmNvbnN0IHsgdXNlQ2hhaW5JZCwgdXNlQWNjb3VudHMsIHVzZUlzQWN0aXZlLCB1c2VQcm92aWRlciB9ID0gaG9va3M7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xyXG4gIGNvbnN0IGNoYWluaWQgPSB1c2VDaGFpbklkKCk7XHJcbiAgY29uc3QgYWNjb3VudHMgPSB1c2VBY2NvdW50cygpO1xyXG4gIGNvbnN0IGlzQWN0aXZlID0gdXNlSXNBY3RpdmUoKTtcclxuICBjb25zdCBwcm92aWRlciA9IHVzZVByb3ZpZGVyKCk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB2b2lkIG1ldGFNYXNrLmNvbm5lY3RFYWdlcmx5KCkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmRlYnVnKCdGYWlsZWQgdG8gY29ubmVjdCBlYWdlcmx5IHRvIG1ldGFtYXNrJylcclxuICAgIH0pXHJcbiAgfSwgW10pXHJcbiAgY29uc3QgaGFuZGxlQ29ubmVjdCA9ICgpID0+IHtcclxuICAgIG1ldGFNYXNrLmFjdGl2YXRlKClcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRGlzY29ubmVjdCA9ICgpID0+IHtcclxuICAgIG1ldGFNYXNrLnJlc2V0U3RhdGUoKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgPE5hdkJhci8+XHJcbiAgICAgIHsvKiBjYXJkICovfVxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbS0yNFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIHctOTYgYmctYmFzZS0yMDAgc2hhZG93LWxnIHctWzM1cmVtXVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzPVwiY2FyZC10aXRsZVwiPkNoYWluSWQgOiB7Y2hhaW5pZH08L2gyPlxyXG4gICAgICAgICAgICA8cD5Jc0FjdGl2ZSA6IHtpc0FjdGl2ZS50b1N0cmluZygpfTwvcD5cclxuICAgICAgICAgICAgPHA+QWNjb3VudHMgOiB7YWNjb3VudHMgPyBhY2NvdW50c1swXSA6ICcnfTwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnMganVzdGlmeS1jZW50ZXIgbXQtNVwiPlxyXG4gICAgICAgICAgICB7aXNBY3RpdmUgP1xyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiYnRuIGJ0bi1naG9zdCBob3Zlcjpob3ZlcjpiZy1jdXJyZW50Q29sb3IgdGV4dC1lcnJvclwiIHR5cGU9J2J1dHRvbicgb25DbGljaz17aGFuZGxlRGlzY29ubmVjdH0gdmFsdWU9eydEaXNjb25uZWN0J30gLz5cclxuICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJidG4gYnRuLWdob3N0IGhvdmVyOmhvdmVyOmJnLWN1cnJlbnRDb2xvciB0ZXh0LXByaW1hcnlcIiB0eXBlPSdidXR0b24nIG9uQ2xpY2s9e2hhbmRsZUNvbm5lY3R9IHZhbHVlPXsnQ29ubmVjdCd9IC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+ICBcclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiZm9ybWF0RXRoZXIiLCJwYXJzZVVuaXRzIiwiaW5pdGlhbGl6ZUNvbm5lY3RvciIsIk1ldGFNYXNrIiwiZXRoZXJzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk5hdkJhciIsIm1ldGFNYXNrIiwiaG9va3MiLCJhY3Rpb25zIiwidXNlQ2hhaW5JZCIsInVzZUFjY291bnRzIiwidXNlSXNBY3RpdmUiLCJ1c2VQcm92aWRlciIsIlBhZ2UiLCJjaGFpbmlkIiwiYWNjb3VudHMiLCJpc0FjdGl2ZSIsInByb3ZpZGVyIiwiZXJyb3IiLCJzZXRFcnJvciIsInVuZGVmaW5lZCIsImNvbm5lY3RFYWdlcmx5IiwiY2F0Y2giLCJjb25zb2xlIiwiZGVidWciLCJoYW5kbGVDb25uZWN0IiwiYWN0aXZhdGUiLCJoYW5kbGVEaXNjb25uZWN0IiwicmVzZXRTdGF0ZSIsImRpdiIsImNsYXNzIiwiaDIiLCJwIiwidG9TdHJpbmciLCJpbnB1dCIsInR5cGUiLCJvbkNsaWNrIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});