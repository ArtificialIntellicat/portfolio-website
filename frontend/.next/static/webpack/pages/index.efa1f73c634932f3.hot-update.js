"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/ThemeToggle.tsx":
/*!****************************************!*\
  !*** ./src/components/ThemeToggle.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_FaMoon_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=FaMoon!=!react-icons/fa */ \"./node_modules/react-icons/fa/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_BsSunFill_react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=BsSunFill!=!react-icons/bs */ \"./node_modules/react-icons/bs/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst ThemeToggle = (param)=>{\n    let { size = 25 } = param;\n    _s();\n    const [darkMode, setDarkMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const theme = localStorage.getItem(\"theme\");\n        setDarkMode(theme === \"dark\");\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (darkMode) {\n            document.documentElement.classList.add(\"dark\");\n            localStorage.setItem(\"theme\", \"dark\");\n        } else {\n            document.documentElement.classList.remove(\"dark\");\n            localStorage.setItem(\"theme\", \"light\");\n        }\n    }, [\n        darkMode\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onClick: ()=>setDarkMode(!darkMode),\n        className: \"flex items-center\",\n        children: darkMode ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BsSunFill_react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsSunFill, {\n            className: \"text-white icon-hover\",\n            size: size\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Toni\\\\Documents\\\\Development\\\\Website\\\\portfolio-website\\\\frontend\\\\src\\\\components\\\\ThemeToggle.tsx\",\n            lineNumber: 30,\n            columnNumber: 19\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaMoon_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaMoon, {\n            className: \"text-white icon-hover\",\n            size: size\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Toni\\\\Documents\\\\Development\\\\Website\\\\portfolio-website\\\\frontend\\\\src\\\\components\\\\ThemeToggle.tsx\",\n            lineNumber: 30,\n            columnNumber: 81\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Toni\\\\Documents\\\\Development\\\\Website\\\\portfolio-website\\\\frontend\\\\src\\\\components\\\\ThemeToggle.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ThemeToggle, \"jxWvogfm97D9w3+yMzVp/epPJCw=\");\n_c = ThemeToggle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThemeToggle);\nvar _c;\n$RefreshReg$(_c, \"ThemeToggle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UaGVtZVRvZ2dsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDbUQ7QUFDWDtBQUNHO0FBTTNDLE1BQU1LLGNBQTBDO1FBQUMsRUFBRUMsT0FBTyxFQUFFLEVBQUU7O0lBQzVELE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBVTtJQUVsREMsZ0RBQVNBLENBQUM7UUFDUixNQUFNTyxRQUFRQyxhQUFhQyxPQUFPLENBQUM7UUFDbkNILFlBQVlDLFVBQVU7SUFDeEIsR0FBRyxFQUFFO0lBRUxQLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSUssVUFBVTtZQUNaSyxTQUFTQyxlQUFlLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDO1lBQ3ZDTCxhQUFhTSxPQUFPLENBQUMsU0FBUztRQUNoQyxPQUFPO1lBQ0xKLFNBQVNDLGVBQWUsQ0FBQ0MsU0FBUyxDQUFDRyxNQUFNLENBQUM7WUFDMUNQLGFBQWFNLE9BQU8sQ0FBQyxTQUFTO1FBQ2hDO0lBQ0YsR0FBRztRQUFDVDtLQUFTO0lBRWIscUJBQ0UsOERBQUNXO1FBQUlDLFNBQVMsSUFBTVgsWUFBWSxDQUFDRDtRQUFXYSxXQUFVO2tCQUNuRGIseUJBQVcsOERBQUNILHNGQUFTQTtZQUFDZ0IsV0FBVTtZQUF3QmQsTUFBTUE7Ozs7O3NDQUFXLDhEQUFDSCxnRkFBTUE7WUFBQ2lCLFdBQVU7WUFBd0JkLE1BQU1BOzs7Ozs7Ozs7OztBQUdoSTtHQXZCTUQ7S0FBQUE7QUF5Qk4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGhlbWVUb2dnbGUudHN4PzU0MGYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRmFNb29uIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgeyBCc1N1bkZpbGwgfSBmcm9tICdyZWFjdC1pY29ucy9icyc7XHJcblxyXG5pbnRlcmZhY2UgVGhlbWVUb2dnbGVQcm9wcyB7XHJcbiAgc2l6ZT86IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgVGhlbWVUb2dnbGU6IFJlYWN0LkZDPFRoZW1lVG9nZ2xlUHJvcHM+ID0gKHsgc2l6ZSA9IDI1IH0pID0+IHtcclxuICBjb25zdCBbZGFya01vZGUsIHNldERhcmtNb2RlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJyk7XHJcbiAgICBzZXREYXJrTW9kZSh0aGVtZSA9PT0gJ2RhcmsnKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoZGFya01vZGUpIHtcclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RhcmsnKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgJ2RhcmsnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJyk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsICdsaWdodCcpO1xyXG4gICAgfVxyXG4gIH0sIFtkYXJrTW9kZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXREYXJrTW9kZSghZGFya01vZGUpfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICB7ZGFya01vZGUgPyA8QnNTdW5GaWxsIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgaWNvbi1ob3ZlclwiIHNpemU9e3NpemV9IC8+IDogPEZhTW9vbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGljb24taG92ZXJcIiBzaXplPXtzaXplfSAvPn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaGVtZVRvZ2dsZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJGYU1vb24iLCJCc1N1bkZpbGwiLCJUaGVtZVRvZ2dsZSIsInNpemUiLCJkYXJrTW9kZSIsInNldERhcmtNb2RlIiwidGhlbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRJdGVtIiwicmVtb3ZlIiwiZGl2Iiwib25DbGljayIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ThemeToggle.tsx\n"));

/***/ })

});