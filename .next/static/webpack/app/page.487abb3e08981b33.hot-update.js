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

/***/ "(app-pages-browser)/./app/Poke.jsx":
/*!**********************!*\
  !*** ./app/Poke.jsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst Poke = ()=>{\n    _s();\n    const [poke, setPoke] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [number, setNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let abortController = new AbortController();\n        const loadPoke = async ()=>{\n            try {\n                setLoading(true);\n                let res = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"https://pokeapi.co/api/v2/pokemon/\".concat(number), {\n                    signal: abortController.signal\n                });\n                setPoke(res.data);\n            } catch (error) {\n                setError(error);\n            }\n        };\n        loadPoke();\n        return ()=>abortController.abort();\n    }, [\n        number\n    ]);\n    const prevPoke = ()=>{\n        setNumber((number)=>number - 1);\n    };\n    const nextPoke = ()=>{\n        setNumber((number)=>number + 1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl\",\n                    children: [\n                        \"Pokemon Name\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-xl\",\n                            children: poke.name\n                        }, void 0, false, {\n                            fileName: \"D:\\\\blockchain\\\\app\\\\Poke.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\blockchain\\\\app\\\\Poke.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, undefined),\n                poke.sprites && poke.sprites.other && poke.sprites.other.home && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: poke.sprites.other.home.front_default,\n                    alt: poke.name\n                }, void 0, false, {\n                    fileName: \"D:\\\\blockchain\\\\app\\\\Poke.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 21\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"mt-8\",\n                    children: (poke === null || poke === void 0 ? void 0 : poke.abilities) ? poke.abilities.map((abil, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: abil.ability.name\n                        }, index, false, {\n                            fileName: \"D:\\\\blockchain\\\\app\\\\Poke.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 29\n                        }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: \"No abilities available\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\blockchain\\\\app\\\\Poke.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\blockchain\\\\app\\\\Poke.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"join justify-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn btn-warning mt-2  w-32\",\n                            onClick: prevPoke,\n                            children: \"Previous\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\blockchain\\\\app\\\\Poke.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn btn-error mt-2 w-32\",\n                            onClick: nextPoke,\n                            children: \"Next\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\blockchain\\\\app\\\\Poke.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\blockchain\\\\app\\\\Poke.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\blockchain\\\\app\\\\Poke.jsx\",\n            lineNumber: 36,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(Poke, \"TLe4mFyMwjfD+zIXOOFJizdg1os=\");\n_c = Poke;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Poke);\nvar _c;\n$RefreshReg$(_c, \"Poke\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Qb2tlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBCO0FBQ3dCO0FBRWxELE1BQU1JLE9BQU87O0lBQ1QsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ0ssU0FBU0MsV0FBVyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNPLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUyxRQUFRQyxVQUFVLEdBQUdWLCtDQUFRQSxDQUFDO0lBRXJDQyxnREFBU0EsQ0FBQztRQUNOLElBQUlVLGtCQUFrQixJQUFJQztRQUMxQixNQUFNQyxXQUFXO1lBQ2IsSUFBSTtnQkFDQVAsV0FBVztnQkFDWCxJQUFJUSxNQUFNLE1BQU1oQiw2Q0FBS0EsQ0FBQ2lCLEdBQUcsQ0FBQyxxQ0FBNEMsT0FBUE4sU0FBVTtvQkFDckVPLFFBQVFMLGdCQUFnQkssTUFBTTtnQkFDbEM7Z0JBQ0FaLFFBQVFVLElBQUlHLElBQUk7WUFDcEIsRUFBRSxPQUFPVixPQUFPO2dCQUNaQyxTQUFTRDtZQUNiO1FBQ0o7UUFDQU07UUFDQSxPQUFPLElBQU1GLGdCQUFnQk8sS0FBSztJQUN0QyxHQUFHO1FBQUNUO0tBQU87SUFFWCxNQUFNVSxXQUFXO1FBQ2JULFVBQVUsQ0FBQ0QsU0FBU0EsU0FBTztJQUMvQjtJQUNBLE1BQU1XLFdBQVc7UUFDYlYsVUFBVSxDQUFDRCxTQUFTQSxTQUFPO0lBQy9CO0lBRUEscUJBQ0k7a0JBQ0ksNEVBQUNZOzs4QkFDRyw4REFBQ0M7b0JBQUdDLFdBQVU7O3dCQUFXO3NDQUNyQiw4REFBQ0M7NEJBQUVELFdBQVU7c0NBQVdwQixLQUFLc0IsSUFBSTs7Ozs7Ozs7Ozs7O2dCQUVwQ3RCLEtBQUt1QixPQUFPLElBQUl2QixLQUFLdUIsT0FBTyxDQUFDQyxLQUFLLElBQUl4QixLQUFLdUIsT0FBTyxDQUFDQyxLQUFLLENBQUNDLElBQUksa0JBQzFELDhEQUFDQztvQkFBSUMsS0FBSzNCLEtBQUt1QixPQUFPLENBQUNDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDRyxhQUFhO29CQUFFQyxLQUFLN0IsS0FBS3NCLElBQUk7Ozs7Ozs4QkFFbkUsOERBQUNRO29CQUFHVixXQUFVOzhCQUNUcEIsQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNK0IsU0FBUyxJQUNaL0IsS0FBSytCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUN0Qiw4REFBQ0M7c0NBQWdCRixLQUFLRyxPQUFPLENBQUNkLElBQUk7MkJBQXpCWTs7Ozt1REFHYiw4REFBQ0M7a0NBQUc7Ozs7Ozs7Ozs7OzhCQUdaLDhEQUFDakI7b0JBQUlFLFdBQVU7O3NDQUNYLDhEQUFDaUI7NEJBQU9qQixXQUFVOzRCQUE2QmtCLFNBQVN0QjtzQ0FBVTs7Ozs7O3NDQUNsRSw4REFBQ3FCOzRCQUFPakIsV0FBVTs0QkFBMEJrQixTQUFTckI7c0NBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbkY7R0F2RE1sQjtLQUFBQTtBQXlETiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvUG9rZS5qc3g/MjkyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5jb25zdCBQb2tlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3Bva2UsIHNldFBva2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtudW1iZXIsIHNldE51bWJlcl0gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBhYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XHJcbiAgICAgICAgY29uc3QgbG9hZFBva2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLyR7bnVtYmVyfWAsIHtcclxuICAgICAgICAgICAgICAgICAgICBzaWduYWw6IGFib3J0Q29udHJvbGxlci5zaWduYWxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0UG9rZShyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbG9hZFBva2UoKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4gYWJvcnRDb250cm9sbGVyLmFib3J0KCk7XHJcbiAgICB9LCBbbnVtYmVyXSk7XHJcblxyXG4gICAgY29uc3QgcHJldlBva2UgPSAoKSA9PntcclxuICAgICAgICBzZXROdW1iZXIoKG51bWJlcik9Pm51bWJlci0xKTtcclxuICAgIH1cclxuICAgIGNvbnN0IG5leHRQb2tlID0gKCkgPT57XHJcbiAgICAgICAgc2V0TnVtYmVyKChudW1iZXIpPT5udW1iZXIrMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC0yeGwnPlBva2Vtb24gTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC14bCc+e3Bva2UubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAge3Bva2Uuc3ByaXRlcyAmJiBwb2tlLnNwcml0ZXMub3RoZXIgJiYgcG9rZS5zcHJpdGVzLm90aGVyLmhvbWUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwb2tlLnNwcml0ZXMub3RoZXIuaG9tZS5mcm9udF9kZWZhdWx0fSBhbHQ9e3Bva2UubmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdtdC04Jz5cclxuICAgICAgICAgICAgICAgICAgICB7cG9rZT8uYWJpbGl0aWVzID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2tlLmFiaWxpdGllcy5tYXAoKGFiaWwsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+e2FiaWwuYWJpbGl0eS5uYW1lfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPk5vIGFiaWxpdGllcyBhdmFpbGFibGU8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2pvaW4ganVzdGlmeS1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLXdhcm5pbmcgbXQtMiAgdy0zMicgb25DbGljaz17cHJldlBva2V9PlByZXZpb3VzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tZXJyb3IgbXQtMiB3LTMyJyBvbkNsaWNrPXtuZXh0UG9rZX0+TmV4dDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9rZTtcclxuIl0sIm5hbWVzIjpbImF4aW9zIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlBva2UiLCJwb2tlIiwic2V0UG9rZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsIm51bWJlciIsInNldE51bWJlciIsImFib3J0Q29udHJvbGxlciIsIkFib3J0Q29udHJvbGxlciIsImxvYWRQb2tlIiwicmVzIiwiZ2V0Iiwic2lnbmFsIiwiZGF0YSIsImFib3J0IiwicHJldlBva2UiLCJuZXh0UG9rZSIsImRpdiIsImgxIiwiY2xhc3NOYW1lIiwicCIsIm5hbWUiLCJzcHJpdGVzIiwib3RoZXIiLCJob21lIiwiaW1nIiwic3JjIiwiZnJvbnRfZGVmYXVsdCIsImFsdCIsInVsIiwiYWJpbGl0aWVzIiwibWFwIiwiYWJpbCIsImluZGV4IiwibGkiLCJhYmlsaXR5IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Poke.jsx\n"));

/***/ })

});