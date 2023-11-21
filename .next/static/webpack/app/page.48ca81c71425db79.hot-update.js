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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ethersproject/units */ \"(app-pages-browser)/./node_modules/@ethersproject/units/lib.esm/index.js\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ \"(app-pages-browser)/./node_modules/@web3-react/core/dist/index.js\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3_react_metamask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/metamask */ \"(app-pages-browser)/./node_modules/@web3-react/metamask/dist/index.js\");\n/* harmony import */ var _web3_react_metamask__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_web3_react_metamask__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/contract/contract.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _abi_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./abi.json */ \"(app-pages-browser)/./app/abi.json\");\n/* harmony import */ var _components_Poke__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Poke */ \"(app-pages-browser)/./app/components/Poke.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst [metaMask, hooks] = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.initializeConnector)((actions)=>new _web3_react_metamask__WEBPACK_IMPORTED_MODULE_2__.MetaMask({\n        actions\n    }));\nconst { useChainId, useAccounts, useIsActivating, useIsActive, useProvider } = hooks;\nconst contractChain = 11155111;\nconst contractAddress = \"0x73aA3dbF13B962B9B901B80cCd54bff7F324dc06\";\nfunction Page() {\n    _s();\n    const chainid = useChainId();\n    const accounts = useAccounts();\n    const isActive = useIsActive();\n    const provider = useProvider();\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(undefined);\n    const [transactionHash, setTransactionHash] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [poke, setPoke] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [fav, setFav] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        void metaMask.connectEagerly().catch(()=>{\n            console.debug(\"Failed to connect eagerly to metamask\");\n        });\n    }, []);\n    const handleConnect = ()=>{\n        metaMask.activate();\n    };\n    const handleDisconnect = ()=>{\n        metaMask.resetState();\n    };\n    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchbalance = async ()=>{\n            const signer = provider.getSigner();\n            const smartContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.Contract(contractAddress, _abi_json__WEBPACK_IMPORTED_MODULE_4__, signer);\n            const myBalance = await smartContract.balanceOf(accounts[0]);\n            console.log((0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_7__.formatEther)(myBalance));\n            setBalance((0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_7__.formatEther)(myBalance));\n        };\n        if (isActive) {\n            fetchbalance();\n        }\n    }, [\n        isActive\n    ]);\n    const [nitiValue, setNitiValue] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const handleSetNitiValue = (e)=>{\n        setNitiValue(e.target.value);\n    };\n    const handleBuy = async ()=>{\n        setFav((oldState)=>[\n                ...oldState,\n                poke\n            ]);\n        try {\n            if (nitiValue <= 0) {\n                return;\n            }\n            const signer = provider.getSigner();\n            const smartContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.Contract(contractAddress, _abi_json__WEBPACK_IMPORTED_MODULE_4__, signer);\n            const buyValue = (0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_7__.parseUnits)(nitiValue.toString(), \"ether\");\n            const tx = await smartContract.buy({\n                value: buyValue.toString()\n            });\n            console.log(\"Transaction hash!!\", tx.hash);\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navbar bg-neutral\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"navbar-start \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"btn btn-link no-underline hover:no-underline text-xl text-base-100\",\n                            children: \"Buy SepoliaETH\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"navbar-center outline outline-2 outline-neutral-content rounded-full p-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-base-300 px-3\",\n                            children: [\n                                \"Accounts : \",\n                                accounts ? accounts[0] : \"\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"navbar-end flex-3\",\n                        children: isActive ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn btn-ghost text-error\",\n                            type: \"button\",\n                            onClick: handleDisconnect,\n                            value: \"Disconnect\",\n                            children: \"Disconnect\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                            lineNumber: 94,\n                            columnNumber: 13\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn btn-ghost text-info\",\n                            type: \"button\",\n                            onClick: handleConnect,\n                            value: \"Connect\",\n                            children: \"Connect\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                            lineNumber: 96,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            isActive && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center mt-11 text-center drop-shadow-lg \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card w-2/4 bg-base-100 shadow-lg items-center drop-shadow border\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-body \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-5\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Poke__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                handleBuy: handleBuy,\n                                handleSetNitiValue: handleSetNitiValue\n                            }, void 0, false, {\n                                fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                                lineNumber: 105,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                            lineNumber: 104,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                        lineNumber: 103,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                    lineNumber: 102,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                lineNumber: 101,\n                columnNumber: 9\n            }, this),\n            !isActive && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto flex justify-center items-center my-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-3xl\",\n                    children: \"ples\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                    lineNumber: 113,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                lineNumber: 112,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Page, \"91k1wz/4umbqdz/2rnG+He3VHO8=\", false, function() {\n    return [\n        useChainId,\n        useAccounts,\n        useIsActive,\n        useProvider\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNFOzRCQUFLRixXQUFVOztnQ0FBcUI7Z0NBQVk3QyxXQUFXQSxRQUFRLENBQUMsRUFBRSxHQUFHOzs7Ozs7Ozs7Ozs7a0NBRTVFLDhEQUFDNEM7d0JBQUlDLFdBQVU7a0NBQ1o1Qyx5QkFDQyw4REFBQytDOzRCQUFPSCxXQUFVOzRCQUEyQkksTUFBSzs0QkFBU0MsU0FBU2hDOzRCQUFrQmlCLE9BQU87c0NBQWM7Ozs7O2lEQUUzRyw4REFBQ2E7NEJBQU9ILFdBQVU7NEJBQTBCSSxNQUFLOzRCQUFTQyxTQUFTbEM7NEJBQWVtQixPQUFPO3NDQUFXOzs7Ozs7Ozs7Ozs7Ozs7OztZQUl6R2xDLDBCQUNDLDhEQUFDMkM7Z0JBQUlDLFdBQVU7MEJBQ2YsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUMxRCx3REFBSUE7Z0NBQUNpRCxXQUFXQTtnQ0FBV0osb0JBQW9CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNdkQsQ0FBQy9CLDBCQUNBLDhEQUFDMkM7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNNO29CQUFFTixXQUFVOzhCQUFXOzs7Ozs7Ozs7Ozs7O0FBTWxDO0dBeEd3Qi9DOztRQUNOUDtRQUNDQztRQUNBRTtRQUNBQzs7O0tBSktHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IHsgZm9ybWF0RXRoZXIsIHBhcnNlVW5pdHMgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvdW5pdHNcIlxyXG5pbXBvcnQgeyBpbml0aWFsaXplQ29ubmVjdG9yIH0gZnJvbSBcIkB3ZWIzLXJlYWN0L2NvcmVcIlxyXG5pbXBvcnQgeyBNZXRhTWFzayB9IGZyb20gXCJAd2ViMy1yZWFjdC9tZXRhbWFza1wiXHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBhYmkgZnJvbSBcIi4vYWJpLmpzb25cIlxyXG5pbXBvcnQgUG9rZSBmcm9tIFwiLi9jb21wb25lbnRzL1Bva2VcIlxyXG5cclxuY29uc3QgW21ldGFNYXNrLCBob29rc10gPSBpbml0aWFsaXplQ29ubmVjdG9yKChhY3Rpb25zKSA9PiBuZXcgTWV0YU1hc2soeyBhY3Rpb25zIH0pKTtcclxuY29uc3QgeyB1c2VDaGFpbklkLCB1c2VBY2NvdW50cywgdXNlSXNBY3RpdmF0aW5nLCB1c2VJc0FjdGl2ZSwgdXNlUHJvdmlkZXIgfSA9IGhvb2tzO1xyXG5jb25zdCBjb250cmFjdENoYWluID0gMTExNTUxMTFcclxuY29uc3QgY29udHJhY3RBZGRyZXNzID0gJzB4NzNhQTNkYkYxM0I5NjJCOUI5MDFCODBjQ2Q1NGJmZjdGMzI0ZGMwNidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XHJcbiAgY29uc3QgY2hhaW5pZCA9IHVzZUNoYWluSWQoKTtcclxuICBjb25zdCBhY2NvdW50cyA9IHVzZUFjY291bnRzKCk7XHJcbiAgY29uc3QgaXNBY3RpdmUgPSB1c2VJc0FjdGl2ZSgpO1xyXG4gIGNvbnN0IHByb3ZpZGVyID0gdXNlUHJvdmlkZXIoKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKHVuZGVmaW5lZClcclxuICBjb25zdCBbdHJhbnNhY3Rpb25IYXNoLCBzZXRUcmFuc2FjdGlvbkhhc2hdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3Bva2UsIHNldFBva2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Zhdiwgc2V0RmF2XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHZvaWQgbWV0YU1hc2suY29ubmVjdEVhZ2VybHkoKS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZGVidWcoJ0ZhaWxlZCB0byBjb25uZWN0IGVhZ2VybHkgdG8gbWV0YW1hc2snKVxyXG4gICAgfSlcclxuICB9LCBbXSlcclxuICBjb25zdCBoYW5kbGVDb25uZWN0ID0gKCkgPT4ge1xyXG4gICAgbWV0YU1hc2suYWN0aXZhdGUoKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVEaXNjb25uZWN0ID0gKCkgPT4ge1xyXG4gICAgbWV0YU1hc2sucmVzZXRTdGF0ZSgpXHJcbiAgfVxyXG5cclxuICBjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hiYWxhbmNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcclxuICAgICAgY29uc3Qgc21hcnRDb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoXHJcbiAgICAgICAgY29udHJhY3RBZGRyZXNzLCBhYmksIHNpZ25lclxyXG4gICAgICApXHJcbiAgICAgIGNvbnN0IG15QmFsYW5jZSA9IGF3YWl0IHNtYXJ0Q29udHJhY3QuYmFsYW5jZU9mKGFjY291bnRzWzBdKVxyXG4gICAgICBjb25zb2xlLmxvZyhmb3JtYXRFdGhlcihteUJhbGFuY2UpKTtcclxuICAgICAgc2V0QmFsYW5jZShmb3JtYXRFdGhlcihteUJhbGFuY2UpKVxyXG4gICAgfVxyXG4gICAgaWYgKGlzQWN0aXZlKSB7XHJcbiAgICAgIGZldGNoYmFsYW5jZSgpO1xyXG4gICAgfVxyXG4gIH0sIFtpc0FjdGl2ZV0pO1xyXG5cclxuICBjb25zdCBbbml0aVZhbHVlLCBzZXROaXRpVmFsdWVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgaGFuZGxlU2V0Tml0aVZhbHVlID0gKGUpID0+e1xyXG4gICAgc2V0Tml0aVZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJ1eSA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldEZhdigob2xkU3RhdGUpID0+IFsuLi5vbGRTdGF0ZSwgcG9rZV0pO1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKG5pdGlWYWx1ZSA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xyXG4gICAgICBjb25zdCBzbWFydENvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcclxuICAgICAgICBjb250cmFjdEFkZHJlc3MsIGFiaSwgc2lnbmVyXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGJ1eVZhbHVlID0gcGFyc2VVbml0cyhuaXRpVmFsdWUudG9TdHJpbmcoKSwgXCJldGhlclwiKTtcclxuICAgICAgY29uc3QgdHggPSBhd2FpdCBzbWFydENvbnRyYWN0LmJ1eSh7XHJcbiAgICAgICAgdmFsdWU6IGJ1eVZhbHVlLnRvU3RyaW5nKClcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICBjb25zb2xlLmxvZyhcIlRyYW5zYWN0aW9uIGhhc2ghIVwiLHR4Lmhhc2gpO1xyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhciBiZy1uZXV0cmFsXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItc3RhcnQgXCI+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmsgbm8tdW5kZXJsaW5lIGhvdmVyOm5vLXVuZGVybGluZSB0ZXh0LXhsIHRleHQtYmFzZS0xMDBcIj5cclxuICAgICAgICAgICAgQnV5IFNlcG9saWFFVEhcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1jZW50ZXIgb3V0bGluZSBvdXRsaW5lLTIgb3V0bGluZS1uZXV0cmFsLWNvbnRlbnQgcm91bmRlZC1mdWxsIHAtMlwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1iYXNlLTMwMCBweC0zXCI+QWNjb3VudHMgOiB7YWNjb3VudHMgPyBhY2NvdW50c1swXSA6ICcnfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1lbmQgZmxleC0zXCI+XHJcbiAgICAgICAgICB7aXNBY3RpdmUgP1xyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZ2hvc3QgdGV4dC1lcnJvclwiIHR5cGU9J2J1dHRvbicgb25DbGljaz17aGFuZGxlRGlzY29ubmVjdH0gdmFsdWU9eydEaXNjb25uZWN0J30+RGlzY29ubmVjdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1naG9zdCB0ZXh0LWluZm9cIiB0eXBlPSdidXR0b24nIG9uQ2xpY2s9e2hhbmRsZUNvbm5lY3R9IHZhbHVlPXsnQ29ubmVjdCd9PkNvbm5lY3Q8L2J1dHRvbj5cclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtpc0FjdGl2ZSAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtdC0xMSB0ZXh0LWNlbnRlciBkcm9wLXNoYWRvdy1sZyBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgdy0yLzQgYmctYmFzZS0xMDAgc2hhZG93LWxnIGl0ZW1zLWNlbnRlciBkcm9wLXNoYWRvdyBib3JkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTVcIj5cclxuICAgICAgICAgICAgICA8UG9rZSBoYW5kbGVCdXk9e2hhbmRsZUJ1eX0gaGFuZGxlU2V0Tml0aVZhbHVlPXtoYW5kbGVTZXROaXRpVmFsdWV9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIHshaXNBY3RpdmUgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXktOFwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj5wbGVzPC9wPiBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICBcclxuICAgIDwvPlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJmb3JtYXRFdGhlciIsInBhcnNlVW5pdHMiLCJpbml0aWFsaXplQ29ubmVjdG9yIiwiTWV0YU1hc2siLCJldGhlcnMiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYWJpIiwiUG9rZSIsIm1ldGFNYXNrIiwiaG9va3MiLCJhY3Rpb25zIiwidXNlQ2hhaW5JZCIsInVzZUFjY291bnRzIiwidXNlSXNBY3RpdmF0aW5nIiwidXNlSXNBY3RpdmUiLCJ1c2VQcm92aWRlciIsImNvbnRyYWN0Q2hhaW4iLCJjb250cmFjdEFkZHJlc3MiLCJQYWdlIiwiY2hhaW5pZCIsImFjY291bnRzIiwiaXNBY3RpdmUiLCJwcm92aWRlciIsImVycm9yIiwic2V0RXJyb3IiLCJ1bmRlZmluZWQiLCJ0cmFuc2FjdGlvbkhhc2giLCJzZXRUcmFuc2FjdGlvbkhhc2giLCJwb2tlIiwic2V0UG9rZSIsImZhdiIsInNldEZhdiIsImNvbm5lY3RFYWdlcmx5IiwiY2F0Y2giLCJjb25zb2xlIiwiZGVidWciLCJoYW5kbGVDb25uZWN0IiwiYWN0aXZhdGUiLCJoYW5kbGVEaXNjb25uZWN0IiwicmVzZXRTdGF0ZSIsImJhbGFuY2UiLCJzZXRCYWxhbmNlIiwiZmV0Y2hiYWxhbmNlIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwic21hcnRDb250cmFjdCIsIkNvbnRyYWN0IiwibXlCYWxhbmNlIiwiYmFsYW5jZU9mIiwibG9nIiwibml0aVZhbHVlIiwic2V0Tml0aVZhbHVlIiwiaGFuZGxlU2V0Tml0aVZhbHVlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQnV5Iiwib2xkU3RhdGUiLCJidXlWYWx1ZSIsInRvU3RyaW5nIiwidHgiLCJidXkiLCJoYXNoIiwiZXJyIiwiZGl2IiwiY2xhc3NOYW1lIiwiYSIsInNwYW4iLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});