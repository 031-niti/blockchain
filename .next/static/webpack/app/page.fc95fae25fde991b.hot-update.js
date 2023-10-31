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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ethersproject/units */ \"(app-pages-browser)/./node_modules/@ethersproject/units/lib.esm/index.js\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ \"(app-pages-browser)/./node_modules/@web3-react/core/dist/index.js\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3_react_metamask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/metamask */ \"(app-pages-browser)/./node_modules/@web3-react/metamask/dist/index.js\");\n/* harmony import */ var _web3_react_metamask__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_web3_react_metamask__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/contract/contract.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _abi_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./abi.json */ \"(app-pages-browser)/./app/abi.json\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst [metaMask, hooks] = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.initializeConnector)((actions)=>new _web3_react_metamask__WEBPACK_IMPORTED_MODULE_2__.MetaMask({\n        actions\n    }));\nconst { useChainId, useAccounts, useIsActivating, useIsActive, useProvider } = hooks;\nconst contractChain = 11155111;\nconst contractAddress = \"0x73aA3dbF13B962B9B901B80cCd54bff7F324dc06\";\nfunction Page() {\n    _s();\n    const chainid = useChainId();\n    const accounts = useAccounts();\n    const isActive = useIsActive();\n    const provider = useProvider();\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(undefined);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        void metaMask.connectEagerly().catch(()=>{\n            console.debug(\"Failed to connect eagerly to metamask\");\n        });\n    }, []);\n    const handleConnect = ()=>{\n        metaMask.activate();\n    };\n    const handleDisconnect = ()=>{\n        metaMask.resetState();\n    };\n    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchbalance = async ()=>{\n            const signer = provider.getSigner();\n            const smartContract = new ethers__WEBPACK_IMPORTED_MODULE_5__.Contract(contractAddress, _abi_json__WEBPACK_IMPORTED_MODULE_4__, signer);\n            const myBalance = await smartContract.balanceOf(accounts[0]);\n            console.log((0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_6__.formatEther)(myBalance));\n            setBalance((0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_6__.formatEther)(myBalance));\n        };\n        if (isActive) {\n            fetchbalance();\n        }\n    }, [\n        isActive\n    ]);\n    const [nitiValue, setNitiValue] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const handleSetNitiValue = (e)=>{\n        setNitiValue(e.target.value);\n    };\n    const handleBuy = async ()=>{\n        try {\n            if (nitiValue <= 0) {\n                return;\n            }\n            const signer = provider.getSigner();\n            const smartContract = new ethers__WEBPACK_IMPORTED_MODULE_5__.Contract(contractAddress, _abi_json__WEBPACK_IMPORTED_MODULE_4__, signer);\n            const buyValue = (0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_6__.parseUnits)(nitiValue.toString(), \"ether\");\n            const tx = await smartContract.buy({\n                value: buyValue.toString()\n            });\n            console.log(\"Transaction hash!!\", tx.hash);\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navbar bg-neutral\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"navbar-start \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"btn btn-link no-underline hover:no-underline  text-xl text-base-100\",\n                            children: \"BlockChain\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"navbar-center outline outline-2 outline-neutral-content rounded-full p-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-base-300 px-3\",\n                            children: [\n                                \"Accounts : \",\n                                accounts ? accounts[0] : \"\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"navbar-end flex-3\",\n                        children: isActive ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn btn-ghost text-error\",\n                            type: \"button\",\n                            onClick: handleDisconnect,\n                            value: \"Disconnect\",\n                            children: \"Disconnect\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn btn-ghost text-info\",\n                            type: \"button\",\n                            onClick: handleConnect,\n                            value: \"Connect\",\n                            children: \"Connect\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                            lineNumber: 89,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center m-24 text-center drop-shadow-lg \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card w-[36rem] bg-base-100 shadow-lg w-[20rem] items-center drop-shadow border\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-body \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"indicator font-bold mb-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"indicator-item indicator-top indicator-center badge text-lg border-none w-24 bg-base-200 p-3\",\n                                            children: \"ChainId\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                                            lineNumber: 99,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"input input-bordered w-36 flex justify-center items-center text-sm p-6 bg-base-200 \",\n                                            children: chainid\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                                            lineNumber: 100,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                                    lineNumber: 98,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-5\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"indicator font-bold mb-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"indicator-item indicator-top indicator-center badge border-none text-[18px] w-28 bg-base-200 p-3\",\n                                                children: \"Accounts\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                                                lineNumber: 105,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"input input-bordered w-[26rem] flex justify-center items-center text-sm p-6 bg-base-200 \",\n                                                children: accounts ? accounts[0] : \"\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                                                lineNumber: 106,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                                        lineNumber: 104,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                                    lineNumber: 103,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-5\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"indicator font-bold mb-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"indicator-item indicator-top indicator-center badge border-none text-[18px] w-24 bg-base-200 p-3\",\n                                                children: \"Balance\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                                                lineNumber: 111,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"input input-bordered w-36 flex justify-center items-center text-sm p-6 bg-base-200 \",\n                                                children: isActive && balance\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                                                lineNumber: 112,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                                        lineNumber: 110,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                                    lineNumber: 109,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-5\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"indicator font-bold mb-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"indicator-item indicator-top indicator-center badge border-none text-[18px] w-24 bg-base-200 p-3\",\n                                                children: \"Buy\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                                                lineNumber: 117,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                className: \"input input-bordered w-48 flex justify-center items-center text-sm p-6 bg-base-200 text-center\",\n                                                onChange: handleSetNitiValue\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                                                lineNumber: 118,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                                        lineNumber: 116,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                                    lineNumber: 115,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"btn btn-error text-neutral w-28 hover:bg-\",\n                                    onClick: handleBuy,\n                                    children: \"BUY\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                                    lineNumber: 121,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                            lineNumber: 97,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                        lineNumber: 96,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Page, \"wxtSuFhPfuq4CEo99dSxrDXaMj4=\", false, function() {\n    return [\n        useChainId,\n        useAccounts,\n        useIsActive,\n        useProvider\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgeyBmb3JtYXRFdGhlciwgcGFyc2VVbml0cyB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC91bml0c1wiXHJcbmltcG9ydCB7IGluaXRpYWxpemVDb25uZWN0b3IgfSBmcm9tIFwiQHdlYjMtcmVhY3QvY29yZVwiXHJcbmltcG9ydCB7IE1ldGFNYXNrIH0gZnJvbSBcIkB3ZWIzLXJlYWN0L21ldGFtYXNrXCJcclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IGFiaSBmcm9tIFwiLi9hYmkuanNvblwiXHJcblxyXG5jb25zdCBbbWV0YU1hc2ssIGhvb2tzXSA9IGluaXRpYWxpemVDb25uZWN0b3IoKGFjdGlvbnMpID0+IG5ldyBNZXRhTWFzayh7IGFjdGlvbnMgfSkpO1xyXG5jb25zdCB7IHVzZUNoYWluSWQsIHVzZUFjY291bnRzLCB1c2VJc0FjdGl2YXRpbmcsIHVzZUlzQWN0aXZlLCB1c2VQcm92aWRlciB9ID0gaG9va3M7XHJcbmNvbnN0IGNvbnRyYWN0Q2hhaW4gPSAxMTE1NTExMVxyXG5jb25zdCBjb250cmFjdEFkZHJlc3MgPSAnMHg3M2FBM2RiRjEzQjk2MkI5QjkwMUI4MGNDZDU0YmZmN0YzMjRkYzA2J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSgpIHtcclxuICBjb25zdCBjaGFpbmlkID0gdXNlQ2hhaW5JZCgpO1xyXG4gIGNvbnN0IGFjY291bnRzID0gdXNlQWNjb3VudHMoKTtcclxuICBjb25zdCBpc0FjdGl2ZSA9IHVzZUlzQWN0aXZlKCk7XHJcbiAgY29uc3QgcHJvdmlkZXIgPSB1c2VQcm92aWRlcigpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUodW5kZWZpbmVkKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdm9pZCBtZXRhTWFzay5jb25uZWN0RWFnZXJseSgpLmNhdGNoKCgpID0+IHtcclxuICAgICAgY29uc29sZS5kZWJ1ZygnRmFpbGVkIHRvIGNvbm5lY3QgZWFnZXJseSB0byBtZXRhbWFzaycpXHJcbiAgICB9KVxyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IGhhbmRsZUNvbm5lY3QgPSAoKSA9PiB7XHJcbiAgICBtZXRhTWFzay5hY3RpdmF0ZSgpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZURpc2Nvbm5lY3QgPSAoKSA9PiB7XHJcbiAgICBtZXRhTWFzay5yZXNldFN0YXRlKClcclxuICB9XHJcblxyXG4gIGNvbnN0IFtiYWxhbmNlLCBzZXRCYWxhbmNlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaGJhbGFuY2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xyXG4gICAgICBjb25zdCBzbWFydENvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcclxuICAgICAgICBjb250cmFjdEFkZHJlc3MsIGFiaSwgc2lnbmVyXHJcbiAgICAgIClcclxuICAgICAgY29uc3QgbXlCYWxhbmNlID0gYXdhaXQgc21hcnRDb250cmFjdC5iYWxhbmNlT2YoYWNjb3VudHNbMF0pXHJcbiAgICAgIGNvbnNvbGUubG9nKGZvcm1hdEV0aGVyKG15QmFsYW5jZSkpO1xyXG4gICAgICBzZXRCYWxhbmNlKGZvcm1hdEV0aGVyKG15QmFsYW5jZSkpXHJcbiAgICB9XHJcbiAgICBpZiAoaXNBY3RpdmUpIHtcclxuICAgICAgZmV0Y2hiYWxhbmNlKCk7XHJcbiAgICB9XHJcbiAgfSwgW2lzQWN0aXZlXSk7XHJcblxyXG4gIGNvbnN0IFtuaXRpVmFsdWUsIHNldE5pdGlWYWx1ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBoYW5kbGVTZXROaXRpVmFsdWUgPSAoZSkgPT57XHJcbiAgICBzZXROaXRpVmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQnV5ID0gYXN5bmMoKSA9PntcclxuICAgIHRyeXtcclxuICAgICAgaWYgKG5pdGlWYWx1ZSA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xyXG4gICAgICBjb25zdCBzbWFydENvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcclxuICAgICAgICBjb250cmFjdEFkZHJlc3MsIGFiaSwgc2lnbmVyXHJcbiAgICAgIClcclxuICAgICAgY29uc3QgYnV5VmFsdWUgPSBwYXJzZVVuaXRzKG5pdGlWYWx1ZS50b1N0cmluZygpLCBcImV0aGVyXCIpO1xyXG4gICAgICBjb25zdCB0eCA9IGF3YWl0IHNtYXJ0Q29udHJhY3QuYnV5KHtcclxuICAgICAgICB2YWx1ZTpidXlWYWx1ZS50b1N0cmluZygpXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlRyYW5zYWN0aW9uIGhhc2ghIVwiLHR4Lmhhc2gpO1xyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyIGJnLW5ldXRyYWxcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1zdGFydCBcIj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tbGluayBuby11bmRlcmxpbmUgaG92ZXI6bm8tdW5kZXJsaW5lICB0ZXh0LXhsIHRleHQtYmFzZS0xMDBcIj5cclxuICAgICAgICAgICAgQmxvY2tDaGFpblxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWNlbnRlciBvdXRsaW5lIG91dGxpbmUtMiBvdXRsaW5lLW5ldXRyYWwtY29udGVudCByb3VuZGVkLWZ1bGwgcC0yXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UtMzAwIHB4LTNcIj5BY2NvdW50cyA6IHthY2NvdW50cyA/IGFjY291bnRzWzBdIDogJyd9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWVuZCBmbGV4LTNcIj5cclxuICAgICAgICAgIHtpc0FjdGl2ZSA/XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1naG9zdCB0ZXh0LWVycm9yXCIgdHlwZT0nYnV0dG9uJyBvbkNsaWNrPXtoYW5kbGVEaXNjb25uZWN0fSB2YWx1ZT17J0Rpc2Nvbm5lY3QnfT5EaXNjb25uZWN0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWdob3N0IHRleHQtaW5mb1wiIHR5cGU9J2J1dHRvbicgb25DbGljaz17aGFuZGxlQ29ubmVjdH0gdmFsdWU9eydDb25uZWN0J30+Q29ubmVjdDwvYnV0dG9uPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIGNhcmQgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbS0yNCB0ZXh0LWNlbnRlciBkcm9wLXNoYWRvdy1sZyBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgdy1bMzZyZW1dIGJnLWJhc2UtMTAwIHNoYWRvdy1sZyB3LVsyMHJlbV0gaXRlbXMtY2VudGVyIGRyb3Atc2hhZG93IGJvcmRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5kaWNhdG9yIGZvbnQtYm9sZCBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmRpY2F0b3ItaXRlbSBpbmRpY2F0b3ItdG9wIGluZGljYXRvci1jZW50ZXIgYmFkZ2UgdGV4dC1sZyBib3JkZXItbm9uZSB3LTI0IGJnLWJhc2UtMjAwIHAtM1wiPkNoYWluSWQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbnB1dCBpbnB1dC1ib3JkZXJlZCB3LTM2IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtc20gcC02IGJnLWJhc2UtMjAwIFwiPntjaGFpbmlkfTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7LyogPHA+SXNBY3RpdmU6ICB7aXNBY3RpdmUudG9TdHJpbmcoKX08L3A+ICovfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRpY2F0b3IgZm9udC1ib2xkIG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5kaWNhdG9yLWl0ZW0gaW5kaWNhdG9yLXRvcCBpbmRpY2F0b3ItY2VudGVyIGJhZGdlIGJvcmRlci1ub25lIHRleHQtWzE4cHhdIHctMjggYmctYmFzZS0yMDAgcC0zXCI+QWNjb3VudHM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlucHV0IGlucHV0LWJvcmRlcmVkIHctWzI2cmVtXSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LXNtIHAtNiBiZy1iYXNlLTIwMCBcIj57YWNjb3VudHMgPyBhY2NvdW50c1swXSA6ICcnfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRpY2F0b3IgZm9udC1ib2xkIG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5kaWNhdG9yLWl0ZW0gaW5kaWNhdG9yLXRvcCBpbmRpY2F0b3ItY2VudGVyIGJhZGdlIGJvcmRlci1ub25lIHRleHQtWzE4cHhdIHctMjQgYmctYmFzZS0yMDAgcC0zXCI+QmFsYW5jZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5wdXQgaW5wdXQtYm9yZGVyZWQgdy0zNiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LXNtIHAtNiBiZy1iYXNlLTIwMCBcIj57aXNBY3RpdmUgJiYgYmFsYW5jZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5kaWNhdG9yIGZvbnQtYm9sZCBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImluZGljYXRvci1pdGVtIGluZGljYXRvci10b3AgaW5kaWNhdG9yLWNlbnRlciBiYWRnZSBib3JkZXItbm9uZSB0ZXh0LVsxOHB4XSB3LTI0IGJnLWJhc2UtMjAwIHAtM1wiPkJ1eTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0IGlucHV0LWJvcmRlcmVkIHctNDggZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1zbSBwLTYgYmctYmFzZS0yMDAgdGV4dC1jZW50ZXJcIiBvbkNoYW5nZT17aGFuZGxlU2V0Tml0aVZhbHVlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1lcnJvciB0ZXh0LW5ldXRyYWwgdy0yOCBob3ZlcjpiZy1cIiBvbkNsaWNrPXtoYW5kbGVCdXl9PkJVWTwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbImZvcm1hdEV0aGVyIiwicGFyc2VVbml0cyIsImluaXRpYWxpemVDb25uZWN0b3IiLCJNZXRhTWFzayIsImV0aGVycyIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJhYmkiLCJtZXRhTWFzayIsImhvb2tzIiwiYWN0aW9ucyIsInVzZUNoYWluSWQiLCJ1c2VBY2NvdW50cyIsInVzZUlzQWN0aXZhdGluZyIsInVzZUlzQWN0aXZlIiwidXNlUHJvdmlkZXIiLCJjb250cmFjdENoYWluIiwiY29udHJhY3RBZGRyZXNzIiwiUGFnZSIsImNoYWluaWQiLCJhY2NvdW50cyIsImlzQWN0aXZlIiwicHJvdmlkZXIiLCJlcnJvciIsInNldEVycm9yIiwidW5kZWZpbmVkIiwiY29ubmVjdEVhZ2VybHkiLCJjYXRjaCIsImNvbnNvbGUiLCJkZWJ1ZyIsImhhbmRsZUNvbm5lY3QiLCJhY3RpdmF0ZSIsImhhbmRsZURpc2Nvbm5lY3QiLCJyZXNldFN0YXRlIiwiYmFsYW5jZSIsInNldEJhbGFuY2UiLCJmZXRjaGJhbGFuY2UiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJzbWFydENvbnRyYWN0IiwiQ29udHJhY3QiLCJteUJhbGFuY2UiLCJiYWxhbmNlT2YiLCJsb2ciLCJuaXRpVmFsdWUiLCJzZXROaXRpVmFsdWUiLCJoYW5kbGVTZXROaXRpVmFsdWUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVCdXkiLCJidXlWYWx1ZSIsInRvU3RyaW5nIiwidHgiLCJidXkiLCJoYXNoIiwiZXJyIiwiZGl2IiwiY2xhc3NOYW1lIiwiYSIsInNwYW4iLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsInAiLCJpbnB1dCIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});