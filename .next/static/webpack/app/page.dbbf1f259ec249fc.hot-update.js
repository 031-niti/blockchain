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

/***/ "(app-pages-browser)/./app/components/NavBar.js":
/*!**********************************!*\
  !*** ./app/components/NavBar.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ \"(app-pages-browser)/./node_modules/@web3-react/core/dist/index.js\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3_react_metamask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/metamask */ \"(app-pages-browser)/./node_modules/@web3-react/metamask/dist/index.js\");\n/* harmony import */ var _web3_react_metamask__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_web3_react_metamask__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst [metaMask, hooks] = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.initializeConnector)((actions)=>new _web3_react_metamask__WEBPACK_IMPORTED_MODULE_2__.MetaMask({\n        actions\n    }));\nconst { useChainId, useAccounts, useIsActivating, useIsActive, useProvider } = hooks;\nconst contractChain = 11155111;\nconst contractAddress = \"0x73aA3dbF13B962B9B901B80cCd54bff7F324dc06\";\nconst NavBar = ()=>{\n    _s();\n    const isActive = useIsActive();\n    const provider = useProvider();\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(undefined);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        void metaMask.connectEagerly().catch(()=>{\n            console.debug(\"Failed to connect eagerly to metamask\");\n        });\n    }, []);\n    const handleConnect = ()=>{\n        metaMask.activate();\n    };\n    const handleDisconnect = ()=>{\n        metaMask.resetState();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"navbar bg-neutral\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navbar-start \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dropdown\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                tabIndex: 0,\n                                className: \"btn btn-ghost lg:hidden\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    className: \"h-5 w-5\",\n                                    fill: \"none\",\n                                    viewBox: \"0 0 24 24\",\n                                    stroke: \"currentColor\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        strokeLinecap: \"round\",\n                                        strokeLinejoin: \"round\",\n                                        strokeWidth: \"2\",\n                                        d: \"M4 6h16M4 12h8m-8 6h16\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 29\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                                lineNumber: 32,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                tabIndex: 0,\n                                className: \"menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            children: \"Home\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            children: \"Add\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                                lineNumber: 48,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"btn btn-link no-underline hover:no-underline text-xl text-base-100\",\n                        children: \"daisyUI\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navbar-center hidden lg:flex \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"flex flex-row \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"btn btn-link no-underline hover:no-underline m-2 text-base-100 hover:text-neutral-500 \",\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                                lineNumber: 67,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                            lineNumber: 66,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"btn btn-link no-underline hover:no-underline m-2 text-base-100 hover:text-neutral-500\",\n                                children: \"Add\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                                lineNumber: 72,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                            lineNumber: 71,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"btn btn-link no-underline hover:no-underline m-2 text-base-100 hover:text-neutral-500\",\n                                children: \"Search\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                                lineNumber: 77,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                            lineNumber: 76,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                    lineNumber: 65,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navbar-end flex-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"dropdown dropdown-end\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            tabIndex: 0,\n                            className: \"btn btn-ghost btn-circle avatar\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" rounded-full\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    viewBox: \"0 0 24 24\",\n                                    fill: \"white\",\n                                    className: \"w-6 h-6\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        fillRule: \"evenodd\",\n                                        d: \"M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z\",\n                                        clipRule: \"evenodd\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                                        lineNumber: 93,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                                lineNumber: 86,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                            lineNumber: 85,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            tabIndex: 0,\n                            className: \"mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-52\",\n                            children: isActive ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                class: \"btn btn-ghost hover:hover:bg-currentColor\",\n                                type: \"button\",\n                                onClick: handleDisconnect,\n                                value: \"Disconnect\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                                lineNumber: 106,\n                                columnNumber: 29\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                class: \"btn btn-ghost \",\n                                type: \"button\",\n                                onClick: handleConnect,\n                                value: \"Connect\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                                lineNumber: 108,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                            lineNumber: 101,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                    lineNumber: 84,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                lineNumber: 83,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, undefined);\n};\n_s(NavBar, \"4K7iQ/ZCngWohNwod0JDujVYE80=\", false, function() {\n    return [\n        useIsActive,\n        useProvider\n    ];\n});\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL05hdkJhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzhEO0FBQ1I7QUFDUDtBQUNoQjtBQUNtQjtBQUVsRCxNQUFNLENBQUNRLFVBQVVDLE1BQU0sR0FBR1AscUVBQW1CQSxDQUFDLENBQUNRLFVBQVksSUFBSVAsMERBQVFBLENBQUM7UUFBRU87SUFBUTtBQUNsRixNQUFNLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFQyxlQUFlLEVBQUVDLFdBQVcsRUFBRUMsV0FBVyxFQUFFLEdBQUdOO0FBQy9FLE1BQU1PLGdCQUFnQjtBQUN0QixNQUFNQyxrQkFBa0I7QUFDeEIsTUFBTUMsU0FBUzs7SUFDWCxNQUFNQyxXQUFXTDtJQUNqQixNQUFNTSxXQUFXTDtJQUNqQixNQUFNLENBQUNNLE9BQU9DLFNBQVMsR0FBR2hCLCtDQUFRQSxDQUFDaUI7SUFFbkNoQixnREFBU0EsQ0FBQztRQUNOLEtBQUtDLFNBQVNnQixjQUFjLEdBQUdDLEtBQUssQ0FBQztZQUNqQ0MsUUFBUUMsS0FBSyxDQUFDO1FBQ2xCO0lBQ0osR0FBRyxFQUFFO0lBQ0wsTUFBTUMsZ0JBQWdCO1FBQ2xCcEIsU0FBU3FCLFFBQVE7SUFDckI7SUFDQSxNQUFNQyxtQkFBbUI7UUFDckJ0QixTQUFTdUIsVUFBVTtJQUN2QjtJQUNBLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNDO2dDQUFNQyxVQUFVO2dDQUFHRixXQUFVOzBDQUMxQiw0RUFBQ0c7b0NBQ0dDLE9BQU07b0NBQ05KLFdBQVU7b0NBQ1ZLLE1BQUs7b0NBQ0xDLFNBQVE7b0NBQ1JDLFFBQU87OENBRVAsNEVBQUNDO3dDQUNHQyxlQUFjO3dDQUNkQyxnQkFBZTt3Q0FDZkMsYUFBWTt3Q0FDWkMsR0FBRTs7Ozs7Ozs7Ozs7Ozs7OzswQ0FJZCw4REFBQ0M7Z0NBQ0dYLFVBQVU7Z0NBQ1ZGLFdBQVU7O2tEQUVWLDhEQUFDYztrREFDRyw0RUFBQ0M7c0RBQUU7Ozs7Ozs7Ozs7O2tEQUVQLDhEQUFDRDtrREFDRyw0RUFBQ0M7c0RBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUlmLDhEQUFDQTt3QkFBRWYsV0FBVTtrQ0FBcUU7Ozs7Ozs7Ozs7OzswQkFJdEYsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDYTtvQkFBR2IsV0FBVTs7c0NBQ1YsOERBQUNjO3NDQUNHLDRFQUFDQztnQ0FBRWYsV0FBVTswQ0FBeUY7Ozs7Ozs7Ozs7O3NDQUkxRyw4REFBQ2M7c0NBQ0csNEVBQUNDO2dDQUFFZixXQUFVOzBDQUF3Rjs7Ozs7Ozs7Ozs7c0NBSXpHLDhEQUFDYztzQ0FDRyw0RUFBQ0M7Z0NBQUVmLFdBQVU7MENBQXdGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU1qSCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0M7NEJBQU1DLFVBQVU7NEJBQUdGLFdBQVU7c0NBQzFCLDRFQUFDRDtnQ0FBSUMsV0FBVTswQ0FDWCw0RUFBQ0c7b0NBQ0dDLE9BQU07b0NBQ05FLFNBQVE7b0NBQ1JELE1BQUs7b0NBQ0xMLFdBQVU7OENBRVYsNEVBQUNRO3dDQUNHUSxVQUFTO3dDQUNUSixHQUFFO3dDQUNGSyxVQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBS3pCLDhEQUFDSjs0QkFDR1gsVUFBVTs0QkFDVkYsV0FBVTtzQ0FFVGQseUJBQ0csOERBQUNnQztnQ0FBT0MsT0FBTTtnQ0FBNENDLE1BQUs7Z0NBQVNDLFNBQVN4QjtnQ0FBa0J5QixPQUFPOzs7OzswREFFMUcsOERBQUNKO2dDQUFPQyxPQUFNO2dDQUFpQkMsTUFBSztnQ0FBU0MsU0FBUzFCO2dDQUFlMkIsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF4RztHQXhHTXJDOztRQUNlSjtRQUNBQzs7O0tBRmZHO0FBMEdOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL05hdkJhci5qcz9hNjFhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCB7IGZvcm1hdEV0aGVyLCBwYXJzZVVuaXRzIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L3VuaXRzXCJcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZUNvbm5lY3RvciB9IGZyb20gXCJAd2ViMy1yZWFjdC9jb3JlXCJcclxuaW1wb3J0IHsgTWV0YU1hc2sgfSBmcm9tIFwiQHdlYjMtcmVhY3QvbWV0YW1hc2tcIlxyXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuY29uc3QgW21ldGFNYXNrLCBob29rc10gPSBpbml0aWFsaXplQ29ubmVjdG9yKChhY3Rpb25zKSA9PiBuZXcgTWV0YU1hc2soeyBhY3Rpb25zIH0pKTtcclxuY29uc3QgeyB1c2VDaGFpbklkLCB1c2VBY2NvdW50cywgdXNlSXNBY3RpdmF0aW5nLCB1c2VJc0FjdGl2ZSwgdXNlUHJvdmlkZXIgfSA9IGhvb2tzO1xyXG5jb25zdCBjb250cmFjdENoYWluID0gMTExNTUxMTFcclxuY29uc3QgY29udHJhY3RBZGRyZXNzID0gJzB4NzNhQTNkYkYxM0I5NjJCOUI5MDFCODBjQ2Q1NGJmZjdGMzI0ZGMwNidcclxuY29uc3QgTmF2QmFyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaXNBY3RpdmUgPSB1c2VJc0FjdGl2ZSgpO1xyXG4gICAgY29uc3QgcHJvdmlkZXIgPSB1c2VQcm92aWRlcigpO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB2b2lkIG1ldGFNYXNrLmNvbm5lY3RFYWdlcmx5KCkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdGYWlsZWQgdG8gY29ubmVjdCBlYWdlcmx5IHRvIG1ldGFtYXNrJylcclxuICAgICAgICB9KVxyXG4gICAgfSwgW10pXHJcbiAgICBjb25zdCBoYW5kbGVDb25uZWN0ID0gKCkgPT4ge1xyXG4gICAgICAgIG1ldGFNYXNrLmFjdGl2YXRlKClcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZURpc2Nvbm5lY3QgPSAoKSA9PiB7XHJcbiAgICAgICAgbWV0YU1hc2sucmVzZXRTdGF0ZSgpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyIGJnLW5ldXRyYWxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItc3RhcnQgXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHRhYkluZGV4PXswfSBjbGFzc05hbWU9XCJidG4gYnRuLWdob3N0IGxnOmhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNSB3LTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTQgNmgxNk00IDEyaDhtLTggNmgxNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVudSBtZW51LXNtIGRyb3Bkb3duLWNvbnRlbnQgbXQtMyB6LVsxXSBwLTIgc2hhZG93IGJnLWJhc2UtMTAwIHJvdW5kZWQtYm94IHctNTJcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+SG9tZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+QWRkPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tbGluayBuby11bmRlcmxpbmUgaG92ZXI6bm8tdW5kZXJsaW5lIHRleHQteGwgdGV4dC1iYXNlLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIGRhaXN5VUlcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWNlbnRlciBoaWRkZW4gbGc6ZmxleCBcIj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rIG5vLXVuZGVybGluZSBob3Zlcjpuby11bmRlcmxpbmUgbS0yIHRleHQtYmFzZS0xMDAgaG92ZXI6dGV4dC1uZXV0cmFsLTUwMCBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmsgbm8tdW5kZXJsaW5lIGhvdmVyOm5vLXVuZGVybGluZSBtLTIgdGV4dC1iYXNlLTEwMCBob3Zlcjp0ZXh0LW5ldXRyYWwtNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmsgbm8tdW5kZXJsaW5lIGhvdmVyOm5vLXVuZGVybGluZSBtLTIgdGV4dC1iYXNlLTEwMCBob3Zlcjp0ZXh0LW5ldXRyYWwtNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWFyY2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItZW5kIGZsZXgtM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93biBkcm9wZG93bi1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgdGFiSW5kZXg9ezB9IGNsYXNzTmFtZT1cImJ0biBidG4tZ2hvc3QgYnRuLWNpcmNsZSBhdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgcm91bmRlZC1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIndoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgaC02XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTcuNSA2YTQuNSA0LjUgMCAxMTkgMCA0LjUgNC41IDAgMDEtOSAwek0zLjc1MSAyMC4xMDVhOC4yNSA4LjI1IDAgMDExNi40OTggMCAuNzUuNzUgMCAwMS0uNDM3LjY5NUExOC42ODMgMTguNjgzIDAgMDExMiAyMi41Yy0yLjc4NiAwLTUuNDMzLS42MDgtNy44MTItMS43YS43NS43NSAwIDAxLS40MzctLjY5NXpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8dWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTMgei1bMV0gcC0yIHNoYWRvdyBtZW51IG1lbnUtc20gZHJvcGRvd24tY29udGVudCBiZy13aGl0ZSByb3VuZGVkLWJveCB3LTUyXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc0FjdGl2ZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1naG9zdCBob3Zlcjpob3ZlcjpiZy1jdXJyZW50Q29sb3JcIiB0eXBlPSdidXR0b24nIG9uQ2xpY2s9e2hhbmRsZURpc2Nvbm5lY3R9IHZhbHVlPXsnRGlzY29ubmVjdCd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1naG9zdCBcIiB0eXBlPSdidXR0b24nIG9uQ2xpY2s9e2hhbmRsZUNvbm5lY3R9IHZhbHVlPXsnQ29ubmVjdCd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcclxuIl0sIm5hbWVzIjpbImZvcm1hdEV0aGVyIiwicGFyc2VVbml0cyIsImluaXRpYWxpemVDb25uZWN0b3IiLCJNZXRhTWFzayIsImV0aGVycyIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJtZXRhTWFzayIsImhvb2tzIiwiYWN0aW9ucyIsInVzZUNoYWluSWQiLCJ1c2VBY2NvdW50cyIsInVzZUlzQWN0aXZhdGluZyIsInVzZUlzQWN0aXZlIiwidXNlUHJvdmlkZXIiLCJjb250cmFjdENoYWluIiwiY29udHJhY3RBZGRyZXNzIiwiTmF2QmFyIiwiaXNBY3RpdmUiLCJwcm92aWRlciIsImVycm9yIiwic2V0RXJyb3IiLCJ1bmRlZmluZWQiLCJjb25uZWN0RWFnZXJseSIsImNhdGNoIiwiY29uc29sZSIsImRlYnVnIiwiaGFuZGxlQ29ubmVjdCIsImFjdGl2YXRlIiwiaGFuZGxlRGlzY29ubmVjdCIsInJlc2V0U3RhdGUiLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsInRhYkluZGV4Iiwic3ZnIiwieG1sbnMiLCJmaWxsIiwidmlld0JveCIsInN0cm9rZSIsInBhdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJzdHJva2VXaWR0aCIsImQiLCJ1bCIsImxpIiwiYSIsImZpbGxSdWxlIiwiY2xpcFJ1bGUiLCJidXR0b24iLCJjbGFzcyIsInR5cGUiLCJvbkNsaWNrIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/NavBar.js\n"));

/***/ })

});