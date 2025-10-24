"use strict";
(self["webpackChunk_anaconda_core"] = self["webpackChunk_anaconda_core"] || []).push([["lib_index_js"],{

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _anaconda_core_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @anaconda/core_lib */ "webpack/sharing/consume/default/@anaconda/core_lib/@anaconda/core_lib");
/* harmony import */ var _anaconda_core_lib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_anaconda_core_lib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _anaconda_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @anaconda/shared */ "webpack/sharing/consume/default/@anaconda/shared/@anaconda/shared");
/* harmony import */ var _anaconda_shared__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_anaconda_shared__WEBPACK_IMPORTED_MODULE_1__);


const corePlugin = new _anaconda_core_lib__WEBPACK_IMPORTED_MODULE_0__.CorePlugin();
const plugin = {
    id: '@anaconda/core:plugin',
    description: 'Common Anaconda extension functionality',
    autoStart: true,
    provides: _anaconda_shared__WEBPACK_IMPORTED_MODULE_1__.tokens.CoreToken,
    activate: (app) => {
        console.log('JupyterLab extension @anaconda/core is activated!');
        corePlugin.activate(app);
        return { corePlugin };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plugin);


/***/ })

}]);
//# sourceMappingURL=lib_index_js.f54fcb9822af2fe38095.js.map