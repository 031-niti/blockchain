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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ \"(app-pages-browser)/./node_modules/@web3-react/core/dist/index.js\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3_react_metamask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/metamask */ \"(app-pages-browser)/./node_modules/@web3-react/metamask/dist/index.js\");\n/* harmony import */ var _web3_react_metamask__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_web3_react_metamask__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _abi_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./abi.json */ \"(app-pages-browser)/./app/abi.json\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/NavBar */ \"(app-pages-browser)/./app/components/NavBar.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst [metaMask, hooks] = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.initializeConnector)((actions)=>new _web3_react_metamask__WEBPACK_IMPORTED_MODULE_2__.MetaMask({\n        actions\n    }));\nconst { useChainId, useAccounts, useIsActivating, useIsActive, useProvider } = hooks;\nconst contractChain = 11155111;\nconst contractAddress = \"0x73aA3dbF13B962B9B901B80cCd54bff7F324dc06\";\nfunction Page() {\n    _s();\n    const chainid = useChainId();\n    const accounts = useAccounts();\n    const isActive = useIsActive();\n    const provider = useProvider();\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(undefined);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        void metaMask.connectEagerly().catch(()=>{\n            console.debug(\"Failed to connect eagerly to metamask\");\n        });\n    }, []);\n    const handleConnect = ()=>{\n        metaMask.activate();\n    };\n    const handleDisconnect = ()=>{\n        metaMask.resetState();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                lineNumber: 36,\n                columnNumber: 6\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"flex justify-center items-center m-24\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"card w-96 bg-warning shadow-xl w-[35rem]\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"card-body\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                class: \"card-title\",\n                                children: [\n                                    \"ChainId : \",\n                                    chainid\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"IsActive : \",\n                                    isActive.toString()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Accounts : \",\n                                    accounts ? accounts[0] : \"\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"card-actions justify-center mt-5\",\n                                children: isActive ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    class: \"btn btn-ghost\",\n                                    type: \"button\",\n                                    onClick: handleDisconnect,\n                                    value: \"Disconnect\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 17\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    class: \"btn btn-ghost hover:bg-bg-transparent\",\n                                    type: \"button\",\n                                    onClick: handleConnect,\n                                    value: \"Connect\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Page, \"q/JYZqsUloU2cT1G3ifO5q46Ob8=\", false, function() {\n    return [\n        useChainId,\n        useAccounts,\n        useIsActive,\n        useProvider\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUM4RDtBQUNSO0FBQ1A7QUFDaEI7QUFDbUI7QUFDdEI7QUFDWTtBQUV4QyxNQUFNLENBQUNVLFVBQVVDLE1BQU0sR0FBR1QscUVBQW1CQSxDQUFDLENBQUNVLFVBQVksSUFBSVQsMERBQVFBLENBQUM7UUFBRVM7SUFBUTtBQUNsRixNQUFNLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFQyxlQUFlLEVBQUVDLFdBQVcsRUFBRUMsV0FBVyxFQUFFLEdBQUdOO0FBQy9FLE1BQU1PLGdCQUFnQjtBQUN0QixNQUFNQyxrQkFBa0I7QUFFVCxTQUFTQzs7SUFDdEIsTUFBTUMsVUFBVVI7SUFDaEIsTUFBTVMsV0FBV1I7SUFDakIsTUFBTVMsV0FBV1A7SUFDakIsTUFBTVEsV0FBV1A7SUFDakIsTUFBTSxDQUFDUSxPQUFPQyxTQUFTLEdBQUdwQiwrQ0FBUUEsQ0FBQ3FCO0lBRW5DcEIsZ0RBQVNBLENBQUM7UUFDUixLQUFLRyxTQUFTa0IsY0FBYyxHQUFHQyxLQUFLLENBQUM7WUFDbkNDLFFBQVFDLEtBQUssQ0FBQztRQUNoQjtJQUNGLEdBQUcsRUFBRTtJQUNMLE1BQU1DLGdCQUFnQjtRQUNwQnRCLFNBQVN1QixRQUFRO0lBQ25CO0lBQ0EsTUFBTUMsbUJBQW1CO1FBQ3ZCeEIsU0FBU3lCLFVBQVU7SUFDckI7SUFFQSxxQkFDRTs7MEJBQ0MsOERBQUMxQiwwREFBTUE7Ozs7OzBCQUVOLDhEQUFDMkI7Z0JBQUlDLE9BQU07MEJBQ1QsNEVBQUNEO29CQUFJQyxPQUFNOzhCQUNYLDRFQUFDRDt3QkFBSUMsT0FBTTs7MENBQ1AsOERBQUNDO2dDQUFHRCxPQUFNOztvQ0FBYTtvQ0FBV2hCOzs7Ozs7OzBDQUNsQyw4REFBQ2tCOztvQ0FBRTtvQ0FBWWhCLFNBQVNpQixRQUFROzs7Ozs7OzBDQUNoQyw4REFBQ0Q7O29DQUFFO29DQUFZakIsV0FBV0EsUUFBUSxDQUFDLEVBQUUsR0FBRzs7Ozs7OzswQ0FDMUMsOERBQUNjO2dDQUFJQyxPQUFNOzBDQUNSZCx5QkFDRyw4REFBQ2tCO29DQUFNSixPQUFNO29DQUFnQkssTUFBSztvQ0FBU0MsU0FBU1Q7b0NBQWtCVSxPQUFPOzs7Ozt5REFFN0UsOERBQUNIO29DQUFNSixPQUFNO29DQUF3Q0ssTUFBSztvQ0FBU0MsU0FBU1g7b0NBQWVZLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWxIO0dBekN3QnhCOztRQUNOUDtRQUNDQztRQUNBRTtRQUNBQzs7O0tBSktHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IHsgZm9ybWF0RXRoZXIsIHBhcnNlVW5pdHMgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvdW5pdHNcIlxyXG5pbXBvcnQgeyBpbml0aWFsaXplQ29ubmVjdG9yIH0gZnJvbSBcIkB3ZWIzLXJlYWN0L2NvcmVcIlxyXG5pbXBvcnQgeyBNZXRhTWFzayB9IGZyb20gXCJAd2ViMy1yZWFjdC9tZXRhbWFza1wiXHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBhYmkgZnJvbSBcIi4vYWJpLmpzb25cIlxyXG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuL2NvbXBvbmVudHMvTmF2QmFyXCJcclxuXHJcbmNvbnN0IFttZXRhTWFzaywgaG9va3NdID0gaW5pdGlhbGl6ZUNvbm5lY3RvcigoYWN0aW9ucykgPT4gbmV3IE1ldGFNYXNrKHsgYWN0aW9ucyB9KSk7XHJcbmNvbnN0IHsgdXNlQ2hhaW5JZCwgdXNlQWNjb3VudHMsIHVzZUlzQWN0aXZhdGluZywgdXNlSXNBY3RpdmUsIHVzZVByb3ZpZGVyIH0gPSBob29rcztcclxuY29uc3QgY29udHJhY3RDaGFpbiA9IDExMTU1MTExXHJcbmNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9ICcweDczYUEzZGJGMTNCOTYyQjlCOTAxQjgwY0NkNTRiZmY3RjMyNGRjMDYnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xyXG4gIGNvbnN0IGNoYWluaWQgPSB1c2VDaGFpbklkKCk7XHJcbiAgY29uc3QgYWNjb3VudHMgPSB1c2VBY2NvdW50cygpO1xyXG4gIGNvbnN0IGlzQWN0aXZlID0gdXNlSXNBY3RpdmUoKTtcclxuICBjb25zdCBwcm92aWRlciA9IHVzZVByb3ZpZGVyKCk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB2b2lkIG1ldGFNYXNrLmNvbm5lY3RFYWdlcmx5KCkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmRlYnVnKCdGYWlsZWQgdG8gY29ubmVjdCBlYWdlcmx5IHRvIG1ldGFtYXNrJylcclxuICAgIH0pXHJcbiAgfSwgW10pXHJcbiAgY29uc3QgaGFuZGxlQ29ubmVjdCA9ICgpID0+IHtcclxuICAgIG1ldGFNYXNrLmFjdGl2YXRlKClcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRGlzY29ubmVjdCA9ICgpID0+IHtcclxuICAgIG1ldGFNYXNrLnJlc2V0U3RhdGUoKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgPE5hdkJhci8+XHJcbiAgICAgIHsvKiBjYXJkICovfVxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbS0yNFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIHctOTYgYmctd2FybmluZyBzaGFkb3cteGwgdy1bMzVyZW1dXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJjYXJkLXRpdGxlXCI+Q2hhaW5JZCA6IHtjaGFpbmlkfTwvaDI+XHJcbiAgICAgICAgICAgIDxwPklzQWN0aXZlIDoge2lzQWN0aXZlLnRvU3RyaW5nKCl9PC9wPlxyXG4gICAgICAgICAgICA8cD5BY2NvdW50cyA6IHthY2NvdW50cyA/IGFjY291bnRzWzBdIDogJyd9PC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9ucyBqdXN0aWZ5LWNlbnRlciBtdC01XCI+XHJcbiAgICAgICAgICAgIHtpc0FjdGl2ZSA/XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJidG4gYnRuLWdob3N0XCIgdHlwZT0nYnV0dG9uJyBvbkNsaWNrPXtoYW5kbGVEaXNjb25uZWN0fSB2YWx1ZT17J0Rpc2Nvbm5lY3QnfSAvPlxyXG4gICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImJ0biBidG4tZ2hvc3QgaG92ZXI6YmctYmctdHJhbnNwYXJlbnRcIiB0eXBlPSdidXR0b24nIG9uQ2xpY2s9e2hhbmRsZUNvbm5lY3R9IHZhbHVlPXsnQ29ubmVjdCd9IC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+ICBcclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiZm9ybWF0RXRoZXIiLCJwYXJzZVVuaXRzIiwiaW5pdGlhbGl6ZUNvbm5lY3RvciIsIk1ldGFNYXNrIiwiZXRoZXJzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImFiaSIsIk5hdkJhciIsIm1ldGFNYXNrIiwiaG9va3MiLCJhY3Rpb25zIiwidXNlQ2hhaW5JZCIsInVzZUFjY291bnRzIiwidXNlSXNBY3RpdmF0aW5nIiwidXNlSXNBY3RpdmUiLCJ1c2VQcm92aWRlciIsImNvbnRyYWN0Q2hhaW4iLCJjb250cmFjdEFkZHJlc3MiLCJQYWdlIiwiY2hhaW5pZCIsImFjY291bnRzIiwiaXNBY3RpdmUiLCJwcm92aWRlciIsImVycm9yIiwic2V0RXJyb3IiLCJ1bmRlZmluZWQiLCJjb25uZWN0RWFnZXJseSIsImNhdGNoIiwiY29uc29sZSIsImRlYnVnIiwiaGFuZGxlQ29ubmVjdCIsImFjdGl2YXRlIiwiaGFuZGxlRGlzY29ubmVjdCIsInJlc2V0U3RhdGUiLCJkaXYiLCJjbGFzcyIsImgyIiwicCIsInRvU3RyaW5nIiwiaW5wdXQiLCJ0eXBlIiwib25DbGljayIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});