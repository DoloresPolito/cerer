/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/structure/Header/Button/index.js":
/*!**********************************************!*\
  !*** ./src/structure/Header/Button/index.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "(app-client)/./src/structure/Header/index.js":
/*!***************************************!*\
  !*** ./src/structure/Header/index.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-client)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-client)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ \"(app-client)/./src/structure/Header/Button/index.js\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ \"(app-client)/./src/structure/Header/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Nav */ \"(app-client)/./src/structure/Header/Nav/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst menu = {\n    open: {\n        width: \"55vh\",\n        height: \"100vh\",\n        top: \"-1vh\",\n        right: \"-5vh\",\n        transition: {\n            duration: 0.75,\n            type: \"tween\",\n            ease: [\n                0.76,\n                0,\n                0.24,\n                1\n            ]\n        }\n    },\n    closed: {\n        width: \"10vh\",\n        height: \"4vh\",\n        top: \"0vh\",\n        right: \"0vh\",\n        transition: {\n            duration: 0.75,\n            delay: 0.35,\n            type: \"tween\",\n            ease: [\n                0.76,\n                0,\n                0.24,\n                1\n            ]\n        }\n    }\n};\nfunction Index() {\n    _s();\n    const [isActive, setIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().header),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().menu),\n                variants: menu,\n                animate: isActive ? \"open\" : \"closed\",\n                initial: \"closed\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.AnimatePresence, {\n                    children: isActive && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/dolorespolito/Desktop/cerer/src/structure/Header/index.js\",\n                        lineNumber: 47,\n                        columnNumber: 39\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/dolorespolito/Desktop/cerer/src/structure/Header/index.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dolorespolito/Desktop/cerer/src/structure/Header/index.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_Button__WEBPACK_IMPORTED_MODULE_2___default()), {\n                isActive: isActive,\n                toggleMenu: ()=>{\n                    setIsActive(!isActive);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/dolorespolito/Desktop/cerer/src/structure/Header/index.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dolorespolito/Desktop/cerer/src/structure/Header/index.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(Index, \"OFRYOMGmWDzfQ4dzLF00ag1mHo0=\");\n_c = Index;\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL3N0cnVjdHVyZS9IZWFkZXIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNpQztBQUN1QjtBQUMxQjtBQUNZO0FBQ2xCO0FBS3hCLE1BQU1NLE9BQU87SUFDWEMsTUFBTTtRQUNKQyxPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsS0FBSztRQUNMQyxPQUFPO1FBRVBDLFlBQVk7WUFBRUMsVUFBVTtZQUFNQyxNQUFNO1lBQVNDLE1BQU07Z0JBQUM7Z0JBQU07Z0JBQUc7Z0JBQU07YUFBRTtRQUFDO0lBQ3hFO0lBQ0FDLFFBQVE7UUFDTlIsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLEtBQUs7UUFDTEMsT0FBTztRQUVQQyxZQUFZO1lBQ1ZDLFVBQVU7WUFDVkksT0FBTztZQUNQSCxNQUFNO1lBQ05DLE1BQU07Z0JBQUM7Z0JBQU07Z0JBQUc7Z0JBQU07YUFBRTtRQUMxQjtJQUNGO0FBQ0Y7QUFFZSxTQUFTRzs7SUFDdEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdwQiwrQ0FBUUEsQ0FBQztJQUV6QyxxQkFDRSw4REFBQ3FCO1FBQUlDLFdBQVdsQixtRUFBYTs7MEJBRTNCLDhEQUFDRixpREFBTUEsQ0FBQ21CLEdBQUc7Z0JBQ1RDLFdBQVdsQixpRUFBVztnQkFDdEJvQixVQUFVbEI7Z0JBQ1ZtQixTQUFTTixXQUFXLFNBQVM7Z0JBQzdCTyxTQUFROzBCQUVSLDRFQUFDekIsMERBQWVBOzhCQUFFa0IsMEJBQVksOERBQUNkLDRDQUFHQTs7Ozs7Ozs7Ozs7Ozs7OzBCQUVwQyw4REFBQ0YsZ0RBQU1BO2dCQUNMZ0IsVUFBVUE7Z0JBQ1ZRLFlBQVk7b0JBQ1ZQLFlBQVksQ0FBQ0Q7Z0JBQ2Y7Ozs7Ozs7Ozs7OztBQUlSO0dBdEJ3QkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0cnVjdHVyZS9IZWFkZXIvaW5kZXguanM/ZjY2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBOYXYgZnJvbSBcIi4vTmF2XCI7XG5cblxuXG5cbmNvbnN0IG1lbnUgPSB7XG4gIG9wZW46IHtcbiAgICB3aWR0aDogXCI1NXZoXCIsXG4gICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgdG9wOiBcIi0xdmhcIixcbiAgICByaWdodDogXCItNXZoXCIsXG5cbiAgICB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAwLjc1LCB0eXBlOiBcInR3ZWVuXCIsIGVhc2U6IFswLjc2LCAwLCAwLjI0LCAxXSB9LFxuICB9LFxuICBjbG9zZWQ6IHtcbiAgICB3aWR0aDogXCIxMHZoXCIsXG4gICAgaGVpZ2h0OiBcIjR2aFwiLFxuICAgIHRvcDogXCIwdmhcIixcbiAgICByaWdodDogXCIwdmhcIixcblxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIGR1cmF0aW9uOiAwLjc1LFxuICAgICAgZGVsYXk6IDAuMzUsXG4gICAgICB0eXBlOiBcInR3ZWVuXCIsXG4gICAgICBlYXNlOiBbMC43NiwgMCwgMC4yNCwgMV0sXG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cblxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubWVudX1cbiAgICAgICAgdmFyaWFudHM9e21lbnV9XG4gICAgICAgIGFuaW1hdGU9e2lzQWN0aXZlID8gXCJvcGVuXCIgOiBcImNsb3NlZFwifVxuICAgICAgICBpbml0aWFsPVwiY2xvc2VkXCJcbiAgICAgID5cbiAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT57aXNBY3RpdmUgJiYgPE5hdiAvPn08L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgaXNBY3RpdmU9e2lzQWN0aXZlfVxuICAgICAgICB0b2dnbGVNZW51PXsoKSA9PiB7XG4gICAgICAgICAgc2V0SXNBY3RpdmUoIWlzQWN0aXZlKTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQW5pbWF0ZVByZXNlbmNlIiwibW90aW9uIiwiQnV0dG9uIiwic3R5bGVzIiwiTmF2IiwibWVudSIsIm9wZW4iLCJ3aWR0aCIsImhlaWdodCIsInRvcCIsInJpZ2h0IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwidHlwZSIsImVhc2UiLCJjbG9zZWQiLCJkZWxheSIsIkluZGV4IiwiaXNBY3RpdmUiLCJzZXRJc0FjdGl2ZSIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsInZhcmlhbnRzIiwiYW5pbWF0ZSIsImluaXRpYWwiLCJ0b2dnbGVNZW51Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/structure/Header/index.js\n"));

/***/ })

});