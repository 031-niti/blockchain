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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ \"(app-pages-browser)/./node_modules/@web3-react/core/dist/index.js\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3_react_metamask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/metamask */ \"(app-pages-browser)/./node_modules/@web3-react/metamask/dist/index.js\");\n/* harmony import */ var _web3_react_metamask__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_web3_react_metamask__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/contract/contract.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _abi_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./abi.json */ \"(app-pages-browser)/./app/abi.json\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst [metaMask, hooks] = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.initializeConnector)((actions)=>new _web3_react_metamask__WEBPACK_IMPORTED_MODULE_2__.MetaMask({\n        actions\n    }));\nconst { useChainId, useAccounts, useIsActivating, useIsActive, useProvider } = hooks;\nconst contractChain = 11155111;\nconst contractAddress = \"0x73aA3dbF13B962B9B901B80cCd54bff7F324dc06\";\nfunction Page() {\n    _s();\n    const chainid = useChainId();\n    const account = useAccounts();\n    const isActive = useIsActive();\n    const provider = useProvider();\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(undefined);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        void metaMask.connectEagerly().catch(()=>{\n            console.debug(\"Failed to connect eagerly to metamask\");\n        });\n    }, []);\n    const handleConnect = ()=>{\n        metaMask.activate();\n    };\n    const handleDisconnect = ()=>{\n        metaMask.resetState();\n    };\n    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchbalance = async ()=>{\n            const signer = provider.geySigner();\n            const smartContract = new ethers__WEBPACK_IMPORTED_MODULE_5__.Contract(contractAddress, _abi_json__WEBPACK_IMPORTED_MODULE_4__, signer);\n            const myBalance = await smartContract.balanceOf(account[0]);\n            console.log(myBalance);\n            setBalance(myBalance);\n        };\n        if (isActive) {}\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navbar bg-neutral\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"navbar-start \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"btn btn-link no-underline hover:no-underline  text-xl text-base-100\",\n                            children: \"BlockChain\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"navbar-center outline outline-2 outline-neutral-content rounded-full p-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-base-300\",\n                            children: [\n                                \"Accounts : \",\n                                account ? account[0] : \"\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"navbar-end flex-3\",\n                        children: isActive ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn btn-ghost text-error\",\n                            type: \"button\",\n                            onClick: handleDisconnect,\n                            value: \"Disconnect\",\n                            children: \"Disconnect\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn btn-ghost text-primary\",\n                            type: \"button\",\n                            onClick: handleConnect,\n                            value: \"Connect\",\n                            children: \"Connect\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                            lineNumber: 64,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center m-24\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card w-96 bg-base-200 shadow-lg w-[20rem] items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-body\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"card-title\",\n                                children: [\n                                    \"ChainId:  \",\n                                    chainid\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"IsActive:  \",\n                                    isActive.toString()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Page, \"NGgJe+Jge0EZ5ecX+4IgtiklUr8=\", false, function() {\n    return [\n        useChainId,\n        useAccounts,\n        useIsActive,\n        useProvider\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUM4RDtBQUNSO0FBQ1A7QUFDaEI7QUFDbUI7QUFDdEI7QUFFNUIsTUFBTSxDQUFDUyxVQUFVQyxNQUFNLEdBQUdSLHFFQUFtQkEsQ0FBQyxDQUFDUyxVQUFZLElBQUlSLDBEQUFRQSxDQUFDO1FBQUVRO0lBQVE7QUFDbEYsTUFBTSxFQUFFQyxVQUFVLEVBQUVDLFdBQVcsRUFBRUMsZUFBZSxFQUFFQyxXQUFXLEVBQUVDLFdBQVcsRUFBRSxHQUFHTjtBQUMvRSxNQUFNTyxnQkFBZ0I7QUFDdEIsTUFBTUMsa0JBQWtCO0FBRVQsU0FBU0M7O0lBQ3RCLE1BQU1DLFVBQVVSO0lBQ2hCLE1BQU1TLFVBQVVSO0lBQ2hCLE1BQU1TLFdBQVdQO0lBQ2pCLE1BQU1RLFdBQVdQO0lBQ2pCLE1BQU0sQ0FBQ1EsT0FBT0MsU0FBUyxHQUFHbkIsK0NBQVFBLENBQUNvQjtJQUVuQ25CLGdEQUFTQSxDQUFDO1FBQ1IsS0FBS0UsU0FBU2tCLGNBQWMsR0FBR0MsS0FBSyxDQUFDO1lBQ25DQyxRQUFRQyxLQUFLLENBQUM7UUFDaEI7SUFDRixHQUFHLEVBQUU7SUFDTCxNQUFNQyxnQkFBZ0I7UUFDcEJ0QixTQUFTdUIsUUFBUTtJQUNuQjtJQUNBLE1BQU1DLG1CQUFtQjtRQUN2QnhCLFNBQVN5QixVQUFVO0lBQ3JCO0lBRUEsTUFBTSxDQUFDQyxTQUFRQyxXQUFXLEdBQUc5QiwrQ0FBUUEsQ0FBQztJQUN0Q0MsZ0RBQVNBLENBQUU7UUFDVCxNQUFNOEIsZUFBZTtZQUNuQixNQUFNQyxTQUFTZixTQUFTZ0IsU0FBUztZQUNqQyxNQUFNQyxnQkFBZ0IsSUFBSXBDLDRDQUFlLENBQ3ZDYyxpQkFBaUJWLHNDQUFHQSxFQUFFOEI7WUFFeEIsTUFBTUksWUFBWSxNQUFNRixjQUFjRyxTQUFTLENBQUN0QixPQUFPLENBQUMsRUFBRTtZQUMxRFEsUUFBUWUsR0FBRyxDQUFDRjtZQUNaTixXQUFXTTtRQUNiO1FBQ0EsSUFBSXBCLFVBQVUsQ0FFZDtJQUNGO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDdUI7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0M7NEJBQUVELFdBQVU7c0NBQXNFOzs7Ozs7Ozs7OztrQ0FJckYsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRTs0QkFBS0YsV0FBVTs7Z0NBQWdCO2dDQUFZekIsVUFBVUEsT0FBTyxDQUFDLEVBQUUsR0FBRzs7Ozs7Ozs7Ozs7O2tDQUVyRSw4REFBQ3dCO3dCQUFJQyxXQUFVO2tDQUNaeEIseUJBQ0MsOERBQUMyQjs0QkFBT0gsV0FBVTs0QkFBMkJJLE1BQUs7NEJBQVNDLFNBQVNsQjs0QkFBa0JtQixPQUFPO3NDQUFjOzs7OztpREFFM0csOERBQUNIOzRCQUFPSCxXQUFVOzRCQUE2QkksTUFBSzs0QkFBU0MsU0FBU3BCOzRCQUFlcUIsT0FBTztzQ0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSzdHLDhEQUFDUDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ087Z0NBQUdQLFdBQVU7O29DQUFhO29DQUFXMUI7Ozs7Ozs7MENBQ3RDLDhEQUFDa0M7O29DQUFFO29DQUFZaEMsU0FBU2lDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNNUM7R0FqRXdCcEM7O1FBQ05QO1FBQ0FDO1FBQ0NFO1FBQ0FDOzs7S0FKS0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgeyBmb3JtYXRFdGhlciwgcGFyc2VVbml0cyB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC91bml0c1wiXHJcbmltcG9ydCB7IGluaXRpYWxpemVDb25uZWN0b3IgfSBmcm9tIFwiQHdlYjMtcmVhY3QvY29yZVwiXHJcbmltcG9ydCB7IE1ldGFNYXNrIH0gZnJvbSBcIkB3ZWIzLXJlYWN0L21ldGFtYXNrXCJcclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IGFiaSBmcm9tIFwiLi9hYmkuanNvblwiXHJcblxyXG5jb25zdCBbbWV0YU1hc2ssIGhvb2tzXSA9IGluaXRpYWxpemVDb25uZWN0b3IoKGFjdGlvbnMpID0+IG5ldyBNZXRhTWFzayh7IGFjdGlvbnMgfSkpO1xyXG5jb25zdCB7IHVzZUNoYWluSWQsIHVzZUFjY291bnRzLCB1c2VJc0FjdGl2YXRpbmcsIHVzZUlzQWN0aXZlLCB1c2VQcm92aWRlciB9ID0gaG9va3M7XHJcbmNvbnN0IGNvbnRyYWN0Q2hhaW4gPSAxMTE1NTExMVxyXG5jb25zdCBjb250cmFjdEFkZHJlc3MgPSAnMHg3M2FBM2RiRjEzQjk2MkI5QjkwMUI4MGNDZDU0YmZmN0YzMjRkYzA2J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSgpIHtcclxuICBjb25zdCBjaGFpbmlkID0gdXNlQ2hhaW5JZCgpO1xyXG4gIGNvbnN0IGFjY291bnQgPSB1c2VBY2NvdW50cygpO1xyXG4gIGNvbnN0IGlzQWN0aXZlID0gdXNlSXNBY3RpdmUoKTtcclxuICBjb25zdCBwcm92aWRlciA9IHVzZVByb3ZpZGVyKCk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB2b2lkIG1ldGFNYXNrLmNvbm5lY3RFYWdlcmx5KCkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmRlYnVnKCdGYWlsZWQgdG8gY29ubmVjdCBlYWdlcmx5IHRvIG1ldGFtYXNrJylcclxuICAgIH0pXHJcbiAgfSwgW10pXHJcbiAgY29uc3QgaGFuZGxlQ29ubmVjdCA9ICgpID0+IHtcclxuICAgIG1ldGFNYXNrLmFjdGl2YXRlKClcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRGlzY29ubmVjdCA9ICgpID0+IHtcclxuICAgIG1ldGFNYXNrLnJlc2V0U3RhdGUoKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgW2JhbGFuY2Usc2V0QmFsYW5jZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICB1c2VFZmZlY3QgKCgpPT57XHJcbiAgICBjb25zdCBmZXRjaGJhbGFuY2UgPSBhc3luYygpPT57XHJcbiAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdleVNpZ25lcigpO1xyXG4gICAgICBjb25zdCBzbWFydENvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcclxuICAgICAgICBjb250cmFjdEFkZHJlc3MsIGFiaSwgc2lnbmVyXHJcbiAgICAgICAgKVxyXG4gICAgICBjb25zdCBteUJhbGFuY2UgPSBhd2FpdCBzbWFydENvbnRyYWN0LmJhbGFuY2VPZihhY2NvdW50WzBdKVxyXG4gICAgICBjb25zb2xlLmxvZyhteUJhbGFuY2UpO1xyXG4gICAgICBzZXRCYWxhbmNlKG15QmFsYW5jZSlcclxuICAgIH1cclxuICAgIGlmIChpc0FjdGl2ZSkge1xyXG4gICAgICBcclxuICAgIH1cclxuICB9KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXIgYmctbmV1dHJhbFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLXN0YXJ0IFwiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rIG5vLXVuZGVybGluZSBob3Zlcjpuby11bmRlcmxpbmUgIHRleHQteGwgdGV4dC1iYXNlLTEwMFwiPlxyXG4gICAgICAgICAgICBCbG9ja0NoYWluXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItY2VudGVyIG91dGxpbmUgb3V0bGluZS0yIG91dGxpbmUtbmV1dHJhbC1jb250ZW50IHJvdW5kZWQtZnVsbCBwLTJcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmFzZS0zMDBcIj5BY2NvdW50cyA6IHthY2NvdW50ID8gYWNjb3VudFswXSA6ICcnfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1lbmQgZmxleC0zXCI+XHJcbiAgICAgICAgICB7aXNBY3RpdmUgP1xyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZ2hvc3QgdGV4dC1lcnJvclwiIHR5cGU9J2J1dHRvbicgb25DbGljaz17aGFuZGxlRGlzY29ubmVjdH0gdmFsdWU9eydEaXNjb25uZWN0J30+RGlzY29ubmVjdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1naG9zdCB0ZXh0LXByaW1hcnlcIiB0eXBlPSdidXR0b24nIG9uQ2xpY2s9e2hhbmRsZUNvbm5lY3R9IHZhbHVlPXsnQ29ubmVjdCd9PkNvbm5lY3Q8L2J1dHRvbj5cclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiBjYXJkICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG0tMjRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgdy05NiBiZy1iYXNlLTIwMCBzaGFkb3ctbGcgdy1bMjByZW1dIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5DaGFpbklkOiAge2NoYWluaWR9PC9oMj5cclxuICAgICAgICAgICAgPHA+SXNBY3RpdmU6ICB7aXNBY3RpdmUudG9TdHJpbmcoKX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj4gIFxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJmb3JtYXRFdGhlciIsInBhcnNlVW5pdHMiLCJpbml0aWFsaXplQ29ubmVjdG9yIiwiTWV0YU1hc2siLCJldGhlcnMiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYWJpIiwibWV0YU1hc2siLCJob29rcyIsImFjdGlvbnMiLCJ1c2VDaGFpbklkIiwidXNlQWNjb3VudHMiLCJ1c2VJc0FjdGl2YXRpbmciLCJ1c2VJc0FjdGl2ZSIsInVzZVByb3ZpZGVyIiwiY29udHJhY3RDaGFpbiIsImNvbnRyYWN0QWRkcmVzcyIsIlBhZ2UiLCJjaGFpbmlkIiwiYWNjb3VudCIsImlzQWN0aXZlIiwicHJvdmlkZXIiLCJlcnJvciIsInNldEVycm9yIiwidW5kZWZpbmVkIiwiY29ubmVjdEVhZ2VybHkiLCJjYXRjaCIsImNvbnNvbGUiLCJkZWJ1ZyIsImhhbmRsZUNvbm5lY3QiLCJhY3RpdmF0ZSIsImhhbmRsZURpc2Nvbm5lY3QiLCJyZXNldFN0YXRlIiwiYmFsYW5jZSIsInNldEJhbGFuY2UiLCJmZXRjaGJhbGFuY2UiLCJzaWduZXIiLCJnZXlTaWduZXIiLCJzbWFydENvbnRyYWN0IiwiQ29udHJhY3QiLCJteUJhbGFuY2UiLCJiYWxhbmNlT2YiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJhIiwic3BhbiIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwidmFsdWUiLCJoMiIsInAiLCJ0b1N0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});