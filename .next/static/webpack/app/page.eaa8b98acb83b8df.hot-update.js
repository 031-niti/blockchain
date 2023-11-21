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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ethersproject/units */ \"(app-pages-browser)/./node_modules/@ethersproject/units/lib.esm/index.js\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ \"(app-pages-browser)/./node_modules/@web3-react/core/dist/index.js\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3_react_metamask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/metamask */ \"(app-pages-browser)/./node_modules/@web3-react/metamask/dist/index.js\");\n/* harmony import */ var _web3_react_metamask__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_web3_react_metamask__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/contract/contract.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _abi_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./abi.json */ \"(app-pages-browser)/./app/abi.json\");\n/* harmony import */ var _Poke__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Poke */ \"(app-pages-browser)/./app/Poke.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst [metaMask, hooks] = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.initializeConnector)((actions)=>new _web3_react_metamask__WEBPACK_IMPORTED_MODULE_2__.MetaMask({\n        actions\n    }));\nconst { useChainId, useAccounts, useIsActivating, useIsActive, useProvider } = hooks;\nconst contractChain = 11155111;\nconst contractAddress = \"0x73aA3dbF13B962B9B901B80cCd54bff7F324dc06\";\nfunction Page() {\n    _s();\n    const chainid = useChainId();\n    const accounts = useAccounts();\n    const isActive = useIsActive();\n    const provider = useProvider();\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(undefined);\n    const [transactionHash, setTransactionHash] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        void metaMask.connectEagerly().catch(()=>{\n            console.debug(\"Failed to connect eagerly to metamask\");\n        });\n    }, []);\n    const handleConnect = ()=>{\n        metaMask.activate();\n    };\n    const handleDisconnect = ()=>{\n        metaMask.resetState();\n    };\n    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchbalance = async ()=>{\n            const signer = provider.getSigner();\n            const smartContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.Contract(contractAddress, _abi_json__WEBPACK_IMPORTED_MODULE_4__, signer);\n            const myBalance = await smartContract.balanceOf(accounts[0]);\n            console.log((0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_7__.formatEther)(myBalance));\n            setBalance((0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_7__.formatEther)(myBalance));\n        };\n        if (isActive) {\n            fetchbalance();\n        }\n    }, [\n        isActive\n    ]);\n    const [nitiValue, setNitiValue] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const handleSetNitiValue = (e)=>{\n        setNitiValue(e.target.value);\n    };\n    const handleBuy = async ()=>{\n        try {\n            if (nitiValue <= 0) {\n                return;\n            }\n            const signer = provider.getSigner();\n            const smartContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.Contract(contractAddress, _abi_json__WEBPACK_IMPORTED_MODULE_4__, signer);\n            const buyValue = (0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_7__.parseUnits)(nitiValue.toString(), \"ether\");\n            const tx = await smartContract.buy({\n                value: buyValue.toString()\n            });\n            console.log(\"Transaction hash!!\", tx.hash);\n            window.location.reload();\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navbar bg-neutral\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"navbar-start \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"btn btn-link no-underline hover:no-underline  text-xl text-base-100\",\n                            children: \"Buy SepoliaETH\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"navbar-end flex-3\",\n                        children: isActive ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn btn-ghost text-error\",\n                            type: \"button\",\n                            onClick: handleDisconnect,\n                            value: \"Disconnect\",\n                            children: \"Disconnect\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                            lineNumber: 86,\n                            columnNumber: 13\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn btn-ghost text-info\",\n                            type: \"button\",\n                            onClick: handleConnect,\n                            value: \"Connect\",\n                            children: \"Connect\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                            lineNumber: 88,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            isActive && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center m-24 text-center drop-shadow-lg \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card w-[36rem] bg-base-100 shadow-lg w-[20rem] items-center drop-shadow border\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-body \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"indicator font-bold mb-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"indicator-item indicator-top indicator-center badge text-lg border-none w-24 bg-base-200 p-3\",\n                                            children: \"ChainId\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                                            lineNumber: 98,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"input input-bordered w-36 flex justify-center items-center text-sm p-6 bg-base-200 \",\n                                            children: chainid\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                                            lineNumber: 99,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                                    lineNumber: 97,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-5\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"indicator font-bold mb-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"indicator-item indicator-top indicator-center badge border-none text-[18px] w-28 bg-base-200 p-3\",\n                                                children: \"Accounts\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                                                lineNumber: 103,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"input input-bordered w-[26rem] flex justify-center items-center text-sm p-6 bg-base-200 \",\n                                                children: accounts ? accounts[0] : \"\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                                                lineNumber: 104,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                                        lineNumber: 102,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                                    lineNumber: 101,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-5\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"indicator font-bold mb-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"indicator-item indicator-top indicator-center badge border-none text-[18px] w-24 bg-base-200 p-3\",\n                                                children: \"Balance\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                                                lineNumber: 109,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"input input-bordered w-36 flex justify-center items-center text-sm p-6 bg-base-200 \",\n                                                children: isActive && balance\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                                                lineNumber: 110,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                                        lineNumber: 108,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                                    lineNumber: 107,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-5\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"indicator font-bold mb-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"indicator-item indicator-top indicator-center badge border-none text-[18px] w-24 bg-base-200 p-3\",\n                                                children: \"Buy\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                                                lineNumber: 115,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                className: \"input input-bordered w-48 flex justify-center items-center text-sm p-6 bg-base-200 text-center\",\n                                                onChange: handleSetNitiValue\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                                                lineNumber: 116,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                                        lineNumber: 114,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                                    lineNumber: 113,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"btn btn-error text-neutral w-28 hover:bg-red-500 hover:text-base-100\",\n                                    onClick: handleBuy,\n                                    children: \"BUY\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                                    lineNumber: 119,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                            lineNumber: 96,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                        lineNumber: 95,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                    lineNumber: 94,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                lineNumber: 93,\n                columnNumber: 9\n            }, this),\n            !isActive && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto flex justify-center items-center my-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Poke, {}, void 0, false, {\n                    fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                    lineNumber: 127,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                lineNumber: 126,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Page, \"gyaBH0vssfvizeDPlf4gKzhtmO0=\", false, function() {\n    return [\n        useChainId,\n        useAccounts,\n        useIsActive,\n        useProvider\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1FBQ05QO1FBQ0NDO1FBQ0FFO1FBQ0FDOzs7S0FKS0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgeyBmb3JtYXRFdGhlciwgcGFyc2VVbml0cyB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC91bml0c1wiXHJcbmltcG9ydCB7IGluaXRpYWxpemVDb25uZWN0b3IgfSBmcm9tIFwiQHdlYjMtcmVhY3QvY29yZVwiXHJcbmltcG9ydCB7IE1ldGFNYXNrIH0gZnJvbSBcIkB3ZWIzLXJlYWN0L21ldGFtYXNrXCJcclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IGFiaSBmcm9tIFwiLi9hYmkuanNvblwiXHJcbmltcG9ydCBwb2tlIGZyb20gXCIuL1Bva2VcIlxyXG5cclxuY29uc3QgW21ldGFNYXNrLCBob29rc10gPSBpbml0aWFsaXplQ29ubmVjdG9yKChhY3Rpb25zKSA9PiBuZXcgTWV0YU1hc2soeyBhY3Rpb25zIH0pKTtcclxuY29uc3QgeyB1c2VDaGFpbklkLCB1c2VBY2NvdW50cywgdXNlSXNBY3RpdmF0aW5nLCB1c2VJc0FjdGl2ZSwgdXNlUHJvdmlkZXIgfSA9IGhvb2tzO1xyXG5jb25zdCBjb250cmFjdENoYWluID0gMTExNTUxMTFcclxuY29uc3QgY29udHJhY3RBZGRyZXNzID0gJzB4NzNhQTNkYkYxM0I5NjJCOUI5MDFCODBjQ2Q1NGJmZjdGMzI0ZGMwNidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XHJcbiAgY29uc3QgY2hhaW5pZCA9IHVzZUNoYWluSWQoKTtcclxuICBjb25zdCBhY2NvdW50cyA9IHVzZUFjY291bnRzKCk7XHJcbiAgY29uc3QgaXNBY3RpdmUgPSB1c2VJc0FjdGl2ZSgpO1xyXG4gIGNvbnN0IHByb3ZpZGVyID0gdXNlUHJvdmlkZXIoKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKHVuZGVmaW5lZClcclxuICBjb25zdCBbdHJhbnNhY3Rpb25IYXNoLCBzZXRUcmFuc2FjdGlvbkhhc2hdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB2b2lkIG1ldGFNYXNrLmNvbm5lY3RFYWdlcmx5KCkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmRlYnVnKCdGYWlsZWQgdG8gY29ubmVjdCBlYWdlcmx5IHRvIG1ldGFtYXNrJylcclxuICAgIH0pXHJcbiAgfSwgW10pXHJcbiAgY29uc3QgaGFuZGxlQ29ubmVjdCA9ICgpID0+IHtcclxuICAgIG1ldGFNYXNrLmFjdGl2YXRlKClcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRGlzY29ubmVjdCA9ICgpID0+IHtcclxuICAgIG1ldGFNYXNrLnJlc2V0U3RhdGUoKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoYmFsYW5jZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XHJcbiAgICAgIGNvbnN0IHNtYXJ0Q29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxyXG4gICAgICAgIGNvbnRyYWN0QWRkcmVzcywgYWJpLCBzaWduZXJcclxuICAgICAgKVxyXG4gICAgICBjb25zdCBteUJhbGFuY2UgPSBhd2FpdCBzbWFydENvbnRyYWN0LmJhbGFuY2VPZihhY2NvdW50c1swXSlcclxuICAgICAgY29uc29sZS5sb2coZm9ybWF0RXRoZXIobXlCYWxhbmNlKSk7XHJcbiAgICAgIHNldEJhbGFuY2UoZm9ybWF0RXRoZXIobXlCYWxhbmNlKSlcclxuICAgIH1cclxuICAgIGlmIChpc0FjdGl2ZSkge1xyXG4gICAgICBmZXRjaGJhbGFuY2UoKTtcclxuICAgIH1cclxuICB9LCBbaXNBY3RpdmVdKTtcclxuXHJcbiAgY29uc3QgW25pdGlWYWx1ZSwgc2V0Tml0aVZhbHVlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IGhhbmRsZVNldE5pdGlWYWx1ZSA9IChlKSA9PntcclxuICAgIHNldE5pdGlWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVCdXkgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAobml0aVZhbHVlIDw9IDApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XHJcbiAgICAgIGNvbnN0IHNtYXJ0Q29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxyXG4gICAgICAgIGNvbnRyYWN0QWRkcmVzcywgYWJpLCBzaWduZXJcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgYnV5VmFsdWUgPSBwYXJzZVVuaXRzKG5pdGlWYWx1ZS50b1N0cmluZygpLCBcImV0aGVyXCIpO1xyXG4gICAgICBjb25zdCB0eCA9IGF3YWl0IHNtYXJ0Q29udHJhY3QuYnV5KHtcclxuICAgICAgICB2YWx1ZTogYnV5VmFsdWUudG9TdHJpbmcoKVxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coXCJUcmFuc2FjdGlvbiBoYXNoISFcIix0eC5oYXNoKTtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyIGJnLW5ldXRyYWxcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1zdGFydCBcIj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tbGluayBuby11bmRlcmxpbmUgaG92ZXI6bm8tdW5kZXJsaW5lICB0ZXh0LXhsIHRleHQtYmFzZS0xMDBcIj5cclxuICAgICAgICAgICAgQnV5IFNlcG9saWFFVEhcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1lbmQgZmxleC0zXCI+XHJcbiAgICAgICAgICB7aXNBY3RpdmUgP1xyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZ2hvc3QgdGV4dC1lcnJvclwiIHR5cGU9J2J1dHRvbicgb25DbGljaz17aGFuZGxlRGlzY29ubmVjdH0gdmFsdWU9eydEaXNjb25uZWN0J30+RGlzY29ubmVjdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1naG9zdCB0ZXh0LWluZm9cIiB0eXBlPSdidXR0b24nIG9uQ2xpY2s9e2hhbmRsZUNvbm5lY3R9IHZhbHVlPXsnQ29ubmVjdCd9PkNvbm5lY3Q8L2J1dHRvbj5cclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtpc0FjdGl2ZSAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtLTI0IHRleHQtY2VudGVyIGRyb3Atc2hhZG93LWxnIFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCB3LVszNnJlbV0gYmctYmFzZS0xMDAgc2hhZG93LWxnIHctWzIwcmVtXSBpdGVtcy1jZW50ZXIgZHJvcC1zaGFkb3cgYm9yZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRpY2F0b3IgZm9udC1ib2xkIG1iLTJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImluZGljYXRvci1pdGVtIGluZGljYXRvci10b3AgaW5kaWNhdG9yLWNlbnRlciBiYWRnZSB0ZXh0LWxnIGJvcmRlci1ub25lIHctMjQgYmctYmFzZS0yMDAgcC0zXCI+Q2hhaW5JZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlucHV0IGlucHV0LWJvcmRlcmVkIHctMzYgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1zbSBwLTYgYmctYmFzZS0yMDAgXCI+e2NoYWluaWR9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRpY2F0b3IgZm9udC1ib2xkIG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5kaWNhdG9yLWl0ZW0gaW5kaWNhdG9yLXRvcCBpbmRpY2F0b3ItY2VudGVyIGJhZGdlIGJvcmRlci1ub25lIHRleHQtWzE4cHhdIHctMjggYmctYmFzZS0yMDAgcC0zXCI+QWNjb3VudHM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlucHV0IGlucHV0LWJvcmRlcmVkIHctWzI2cmVtXSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LXNtIHAtNiBiZy1iYXNlLTIwMCBcIj57YWNjb3VudHMgPyBhY2NvdW50c1swXSA6ICcnfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRpY2F0b3IgZm9udC1ib2xkIG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5kaWNhdG9yLWl0ZW0gaW5kaWNhdG9yLXRvcCBpbmRpY2F0b3ItY2VudGVyIGJhZGdlIGJvcmRlci1ub25lIHRleHQtWzE4cHhdIHctMjQgYmctYmFzZS0yMDAgcC0zXCI+QmFsYW5jZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5wdXQgaW5wdXQtYm9yZGVyZWQgdy0zNiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LXNtIHAtNiBiZy1iYXNlLTIwMCBcIj57aXNBY3RpdmUgJiYgYmFsYW5jZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5kaWNhdG9yIGZvbnQtYm9sZCBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImluZGljYXRvci1pdGVtIGluZGljYXRvci10b3AgaW5kaWNhdG9yLWNlbnRlciBiYWRnZSBib3JkZXItbm9uZSB0ZXh0LVsxOHB4XSB3LTI0IGJnLWJhc2UtMjAwIHAtM1wiPkJ1eTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0IGlucHV0LWJvcmRlcmVkIHctNDggZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1zbSBwLTYgYmctYmFzZS0yMDAgdGV4dC1jZW50ZXJcIiBvbkNoYW5nZT17aGFuZGxlU2V0Tml0aVZhbHVlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1lcnJvciB0ZXh0LW5ldXRyYWwgdy0yOCBob3ZlcjpiZy1yZWQtNTAwIGhvdmVyOnRleHQtYmFzZS0xMDBcIiBvbkNsaWNrPXtoYW5kbGVCdXl9PkJVWTwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIHshaXNBY3RpdmUgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXktOFwiPlxyXG4gICAgICAgICAgPFBva2UvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJmb3JtYXRFdGhlciIsInBhcnNlVW5pdHMiLCJpbml0aWFsaXplQ29ubmVjdG9yIiwiTWV0YU1hc2siLCJldGhlcnMiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYWJpIiwicG9rZSIsIm1ldGFNYXNrIiwiaG9va3MiLCJhY3Rpb25zIiwidXNlQ2hhaW5JZCIsInVzZUFjY291bnRzIiwidXNlSXNBY3RpdmF0aW5nIiwidXNlSXNBY3RpdmUiLCJ1c2VQcm92aWRlciIsImNvbnRyYWN0Q2hhaW4iLCJjb250cmFjdEFkZHJlc3MiLCJQYWdlIiwiY2hhaW5pZCIsImFjY291bnRzIiwiaXNBY3RpdmUiLCJwcm92aWRlciIsImVycm9yIiwic2V0RXJyb3IiLCJ1bmRlZmluZWQiLCJ0cmFuc2FjdGlvbkhhc2giLCJzZXRUcmFuc2FjdGlvbkhhc2giLCJjb25uZWN0RWFnZXJseSIsImNhdGNoIiwiY29uc29sZSIsImRlYnVnIiwiaGFuZGxlQ29ubmVjdCIsImFjdGl2YXRlIiwiaGFuZGxlRGlzY29ubmVjdCIsInJlc2V0U3RhdGUiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsImZldGNoYmFsYW5jZSIsInNpZ25lciIsImdldFNpZ25lciIsInNtYXJ0Q29udHJhY3QiLCJDb250cmFjdCIsIm15QmFsYW5jZSIsImJhbGFuY2VPZiIsImxvZyIsIm5pdGlWYWx1ZSIsInNldE5pdGlWYWx1ZSIsImhhbmRsZVNldE5pdGlWYWx1ZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUJ1eSIsImJ1eVZhbHVlIiwidG9TdHJpbmciLCJ0eCIsImJ1eSIsImhhc2giLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImVyciIsImRpdiIsImNsYXNzTmFtZSIsImEiLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsInNwYW4iLCJwIiwiaW5wdXQiLCJvbkNoYW5nZSIsIlBva2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});