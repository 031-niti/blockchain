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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ethersproject/units */ \"(app-pages-browser)/./node_modules/@ethersproject/units/lib.esm/index.js\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ \"(app-pages-browser)/./node_modules/@web3-react/core/dist/index.js\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3_react_metamask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/metamask */ \"(app-pages-browser)/./node_modules/@web3-react/metamask/dist/index.js\");\n/* harmony import */ var _web3_react_metamask__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_web3_react_metamask__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/contract/contract.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _abi_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./abi.json */ \"(app-pages-browser)/./app/abi.json\");\n/* harmony import */ var _components_Poke__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Poke */ \"(app-pages-browser)/./app/components/Poke.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst [metaMask, hooks] = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.initializeConnector)((actions)=>new _web3_react_metamask__WEBPACK_IMPORTED_MODULE_2__.MetaMask({\n        actions\n    }));\nconst { useChainId, useAccounts, useIsActivating, useIsActive, useProvider } = hooks;\nconst contractChain = 11155111;\nconst contractAddress = \"0x73aA3dbF13B962B9B901B80cCd54bff7F324dc06\";\nfunction Page() {\n    _s();\n    const chainid = useChainId();\n    const accounts = useAccounts();\n    const isActive = useIsActive();\n    const provider = useProvider();\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(undefined);\n    const [transactionHash, setTransactionHash] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        void metaMask.connectEagerly().catch(()=>{\n            console.debug(\"Failed to connect eagerly to metamask\");\n        });\n    }, []);\n    const handleConnect = ()=>{\n        metaMask.activate();\n    };\n    const handleDisconnect = ()=>{\n        metaMask.resetState();\n    };\n    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchbalance = async ()=>{\n            const signer = provider.getSigner();\n            const smartContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.Contract(contractAddress, _abi_json__WEBPACK_IMPORTED_MODULE_4__, signer);\n            const myBalance = await smartContract.balanceOf(accounts[0]);\n            console.log((0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_7__.formatEther)(myBalance));\n            setBalance((0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_7__.formatEther)(myBalance));\n        };\n        if (isActive) {\n            fetchbalance();\n        }\n    }, [\n        isActive\n    ]);\n    const [nitiValue, setNitiValue] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const handleSetNitiValue = (e)=>{\n        setNitiValue(e.target.value);\n    };\n    const handleBuy = async ()=>{\n        try {\n            if (nitiValue <= 0) {\n                return;\n            }\n            const signer = provider.getSigner();\n            const smartContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.Contract(contractAddress, _abi_json__WEBPACK_IMPORTED_MODULE_4__, signer);\n            const buyValue = (0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_7__.parseUnits)(nitiValue.toString(), \"ether\");\n            const tx = await smartContract.buy({\n                value: buyValue.toString()\n            });\n            console.log(\"Transaction hash!!\", tx.hash);\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navbar bg-neutral\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"navbar-start \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"btn btn-link no-underline hover:no-underline text-xl text-base-100\",\n                            children: \"Buy SepoliaETH\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"navbar-center outline outline-2 outline-neutral-content rounded-full p-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-base-300 px-3\",\n                            children: [\n                                \"Accounts : \",\n                                accounts ? accounts[0] : \"\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"navbar-end flex-3\",\n                        children: isActive ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn btn-ghost text-error\",\n                            type: \"button\",\n                            onClick: handleDisconnect,\n                            value: \"Disconnect\",\n                            children: \"Disconnect\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                            lineNumber: 90,\n                            columnNumber: 13\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn btn-ghost text-info\",\n                            type: \"button\",\n                            onClick: handleConnect,\n                            value: \"Connect\",\n                            children: \"Connect\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                            lineNumber: 92,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            isActive && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center my-6 text-center drop-shadow-lg \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card w-2/3 bg-base-100 shadow-lg items-center drop-shadow border\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-body \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Poke__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            handleBuy: handleBuy,\n                            handleSetNitiValue: handleSetNitiValue\n                        }, void 0, false, {\n                            fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                            lineNumber: 100,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                        lineNumber: 99,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                lineNumber: 97,\n                columnNumber: 9\n            }, this),\n            !isActive && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto flex justify-center items-center my-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-3xl\",\n                    children: \"ples\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                    lineNumber: 107,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                lineNumber: 106,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Page, \"gyaBH0vssfvizeDPlf4gKzhtmO0=\", false, function() {\n    return [\n        useChainId,\n        useAccounts,\n        useIsActive,\n        useProvider\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzhEO0FBQ1I7QUFDUDtBQUNoQjtBQUNtQjtBQUN0QjtBQUNRO0FBRXBDLE1BQU0sQ0FBQ1UsVUFBVUMsTUFBTSxHQUFHVCxxRUFBbUJBLENBQUMsQ0FBQ1UsVUFBWSxJQUFJVCwwREFBUUEsQ0FBQztRQUFFUztJQUFRO0FBQ2xGLE1BQU0sRUFBRUMsVUFBVSxFQUFFQyxXQUFXLEVBQUVDLGVBQWUsRUFBRUMsV0FBVyxFQUFFQyxXQUFXLEVBQUUsR0FBR047QUFDL0UsTUFBTU8sZ0JBQWdCO0FBQ3RCLE1BQU1DLGtCQUFrQjtBQUVULFNBQVNDOztJQUN0QixNQUFNQyxVQUFVUjtJQUNoQixNQUFNUyxXQUFXUjtJQUNqQixNQUFNUyxXQUFXUDtJQUNqQixNQUFNUSxXQUFXUDtJQUNqQixNQUFNLENBQUNRLE9BQU9DLFNBQVMsR0FBR3BCLCtDQUFRQSxDQUFDcUI7SUFDbkMsTUFBTSxDQUFDQyxpQkFBaUJDLG1CQUFtQixHQUFHdkIsK0NBQVFBLENBQUM7SUFFdkRDLGdEQUFTQSxDQUFDO1FBQ1IsS0FBS0csU0FBU29CLGNBQWMsR0FBR0MsS0FBSyxDQUFDO1lBQ25DQyxRQUFRQyxLQUFLLENBQUM7UUFDaEI7SUFDRixHQUFHLEVBQUU7SUFDTCxNQUFNQyxnQkFBZ0I7UUFDcEJ4QixTQUFTeUIsUUFBUTtJQUNuQjtJQUNBLE1BQU1DLG1CQUFtQjtRQUN2QjFCLFNBQVMyQixVQUFVO0lBQ3JCO0lBRUEsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdqQywrQ0FBUUEsQ0FBQztJQUN2Q0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNaUMsZUFBZTtZQUNuQixNQUFNQyxTQUFTakIsU0FBU2tCLFNBQVM7WUFDakMsTUFBTUMsZ0JBQWdCLElBQUl2Qyw0Q0FBZSxDQUN2Q2UsaUJBQWlCWCxzQ0FBR0EsRUFBRWlDO1lBRXhCLE1BQU1JLFlBQVksTUFBTUYsY0FBY0csU0FBUyxDQUFDeEIsUUFBUSxDQUFDLEVBQUU7WUFDM0RVLFFBQVFlLEdBQUcsQ0FBQy9DLGlFQUFXQSxDQUFDNkM7WUFDeEJOLFdBQVd2QyxpRUFBV0EsQ0FBQzZDO1FBQ3pCO1FBQ0EsSUFBSXRCLFVBQVU7WUFDWmlCO1FBQ0Y7SUFDRixHQUFHO1FBQUNqQjtLQUFTO0lBRWIsTUFBTSxDQUFDeUIsV0FBV0MsYUFBYSxHQUFHM0MsK0NBQVFBLENBQUM7SUFDM0MsTUFBTTRDLHFCQUFxQixDQUFDQztRQUMxQkYsYUFBYUUsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO0lBQzdCO0lBRUEsTUFBTUMsWUFBWTtRQUNoQixJQUFJO1lBQ0YsSUFBSU4sYUFBYSxHQUFHO2dCQUNsQjtZQUNGO1lBQ0EsTUFBTVAsU0FBU2pCLFNBQVNrQixTQUFTO1lBQ2pDLE1BQU1DLGdCQUFnQixJQUFJdkMsNENBQWUsQ0FDdkNlLGlCQUFpQlgsc0NBQUdBLEVBQUVpQztZQUV4QixNQUFNYyxXQUFXdEQsZ0VBQVVBLENBQUMrQyxVQUFVUSxRQUFRLElBQUk7WUFDbEQsTUFBTUMsS0FBSyxNQUFNZCxjQUFjZSxHQUFHLENBQUM7Z0JBQ2pDTCxPQUFPRSxTQUFTQyxRQUFRO1lBQzFCO1lBQ0F4QixRQUFRZSxHQUFHLENBQUMsc0JBQXFCVSxHQUFHRSxJQUFJO1FBQzFDLEVBQUMsT0FBTUMsS0FBSTtZQUNUNUIsUUFBUWUsR0FBRyxDQUFDYTtRQUNkO0lBQ0Y7SUFHQSxxQkFDRTs7MEJBRUUsOERBQUNDO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNDOzRCQUFFRCxXQUFVO3NDQUFxRTs7Ozs7Ozs7Ozs7a0NBSXBGLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0U7NEJBQUtGLFdBQVU7O2dDQUFxQjtnQ0FBWXhDLFdBQVdBLFFBQVEsQ0FBQyxFQUFFLEdBQUc7Ozs7Ozs7Ozs7OztrQ0FFNUUsOERBQUN1Qzt3QkFBSUMsV0FBVTtrQ0FDWnZDLHlCQUNDLDhEQUFDMEM7NEJBQU9ILFdBQVU7NEJBQTJCSSxNQUFLOzRCQUFTQyxTQUFTL0I7NEJBQWtCaUIsT0FBTztzQ0FBYzs7Ozs7aURBRTNHLDhEQUFDWTs0QkFBT0gsV0FBVTs0QkFBMEJJLE1BQUs7NEJBQVNDLFNBQVNqQzs0QkFBZW1CLE9BQU87c0NBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSXpHOUIsMEJBQ0MsOERBQUNzQztnQkFBSUMsV0FBVTswQkFDZiw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUFJQyxXQUFVO2tDQUNYLDRFQUFDckQsd0RBQUlBOzRCQUFDNkMsV0FBV0E7NEJBQVdKLG9CQUFvQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUt2RCxDQUFDM0IsMEJBQ0EsOERBQUNzQztnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ007b0JBQUVOLFdBQVU7OEJBQVc7Ozs7Ozs7Ozs7Ozs7QUFNbEM7R0FsR3dCMUM7O1FBQ05QO1FBQ0NDO1FBQ0FFO1FBQ0FDOzs7S0FKS0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgeyBmb3JtYXRFdGhlciwgcGFyc2VVbml0cyB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC91bml0c1wiXHJcbmltcG9ydCB7IGluaXRpYWxpemVDb25uZWN0b3IgfSBmcm9tIFwiQHdlYjMtcmVhY3QvY29yZVwiXHJcbmltcG9ydCB7IE1ldGFNYXNrIH0gZnJvbSBcIkB3ZWIzLXJlYWN0L21ldGFtYXNrXCJcclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IGFiaSBmcm9tIFwiLi9hYmkuanNvblwiXHJcbmltcG9ydCBQb2tlIGZyb20gXCIuL2NvbXBvbmVudHMvUG9rZVwiXHJcblxyXG5jb25zdCBbbWV0YU1hc2ssIGhvb2tzXSA9IGluaXRpYWxpemVDb25uZWN0b3IoKGFjdGlvbnMpID0+IG5ldyBNZXRhTWFzayh7IGFjdGlvbnMgfSkpO1xyXG5jb25zdCB7IHVzZUNoYWluSWQsIHVzZUFjY291bnRzLCB1c2VJc0FjdGl2YXRpbmcsIHVzZUlzQWN0aXZlLCB1c2VQcm92aWRlciB9ID0gaG9va3M7XHJcbmNvbnN0IGNvbnRyYWN0Q2hhaW4gPSAxMTE1NTExMVxyXG5jb25zdCBjb250cmFjdEFkZHJlc3MgPSAnMHg3M2FBM2RiRjEzQjk2MkI5QjkwMUI4MGNDZDU0YmZmN0YzMjRkYzA2J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSgpIHtcclxuICBjb25zdCBjaGFpbmlkID0gdXNlQ2hhaW5JZCgpO1xyXG4gIGNvbnN0IGFjY291bnRzID0gdXNlQWNjb3VudHMoKTtcclxuICBjb25zdCBpc0FjdGl2ZSA9IHVzZUlzQWN0aXZlKCk7XHJcbiAgY29uc3QgcHJvdmlkZXIgPSB1c2VQcm92aWRlcigpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUodW5kZWZpbmVkKVxyXG4gIGNvbnN0IFt0cmFuc2FjdGlvbkhhc2gsIHNldFRyYW5zYWN0aW9uSGFzaF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHZvaWQgbWV0YU1hc2suY29ubmVjdEVhZ2VybHkoKS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZGVidWcoJ0ZhaWxlZCB0byBjb25uZWN0IGVhZ2VybHkgdG8gbWV0YW1hc2snKVxyXG4gICAgfSlcclxuICB9LCBbXSlcclxuICBjb25zdCBoYW5kbGVDb25uZWN0ID0gKCkgPT4ge1xyXG4gICAgbWV0YU1hc2suYWN0aXZhdGUoKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVEaXNjb25uZWN0ID0gKCkgPT4ge1xyXG4gICAgbWV0YU1hc2sucmVzZXRTdGF0ZSgpXHJcbiAgfVxyXG5cclxuICBjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hiYWxhbmNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcclxuICAgICAgY29uc3Qgc21hcnRDb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoXHJcbiAgICAgICAgY29udHJhY3RBZGRyZXNzLCBhYmksIHNpZ25lclxyXG4gICAgICApXHJcbiAgICAgIGNvbnN0IG15QmFsYW5jZSA9IGF3YWl0IHNtYXJ0Q29udHJhY3QuYmFsYW5jZU9mKGFjY291bnRzWzBdKVxyXG4gICAgICBjb25zb2xlLmxvZyhmb3JtYXRFdGhlcihteUJhbGFuY2UpKTtcclxuICAgICAgc2V0QmFsYW5jZShmb3JtYXRFdGhlcihteUJhbGFuY2UpKVxyXG4gICAgfVxyXG4gICAgaWYgKGlzQWN0aXZlKSB7XHJcbiAgICAgIGZldGNoYmFsYW5jZSgpO1xyXG4gICAgfVxyXG4gIH0sIFtpc0FjdGl2ZV0pO1xyXG5cclxuICBjb25zdCBbbml0aVZhbHVlLCBzZXROaXRpVmFsdWVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgaGFuZGxlU2V0Tml0aVZhbHVlID0gKGUpID0+e1xyXG4gICAgc2V0Tml0aVZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJ1eSA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmIChuaXRpVmFsdWUgPD0gMCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcclxuICAgICAgY29uc3Qgc21hcnRDb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoXHJcbiAgICAgICAgY29udHJhY3RBZGRyZXNzLCBhYmksIHNpZ25lclxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBidXlWYWx1ZSA9IHBhcnNlVW5pdHMobml0aVZhbHVlLnRvU3RyaW5nKCksIFwiZXRoZXJcIik7XHJcbiAgICAgIGNvbnN0IHR4ID0gYXdhaXQgc21hcnRDb250cmFjdC5idXkoe1xyXG4gICAgICAgIHZhbHVlOiBidXlWYWx1ZS50b1N0cmluZygpXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlRyYW5zYWN0aW9uIGhhc2ghIVwiLHR4Lmhhc2gpO1xyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhciBiZy1uZXV0cmFsXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItc3RhcnQgXCI+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmsgbm8tdW5kZXJsaW5lIGhvdmVyOm5vLXVuZGVybGluZSB0ZXh0LXhsIHRleHQtYmFzZS0xMDBcIj5cclxuICAgICAgICAgICAgQnV5IFNlcG9saWFFVEhcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1jZW50ZXIgb3V0bGluZSBvdXRsaW5lLTIgb3V0bGluZS1uZXV0cmFsLWNvbnRlbnQgcm91bmRlZC1mdWxsIHAtMlwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1iYXNlLTMwMCBweC0zXCI+QWNjb3VudHMgOiB7YWNjb3VudHMgPyBhY2NvdW50c1swXSA6ICcnfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1lbmQgZmxleC0zXCI+XHJcbiAgICAgICAgICB7aXNBY3RpdmUgP1xyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZ2hvc3QgdGV4dC1lcnJvclwiIHR5cGU9J2J1dHRvbicgb25DbGljaz17aGFuZGxlRGlzY29ubmVjdH0gdmFsdWU9eydEaXNjb25uZWN0J30+RGlzY29ubmVjdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1naG9zdCB0ZXh0LWluZm9cIiB0eXBlPSdidXR0b24nIG9uQ2xpY2s9e2hhbmRsZUNvbm5lY3R9IHZhbHVlPXsnQ29ubmVjdCd9PkNvbm5lY3Q8L2J1dHRvbj5cclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtpc0FjdGl2ZSAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBteS02IHRleHQtY2VudGVyIGRyb3Atc2hhZG93LWxnIFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCB3LTIvMyBiZy1iYXNlLTEwMCBzaGFkb3ctbGcgaXRlbXMtY2VudGVyIGRyb3Atc2hhZG93IGJvcmRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgXCI+XHJcbiAgICAgICAgICAgICAgPFBva2UgaGFuZGxlQnV5PXtoYW5kbGVCdXl9IGhhbmRsZVNldE5pdGlWYWx1ZT17aGFuZGxlU2V0Tml0aVZhbHVlfS8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIHshaXNBY3RpdmUgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXktOFwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj5wbGVzPC9wPiBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICBcclxuICAgIDwvPlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJmb3JtYXRFdGhlciIsInBhcnNlVW5pdHMiLCJpbml0aWFsaXplQ29ubmVjdG9yIiwiTWV0YU1hc2siLCJldGhlcnMiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYWJpIiwiUG9rZSIsIm1ldGFNYXNrIiwiaG9va3MiLCJhY3Rpb25zIiwidXNlQ2hhaW5JZCIsInVzZUFjY291bnRzIiwidXNlSXNBY3RpdmF0aW5nIiwidXNlSXNBY3RpdmUiLCJ1c2VQcm92aWRlciIsImNvbnRyYWN0Q2hhaW4iLCJjb250cmFjdEFkZHJlc3MiLCJQYWdlIiwiY2hhaW5pZCIsImFjY291bnRzIiwiaXNBY3RpdmUiLCJwcm92aWRlciIsImVycm9yIiwic2V0RXJyb3IiLCJ1bmRlZmluZWQiLCJ0cmFuc2FjdGlvbkhhc2giLCJzZXRUcmFuc2FjdGlvbkhhc2giLCJjb25uZWN0RWFnZXJseSIsImNhdGNoIiwiY29uc29sZSIsImRlYnVnIiwiaGFuZGxlQ29ubmVjdCIsImFjdGl2YXRlIiwiaGFuZGxlRGlzY29ubmVjdCIsInJlc2V0U3RhdGUiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsImZldGNoYmFsYW5jZSIsInNpZ25lciIsImdldFNpZ25lciIsInNtYXJ0Q29udHJhY3QiLCJDb250cmFjdCIsIm15QmFsYW5jZSIsImJhbGFuY2VPZiIsImxvZyIsIm5pdGlWYWx1ZSIsInNldE5pdGlWYWx1ZSIsImhhbmRsZVNldE5pdGlWYWx1ZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUJ1eSIsImJ1eVZhbHVlIiwidG9TdHJpbmciLCJ0eCIsImJ1eSIsImhhc2giLCJlcnIiLCJkaXYiLCJjbGFzc05hbWUiLCJhIiwic3BhbiIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});