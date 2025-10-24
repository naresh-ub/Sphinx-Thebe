"use strict";
(self["webpackChunk_anaconda_panels"] = self["webpackChunk_anaconda_panels"] || []).push([["lib_index_js"],{

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyterlab/notebook */ "webpack/sharing/consume/default/@jupyterlab/notebook");
/* harmony import */ var _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jupyterlab_launcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jupyterlab/launcher */ "webpack/sharing/consume/default/@jupyterlab/launcher");
/* harmony import */ var _jupyterlab_launcher__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_launcher__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _anaconda_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @anaconda/shared */ "webpack/sharing/consume/default/@anaconda/shared/@anaconda/shared");
/* harmony import */ var _anaconda_shared__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_anaconda_shared__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _anaconda_panel_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @anaconda/panel_lib */ "webpack/sharing/consume/default/@anaconda/panel_lib/@anaconda/panel_lib");
/* harmony import */ var _anaconda_panel_lib__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_anaconda_panel_lib__WEBPACK_IMPORTED_MODULE_4__);





const panelPlugin = new _anaconda_panel_lib__WEBPACK_IMPORTED_MODULE_4__.PanelPlugin();
/**
 * Initialization data for the @anaconda/panels extension.
 */
const plugin = {
    id: '@anaconda/panels:plugin',
    description: 'A JupyterLab extension.',
    autoStart: true,
    requires: [
        _anaconda_shared__WEBPACK_IMPORTED_MODULE_3__.tokens.CoreToken,
        _jupyterlab_launcher__WEBPACK_IMPORTED_MODULE_2__.ILauncher,
        _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.INotebookTracker,
        _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.ICommandPalette,
        _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.IThemeManager,
        _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.IToolbarWidgetRegistry
    ],
    activate: (app, coreExtension, launcher, notebookTracker, palette, themeManager, toolbarRegistry) => {
        console.log('@anaconda/panels:plugin extension is activated');
        const { corePlugin } = coreExtension;
        const panelOpts = {
            themeManager,
            corePlugin,
            notebookTracker,
            palette,
            toolbarRegistry,
            launcher
        };
        panelPlugin.activate(app, panelOpts);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plugin);


/***/ })

}]);
//# sourceMappingURL=lib_index_js.db2a8831d5439a1cf603.js.map