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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ \"(app-pages-browser)/./node_modules/@web3-react/core/dist/index.js\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3_react_metamask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/metamask */ \"(app-pages-browser)/./node_modules/@web3-react/metamask/dist/index.js\");\n/* harmony import */ var _web3_react_metamask__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_web3_react_metamask__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _abi_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./abi.json */ \"(app-pages-browser)/./app/abi.json\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/NavBar */ \"(app-pages-browser)/./app/components/NavBar.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst [metaMask, hooks] = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.initializeConnector)((actions)=>new _web3_react_metamask__WEBPACK_IMPORTED_MODULE_2__.MetaMask({\n        actions\n    }));\nconst { useChainId, useAccounts, useIsActivating, useIsActive, useProvider } = hooks;\nconst contractChain = 11155111;\nconst contractAddress = \"0x73aA3dbF13B962B9B901B80cCd54bff7F324dc06\";\nfunction Page() {\n    _s();\n    const chainid = useChainId();\n    const accounts = useAccounts();\n    const isActive = useIsActive();\n    const provider = useProvider();\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(undefined);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        void metaMask.connectEagerly().catch(()=>{\n            console.debug(\"Failed to connect eagerly to metamask\");\n        });\n    }, []);\n    const handleConnect = ()=>{\n        metaMask.activate();\n    };\n    const handleDisconnect = ()=>{\n        metaMask.resetState();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navbar bg-neutral\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"navbar-start \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"btn btn-link no-underline hover:no-underline text-xl text-base-100\",\n                            children: \"Blo\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"navbar-end flex-3\",\n                        children: isActive ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            class: \"btn btn-ghost text-error\",\n                            type: \"button\",\n                            onClick: handleDisconnect,\n                            value: \"Disconnect\",\n                            children: \"Disconnect\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            class: \"btn btn-ghost text-primary\",\n                            type: \"button\",\n                            onClick: handleConnect,\n                            value: \"Connect\",\n                            children: \"Connect\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"flex justify-center items-center m-24\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"card w-96 bg-base-200 shadow-lg w-[35rem]\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"card-body\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                class: \"card-title\",\n                                children: [\n                                    \"ChainId : \",\n                                    chainid\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"IsActive : \",\n                                    isActive.toString()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Accounts : \",\n                                    accounts ? accounts[0] : \"\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\031\\\\จ.นี\\\\blockchain\\\\app\\\\page.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Page, \"q/JYZqsUloU2cT1G3ifO5q46Ob8=\", false, function() {\n    return [\n        useChainId,\n        useAccounts,\n        useIsActive,\n        useProvider\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUM4RDtBQUNSO0FBQ1A7QUFDaEI7QUFDbUI7QUFDdEI7QUFDWTtBQUV4QyxNQUFNLENBQUNVLFVBQVVDLE1BQU0sR0FBR1QscUVBQW1CQSxDQUFDLENBQUNVLFVBQVksSUFBSVQsMERBQVFBLENBQUM7UUFBRVM7SUFBUTtBQUNsRixNQUFNLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFQyxlQUFlLEVBQUVDLFdBQVcsRUFBRUMsV0FBVyxFQUFFLEdBQUdOO0FBQy9FLE1BQU1PLGdCQUFnQjtBQUN0QixNQUFNQyxrQkFBa0I7QUFFVCxTQUFTQzs7SUFDdEIsTUFBTUMsVUFBVVI7SUFDaEIsTUFBTVMsV0FBV1I7SUFDakIsTUFBTVMsV0FBV1A7SUFDakIsTUFBTVEsV0FBV1A7SUFDakIsTUFBTSxDQUFDUSxPQUFPQyxTQUFTLEdBQUdwQiwrQ0FBUUEsQ0FBQ3FCO0lBRW5DcEIsZ0RBQVNBLENBQUM7UUFDUixLQUFLRyxTQUFTa0IsY0FBYyxHQUFHQyxLQUFLLENBQUM7WUFDbkNDLFFBQVFDLEtBQUssQ0FBQztRQUNoQjtJQUNGLEdBQUcsRUFBRTtJQUNMLE1BQU1DLGdCQUFnQjtRQUNwQnRCLFNBQVN1QixRQUFRO0lBQ25CO0lBQ0EsTUFBTUMsbUJBQW1CO1FBQ3ZCeEIsU0FBU3lCLFVBQVU7SUFDckI7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNDO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNDOzRCQUFFRCxXQUFVO3NDQUFxRTs7Ozs7Ozs7Ozs7a0NBSXBGLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDWmQseUJBQ0MsOERBQUNnQjs0QkFBT0MsT0FBTTs0QkFBMkJDLE1BQUs7NEJBQVNDLFNBQVNSOzRCQUFrQlMsT0FBTztzQ0FBYzs7Ozs7aURBRXZHLDhEQUFDSjs0QkFBT0MsT0FBTTs0QkFBNkJDLE1BQUs7NEJBQVNDLFNBQVNWOzRCQUFlVyxPQUFPO3NDQUFXOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFLekcsOERBQUNQO2dCQUFJSSxPQUFNOzBCQUNULDRFQUFDSjtvQkFBSUksT0FBTTs4QkFDWCw0RUFBQ0o7d0JBQUlJLE9BQU07OzBDQUNQLDhEQUFDSTtnQ0FBR0osT0FBTTs7b0NBQWE7b0NBQVduQjs7Ozs7OzswQ0FDbEMsOERBQUN3Qjs7b0NBQUU7b0NBQVl0QixTQUFTdUIsUUFBUTs7Ozs7OzswQ0FDaEMsOERBQUNEOztvQ0FBRTtvQ0FBWXZCLFdBQVdBLFFBQVEsQ0FBQyxFQUFFLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEQ7R0EvQ3dCRjs7UUFDTlA7UUFDQ0M7UUFDQUU7UUFDQUM7OztLQUpLRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qcz9iZTY3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCB7IGZvcm1hdEV0aGVyLCBwYXJzZVVuaXRzIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L3VuaXRzXCJcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZUNvbm5lY3RvciB9IGZyb20gXCJAd2ViMy1yZWFjdC9jb3JlXCJcclxuaW1wb3J0IHsgTWV0YU1hc2sgfSBmcm9tIFwiQHdlYjMtcmVhY3QvbWV0YW1hc2tcIlxyXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgYWJpIGZyb20gXCIuL2FiaS5qc29uXCJcclxuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi9jb21wb25lbnRzL05hdkJhclwiXHJcblxyXG5jb25zdCBbbWV0YU1hc2ssIGhvb2tzXSA9IGluaXRpYWxpemVDb25uZWN0b3IoKGFjdGlvbnMpID0+IG5ldyBNZXRhTWFzayh7IGFjdGlvbnMgfSkpO1xyXG5jb25zdCB7IHVzZUNoYWluSWQsIHVzZUFjY291bnRzLCB1c2VJc0FjdGl2YXRpbmcsIHVzZUlzQWN0aXZlLCB1c2VQcm92aWRlciB9ID0gaG9va3M7XHJcbmNvbnN0IGNvbnRyYWN0Q2hhaW4gPSAxMTE1NTExMVxyXG5jb25zdCBjb250cmFjdEFkZHJlc3MgPSAnMHg3M2FBM2RiRjEzQjk2MkI5QjkwMUI4MGNDZDU0YmZmN0YzMjRkYzA2J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSgpIHtcclxuICBjb25zdCBjaGFpbmlkID0gdXNlQ2hhaW5JZCgpO1xyXG4gIGNvbnN0IGFjY291bnRzID0gdXNlQWNjb3VudHMoKTtcclxuICBjb25zdCBpc0FjdGl2ZSA9IHVzZUlzQWN0aXZlKCk7XHJcbiAgY29uc3QgcHJvdmlkZXIgPSB1c2VQcm92aWRlcigpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUodW5kZWZpbmVkKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdm9pZCBtZXRhTWFzay5jb25uZWN0RWFnZXJseSgpLmNhdGNoKCgpID0+IHtcclxuICAgICAgY29uc29sZS5kZWJ1ZygnRmFpbGVkIHRvIGNvbm5lY3QgZWFnZXJseSB0byBtZXRhbWFzaycpXHJcbiAgICB9KVxyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IGhhbmRsZUNvbm5lY3QgPSAoKSA9PiB7XHJcbiAgICBtZXRhTWFzay5hY3RpdmF0ZSgpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZURpc2Nvbm5lY3QgPSAoKSA9PiB7XHJcbiAgICBtZXRhTWFzay5yZXNldFN0YXRlKClcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhciBiZy1uZXV0cmFsXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItc3RhcnQgXCI+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmsgbm8tdW5kZXJsaW5lIGhvdmVyOm5vLXVuZGVybGluZSB0ZXh0LXhsIHRleHQtYmFzZS0xMDBcIj5cclxuICAgICAgICAgICAgQmxvXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItZW5kIGZsZXgtM1wiPlxyXG4gICAgICAgICAge2lzQWN0aXZlID9cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZ2hvc3QgdGV4dC1lcnJvclwiIHR5cGU9J2J1dHRvbicgb25DbGljaz17aGFuZGxlRGlzY29ubmVjdH0gdmFsdWU9eydEaXNjb25uZWN0J30+RGlzY29ubmVjdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWdob3N0IHRleHQtcHJpbWFyeVwiIHR5cGU9J2J1dHRvbicgb25DbGljaz17aGFuZGxlQ29ubmVjdH0gdmFsdWU9eydDb25uZWN0J30+Q29ubmVjdDwvYnV0dG9uPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIGNhcmQgKi99XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtLTI0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgdy05NiBiZy1iYXNlLTIwMCBzaGFkb3ctbGcgdy1bMzVyZW1dXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJjYXJkLXRpdGxlXCI+Q2hhaW5JZCA6IHtjaGFpbmlkfTwvaDI+XHJcbiAgICAgICAgICAgIDxwPklzQWN0aXZlIDoge2lzQWN0aXZlLnRvU3RyaW5nKCl9PC9wPlxyXG4gICAgICAgICAgICA8cD5BY2NvdW50cyA6IHthY2NvdW50cyA/IGFjY291bnRzWzBdIDogJyd9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+ICBcclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiZm9ybWF0RXRoZXIiLCJwYXJzZVVuaXRzIiwiaW5pdGlhbGl6ZUNvbm5lY3RvciIsIk1ldGFNYXNrIiwiZXRoZXJzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImFiaSIsIk5hdkJhciIsIm1ldGFNYXNrIiwiaG9va3MiLCJhY3Rpb25zIiwidXNlQ2hhaW5JZCIsInVzZUFjY291bnRzIiwidXNlSXNBY3RpdmF0aW5nIiwidXNlSXNBY3RpdmUiLCJ1c2VQcm92aWRlciIsImNvbnRyYWN0Q2hhaW4iLCJjb250cmFjdEFkZHJlc3MiLCJQYWdlIiwiY2hhaW5pZCIsImFjY291bnRzIiwiaXNBY3RpdmUiLCJwcm92aWRlciIsImVycm9yIiwic2V0RXJyb3IiLCJ1bmRlZmluZWQiLCJjb25uZWN0RWFnZXJseSIsImNhdGNoIiwiY29uc29sZSIsImRlYnVnIiwiaGFuZGxlQ29ubmVjdCIsImFjdGl2YXRlIiwiaGFuZGxlRGlzY29ubmVjdCIsInJlc2V0U3RhdGUiLCJkaXYiLCJjbGFzc05hbWUiLCJhIiwiYnV0dG9uIiwiY2xhc3MiLCJ0eXBlIiwib25DbGljayIsInZhbHVlIiwiaDIiLCJwIiwidG9TdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});