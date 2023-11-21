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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ethersproject/units */ \"(app-pages-browser)/./node_modules/@ethersproject/units/lib.esm/index.js\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ \"(app-pages-browser)/./node_modules/@web3-react/core/dist/index.js\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3_react_metamask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/metamask */ \"(app-pages-browser)/./node_modules/@web3-react/metamask/dist/index.js\");\n/* harmony import */ var _web3_react_metamask__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_web3_react_metamask__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/contract/contract.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _abi_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./abi.json */ \"(app-pages-browser)/./app/abi.json\");\n/* harmony import */ var _Poke__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Poke */ \"(app-pages-browser)/./app/Poke.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst [metaMask, hooks] = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.initializeConnector)((actions)=>new _web3_react_metamask__WEBPACK_IMPORTED_MODULE_2__.MetaMask({\n        actions\n    }));\nconst { useChainId, useAccounts, useIsActivating, useIsActive, useProvider } = hooks;\nconst contractChain = 11155111;\nconst contractAddress = \"0x73aA3dbF13B962B9B901B80cCd54bff7F324dc06\";\nfunction Page() {\n    _s();\n    const chainid = useChainId();\n    const accounts = useAccounts();\n    const isActive = useIsActive();\n    const provider = useProvider();\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(undefined);\n    const [transactionHash, setTransactionHash] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        void metaMask.connectEagerly().catch(()=>{\n            console.debug(\"Failed to connect eagerly to metamask\");\n        });\n    }, []);\n    const handleConnect = ()=>{\n        metaMask.activate();\n    };\n    const handleDisconnect = ()=>{\n        metaMask.resetState();\n    };\n    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchbalance = async ()=>{\n            const signer = provider.getSigner();\n            const smartContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.Contract(contractAddress, _abi_json__WEBPACK_IMPORTED_MODULE_4__, signer);\n            const myBalance = await smartContract.balanceOf(accounts[0]);\n            console.log((0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_7__.formatEther)(myBalance));\n            setBalance((0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_7__.formatEther)(myBalance));\n        };\n        if (isActive) {\n            fetchbalance();\n        }\n    }, [\n        isActive\n    ]);\n    const [nitiValue, setNitiValue] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const handleSetNitiValue = (e)=>{\n        setNitiValue(e.target.value);\n    };\n    const handleBuy = async ()=>{\n        try {\n            if (nitiValue <= 0) {\n                return;\n            }\n            const signer = provider.getSigner();\n            const smartContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.Contract(contractAddress, _abi_json__WEBPACK_IMPORTED_MODULE_4__, signer);\n            const buyValue = (0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_7__.parseUnits)(nitiValue.toString(), \"ether\");\n            const tx = await smartContract.buy({\n                value: buyValue.toString()\n            });\n            console.log(\"Transaction hash!!\", tx.hash);\n            window.location.reload();\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navbar bg-neutral\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"navbar-start \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"btn btn-link no-underline hover:no-underline text-xl text-base-100\",\n                            children: \"Buy SepoliaETH\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"navbar-end flex-3\",\n                        children: isActive ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn btn-ghost text-error\",\n                            type: \"button\",\n                            onClick: handleDisconnect,\n                            value: \"Disconnect\",\n                            children: \"Disconnect\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                            lineNumber: 88,\n                            columnNumber: 13\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn btn-ghost text-info\",\n                            type: \"button\",\n                            onClick: handleConnect,\n                            value: \"Connect\",\n                            children: \"Connect\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                            lineNumber: 90,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this),\n            isActive && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center mt-12 text-center drop-shadow-lg \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card w-[32rem] bg-base-100 shadow-lg w-[20rem] items-center drop-shadow border\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-body \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-5\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Poke__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                                lineNumber: 99,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                            lineNumber: 98,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                        lineNumber: 97,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                    lineNumber: 96,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                lineNumber: 95,\n                columnNumber: 9\n            }, this),\n            !isActive && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto flex justify-center items-center my-8\"\n            }, void 0, false, {\n                fileName: \"D:\\\\blockchain\\\\app\\\\page.js\",\n                lineNumber: 106,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Page, \"gyaBH0vssfvizeDPlf4gKzhtmO0=\", false, function() {\n    return [\n        useChainId,\n        useAccounts,\n        useIsActive,\n        useProvider\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0YsV0FBVTs0QkFBMEJHLE1BQUs7NEJBQVNDLFNBQVNuQzs0QkFBZW1CLE9BQU87c0NBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSXpHOUIsMEJBQ0MsOERBQUN5QztnQkFBSUMsV0FBVTswQkFDZiw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ3hELDZDQUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1aLENBQUNjLDBCQUNBLDhEQUFDeUM7Z0JBQUlDLFdBQVU7Ozs7Ozs7O0FBTXZCO0dBakd3QjdDOztRQUNOUDtRQUNDQztRQUNBRTtRQUNBQzs7O0tBSktHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IHsgZm9ybWF0RXRoZXIsIHBhcnNlVW5pdHMgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvdW5pdHNcIlxyXG5pbXBvcnQgeyBpbml0aWFsaXplQ29ubmVjdG9yIH0gZnJvbSBcIkB3ZWIzLXJlYWN0L2NvcmVcIlxyXG5pbXBvcnQgeyBNZXRhTWFzayB9IGZyb20gXCJAd2ViMy1yZWFjdC9tZXRhbWFza1wiXHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBhYmkgZnJvbSBcIi4vYWJpLmpzb25cIlxyXG5pbXBvcnQgUG9rZSBmcm9tIFwiLi9Qb2tlXCJcclxuXHJcbmNvbnN0IFttZXRhTWFzaywgaG9va3NdID0gaW5pdGlhbGl6ZUNvbm5lY3RvcigoYWN0aW9ucykgPT4gbmV3IE1ldGFNYXNrKHsgYWN0aW9ucyB9KSk7XHJcbmNvbnN0IHsgdXNlQ2hhaW5JZCwgdXNlQWNjb3VudHMsIHVzZUlzQWN0aXZhdGluZywgdXNlSXNBY3RpdmUsIHVzZVByb3ZpZGVyIH0gPSBob29rcztcclxuY29uc3QgY29udHJhY3RDaGFpbiA9IDExMTU1MTExXHJcbmNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9ICcweDczYUEzZGJGMTNCOTYyQjlCOTAxQjgwY0NkNTRiZmY3RjMyNGRjMDYnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xyXG4gIGNvbnN0IGNoYWluaWQgPSB1c2VDaGFpbklkKCk7XHJcbiAgY29uc3QgYWNjb3VudHMgPSB1c2VBY2NvdW50cygpO1xyXG4gIGNvbnN0IGlzQWN0aXZlID0gdXNlSXNBY3RpdmUoKTtcclxuICBjb25zdCBwcm92aWRlciA9IHVzZVByb3ZpZGVyKCk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpXHJcbiAgY29uc3QgW3RyYW5zYWN0aW9uSGFzaCwgc2V0VHJhbnNhY3Rpb25IYXNoXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdm9pZCBtZXRhTWFzay5jb25uZWN0RWFnZXJseSgpLmNhdGNoKCgpID0+IHtcclxuICAgICAgY29uc29sZS5kZWJ1ZygnRmFpbGVkIHRvIGNvbm5lY3QgZWFnZXJseSB0byBtZXRhbWFzaycpXHJcbiAgICB9KVxyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IGhhbmRsZUNvbm5lY3QgPSAoKSA9PiB7XHJcbiAgICBtZXRhTWFzay5hY3RpdmF0ZSgpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZURpc2Nvbm5lY3QgPSAoKSA9PiB7XHJcbiAgICBtZXRhTWFzay5yZXNldFN0YXRlKClcclxuICB9XHJcblxyXG4gIGNvbnN0IFtiYWxhbmNlLCBzZXRCYWxhbmNlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaGJhbGFuY2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xyXG4gICAgICBjb25zdCBzbWFydENvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcclxuICAgICAgICBjb250cmFjdEFkZHJlc3MsIGFiaSwgc2lnbmVyXHJcbiAgICAgIClcclxuICAgICAgY29uc3QgbXlCYWxhbmNlID0gYXdhaXQgc21hcnRDb250cmFjdC5iYWxhbmNlT2YoYWNjb3VudHNbMF0pXHJcbiAgICAgIGNvbnNvbGUubG9nKGZvcm1hdEV0aGVyKG15QmFsYW5jZSkpO1xyXG4gICAgICBzZXRCYWxhbmNlKGZvcm1hdEV0aGVyKG15QmFsYW5jZSkpXHJcbiAgICB9XHJcbiAgICBpZiAoaXNBY3RpdmUpIHtcclxuICAgICAgZmV0Y2hiYWxhbmNlKCk7XHJcbiAgICB9XHJcbiAgfSwgW2lzQWN0aXZlXSk7XHJcblxyXG4gIGNvbnN0IFtuaXRpVmFsdWUsIHNldE5pdGlWYWx1ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBoYW5kbGVTZXROaXRpVmFsdWUgPSAoZSkgPT57XHJcbiAgICBzZXROaXRpVmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQnV5ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKG5pdGlWYWx1ZSA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xyXG4gICAgICBjb25zdCBzbWFydENvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcclxuICAgICAgICBjb250cmFjdEFkZHJlc3MsIGFiaSwgc2lnbmVyXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGJ1eVZhbHVlID0gcGFyc2VVbml0cyhuaXRpVmFsdWUudG9TdHJpbmcoKSwgXCJldGhlclwiKTtcclxuICAgICAgY29uc3QgdHggPSBhd2FpdCBzbWFydENvbnRyYWN0LmJ1eSh7XHJcbiAgICAgICAgdmFsdWU6IGJ1eVZhbHVlLnRvU3RyaW5nKClcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiVHJhbnNhY3Rpb24gaGFzaCEhXCIsdHguaGFzaCk7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXIgYmctbmV1dHJhbFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLXN0YXJ0IFwiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rIG5vLXVuZGVybGluZSBob3Zlcjpuby11bmRlcmxpbmUgdGV4dC14bCB0ZXh0LWJhc2UtMTAwXCI+XHJcbiAgICAgICAgICAgIEJ1eSBTZXBvbGlhRVRIXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItZW5kIGZsZXgtM1wiPlxyXG4gICAgICAgICAge2lzQWN0aXZlID9cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWdob3N0IHRleHQtZXJyb3JcIiB0eXBlPSdidXR0b24nIG9uQ2xpY2s9e2hhbmRsZURpc2Nvbm5lY3R9IHZhbHVlPXsnRGlzY29ubmVjdCd9PkRpc2Nvbm5lY3Q8L2J1dHRvbj5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZ2hvc3QgdGV4dC1pbmZvXCIgdHlwZT0nYnV0dG9uJyBvbkNsaWNrPXtoYW5kbGVDb25uZWN0fSB2YWx1ZT17J0Nvbm5lY3QnfT5Db25uZWN0PC9idXR0b24+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7aXNBY3RpdmUgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXQtMTIgdGV4dC1jZW50ZXIgZHJvcC1zaGFkb3ctbGcgXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHctWzMycmVtXSBiZy1iYXNlLTEwMCBzaGFkb3ctbGcgdy1bMjByZW1dIGl0ZW1zLWNlbnRlciBkcm9wLXNoYWRvdyBib3JkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTVcIj5cclxuICAgICAgICAgICAgICA8UG9rZS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICB7IWlzQWN0aXZlICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG15LThcIj4gXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgXHJcbiAgICA8Lz5cclxuICApXHJcbn0iXSwibmFtZXMiOlsiZm9ybWF0RXRoZXIiLCJwYXJzZVVuaXRzIiwiaW5pdGlhbGl6ZUNvbm5lY3RvciIsIk1ldGFNYXNrIiwiZXRoZXJzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImFiaSIsIlBva2UiLCJtZXRhTWFzayIsImhvb2tzIiwiYWN0aW9ucyIsInVzZUNoYWluSWQiLCJ1c2VBY2NvdW50cyIsInVzZUlzQWN0aXZhdGluZyIsInVzZUlzQWN0aXZlIiwidXNlUHJvdmlkZXIiLCJjb250cmFjdENoYWluIiwiY29udHJhY3RBZGRyZXNzIiwiUGFnZSIsImNoYWluaWQiLCJhY2NvdW50cyIsImlzQWN0aXZlIiwicHJvdmlkZXIiLCJlcnJvciIsInNldEVycm9yIiwidW5kZWZpbmVkIiwidHJhbnNhY3Rpb25IYXNoIiwic2V0VHJhbnNhY3Rpb25IYXNoIiwiY29ubmVjdEVhZ2VybHkiLCJjYXRjaCIsImNvbnNvbGUiLCJkZWJ1ZyIsImhhbmRsZUNvbm5lY3QiLCJhY3RpdmF0ZSIsImhhbmRsZURpc2Nvbm5lY3QiLCJyZXNldFN0YXRlIiwiYmFsYW5jZSIsInNldEJhbGFuY2UiLCJmZXRjaGJhbGFuY2UiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJzbWFydENvbnRyYWN0IiwiQ29udHJhY3QiLCJteUJhbGFuY2UiLCJiYWxhbmNlT2YiLCJsb2ciLCJuaXRpVmFsdWUiLCJzZXROaXRpVmFsdWUiLCJoYW5kbGVTZXROaXRpVmFsdWUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVCdXkiLCJidXlWYWx1ZSIsInRvU3RyaW5nIiwidHgiLCJidXkiLCJoYXNoIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJlcnIiLCJkaXYiLCJjbGFzc05hbWUiLCJhIiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});