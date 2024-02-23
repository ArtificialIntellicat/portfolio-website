/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/themeContext.tsx":
/*!**************************************!*\
  !*** ./src/context/themeContext.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ThemeProvider: () => (/* binding */ ThemeProvider),\n/* harmony export */   useTheme: () => (/* binding */ useTheme)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nconst useTheme = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ThemeContext);\n    if (!context) {\n        throw new Error(\"useTheme must be used within a ThemeProvider\");\n    }\n    return context;\n};\nconst ThemeProvider = ({ children })=>{\n    const [isDarkTheme, setIsDarkTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleTheme = ()=>{\n        console.log(isDarkTheme ? \"Switching to Light Theme\" : \"Switching to Dark Theme\");\n        setIsDarkTheme(!isDarkTheme);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(`Current Theme: ${isDarkTheme ? \"Dark\" : \"Light\"}`);\n        const className = \"dark-theme\";\n        const element = document.documentElement;\n        if (isDarkTheme) {\n            element.classList.add(className);\n        } else {\n            element.classList.remove(className);\n        }\n    }, [\n        isDarkTheme\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: {\n            isDarkTheme,\n            toggleTheme\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Toni\\\\Documents\\\\Development\\\\Website\\\\portfolio-website\\\\frontend\\\\src\\\\context\\\\themeContext.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC90aGVtZUNvbnRleHQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEU7QUFPOUUsTUFBTUssNkJBQWVKLG9EQUFhQSxDQUErQks7QUFFMUQsTUFBTUMsV0FBVztJQUN0QixNQUFNQyxVQUFVTixpREFBVUEsQ0FBQ0c7SUFDM0IsSUFBSSxDQUFDRyxTQUFTO1FBQ1osTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0lBQ0EsT0FBT0Q7QUFDVCxFQUFFO0FBTUssTUFBTUUsZ0JBQWdCLENBQUMsRUFBRUMsUUFBUSxFQUFzQjtJQUM1RCxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1YsK0NBQVFBLENBQUM7SUFFL0MsTUFBTVcsY0FBYztRQUNsQkMsUUFBUUMsR0FBRyxDQUFDSixjQUFjLDZCQUE2QjtRQUN2REMsZUFBZSxDQUFDRDtJQUNsQjtJQUVBUixnREFBU0EsQ0FBQztRQUNSVyxRQUFRQyxHQUFHLENBQUMsQ0FBQyxlQUFlLEVBQUVKLGNBQWMsU0FBUyxRQUFRLENBQUM7UUFDOUQsTUFBTUssWUFBWTtRQUNsQixNQUFNQyxVQUFVQyxTQUFTQyxlQUFlO1FBRXhDLElBQUlSLGFBQWE7WUFDZk0sUUFBUUcsU0FBUyxDQUFDQyxHQUFHLENBQUNMO1FBQ3hCLE9BQU87WUFDTEMsUUFBUUcsU0FBUyxDQUFDRSxNQUFNLENBQUNOO1FBQzNCO0lBQ0YsR0FBRztRQUFDTDtLQUFZO0lBRWhCLHFCQUNFLDhEQUFDUCxhQUFhbUIsUUFBUTtRQUFDQyxPQUFPO1lBQUViO1lBQWFFO1FBQVk7a0JBQ3RESDs7Ozs7O0FBR1AsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbnRleHQvdGhlbWVDb250ZXh0LnRzeD84ZWEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxudHlwZSBUaGVtZUNvbnRleHRUeXBlID0ge1xyXG4gIGlzRGFya1RoZW1lOiBib29sZWFuO1xyXG4gIHRvZ2dsZVRoZW1lOiAoKSA9PiB2b2lkO1xyXG59O1xyXG5cclxuY29uc3QgVGhlbWVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxUaGVtZUNvbnRleHRUeXBlIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVRoZW1lID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XHJcbiAgaWYgKCFjb250ZXh0KSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZVRoZW1lIG11c3QgYmUgdXNlZCB3aXRoaW4gYSBUaGVtZVByb3ZpZGVyJyk7XHJcbiAgfVxyXG4gIHJldHVybiBjb250ZXh0O1xyXG59O1xyXG5cclxudHlwZSBUaGVtZVByb3ZpZGVyUHJvcHMgPSB7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBUaGVtZVByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogVGhlbWVQcm92aWRlclByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2lzRGFya1RoZW1lLCBzZXRJc0RhcmtUaGVtZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVRoZW1lID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coaXNEYXJrVGhlbWUgPyBcIlN3aXRjaGluZyB0byBMaWdodCBUaGVtZVwiIDogXCJTd2l0Y2hpbmcgdG8gRGFyayBUaGVtZVwiKTtcclxuICAgIHNldElzRGFya1RoZW1lKCFpc0RhcmtUaGVtZSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGBDdXJyZW50IFRoZW1lOiAke2lzRGFya1RoZW1lID8gJ0RhcmsnIDogJ0xpZ2h0J31gKTtcclxuICAgIGNvbnN0IGNsYXNzTmFtZSA9ICdkYXJrLXRoZW1lJztcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKGlzRGFya1RoZW1lKSB7XHJcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XHJcbiAgICB9XHJcbiAgfSwgW2lzRGFya1RoZW1lXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGlzRGFya1RoZW1lLCB0b2dnbGVUaGVtZSB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9UaGVtZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlRoZW1lQ29udGV4dCIsInVuZGVmaW5lZCIsInVzZVRoZW1lIiwiY29udGV4dCIsIkVycm9yIiwiVGhlbWVQcm92aWRlciIsImNoaWxkcmVuIiwiaXNEYXJrVGhlbWUiLCJzZXRJc0RhcmtUaGVtZSIsInRvZ2dsZVRoZW1lIiwiY29uc29sZSIsImxvZyIsImNsYXNzTmFtZSIsImVsZW1lbnQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/themeContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/globals.css */ \"./src/app/globals.css\");\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_themeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/themeContext */ \"./src/context/themeContext.tsx\");\n\n\n\nfunction PortfolioWebsite({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_themeContext__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Toni\\\\Documents\\\\Development\\\\Website\\\\portfolio-website\\\\frontend\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Toni\\\\Documents\\\\Development\\\\Website\\\\portfolio-website\\\\frontend\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PortfolioWebsite);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE0QjtBQUM0QjtBQUV4RCxTQUFTQyxpQkFBaUIsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDaEQscUJBQ0UsOERBQUNILGdFQUFhQTtrQkFDWiw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QjtBQUVBLGlFQUFlRixnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vYXBwL2dsb2JhbHMuY3NzJztcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHQvdGhlbWVDb250ZXh0JztcclxuXHJcbmZ1bmN0aW9uIFBvcnRmb2xpb1dlYnNpdGUoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZVByb3ZpZGVyPlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9ydGZvbGlvV2Vic2l0ZTtcclxuIl0sIm5hbWVzIjpbIlRoZW1lUHJvdmlkZXIiLCJQb3J0Zm9saW9XZWJzaXRlIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();