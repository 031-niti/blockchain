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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ \"(app-pages-browser)/./node_modules/@web3-react/core/dist/index.js\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3_react_metamask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/metamask */ \"(app-pages-browser)/./node_modules/@web3-react/metamask/dist/index.js\");\n/* harmony import */ var _web3_react_metamask__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_web3_react_metamask__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst [metaMask, hooks] = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.initializeConnector)((actions)=>new _web3_react_metamask__WEBPACK_IMPORTED_MODULE_2__.MetaMask({\n        actions\n    }));\nconst { useChainId, useAccounts, useIsActivating, useIsActive, useProvider } = hooks;\nconst contractChain = 11155111;\nconst contractAddress = \"0x73aA3dbF13B962B9B901B80cCd54bff7F324dc06\";\nconst NavBar = ()=>{\n    _s();\n    const chainid = useChainId();\n    const accounts = useAccounts();\n    const isActive = useIsActive();\n    const provider = useProvider();\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(undefined);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        void metaMask.connectEagerly().catch(()=>{\n            console.debug(\"Failed to connect eagerly to metamask\");\n        });\n    }, []);\n    const handleConnect = ()=>{\n        metaMask.activate();\n    };\n    const handleDisconnect = ()=>{\n        metaMask.resetState();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"navbar bg-neutral\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navbar-start \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dropdown\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                tabIndex: 0,\n                                className: \"btn btn-ghost lg:hidden\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    className: \"h-5 w-5\",\n                                    fill: \"none\",\n                                    viewBox: \"0 0 24 24\",\n                                    stroke: \"currentColor\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        strokeLinecap: \"round\",\n                                        strokeLinejoin: \"round\",\n                                        strokeWidth: \"2\",\n                                        d: \"M4 6h16M4 12h8m-8 6h16\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 29\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                                lineNumber: 34,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                tabIndex: 0,\n                                className: \"menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            children: \"Home\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            children: \"Add\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                                            lineNumber: 58,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"btn btn-link no-underline hover:no-underline text-xl text-base-100\",\n                        children: \"daisyUI\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navbar-center hidden lg:flex \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"flex flex-row \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"btn btn-link no-underline hover:no-underline m-2 text-base-100 hover:text-neutral-500 \",\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                                lineNumber: 69,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                            lineNumber: 68,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"btn btn-link no-underline hover:no-underline m-2 text-base-100 hover:text-neutral-500\",\n                                children: \"Add\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                                lineNumber: 74,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                            lineNumber: 73,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"btn btn-link no-underline hover:no-underline m-2 text-base-100 hover:text-neutral-500\",\n                                children: \"Search\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                                lineNumber: 79,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                            lineNumber: 78,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                    lineNumber: 67,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navbar-end flex-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"dropdown dropdown-end\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            tabIndex: 0,\n                            className: \"btn btn-ghost btn-circle avatar\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" rounded-full\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    viewBox: \"0 0 24 24\",\n                                    fill: \"white\",\n                                    className: \"w-6 h-6\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        fillRule: \"evenodd\",\n                                        d: \"M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z\",\n                                        clipRule: \"evenodd\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                                        lineNumber: 95,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                                lineNumber: 88,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                            lineNumber: 87,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            tabIndex: 0,\n                            className: \"mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-52\",\n                            children: [\n                                \"(isActive ?\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    class: \"btn btn-ghost hover:hover:bg-currentColor text-error\",\n                                    type: \"button\",\n                                    onClick: handleDisconnect,\n                                    value: \"Disconnect\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                                    lineNumber: 108,\n                                    columnNumber: 29\n                                }, undefined),\n                                \":\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    class: \"btn btn-ghost hover:hover:bg-currentColor text-primary\",\n                                    type: \"button\",\n                                    onClick: handleConnect,\n                                    value: \"Connect\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                                    lineNumber: 110,\n                                    columnNumber: 29\n                                }, undefined),\n                                \")\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                            lineNumber: 103,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                    lineNumber: 86,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n                lineNumber: 85,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\components\\\\NavBar.js\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, undefined);\n};\n_s(NavBar, \"q/JYZqsUloU2cT1G3ifO5q46Ob8=\", false, function() {\n    return [\n        useChainId,\n        useAccounts,\n        useIsActive,\n        useProvider\n    ];\n});\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL05hdkJhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzhEO0FBQ1I7QUFDUDtBQUNoQjtBQUNtQjtBQUVsRCxNQUFNLENBQUNRLFVBQVVDLE1BQU0sR0FBR1AscUVBQW1CQSxDQUFDLENBQUNRLFVBQVksSUFBSVAsMERBQVFBLENBQUM7UUFBRU87SUFBUTtBQUNsRixNQUFNLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFQyxlQUFlLEVBQUVDLFdBQVcsRUFBRUMsV0FBVyxFQUFFLEdBQUdOO0FBQy9FLE1BQU1PLGdCQUFnQjtBQUN0QixNQUFNQyxrQkFBa0I7QUFDeEIsTUFBTUMsU0FBUzs7SUFDWCxNQUFNQyxVQUFVUjtJQUNoQixNQUFNUyxXQUFXUjtJQUNqQixNQUFNUyxXQUFXUDtJQUNqQixNQUFNUSxXQUFXUDtJQUNqQixNQUFNLENBQUNRLE9BQU9DLFNBQVMsR0FBR2xCLCtDQUFRQSxDQUFDbUI7SUFFbkNsQixnREFBU0EsQ0FBQztRQUNOLEtBQUtDLFNBQVNrQixjQUFjLEdBQUdDLEtBQUssQ0FBQztZQUNqQ0MsUUFBUUMsS0FBSyxDQUFDO1FBQ2xCO0lBQ0osR0FBRyxFQUFFO0lBQ0wsTUFBTUMsZ0JBQWdCO1FBQ2xCdEIsU0FBU3VCLFFBQVE7SUFDckI7SUFDQSxNQUFNQyxtQkFBbUI7UUFDckJ4QixTQUFTeUIsVUFBVTtJQUN2QjtJQUNBLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNDO2dDQUFNQyxVQUFVO2dDQUFHRixXQUFVOzBDQUMxQiw0RUFBQ0c7b0NBQ0dDLE9BQU07b0NBQ05KLFdBQVU7b0NBQ1ZLLE1BQUs7b0NBQ0xDLFNBQVE7b0NBQ1JDLFFBQU87OENBRVAsNEVBQUNDO3dDQUNHQyxlQUFjO3dDQUNkQyxnQkFBZTt3Q0FDZkMsYUFBWTt3Q0FDWkMsR0FBRTs7Ozs7Ozs7Ozs7Ozs7OzswQ0FJZCw4REFBQ0M7Z0NBQ0dYLFVBQVU7Z0NBQ1ZGLFdBQVU7O2tEQUVWLDhEQUFDYztrREFDRyw0RUFBQ0M7c0RBQUU7Ozs7Ozs7Ozs7O2tEQUVQLDhEQUFDRDtrREFDRyw0RUFBQ0M7c0RBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUlmLDhEQUFDQTt3QkFBRWYsV0FBVTtrQ0FBcUU7Ozs7Ozs7Ozs7OzswQkFJdEYsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDYTtvQkFBR2IsV0FBVTs7c0NBQ1YsOERBQUNjO3NDQUNHLDRFQUFDQztnQ0FBRWYsV0FBVTswQ0FBeUY7Ozs7Ozs7Ozs7O3NDQUkxRyw4REFBQ2M7c0NBQ0csNEVBQUNDO2dDQUFFZixXQUFVOzBDQUF3Rjs7Ozs7Ozs7Ozs7c0NBSXpHLDhEQUFDYztzQ0FDRyw0RUFBQ0M7Z0NBQUVmLFdBQVU7MENBQXdGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU1qSCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0M7NEJBQU1DLFVBQVU7NEJBQUdGLFdBQVU7c0NBQzFCLDRFQUFDRDtnQ0FBSUMsV0FBVTswQ0FDWCw0RUFBQ0c7b0NBQ0dDLE9BQU07b0NBQ05FLFNBQVE7b0NBQ1JELE1BQUs7b0NBQ0xMLFdBQVU7OENBRVYsNEVBQUNRO3dDQUNHUSxVQUFTO3dDQUNUSixHQUFFO3dDQUNGSyxVQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBS3pCLDhEQUFDSjs0QkFDR1gsVUFBVTs0QkFDVkYsV0FBVTs7Z0NBQ2I7OENBRU8sOERBQUNrQjtvQ0FBT0MsT0FBTTtvQ0FBdURDLE1BQUs7b0NBQVNDLFNBQVN4QjtvQ0FBa0J5QixPQUFPOzs7Ozs7Z0NBQWdCOzhDQUVySSw4REFBQ0o7b0NBQU9DLE9BQU07b0NBQXlEQyxNQUFLO29DQUFTQyxTQUFTMUI7b0NBQWUyQixPQUFPOzs7Ozs7Z0NBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVE3SjtHQTFHTXZDOztRQUNjUDtRQUNDQztRQUNBRTtRQUNBQzs7O0tBSmZHO0FBNEdOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL05hdkJhci5qcz9hNjFhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCB7IGZvcm1hdEV0aGVyLCBwYXJzZVVuaXRzIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L3VuaXRzXCJcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZUNvbm5lY3RvciB9IGZyb20gXCJAd2ViMy1yZWFjdC9jb3JlXCJcclxuaW1wb3J0IHsgTWV0YU1hc2sgfSBmcm9tIFwiQHdlYjMtcmVhY3QvbWV0YW1hc2tcIlxyXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuY29uc3QgW21ldGFNYXNrLCBob29rc10gPSBpbml0aWFsaXplQ29ubmVjdG9yKChhY3Rpb25zKSA9PiBuZXcgTWV0YU1hc2soeyBhY3Rpb25zIH0pKTtcclxuY29uc3QgeyB1c2VDaGFpbklkLCB1c2VBY2NvdW50cywgdXNlSXNBY3RpdmF0aW5nLCB1c2VJc0FjdGl2ZSwgdXNlUHJvdmlkZXIgfSA9IGhvb2tzO1xyXG5jb25zdCBjb250cmFjdENoYWluID0gMTExNTUxMTFcclxuY29uc3QgY29udHJhY3RBZGRyZXNzID0gJzB4NzNhQTNkYkYxM0I5NjJCOUI5MDFCODBjQ2Q1NGJmZjdGMzI0ZGMwNidcclxuY29uc3QgTmF2QmFyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY2hhaW5pZCA9IHVzZUNoYWluSWQoKTtcclxuICAgIGNvbnN0IGFjY291bnRzID0gdXNlQWNjb3VudHMoKTtcclxuICAgIGNvbnN0IGlzQWN0aXZlID0gdXNlSXNBY3RpdmUoKTtcclxuICAgIGNvbnN0IHByb3ZpZGVyID0gdXNlUHJvdmlkZXIoKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUodW5kZWZpbmVkKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgdm9pZCBtZXRhTWFzay5jb25uZWN0RWFnZXJseSgpLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnRmFpbGVkIHRvIGNvbm5lY3QgZWFnZXJseSB0byBtZXRhbWFzaycpXHJcbiAgICAgICAgfSlcclxuICAgIH0sIFtdKVxyXG4gICAgY29uc3QgaGFuZGxlQ29ubmVjdCA9ICgpID0+IHtcclxuICAgICAgICBtZXRhTWFzay5hY3RpdmF0ZSgpXHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVEaXNjb25uZWN0ID0gKCkgPT4ge1xyXG4gICAgICAgIG1ldGFNYXNrLnJlc2V0U3RhdGUoKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhciBiZy1uZXV0cmFsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLXN0YXJ0IFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCB0YWJJbmRleD17MH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1naG9zdCBsZzpoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTUgdy01XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk00IDZoMTZNNCAxMmg4bS04IDZoMTZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8dWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lbnUgbWVudS1zbSBkcm9wZG93bi1jb250ZW50IG10LTMgei1bMV0gcC0yIHNoYWRvdyBiZy1iYXNlLTEwMCByb3VuZGVkLWJveCB3LTUyXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkhvbWU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkFkZDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmsgbm8tdW5kZXJsaW5lIGhvdmVyOm5vLXVuZGVybGluZSB0ZXh0LXhsIHRleHQtYmFzZS0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICBkYWlzeVVJXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1jZW50ZXIgaGlkZGVuIGxnOmZsZXggXCI+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tbGluayBuby11bmRlcmxpbmUgaG92ZXI6bm8tdW5kZXJsaW5lIG0tMiB0ZXh0LWJhc2UtMTAwIGhvdmVyOnRleHQtbmV1dHJhbC01MDAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rIG5vLXVuZGVybGluZSBob3Zlcjpuby11bmRlcmxpbmUgbS0yIHRleHQtYmFzZS0xMDAgaG92ZXI6dGV4dC1uZXV0cmFsLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rIG5vLXVuZGVybGluZSBob3Zlcjpuby11bmRlcmxpbmUgbS0yIHRleHQtYmFzZS0xMDAgaG92ZXI6dGV4dC1uZXV0cmFsLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VhcmNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWVuZCBmbGV4LTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24gZHJvcGRvd24tZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHRhYkluZGV4PXswfSBjbGFzc05hbWU9XCJidG4gYnRuLWdob3N0IGJ0bi1jaXJjbGUgYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHJvdW5kZWQtZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IGgtNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk03LjUgNmE0LjUgNC41IDAgMTE5IDAgNC41IDQuNSAwIDAxLTkgMHpNMy43NTEgMjAuMTA1YTguMjUgOC4yNSAwIDAxMTYuNDk4IDAgLjc1Ljc1IDAgMDEtLjQzNy42OTVBMTguNjgzIDE4LjY4MyAwIDAxMTIgMjIuNWMtMi43ODYgMC01LjQzMy0uNjA4LTcuODEyLTEuN2EuNzUuNzUgMCAwMS0uNDM3LS42OTV6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0zIHotWzFdIHAtMiBzaGFkb3cgbWVudSBtZW51LXNtIGRyb3Bkb3duLWNvbnRlbnQgYmctd2hpdGUgcm91bmRlZC1ib3ggdy01MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoaXNBY3RpdmUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZ2hvc3QgaG92ZXI6aG92ZXI6YmctY3VycmVudENvbG9yIHRleHQtZXJyb3JcIiB0eXBlPSdidXR0b24nIG9uQ2xpY2s9e2hhbmRsZURpc2Nvbm5lY3R9IHZhbHVlPXsnRGlzY29ubmVjdCd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1naG9zdCBob3Zlcjpob3ZlcjpiZy1jdXJyZW50Q29sb3IgdGV4dC1wcmltYXJ5XCIgdHlwZT0nYnV0dG9uJyBvbkNsaWNrPXtoYW5kbGVDb25uZWN0fSB2YWx1ZT17J0Nvbm5lY3QnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XHJcbiJdLCJuYW1lcyI6WyJmb3JtYXRFdGhlciIsInBhcnNlVW5pdHMiLCJpbml0aWFsaXplQ29ubmVjdG9yIiwiTWV0YU1hc2siLCJldGhlcnMiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwibWV0YU1hc2siLCJob29rcyIsImFjdGlvbnMiLCJ1c2VDaGFpbklkIiwidXNlQWNjb3VudHMiLCJ1c2VJc0FjdGl2YXRpbmciLCJ1c2VJc0FjdGl2ZSIsInVzZVByb3ZpZGVyIiwiY29udHJhY3RDaGFpbiIsImNvbnRyYWN0QWRkcmVzcyIsIk5hdkJhciIsImNoYWluaWQiLCJhY2NvdW50cyIsImlzQWN0aXZlIiwicHJvdmlkZXIiLCJlcnJvciIsInNldEVycm9yIiwidW5kZWZpbmVkIiwiY29ubmVjdEVhZ2VybHkiLCJjYXRjaCIsImNvbnNvbGUiLCJkZWJ1ZyIsImhhbmRsZUNvbm5lY3QiLCJhY3RpdmF0ZSIsImhhbmRsZURpc2Nvbm5lY3QiLCJyZXNldFN0YXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJ0YWJJbmRleCIsInN2ZyIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJzdHJva2UiLCJwYXRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwic3Ryb2tlV2lkdGgiLCJkIiwidWwiLCJsaSIsImEiLCJmaWxsUnVsZSIsImNsaXBSdWxlIiwiYnV0dG9uIiwiY2xhc3MiLCJ0eXBlIiwib25DbGljayIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/NavBar.js\n"));

/***/ })

});