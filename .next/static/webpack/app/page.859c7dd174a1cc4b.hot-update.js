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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ \"(app-pages-browser)/./node_modules/@web3-react/core/dist/index.js\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3_react_metamask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/metamask */ \"(app-pages-browser)/./node_modules/@web3-react/metamask/dist/index.js\");\n/* harmony import */ var _web3_react_metamask__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_web3_react_metamask__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _abi_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./abi.json */ \"(app-pages-browser)/./app/abi.json\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/NavBar */ \"(app-pages-browser)/./app/components/NavBar.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst [metaMask, hooks] = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.initializeConnector)((actions)=>new _web3_react_metamask__WEBPACK_IMPORTED_MODULE_2__.MetaMask({\n        actions\n    }));\nconst { useChainId, useAccounts, useIsActivating, useIsActive, useProvider } = hooks;\nconst contractChain = 11155111;\nconst contractAddress = \"0x73aA3dbF13B962B9B901B80cCd54bff7F324dc06\";\nfunction Page() {\n    _s();\n    const chainid = useChainId();\n    const accounts = useAccounts();\n    const isActive = useIsActive();\n    const provider = useProvider();\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(undefined);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        void metaMask.connectEagerly().catch(()=>{\n            console.debug(\"Failed to connect eagerly to metamask\");\n        });\n    }, []);\n    const handleConnect = ()=>{\n        metaMask.activate();\n    };\n    const handleDisconnect = ()=>{\n        metaMask.resetState();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                lineNumber: 36,\n                columnNumber: 6\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"flex justify-center items-center m-24\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"card w-96 bg-warning shadow-xl w-[35rem]\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"card-body\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                class: \"card-title\",\n                                children: [\n                                    \"ChainId : \",\n                                    chainid\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"IsActive : \",\n                                    isActive.toString()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Accounts : \",\n                                    accounts ? accounts[0] : \"\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"card-actions justify-center mt-5\",\n                                children: isActive ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    class: \"btn btn-accent\",\n                                    type: \"button\",\n                                    onClick: handleDisconnect,\n                                    value: \"Disconnect\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 17\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    class: \"btn btn-info\",\n                                    type: \"button\",\n                                    onClick: handleConnect,\n                                    value: \"Connect\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Page, \"q/JYZqsUloU2cT1G3ifO5q46Ob8=\", false, function() {\n    return [\n        useChainId,\n        useAccounts,\n        useIsActive,\n        useProvider\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUM4RDtBQUNSO0FBQ1A7QUFDaEI7QUFDbUI7QUFDdEI7QUFDWTtBQUV4QyxNQUFNLENBQUNVLFVBQVVDLE1BQU0sR0FBR1QscUVBQW1CQSxDQUFDLENBQUNVLFVBQVksSUFBSVQsMERBQVFBLENBQUM7UUFBRVM7SUFBUTtBQUNsRixNQUFNLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFQyxlQUFlLEVBQUVDLFdBQVcsRUFBRUMsV0FBVyxFQUFFLEdBQUdOO0FBQy9FLE1BQU1PLGdCQUFnQjtBQUN0QixNQUFNQyxrQkFBa0I7QUFFVCxTQUFTQzs7SUFDdEIsTUFBTUMsVUFBVVI7SUFDaEIsTUFBTVMsV0FBV1I7SUFDakIsTUFBTVMsV0FBV1A7SUFDakIsTUFBTVEsV0FBV1A7SUFDakIsTUFBTSxDQUFDUSxPQUFPQyxTQUFTLEdBQUdwQiwrQ0FBUUEsQ0FBQ3FCO0lBRW5DcEIsZ0RBQVNBLENBQUM7UUFDUixLQUFLRyxTQUFTa0IsY0FBYyxHQUFHQyxLQUFLLENBQUM7WUFDbkNDLFFBQVFDLEtBQUssQ0FBQztRQUNoQjtJQUNGLEdBQUcsRUFBRTtJQUNMLE1BQU1DLGdCQUFnQjtRQUNwQnRCLFNBQVN1QixRQUFRO0lBQ25CO0lBQ0EsTUFBTUMsbUJBQW1CO1FBQ3ZCeEIsU0FBU3lCLFVBQVU7SUFDckI7SUFFQSxxQkFDRTs7MEJBQ0MsOERBQUMxQiwwREFBTUE7Ozs7OzBCQUVOLDhEQUFDMkI7Z0JBQUlDLE9BQU07MEJBQ1QsNEVBQUNEO29CQUFJQyxPQUFNOzhCQUNYLDRFQUFDRDt3QkFBSUMsT0FBTTs7MENBQ1AsOERBQUNDO2dDQUFHRCxPQUFNOztvQ0FBYTtvQ0FBV2hCOzs7Ozs7OzBDQUNsQyw4REFBQ2tCOztvQ0FBRTtvQ0FBWWhCLFNBQVNpQixRQUFROzs7Ozs7OzBDQUNoQyw4REFBQ0Q7O29DQUFFO29DQUFZakIsV0FBV0EsUUFBUSxDQUFDLEVBQUUsR0FBRzs7Ozs7OzswQ0FDMUMsOERBQUNjO2dDQUFJQyxPQUFNOzBDQUNSZCx5QkFDRyw4REFBQ2tCO29DQUFNSixPQUFNO29DQUFpQkssTUFBSztvQ0FBU0MsU0FBU1Q7b0NBQWtCVSxPQUFPOzs7Ozt5REFFaEYsOERBQUNIO29DQUFNSixPQUFNO29DQUFlSyxNQUFLO29DQUFTQyxTQUFTWDtvQ0FBZVksT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRdkY7R0F6Q3dCeEI7O1FBQ05QO1FBQ0NDO1FBQ0FFO1FBQ0FDOzs7S0FKS0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgeyBmb3JtYXRFdGhlciwgcGFyc2VVbml0cyB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC91bml0c1wiXHJcbmltcG9ydCB7IGluaXRpYWxpemVDb25uZWN0b3IgfSBmcm9tIFwiQHdlYjMtcmVhY3QvY29yZVwiXHJcbmltcG9ydCB7IE1ldGFNYXNrIH0gZnJvbSBcIkB3ZWIzLXJlYWN0L21ldGFtYXNrXCJcclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IGFiaSBmcm9tIFwiLi9hYmkuanNvblwiXHJcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4vY29tcG9uZW50cy9OYXZCYXJcIlxyXG5cclxuY29uc3QgW21ldGFNYXNrLCBob29rc10gPSBpbml0aWFsaXplQ29ubmVjdG9yKChhY3Rpb25zKSA9PiBuZXcgTWV0YU1hc2soeyBhY3Rpb25zIH0pKTtcclxuY29uc3QgeyB1c2VDaGFpbklkLCB1c2VBY2NvdW50cywgdXNlSXNBY3RpdmF0aW5nLCB1c2VJc0FjdGl2ZSwgdXNlUHJvdmlkZXIgfSA9IGhvb2tzO1xyXG5jb25zdCBjb250cmFjdENoYWluID0gMTExNTUxMTFcclxuY29uc3QgY29udHJhY3RBZGRyZXNzID0gJzB4NzNhQTNkYkYxM0I5NjJCOUI5MDFCODBjQ2Q1NGJmZjdGMzI0ZGMwNidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XHJcbiAgY29uc3QgY2hhaW5pZCA9IHVzZUNoYWluSWQoKTtcclxuICBjb25zdCBhY2NvdW50cyA9IHVzZUFjY291bnRzKCk7XHJcbiAgY29uc3QgaXNBY3RpdmUgPSB1c2VJc0FjdGl2ZSgpO1xyXG4gIGNvbnN0IHByb3ZpZGVyID0gdXNlUHJvdmlkZXIoKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKHVuZGVmaW5lZClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHZvaWQgbWV0YU1hc2suY29ubmVjdEVhZ2VybHkoKS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZGVidWcoJ0ZhaWxlZCB0byBjb25uZWN0IGVhZ2VybHkgdG8gbWV0YW1hc2snKVxyXG4gICAgfSlcclxuICB9LCBbXSlcclxuICBjb25zdCBoYW5kbGVDb25uZWN0ID0gKCkgPT4ge1xyXG4gICAgbWV0YU1hc2suYWN0aXZhdGUoKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVEaXNjb25uZWN0ID0gKCkgPT4ge1xyXG4gICAgbWV0YU1hc2sucmVzZXRTdGF0ZSgpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICA8TmF2QmFyLz5cclxuICAgICAgey8qIGNhcmQgKi99XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtLTI0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgdy05NiBiZy13YXJuaW5nIHNoYWRvdy14bCB3LVszNXJlbV1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzcz1cImNhcmQtdGl0bGVcIj5DaGFpbklkIDoge2NoYWluaWR9PC9oMj5cclxuICAgICAgICAgICAgPHA+SXNBY3RpdmUgOiB7aXNBY3RpdmUudG9TdHJpbmcoKX08L3A+XHJcbiAgICAgICAgICAgIDxwPkFjY291bnRzIDoge2FjY291bnRzID8gYWNjb3VudHNbMF0gOiAnJ308L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zIGp1c3RpZnktY2VudGVyIG10LTVcIj5cclxuICAgICAgICAgICAge2lzQWN0aXZlID9cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImJ0biBidG4tYWNjZW50XCIgdHlwZT0nYnV0dG9uJyBvbkNsaWNrPXtoYW5kbGVEaXNjb25uZWN0fSB2YWx1ZT17J0Rpc2Nvbm5lY3QnfSAvPlxyXG4gICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJidG4gYnRuLWluZm9cIiB0eXBlPSdidXR0b24nIG9uQ2xpY2s9e2hhbmRsZUNvbm5lY3R9IHZhbHVlPXsnQ29ubmVjdCd9IC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+ICBcclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiZm9ybWF0RXRoZXIiLCJwYXJzZVVuaXRzIiwiaW5pdGlhbGl6ZUNvbm5lY3RvciIsIk1ldGFNYXNrIiwiZXRoZXJzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImFiaSIsIk5hdkJhciIsIm1ldGFNYXNrIiwiaG9va3MiLCJhY3Rpb25zIiwidXNlQ2hhaW5JZCIsInVzZUFjY291bnRzIiwidXNlSXNBY3RpdmF0aW5nIiwidXNlSXNBY3RpdmUiLCJ1c2VQcm92aWRlciIsImNvbnRyYWN0Q2hhaW4iLCJjb250cmFjdEFkZHJlc3MiLCJQYWdlIiwiY2hhaW5pZCIsImFjY291bnRzIiwiaXNBY3RpdmUiLCJwcm92aWRlciIsImVycm9yIiwic2V0RXJyb3IiLCJ1bmRlZmluZWQiLCJjb25uZWN0RWFnZXJseSIsImNhdGNoIiwiY29uc29sZSIsImRlYnVnIiwiaGFuZGxlQ29ubmVjdCIsImFjdGl2YXRlIiwiaGFuZGxlRGlzY29ubmVjdCIsInJlc2V0U3RhdGUiLCJkaXYiLCJjbGFzcyIsImgyIiwicCIsInRvU3RyaW5nIiwiaW5wdXQiLCJ0eXBlIiwib25DbGljayIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});