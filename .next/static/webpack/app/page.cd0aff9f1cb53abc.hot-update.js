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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ \"(app-pages-browser)/./node_modules/@web3-react/core/dist/index.js\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3_react_metamask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/metamask */ \"(app-pages-browser)/./node_modules/@web3-react/metamask/dist/index.js\");\n/* harmony import */ var _web3_react_metamask__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_web3_react_metamask__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/contract/contract.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _abi_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./abi.json */ \"(app-pages-browser)/./app/abi.json\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst [metaMask, hooks] = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.initializeConnector)((actions)=>new _web3_react_metamask__WEBPACK_IMPORTED_MODULE_2__.MetaMask({\n        actions\n    }));\nconst { useChainId, useAccounts, useIsActivating, useIsActive, useProvider } = hooks;\nconst contractChain = 11155111;\nconst contractAddress = \"0x73aA3dbF13B962B9B901B80cCd54bff7F324dc06\";\nfunction Page() {\n    _s();\n    const chainid = useChainId();\n    const accounts = useAccounts();\n    const isActive = useIsActive();\n    const provider = useProvider();\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(undefined);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        void metaMask.connectEagerly().catch(()=>{\n            console.debug(\"Failed to connect eagerly to metamask\");\n        });\n    }, []);\n    const handleConnect = ()=>{\n        metaMask.activate();\n    };\n    const handleDisconnect = ()=>{\n        metaMask.resetState();\n    };\n    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    (useEffect)=>{\n        const fetchbalance = async ()=>{\n            const signer = provider.geySigner();\n            const smartContract = new ethers__WEBPACK_IMPORTED_MODULE_5__.Contract(contractAddress, _abi_json__WEBPACK_IMPORTED_MODULE_4__, signer);\n            const myBalance = await smartContract.balanceOf(ac);\n        };\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navbar bg-neutral\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"navbar-start \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"btn btn-link no-underline hover:no-underline  text-xl text-base-100\",\n                            children: \"BlockChain\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"navbar-center outline outline-2 outline-neutral-content rounded-full p-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-base-300\",\n                            children: [\n                                \"Accounts : \",\n                                accounts ? accounts[0] : \"\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"navbar-end flex-3\",\n                        children: isActive ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn btn-ghost text-error\",\n                            type: \"button\",\n                            onClick: handleDisconnect,\n                            value: \"Disconnect\",\n                            children: \"Disconnect\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn btn-ghost text-primary\",\n                            type: \"button\",\n                            onClick: handleConnect,\n                            value: \"Connect\",\n                            children: \"Connect\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                            lineNumber: 59,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center m-24\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card w-96 bg-base-200 shadow-lg w-[20rem] items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-body\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"card-title\",\n                                children: [\n                                    \"ChainId:  \",\n                                    chainid\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"IsActive:  \",\n                                    isActive.toString()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Page, \"D+U5Rgku6pzh6TYJxfDPG4gDoIg=\", false, function() {\n    return [\n        useChainId,\n        useAccounts,\n        useIsActive,\n        useProvider\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUM4RDtBQUNSO0FBQ1A7QUFDaEI7QUFDbUI7QUFDdEI7QUFFNUIsTUFBTSxDQUFDUyxVQUFVQyxNQUFNLEdBQUdSLHFFQUFtQkEsQ0FBQyxDQUFDUyxVQUFZLElBQUlSLDBEQUFRQSxDQUFDO1FBQUVRO0lBQVE7QUFDbEYsTUFBTSxFQUFFQyxVQUFVLEVBQUVDLFdBQVcsRUFBRUMsZUFBZSxFQUFFQyxXQUFXLEVBQUVDLFdBQVcsRUFBRSxHQUFHTjtBQUMvRSxNQUFNTyxnQkFBZ0I7QUFDdEIsTUFBTUMsa0JBQWtCO0FBRVQsU0FBU0M7O0lBQ3RCLE1BQU1DLFVBQVVSO0lBQ2hCLE1BQU1TLFdBQVdSO0lBQ2pCLE1BQU1TLFdBQVdQO0lBQ2pCLE1BQU1RLFdBQVdQO0lBQ2pCLE1BQU0sQ0FBQ1EsT0FBT0MsU0FBUyxHQUFHbkIsK0NBQVFBLENBQUNvQjtJQUVuQ25CLGdEQUFTQSxDQUFDO1FBQ1IsS0FBS0UsU0FBU2tCLGNBQWMsR0FBR0MsS0FBSyxDQUFDO1lBQ25DQyxRQUFRQyxLQUFLLENBQUM7UUFDaEI7SUFDRixHQUFHLEVBQUU7SUFDTCxNQUFNQyxnQkFBZ0I7UUFDcEJ0QixTQUFTdUIsUUFBUTtJQUNuQjtJQUNBLE1BQU1DLG1CQUFtQjtRQUN2QnhCLFNBQVN5QixVQUFVO0lBQ3JCO0lBRUEsTUFBTSxDQUFDQyxTQUFRQyxXQUFXLEdBQUc5QiwrQ0FBUUEsQ0FBQztJQUN0Q0MsQ0FBQUE7UUFDRSxNQUFNOEIsZUFBZTtZQUNuQixNQUFNQyxTQUFTZixTQUFTZ0IsU0FBUztZQUNqQyxNQUFNQyxnQkFBZ0IsSUFBSXBDLDRDQUFlLENBQ3ZDYyxpQkFBaUJWLHNDQUFHQSxFQUFFOEI7WUFFeEIsTUFBTUksWUFBWSxNQUFNRixjQUFjRyxTQUFTLENBQUNDO1FBQ2xEO0lBQ0Y7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNDO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNDOzRCQUFFRCxXQUFVO3NDQUFzRTs7Ozs7Ozs7Ozs7a0NBSXJGLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0U7NEJBQUtGLFdBQVU7O2dDQUFnQjtnQ0FBWXpCLFdBQVdBLFFBQVEsQ0FBQyxFQUFFLEdBQUc7Ozs7Ozs7Ozs7OztrQ0FFdkUsOERBQUN3Qjt3QkFBSUMsV0FBVTtrQ0FDWnhCLHlCQUNDLDhEQUFDMkI7NEJBQU9ILFdBQVU7NEJBQTJCSSxNQUFLOzRCQUFTQyxTQUFTbEI7NEJBQWtCbUIsT0FBTztzQ0FBYzs7Ozs7aURBRTNHLDhEQUFDSDs0QkFBT0gsV0FBVTs0QkFBNkJJLE1BQUs7NEJBQVNDLFNBQVNwQjs0QkFBZXFCLE9BQU87c0NBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUs3Ryw4REFBQ1A7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNPO2dDQUFHUCxXQUFVOztvQ0FBYTtvQ0FBVzFCOzs7Ozs7OzBDQUN0Qyw4REFBQ2tDOztvQ0FBRTtvQ0FBWWhDLFNBQVNpQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTVDO0dBNUR3QnBDOztRQUNOUDtRQUNDQztRQUNBRTtRQUNBQzs7O0tBSktHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IHsgZm9ybWF0RXRoZXIsIHBhcnNlVW5pdHMgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvdW5pdHNcIlxyXG5pbXBvcnQgeyBpbml0aWFsaXplQ29ubmVjdG9yIH0gZnJvbSBcIkB3ZWIzLXJlYWN0L2NvcmVcIlxyXG5pbXBvcnQgeyBNZXRhTWFzayB9IGZyb20gXCJAd2ViMy1yZWFjdC9tZXRhbWFza1wiXHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBhYmkgZnJvbSBcIi4vYWJpLmpzb25cIlxyXG5cclxuY29uc3QgW21ldGFNYXNrLCBob29rc10gPSBpbml0aWFsaXplQ29ubmVjdG9yKChhY3Rpb25zKSA9PiBuZXcgTWV0YU1hc2soeyBhY3Rpb25zIH0pKTtcclxuY29uc3QgeyB1c2VDaGFpbklkLCB1c2VBY2NvdW50cywgdXNlSXNBY3RpdmF0aW5nLCB1c2VJc0FjdGl2ZSwgdXNlUHJvdmlkZXIgfSA9IGhvb2tzO1xyXG5jb25zdCBjb250cmFjdENoYWluID0gMTExNTUxMTFcclxuY29uc3QgY29udHJhY3RBZGRyZXNzID0gJzB4NzNhQTNkYkYxM0I5NjJCOUI5MDFCODBjQ2Q1NGJmZjdGMzI0ZGMwNidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XHJcbiAgY29uc3QgY2hhaW5pZCA9IHVzZUNoYWluSWQoKTtcclxuICBjb25zdCBhY2NvdW50cyA9IHVzZUFjY291bnRzKCk7XHJcbiAgY29uc3QgaXNBY3RpdmUgPSB1c2VJc0FjdGl2ZSgpO1xyXG4gIGNvbnN0IHByb3ZpZGVyID0gdXNlUHJvdmlkZXIoKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKHVuZGVmaW5lZClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHZvaWQgbWV0YU1hc2suY29ubmVjdEVhZ2VybHkoKS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZGVidWcoJ0ZhaWxlZCB0byBjb25uZWN0IGVhZ2VybHkgdG8gbWV0YW1hc2snKVxyXG4gICAgfSlcclxuICB9LCBbXSlcclxuICBjb25zdCBoYW5kbGVDb25uZWN0ID0gKCkgPT4ge1xyXG4gICAgbWV0YU1hc2suYWN0aXZhdGUoKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVEaXNjb25uZWN0ID0gKCkgPT4ge1xyXG4gICAgbWV0YU1hc2sucmVzZXRTdGF0ZSgpXHJcbiAgfVxyXG5cclxuICBjb25zdCBbYmFsYW5jZSxzZXRCYWxhbmNlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIHVzZUVmZmVjdCA9PntcclxuICAgIGNvbnN0IGZldGNoYmFsYW5jZSA9IGFzeW5jKCk9PntcclxuICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V5U2lnbmVyKCk7XHJcbiAgICAgIGNvbnN0IHNtYXJ0Q29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxyXG4gICAgICAgIGNvbnRyYWN0QWRkcmVzcywgYWJpLCBzaWduZXJcclxuICAgICAgICApXHJcbiAgICAgIGNvbnN0IG15QmFsYW5jZSA9IGF3YWl0IHNtYXJ0Q29udHJhY3QuYmFsYW5jZU9mKGFjKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyIGJnLW5ldXRyYWxcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1zdGFydCBcIj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tbGluayBuby11bmRlcmxpbmUgaG92ZXI6bm8tdW5kZXJsaW5lICB0ZXh0LXhsIHRleHQtYmFzZS0xMDBcIj5cclxuICAgICAgICAgICAgQmxvY2tDaGFpblxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWNlbnRlciBvdXRsaW5lIG91dGxpbmUtMiBvdXRsaW5lLW5ldXRyYWwtY29udGVudCByb3VuZGVkLWZ1bGwgcC0yXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UtMzAwXCI+QWNjb3VudHMgOiB7YWNjb3VudHMgPyBhY2NvdW50c1swXSA6ICcnfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1lbmQgZmxleC0zXCI+XHJcbiAgICAgICAgICB7aXNBY3RpdmUgP1xyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZ2hvc3QgdGV4dC1lcnJvclwiIHR5cGU9J2J1dHRvbicgb25DbGljaz17aGFuZGxlRGlzY29ubmVjdH0gdmFsdWU9eydEaXNjb25uZWN0J30+RGlzY29ubmVjdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1naG9zdCB0ZXh0LXByaW1hcnlcIiB0eXBlPSdidXR0b24nIG9uQ2xpY2s9e2hhbmRsZUNvbm5lY3R9IHZhbHVlPXsnQ29ubmVjdCd9PkNvbm5lY3Q8L2J1dHRvbj5cclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiBjYXJkICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG0tMjRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgdy05NiBiZy1iYXNlLTIwMCBzaGFkb3ctbGcgdy1bMjByZW1dIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5DaGFpbklkOiAge2NoYWluaWR9PC9oMj5cclxuICAgICAgICAgICAgPHA+SXNBY3RpdmU6ICB7aXNBY3RpdmUudG9TdHJpbmcoKX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj4gIFxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJmb3JtYXRFdGhlciIsInBhcnNlVW5pdHMiLCJpbml0aWFsaXplQ29ubmVjdG9yIiwiTWV0YU1hc2siLCJldGhlcnMiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYWJpIiwibWV0YU1hc2siLCJob29rcyIsImFjdGlvbnMiLCJ1c2VDaGFpbklkIiwidXNlQWNjb3VudHMiLCJ1c2VJc0FjdGl2YXRpbmciLCJ1c2VJc0FjdGl2ZSIsInVzZVByb3ZpZGVyIiwiY29udHJhY3RDaGFpbiIsImNvbnRyYWN0QWRkcmVzcyIsIlBhZ2UiLCJjaGFpbmlkIiwiYWNjb3VudHMiLCJpc0FjdGl2ZSIsInByb3ZpZGVyIiwiZXJyb3IiLCJzZXRFcnJvciIsInVuZGVmaW5lZCIsImNvbm5lY3RFYWdlcmx5IiwiY2F0Y2giLCJjb25zb2xlIiwiZGVidWciLCJoYW5kbGVDb25uZWN0IiwiYWN0aXZhdGUiLCJoYW5kbGVEaXNjb25uZWN0IiwicmVzZXRTdGF0ZSIsImJhbGFuY2UiLCJzZXRCYWxhbmNlIiwiZmV0Y2hiYWxhbmNlIiwic2lnbmVyIiwiZ2V5U2lnbmVyIiwic21hcnRDb250cmFjdCIsIkNvbnRyYWN0IiwibXlCYWxhbmNlIiwiYmFsYW5jZU9mIiwiYWMiLCJkaXYiLCJjbGFzc05hbWUiLCJhIiwic3BhbiIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwidmFsdWUiLCJoMiIsInAiLCJ0b1N0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});