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

/***/ "./components/CustomerForm.js":
/*!************************************!*\
  !*** ./components/CustomerForm.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _jsonforms_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jsonforms/react */ \"./node_modules/@jsonforms/react/lib/jsonforms-react.esm.js\");\n/* harmony import */ var _jsonforms_material_renderers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jsonforms/material-renderers */ \"./node_modules/@jsonforms/material-renderers/lib/jsonforms-react-material.esm.js\");\n/* harmony import */ var _formSchema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formSchema */ \"./components/formSchema.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/actions */ \"./redux/actions.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst CustomerForm = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n    const [isClient, setIsClient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsClient(true);\n    }, []);\n    const handleSubmit = (data)=>{\n        dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_6__.submitForm)(data));\n    };\n    if (!isClient) {\n        return null; // Render nothing on the server side\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Get An Assessment Of Your Immigration Case\"\n            }, void 0, false, {\n                fileName: \"/Users/tianmei/Downloads/my-customer-form/my-customer-form/components/CustomerForm.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"Form\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Want to understand your visa option? \"\n                    }, void 0, false, {\n                        fileName: \"/Users/tianmei/Downloads/my-customer-form/my-customer-form/components/CustomerForm.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        children: \"Submit the form below and our team of experiencedd attonneys will review your information and send a preliminary Assessment of your case based on your goals\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tianmei/Downloads/my-customer-form/my-customer-form/components/CustomerForm.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_jsonforms_react__WEBPACK_IMPORTED_MODULE_2__.JsonForms, {\n                        schema: _formSchema__WEBPACK_IMPORTED_MODULE_4__.formSchema,\n                        uischema: _formSchema__WEBPACK_IMPORTED_MODULE_4__.uiSchema,\n                        data: {},\n                        renderers: _jsonforms_material_renderers__WEBPACK_IMPORTED_MODULE_3__.materialRenderers,\n                        cells: _jsonforms_material_renderers__WEBPACK_IMPORTED_MODULE_3__.materialCells,\n                        onChange: (param)=>{\n                            let { data } = param;\n                            return handleSubmit(data);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/tianmei/Downloads/my-customer-form/my-customer-form/components/CustomerForm.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tianmei/Downloads/my-customer-form/my-customer-form/components/CustomerForm.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tianmei/Downloads/my-customer-form/my-customer-form/components/CustomerForm.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CustomerForm, \"BW9pkH0LworA5AbQspLrj8NcGVk=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch\n    ];\n});\n_c = CustomerForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomerForm);\nvar _c;\n$RefreshReg$(_c, \"CustomerForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1c3RvbWVyRm9ybS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFbUQ7QUFDTjtBQUlOO0FBQ2E7QUFDVjtBQUNJO0FBRTlDLE1BQU1VLGVBQWU7O0lBQ25CLE1BQU1DLFdBQVdILHdEQUFXQTtJQUM1QixNQUFNLENBQUNJLFVBQVVDLFlBQVksR0FBR1gsK0NBQVFBLENBQUM7SUFFekNELGdEQUFTQSxDQUFDO1FBQ1JZLFlBQVk7SUFDZCxHQUFHLEVBQUU7SUFFTCxNQUFNQyxlQUFlLENBQUNDO1FBQ3BCSixTQUFTRiwwREFBVUEsQ0FBQ007SUFDdEI7SUFFQSxJQUFJLENBQUNILFVBQVU7UUFDYixPQUFPLE1BQU0sb0NBQW9DO0lBQ25EO0lBRUEscUJBQ0UsOERBQUNJOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0Q7Z0JBQUlFLElBQUc7O2tDQUNOLDhEQUFDQztrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQztrQ0FBRzs7Ozs7O2tDQUtKLDhEQUFDakIsdURBQVNBO3dCQUNSa0IsUUFBUWYsbURBQVVBO3dCQUNsQmdCLFVBQVVmLGlEQUFRQTt3QkFDbEJRLE1BQU0sQ0FBQzt3QkFDUFEsV0FBV25CLDRFQUFpQkE7d0JBQzVCb0IsT0FBT25CLHdFQUFhQTt3QkFDcEJvQixVQUFVO2dDQUFDLEVBQUVWLElBQUksRUFBRTttQ0FBS0QsYUFBYUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLL0M7R0FyQ01MOztRQUNhRixvREFBV0E7OztLQUR4QkU7QUF1Q04sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXN0b21lckZvcm0uanM/ZmEwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEpzb25Gb3JtcyB9IGZyb20gXCJAanNvbmZvcm1zL3JlYWN0XCI7XG5pbXBvcnQge1xuICBtYXRlcmlhbFJlbmRlcmVycyxcbiAgbWF0ZXJpYWxDZWxscyxcbn0gZnJvbSBcIkBqc29uZm9ybXMvbWF0ZXJpYWwtcmVuZGVyZXJzXCI7XG5pbXBvcnQgeyBmb3JtU2NoZW1hLCB1aVNjaGVtYSB9IGZyb20gXCIuL2Zvcm1TY2hlbWFcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzdWJtaXRGb3JtIH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnNcIjtcblxuY29uc3QgQ3VzdG9tZXJGb3JtID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IFtpc0NsaWVudCwgc2V0SXNDbGllbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNDbGllbnQodHJ1ZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZGF0YSkgPT4ge1xuICAgIGRpc3BhdGNoKHN1Ym1pdEZvcm0oZGF0YSkpO1xuICB9O1xuXG4gIGlmICghaXNDbGllbnQpIHtcbiAgICByZXR1cm4gbnVsbDsgLy8gUmVuZGVyIG5vdGhpbmcgb24gdGhlIHNlcnZlciBzaWRlXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+R2V0IEFuIEFzc2Vzc21lbnQgT2YgWW91ciBJbW1pZ3JhdGlvbiBDYXNlPC9oMT5cbiAgICAgIDxkaXYgaWQ9XCJGb3JtXCI+XG4gICAgICAgIDxoMz5XYW50IHRvIHVuZGVyc3RhbmQgeW91ciB2aXNhIG9wdGlvbj8gPC9oMz5cbiAgICAgICAgPGg1PlxuICAgICAgICAgIFN1Ym1pdCB0aGUgZm9ybSBiZWxvdyBhbmQgb3VyIHRlYW0gb2YgZXhwZXJpZW5jZWRkIGF0dG9ubmV5cyB3aWxsXG4gICAgICAgICAgcmV2aWV3IHlvdXIgaW5mb3JtYXRpb24gYW5kIHNlbmQgYSBwcmVsaW1pbmFyeSBBc3Nlc3NtZW50IG9mIHlvdXIgY2FzZVxuICAgICAgICAgIGJhc2VkIG9uIHlvdXIgZ29hbHNcbiAgICAgICAgPC9oNT5cbiAgICAgICAgPEpzb25Gb3Jtc1xuICAgICAgICAgIHNjaGVtYT17Zm9ybVNjaGVtYX1cbiAgICAgICAgICB1aXNjaGVtYT17dWlTY2hlbWF9XG4gICAgICAgICAgZGF0YT17e319XG4gICAgICAgICAgcmVuZGVyZXJzPXttYXRlcmlhbFJlbmRlcmVyc31cbiAgICAgICAgICBjZWxscz17bWF0ZXJpYWxDZWxsc31cbiAgICAgICAgICBvbkNoYW5nZT17KHsgZGF0YSB9KSA9PiBoYW5kbGVTdWJtaXQoZGF0YSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbWVyRm9ybTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSnNvbkZvcm1zIiwibWF0ZXJpYWxSZW5kZXJlcnMiLCJtYXRlcmlhbENlbGxzIiwiZm9ybVNjaGVtYSIsInVpU2NoZW1hIiwidXNlRGlzcGF0Y2giLCJzdWJtaXRGb3JtIiwiQ3VzdG9tZXJGb3JtIiwiZGlzcGF0Y2giLCJpc0NsaWVudCIsInNldElzQ2xpZW50IiwiaGFuZGxlU3VibWl0IiwiZGF0YSIsImRpdiIsImgxIiwiaWQiLCJoMyIsImg1Iiwic2NoZW1hIiwidWlzY2hlbWEiLCJyZW5kZXJlcnMiLCJjZWxscyIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CustomerForm.js\n"));

/***/ })

});