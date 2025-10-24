"use strict";
(self["webpackChunk_anaconda_panels"] = self["webpackChunk_anaconda_panels"] || []).push([["style_index_js"],{

/***/ "./style/index.js":
/*!************************!*\
  !*** ./style/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.css */ "./style/base.css");
/* harmony import */ var _anaconda_panel_lib_style_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @anaconda/panel_lib/style/index.js */ "../../lib/panel/lib/style/index.js");




/***/ }),

/***/ "../../lib/panel/lib/style/index.js":
/*!******************************************!*\
  !*** ../../lib/panel/lib/style/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "../../lib/panel/lib/style/index.css");



/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/api.js":
/*!*********************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/api.js ***!
  \*********************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/getUrl.js":
/*!************************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!****************************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \****************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \********************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \************************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**************************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \*******************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js!./style/base.css":
/*!******************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!./style/base.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
    See the JupyterLab Developer Guide for useful CSS Patterns:

    https://jupyterlab.readthedocs.io/en/stable/developer/css.html
*/
`, "",{"version":3,"sources":["webpack://./style/base.css"],"names":[],"mappings":"AAAA;;;;CAIC","sourcesContent":["/*\n    See the JupyterLab Developer Guide for useful CSS Patterns:\n\n    https://jupyterlab.readthedocs.io/en/stable/developer/css.html\n*/\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js!../../lib/panel/lib/style/index.css":
/*!*************************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!../../lib/panel/lib/style/index.css ***!
  \*************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "../../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/publishing.svg */ "../../lib/panel/lib/style/images/publishing.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/published.svg */ "../../lib/panel/lib/style/images/published.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/warning-small.svg */ "../../lib/panel/lib/style/images/warning-small.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icon-anaconda-logo.svg */ "../../lib/panel/lib/style/images/icon-anaconda-logo.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/eye.svg */ "../../lib/panel/lib/style/images/eye.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./images/more-vertical.svg */ "../../lib/panel/lib/style/images/more-vertical.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./images/rocket-icon-green.svg */ "../../lib/panel/lib/style/images/rocket-icon-green.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./images/rocket-icon-gray.svg */ "../../lib/panel/lib/style/images/rocket-icon-gray.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./images/log.svg */ "../../lib/panel/lib/style/images/log.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./images/download.svg */ "../../lib/panel/lib/style/images/download.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./images/delete.svg */ "../../lib/panel/lib/style/images/delete.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./images/preview.svg */ "../../lib/panel/lib/style/images/preview.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./images/notebook.svg */ "../../lib/panel/lib/style/images/notebook.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./images/check-outline.svg */ "../../lib/panel/lib/style/images/check-outline.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_13___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.jp-PublishAppForm {
  color: var(--jp-ui-font-color1);
  background: var(--jp-layout-color1);
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  text-align: start;
  padding: 12px 20px;
  width: -webkit-fill-available;
  line-height: 1;
}

.jp-PythonAnywhereIcon svg > g > *,
.jp-app-menu-option-icon svg > path {
  fill: var(--jp-inverse-layout-color3);
}

.jp-PublishAppForm label {
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.jp-PublishAppForm h1 {
  font-weight: 400;
  font-size: 20px;
  padding-bottom: 10px;
}

.jp-PublishAppForm-text-gray {
  font-weight: 400;
  color: var(--jp-ui-font-color2);
  margin-bottom: 10px;
}

.jp-flex-row {
  display: flex;
  margin-bottom: 10px;
  width: inherit;
}

.jp-file-info {
  margin-left: 10px;
  width: inherit;
}

.jp-PublishAppForm input,
textarea {
  width: -webkit-fill-available;
  margin-bottom: 0.5em;
  font-size: var(--jp-ui-font-size1);
  color: var(--jp-ui-font-color0);
  border: var(--jp-border-width) solid var(--jp-border-color1);
  background: var(--jp-input-background);
  border-radius: 4px;
}

.jp-validation-error-label-color {
  color: #d00000;
}

.jp-validation-error-input-border {
  border: 1px solid #d00000 !important;
}

.jp-PublishAppForm input {
  height: 34px;
}

.jp-PublishAppForm textarea {
  height: 96px;
}

.jp-text-small {
  font-size: 11px;
}

.jp-PublishAppForm-text-validation {
  color: var(--jp-ui-font-color2);
  font-size: 10px;
  width: -webkit-fill-available;
  text-align: right;
}

.jp-PublishAppForm-button-div {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
}

.jp-PublishAppForm-button-div-right,
.jp-PublishAppForm-button-div-left {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.jp-PublishAppForm-button-div-right {
  align-self: flex-end;
}

.jp-PublishAppForm-button-div-left {
  align-self: flex-start;
}

.jp-PublishAppForm-text-validation-error {
  color: #d00000;
  font-weight: 400;
  font-size: 12px;
  margin-top: -4px;
  margin-bottom: 15px;
}

.jp-PublishAppForm-button {
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
}

.jp-PublishAppForm-button-icon {
  margin-right: 10px;
  font-size: 12px;
}

.jp-PublishAppForm-version {
  background: rgba(67, 176, 73, 0.12);
  opacity: 1;
  border-radius: 8px;
  padding: 5px;
  color: #000;
  margin-bottom: 10px;
}

.jp-help-button {
  position: relative;
  cursor: pointer;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.jp-help-button:hover,
.jp-help-button:active,
.jp-help-button-active {
  width: 40px;
  height: 40px;
  background-color: #e5e8eb;
  border-radius: 4px;
}

.jp-cancel-btn {
  color: var(--jp-ui-font-color2) !important;
  border: none !important;
  background: none !important;
  cursor: pointer;
}

.jp-cancel-btn:hover {
  color: #52596b !important;
  background-color: #f9fafb !important;
}

.jp-primary-btn {
  color: #2c303a;
  background: #0ccb4a;
  border: 1px solid #0ccb4a;
  font-weight: 700;
}

.jp-primary-btn:hover {
  background: #4fab4f;
  border: 1px solid #4fab4f;
}

.jp-primary-btn__error {
  border: 1px solid #d00000;
  color: #d00000;
  font-weight: 700;
  background: none;
}

.jp-secondary-btn__error {
  border: 1px solid #d00000;
  color: #d00000;
  font-weight: 700;
  background: none;
}

.jp-primary-btn__error:hover,
.jp-secondary-btn__error:hover {
  border: 1px solid #b42318;
  color: #b42318;
  background-color: #f9fafb;
}

.jp-primary-btn:disabled {
  background: rgb(67 176 73 / 50%);
  color: #fff;
  border: none;
  cursor: not-allowed;
}

.jp-secondary-btn {
  border-radius: 4px;
  border: 1px solid #06262d !important;
  background: var(--bg-color, #fff);
}

.jp-secondary-btn:hover {
  border: 1px solid #06262d;
  color: #000;
}

.jp-secondary-btn:disabled {
  background: #fff;
  border: 1px solid rgb(67 176 73 / 30%);
  cursor: not-allowed;
  color: #43b049;
}

.jp-tertiary-btn {
  border-radius: 4px;
  border: 1px solid var(--informational-error, #d00000);
  background: var(--informational-error, #d00000);
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  color: #fff !important;
}

.jp-tertiary-btn:hover {
  color: #ced2d9;
}

.jp-delete-btn {
  background-color: #d00000 !important;
  border: 1px solid #d00000;
  box-shadow: 0 1px 2px rgb(16 24 40 / 5%);
  border-radius: 8px;
  cursor: pointer;
}

.jp-delete-btn:hover {
  background-color: #b42318 !important;
  border: #b42318 !important;
}

.jp-delete-btn:focus,
.jp-cancel-btn:focus {
  outline: none !important;
}

.jp-disable-secondary-btn img {
  vertical-align: bottom;
  padding-right: 5px;
}

.jp-confirmation-alert {
  text-align: left;
  max-width: 300px;
}

.jp-PAManager {
  display: flex;
  flex-direction: column;
  min-width: var(--jp-sidebar-min-width);
  color: var(--jp-ui-font-color1);
  background: var(--jp-layout-color1);
  font-size: var(--jp-ui-font-size1);
}

.jp-PAManager-section {
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  overflow: auto;
}

.jp-PAManager-section h1 {
  flex: 0 0 auto;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 17px;
  margin: 0;
}

.jp-PAManager-sectionHeader .jp-ToolbarButtonComponent {
  flex: 0 0 auto;
}

.jp-PAManager-sectionContainer {
  flex: 1 1 auto;
  margin: 0;
  padding: 0;
  overflow: auto;
}

.jp-PAManager-section-header {
  border-bottom: var(--jp-border-width) solid var(--jp-border-color2);
}

.jp-PAManager-section-header h1 {
  padding: 15px;
}

.jp-PAManager-section-body {
  padding: 5px 15px;
}

.jp-PAManager-section-body p {
  padding: 10px 0;
}

.jp-PAManager-section-footer {
  margin: 24px;
}

.jp-PAManager-sectionList {
  margin: 0;
  padding: 0 15px;
  list-style-type: none;
  padding-inline-start: 0;
}

.jp-PAManager-sectionList h2 {
  font-weight: 700 !important;
  font-size: 16px !important;
}

.jp-PAManager-listItem {
  display: flex;
  flex-direction: column;
  color: var(--jp-ui-font-color1);
  margin-bottom: 14px;
}

.jp-PAManager-listItem-flex {
  display: flex;
  padding: 6px;
  margin-bottom: 3px;
}

.jp-PAManager-listItem-project:hover,
.jp-highlight-text {
  background: var(--jp-brand-color4);
  opacity: 1;
  color: #2c303a;
  cursor: pointer;
}

.jp-hidden {
  visibility: hidden;
}

.jp-PAManager-listItem-version {
  margin-left: 0.5em;
  font-weight: 400;
  font-size: 10px;
  background: var(--jp-brand-color4);
  opacity: 1;
  color: #000;
  border-radius: 8px;
  padding: 3px 5px;
  text-align: center;
}

.jp-PAManager-listItem-project:hover .jp-PAManager-listItem-version {
  background: #fff;
}

.jp-PAManager-listItem-title {
  flex: 1 1 70%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.jp-file-name {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.jp-PAManager-listItem-statusSection {
  padding: 0 10px 0 0;
}

.jp-PAManager-listItem-status {
  margin-left: 0.7em;
}

.jp-PAManager-SettingsIcon {
  margin-left: 0.5em;
  cursor: pointer;
  filter: contrast(0.5);
}

.jp-PAManager-item:hover {
  background-color: var(--jp-layout-color2);
}

.jp-app-menu {
  border: 1px solid rgb(0 0 0 / 87%);
  box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
}

.jp-app-menu-option-icon svg {
  vertical-align: middle;
}

.jp-app-status-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  color: var(--jp-ui-font-color0);
}

.jp-app-status-icon img {
  width: 85px;
}

.jp-mt-40 {
  margin-top: 40px;
}

.jp-app-status-desc {
  margin: 40px;
  text-align: left;
  word-break: break-all;
}

.jp-app-status-desc a {
  color: #34d;
}

.jp-PublishAppForm-text-panel-warning {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 0;
  color: var(--informational-error, #d00000);
}

.jp-PublishAppForm-code {
  background: lightgrey;
  color: var(--jp-ui-font-color0);
  border-radius: 4px;
  padding: 2px 4px;
}

.jp-PublishAppForm-text-legal-info {
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  margin-top: 20px;
  margin-bottom: 0px;
  color: var(--jp-ui-font-color0);
}

.jp-PublishAppForm-text-panel-tip {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 0px;
  color: var(--jp-ui-font-color1);
}

.jp-PublishAppForm-text-legal-info a,
.jp-PAManager-section-body a {
  text-decoration: underline;
  color: #106ba3;
  cursor: pointer;
}

/* visited status */
.jp-PublishAppForm-text-legal-info a:visited {
  color: #551a8b;
}

.jp-app-status-actions {
  position: absolute;
  right: 30px;
  bottom: 30px;
}

.jp-PAManager-itemLabel {
  font-size: var(--jp-ui-font-size1);
  flex: 1 1 55%;
  padding: 0 4px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.jp-PAManager-itemLabel:focus {
  background-color: var(--jp-layout-color2);
}

.jp-PAManager-itemDetail {
  font-size: var(--jp-ui-font-size1);
  flex: 1 1 45%;
  padding: 0 4px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.jp-page-not-found {
  position: absolute;
  padding: 40px 20% 60px;
  background: #06262d;
  display: flex;
  flex-direction: column;
  color: #fff;
  height: 100%;
  width: -webkit-fill-available;
  background-repeat: no-repeat;
  background-size: auto 80%;
  background-position: center bottom;
}

.jp-page-not-found h1 {
  font-size: 28px;
  font-weight: 400;
}

.jp-page-not-found h2 {
  font-size: 19px;
  font-weight: 400;
}

.jp-link {
  color: #43b049 !important;
}

.jp-page-not-found-actions {
  display: flex;
  column-gap: 30px;
}

.jp-mb40 {
  margin-bottom: 40px;
  margin-top: 0;
}

.jp-PAManager-item .jp-PAManager-itemShutdown {
  border-radius: 0;
}

.jp-PAManager-item:not(:hover) .jp-PAManager-itemShutdown {
  visibility: hidden;
}

.jp-PAManager-sectionList
  .jp-PAManager-item
  .jp-Button.jp-PAManager-itemShutdown:hover {
  background: var(--jp-layout-color3);
}

.jp-PAManager-shutdownAll.jp-mod-styled {
  margin: 0 8px;
  color: var(--jp-warn-color1);
  background-color: transparent;
  height: var(--jp-private-running-shutdown-button-height);
  line-height: var(--jp-private-running-shutdown-button-height);
  border-radius: 2px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.jp-PAManager-shutdownAll.jp-mod-styled:hover {
  background-color: var(--jp-layout-color2);
}

.jp-PAManager-shutdownAll.jp-mod-styled:focus {
  border: none;
  box-shadow: none;
  background-color: var(--jp-layout-color2);
}

.jp-PAManager-shutdownAll.jp-mod-styled.jp-mod-disabled {
  color: var(--jp-ui-font-color2);
}

.jp-PAManager-shutdownAll.jp-mod-styled.jp-mod-disabled:hover {
  background: none;
}

.jp-tooltip {
  max-width: 185px;
  line-height: 18px;
}

#app-quota {
  max-width: 90px;
  cursor: pointer;
}

.jp-tooltip__limit {
  color: #d00000;
}

.jp-xterm-container {
  width: 100%;
  height: 100%;
}

.jp-xterm-loading-icon {
  position: absolute;
  margin: auto;
  inset: 0;
  z-index: 1;
}

.jp-NotebookPanel-notebook {
  min-width: 300px;
}

.jp-CustomWidget {
  min-width: 300px;
  overflow: auto;
}

.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: -webkit-fill-available;
}

.jp-app-menu-option:hover {
  background-color: #0cca4a;
}

.anaconda-logo-icon {
  align-items: center;
  display: flex;
  height: 52px;
  width: 52px;
  background-color: var(--anaconda-primary-color);
  -webkit-mask-image: var(--anaconda-icon-launcher);
  mask-image: var(--anaconda-icon-launcher);
}

/* New Design Changes */
/* @TODO put on top the root block */
:root {
  --anaconda-rs-running-icon: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  --anaconda-rs-check-icon: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  --anaconda-rs-warning-icon: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  --anaconda-icon-launcher: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  --anaconda-rs-eye-icon: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
  --anaconda-rs-settings-icon: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
  --anaconda-rs-rocket-icon-green-icon: url(${___CSS_LOADER_URL_REPLACEMENT_6___});
  --anaconda-rs-rocket-icon-gray-icon: url(${___CSS_LOADER_URL_REPLACEMENT_7___});
  --anaconda-rs-log-icon: url(${___CSS_LOADER_URL_REPLACEMENT_8___});
  --anaconda-primary-color: #43b049;
  --anaconda-apps-alert-color: #d50000;
  --anaconda-apps-download-icon: url(${___CSS_LOADER_URL_REPLACEMENT_9___});
  --anaconda-apps-delete-icon: url(${___CSS_LOADER_URL_REPLACEMENT_10___});
  --anaconda-apps-preview-icon: url(${___CSS_LOADER_URL_REPLACEMENT_11___});
  --anaconda-apps-notebook-icon: url(${___CSS_LOADER_URL_REPLACEMENT_12___});
  --anaconda-apps-check-icon: url(${___CSS_LOADER_URL_REPLACEMENT_13___});
  --anaconda-apps-tile-border: var(--jp-border-color3);
  --anaconda-apps-tile-background: var(--jp-layout-color0);
  --anaconda-apps-tile-background-hover: var(--jp-layout-color2);
}
.anaconda-app-status-publishing-icon {
  -webkit-mask-image: var(--anaconda-rs-running-icon);
  mask-image: var(--anaconda-rs-running-icon);
  background: #ffba0a;
  width: 16px;
  height: 12px;
}

.anaconda-app-publish-green-icon {
  -webkit-mask-image: var(--anaconda-rs-rocket-icon-green-icon);
  mask-image: var(--anaconda-rs-rocket-icon-green-icon);
  width: 20px;
  height: 15px;
  flex-shrink: 0;
  background: #0cca4a;
  margin-left: 4px;
  margin-right: 4px;
}

.anaconda-app-publish-gray-icon {
  -webkit-mask-image: var(--anaconda-rs-rocket-icon-gray-icon);
  mask-image: var(--anaconda-rs-rocket-icon-gray-icon);
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  background: #2c303a;
  margin-right: 4px;
}

.anaconda-apps-download-icon {
  -webkit-mask-image: var(--anaconda-apps-download-icon);
  mask-image: var(--anaconda-apps-download-icon);
  width: 30px;
  height: 30px;
  background: #2c303a;
}

.anaconda-apps-delete-icon {
  -webkit-mask-image: var(--anaconda-apps-delete-icon);
  mask-image: var(--anaconda-apps-delete-icon);
  width: 30px;
  height: 30px;
  background: #2c303a;
}

.anaconda-app-log-icon {
  -webkit-mask-image: var(--anaconda-rs-log-icon);
  mask-image: var(--anaconda-rs-log-icon);
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  background: #2c303a;
  margin-right: 4px;
}

.anaconda-app-status-published-icon {
  -webkit-mask-image: var(--anaconda-rs-check-icon);
  mask-image: var(--anaconda-rs-check-icon);
  width: 16px;
  height: 16px;
  background: #0cca4a;
}

.anaconda-app-status-failed-icon {
  -webkit-mask-image: var(--anaconda-rs-warning-icon);
  mask-image: var(--anaconda-rs-warning-icon);
  width: 16px;
  height: 16px;
  background: #dc3246;
}

.anaconda-app-eye-icon {
  -webkit-mask-image: var(--anaconda-rs-eye-icon);
  mask-image: var(--anaconda-rs-eye-icon);
  width: 16px;
  height: 16px;
  background: var(--jp-ui-font-color0);
  margin-right: 4px;
  align-self: center;
  cursor: pointer;
}

.anaconda-app-settings-icon {
  -webkit-mask-image: var(--anaconda-rs-settings-icon);
  mask-image: var(--anaconda-rs-settings-icon);
  width: 16px;
  height: 16px;
  background: #2c303a;
  margin-left: auto;
}

.anaconda-app-settings-gray-icon {
  -webkit-mask-image: var(--anaconda-rs-settings-icon);
  mask-image: var(--anaconda-rs-settings-icon);
  width: 16px;
  height: 16px;
  background: #6a718a;
  cursor: pointer;
}

.anaconda-app-list {
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.anaconda-app-div {
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.anaconda-app-header {
  display: inline-flex;
  flex: 0 0 auto;
  position: relative;
  gap: 10px;
  justify-content: space-between;
}

.anaconda-app-header h3 {
  font-weight: 500;
  font-size: 34px;
  line-height: 38px;
  margin: 0;
  margin-bottom: 25px;
}

.anaconda-app-tile {
  width: 260px;
  border: 1px solid;
  border-radius: 8px;
  background-color: var(--anaconda-lms-tile-background);
  border: 1px solid var(--gray-400, #8c94a6);
  cursor: pointer;
  display: flex;
}

.anaconda-app-frame {
  align-items: flex-start;
  display: flex;
  position: relative;
  width: -webkit-fill-available;
}

.anaconda-app-gradient-published,
.anaconda-app-gradient-publishing,
.anaconda-app-gradient-failed,
.anaconda-app-gradient-inactive {
  border-radius: 6px 0px 0px 6px;
  height: 107px;
  position: relative;
  width: 6px;
}

.anaconda-app-gradient-published {
  background: #0cca4a;
}

.anaconda-app-gradient-publishing {
  background: #ffc105;
}

.anaconda-app-gradient-failed {
  background: #dc3246;
}

.anaconda-app-gradient-inactive {
  background: #8c94a6;
}

.anaconda-app-container {
  display: flex;
  flex-direction: column;
  height: 67px;
  justify-content: space-between;
  margin-right: -10px;
  padding: 12px;
  position: relative;
  width: -webkit-fill-available;
}

.anaconda-app-header-div,
.anaconda-app-status-div {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  position: relative;
  width: 225px;
  gap: 8px;
}

.anaconda-app-header-div {
  justify-content: flex-start;
}

.anaconda-app-status-div {
  justify-content: space-between;
}

.anaconda-app-subheader {
  display: flex;
  margin: 10px 0px;
}

.anaconda-app-subheader a {
  color: #43b049;
  font-weight: 700;
  text-decoration: underline;
  cursor: pointer;
}

.anaconda-app-header-text {
  color: var(--anaconda-lms-default-color);
  font-family: var(--anaconda-lms-font-family);
  font-size: 16px;
  font-weight: 700;
  text-transform: capitalize;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 165px;
}

.anaconda-app-launcher {
  display: flex;
  flex-direction: column;
  padding: 42px;
  height: calc(100% - 60px);
  overflow: auto;
}

.anaconda-app-version-published,
.anaconda-app-version-publishing,
.anaconda-app-version-inactive,
.anaconda-app-version-failed {
  background: rgba(67, 176, 73, 0.12);
  border-radius: 8px;
  padding: 5px;
  margin-top: 10px;
  width: max-content;
}

.anaconda-app-version-publishing {
  background: rgba(255, 193, 5, 0.12);
}

.anaconda-app-version-inactive {
  background: rgba(44, 48, 58, 0.12);
}

.anaconda-app-version-failed {
  background: rgba(220, 50, 70, 0.12);
}

.anaconda-app-status {
  display: flex;
  align-self: end;
}

.anaconda-app-status span {
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
}

/* Apps Error Container Styles */
.anaconda-apps-error {
  background: var(--anaconda-apps-tile-background);
  border: 0.5px solid var(--anaconda-apps-tile-border);
  border-radius: 4px;
  position: relative;
  padding: 17px 36px;
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
}

.anaconda-apps-tile-left-border {
  position: absolute;
  width: 5px;
  height: calc(100% + 1px);
  background: var(--anaconda-apps-alert-color);
  border-radius: 4px 0 0 4px;
  top: -1px;
  left: -1px;
}

.anaconda-apps-modal .jp-Dialog-content {
  border-radius: 8px;
  background: var(--bg-color, #fff);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(5px);
  width: 520px;
  min-height: 480px;
  max-height: 520px;
  padding: 0px;
}

.anaconda-apps-modal .jp-Dialog-header,
.anaconda-versions-modal .jp-Dialog-header {
  border-bottom: 1px solid var(--gray-200, #ced2d9);
  padding: 15px 20px;
  background: var(--jp-layout-color1);
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
}

.anaconda-apps-modal .jp-Dialog-footer {
  margin: 0px;
  padding: 0px;
}

.anaconda-apps-modal .jp-Dialog-body,
.anaconda-versions-modal .jp-Dialog-body {
  overflow: hidden !important;
}

#topbar-app-counter {
  display: flex;
}

.anaconda-versions-modal .jp-Dialog-content {
  border-radius: 8px;
  background: var(--bg-color, #fff);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(5px);
  width: 806px;
  min-height: 450px;
  padding: 0px;
}

.anaconda-versions-modal .jp-Dialog-header {
  padding: 15px 20px;
  background: var(--jp-layout-color1);
}

.anaconda-versions-modal .jp-Dialog-footer {
  margin: 0px;
  padding: 0px;
}

.anaconda-versions-modal__grid-container {
  width: 470px;
  height: 470px;
}

.paDeploy svg {
  width: 24px !important;
}

.anaconda-panel-tabs {
  font-family: arial;
  margin: 0 auto;
  display: flex;
  text-align: center;
  padding: 20px;
  gap: 24px;
}

.anaconda-panel-tab-active,
.anaconda-panel-tab-inactive {
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  cursor: pointer;
}

.anaconda-panel-tab-inactive {
  color: var(--gray-400, #8c94a6);
}
.anaconda-panel-tab-active {
  border-bottom: 2px solid var(--jp-ui-font-color1);
  padding-bottom: 5px;
  color: var(--jp-ui-font-color1);
}

.anaconda-apps-preview-icon {
  -webkit-mask-image: var(--anaconda-apps-preview-icon);
  mask-image: var(--anaconda-apps-preview-icon);
  width: 20px;
  height: 20px;
  background: #2c303a;
  cursor: pointer;
}

.anaconda-apps-notebook-icon {
  -webkit-mask-image: var(--anaconda-apps-notebook-icon);
  mask-image: var(--anaconda-apps-notebook-icon);
  width: 19px;
  height: 20px;
  background: var(--jp-ui-font-color0);
  cursor: pointer;
  align-self: end;
}

.anaconda-apps-check-icon {
  -webkit-mask-image: var(--anaconda-apps-check-icon);
  mask-image: var(--anaconda-apps-check-icon);
  width: 16px;
  height: 16px;
  background: #0cca4a;
  margin-right: 8px;
}

.anaconda-versions-modal__grid-container {
  width: auto;
  padding: 0px 20px;
}

.anaconda-versions-modal .anaconda-versions-modal__grid-container {
  padding: 20px !important;
}

.anaconda-versions-modal
  .anaconda-versions-modal__grid-container
  .ag-root-wrapper {
  height: 400px !important;
}

.anaconda-versions-modal__grid-container .ag-root-wrapper {
  height: 380px !important;
  overflow: auto;
}

.anaconda-versions-modal__grid-container .ag-cell {
  display: flex;
  align-items: center;
}

.anaconda-apps-grid-action-button-cell {
  display: flex;
  align-items: center;
  height: 100%;
  gap: 12px;
}

.anaconda-apps-grid-action-background {
  border-radius: 100px;
  background: var(--buttons-secondary-secondary-button-bg, #e5e8eb);
  padding: 10px;
}

input[name="published"] {
  accent-color: rgb(77 162 97);
  width: 20px;
  height: 20px;
  transform: scale(0.9);
}

.anaconda-app-list-desc {
  font-size: 16px;
  font-weight: 400;
}

.anaconda-example-app-tile {
  width: 260px;
  height: 200px;
  border-radius: 8px;
  background-color: var(--anaconda-lms-tile-background);
  border: 1px solid var(--gray-400, #8c94a6);
  cursor: pointer;
  display: flex;
}

.anaconda-example-app-frame {
  position: relative;
  width: 260px;
  align-items: flex-start;
  display: flex;
}

.anaconda-example-app-container {
  display: flex;
  flex-direction: column;
  padding: 11px;
  height: -webkit-fill-available;
}

.anaconda-example-app-gradient {
  border-radius: 6px 0px 0px 6px;
  height: 200px;
  width: 6px;
  position: relative;
  background: #0cca4a;
}

.anaconda-example-app-preview {
  width: 230px;
  height: 120px;
  border-radius: 4px;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
}

.anaconda-example-app-title {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
}
.anaconda-example-app-owner {
  width: 25px;
  height: 20px;
  border-radius: 90px;
  background-color: #43b049;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-top: 10px;
  cursor: pointer;
}

.anaconda-example-app-action-div {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  position: relative;
  width: 230px;
  gap: 8px;
}

.anaconda-example-app-actions {
  display: flex;
  align-self: end;
  justify-content: flex-end;
  width: -webkit-fill-available;
  gap: 10px;
}

.anaconda-app-resources-header {
  display: flex;
  width: -webkit-fill-available;
  flex-direction: row;
}

.anaconda-app-resources-collapsible-div {
  align-self: center;
  margin-right: 30px;
}

.anaconda-app-resources-collapsible {
  display: flex;
  gap: 10px;
  font-size: 16px;
  color: #6c5af6;
  cursor: pointer;
}

.anaconda-app-resources-collapsible span {
  align-self: end;
}
`, "",{"version":3,"sources":["webpack://./../../lib/panel/lib/style/index.css"],"names":[],"mappings":"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","sourcesContent":[".jp-PublishAppForm {\n  color: var(--jp-ui-font-color1);\n  background: var(--jp-layout-color1);\n  font-size: 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  justify-content: start;\n  text-align: start;\n  padding: 12px 20px;\n  width: -webkit-fill-available;\n  line-height: 1;\n}\n\n.jp-PythonAnywhereIcon svg > g > *,\n.jp-app-menu-option-icon svg > path {\n  fill: var(--jp-inverse-layout-color3);\n}\n\n.jp-PublishAppForm label {\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.jp-PublishAppForm h1 {\n  font-weight: 400;\n  font-size: 20px;\n  padding-bottom: 10px;\n}\n\n.jp-PublishAppForm-text-gray {\n  font-weight: 400;\n  color: var(--jp-ui-font-color2);\n  margin-bottom: 10px;\n}\n\n.jp-flex-row {\n  display: flex;\n  margin-bottom: 10px;\n  width: inherit;\n}\n\n.jp-file-info {\n  margin-left: 10px;\n  width: inherit;\n}\n\n.jp-PublishAppForm input,\ntextarea {\n  width: -webkit-fill-available;\n  margin-bottom: 0.5em;\n  font-size: var(--jp-ui-font-size1);\n  color: var(--jp-ui-font-color0);\n  border: var(--jp-border-width) solid var(--jp-border-color1);\n  background: var(--jp-input-background);\n  border-radius: 4px;\n}\n\n.jp-validation-error-label-color {\n  color: #d00000;\n}\n\n.jp-validation-error-input-border {\n  border: 1px solid #d00000 !important;\n}\n\n.jp-PublishAppForm input {\n  height: 34px;\n}\n\n.jp-PublishAppForm textarea {\n  height: 96px;\n}\n\n.jp-text-small {\n  font-size: 11px;\n}\n\n.jp-PublishAppForm-text-validation {\n  color: var(--jp-ui-font-color2);\n  font-size: 10px;\n  width: -webkit-fill-available;\n  text-align: right;\n}\n\n.jp-PublishAppForm-button-div {\n  display: flex;\n  width: 100%;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n\n.jp-PublishAppForm-button-div-right,\n.jp-PublishAppForm-button-div-left {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n}\n\n.jp-PublishAppForm-button-div-right {\n  align-self: flex-end;\n}\n\n.jp-PublishAppForm-button-div-left {\n  align-self: flex-start;\n}\n\n.jp-PublishAppForm-text-validation-error {\n  color: #d00000;\n  font-weight: 400;\n  font-size: 12px;\n  margin-top: -4px;\n  margin-bottom: 15px;\n}\n\n.jp-PublishAppForm-button {\n  padding: 10px 18px;\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n.jp-PublishAppForm-button-icon {\n  margin-right: 10px;\n  font-size: 12px;\n}\n\n.jp-PublishAppForm-version {\n  background: rgba(67, 176, 73, 0.12);\n  opacity: 1;\n  border-radius: 8px;\n  padding: 5px;\n  color: #000;\n  margin-bottom: 10px;\n}\n\n.jp-help-button {\n  position: relative;\n  cursor: pointer;\n  height: 40px;\n  width: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.jp-help-button:hover,\n.jp-help-button:active,\n.jp-help-button-active {\n  width: 40px;\n  height: 40px;\n  background-color: #e5e8eb;\n  border-radius: 4px;\n}\n\n.jp-cancel-btn {\n  color: var(--jp-ui-font-color2) !important;\n  border: none !important;\n  background: none !important;\n  cursor: pointer;\n}\n\n.jp-cancel-btn:hover {\n  color: #52596b !important;\n  background-color: #f9fafb !important;\n}\n\n.jp-primary-btn {\n  color: #2c303a;\n  background: #0ccb4a;\n  border: 1px solid #0ccb4a;\n  font-weight: 700;\n}\n\n.jp-primary-btn:hover {\n  background: #4fab4f;\n  border: 1px solid #4fab4f;\n}\n\n.jp-primary-btn__error {\n  border: 1px solid #d00000;\n  color: #d00000;\n  font-weight: 700;\n  background: none;\n}\n\n.jp-secondary-btn__error {\n  border: 1px solid #d00000;\n  color: #d00000;\n  font-weight: 700;\n  background: none;\n}\n\n.jp-primary-btn__error:hover,\n.jp-secondary-btn__error:hover {\n  border: 1px solid #b42318;\n  color: #b42318;\n  background-color: #f9fafb;\n}\n\n.jp-primary-btn:disabled {\n  background: rgb(67 176 73 / 50%);\n  color: #fff;\n  border: none;\n  cursor: not-allowed;\n}\n\n.jp-secondary-btn {\n  border-radius: 4px;\n  border: 1px solid #06262d !important;\n  background: var(--bg-color, #fff);\n}\n\n.jp-secondary-btn:hover {\n  border: 1px solid #06262d;\n  color: #000;\n}\n\n.jp-secondary-btn:disabled {\n  background: #fff;\n  border: 1px solid rgb(67 176 73 / 30%);\n  cursor: not-allowed;\n  color: #43b049;\n}\n\n.jp-tertiary-btn {\n  border-radius: 4px;\n  border: 1px solid var(--informational-error, #d00000);\n  background: var(--informational-error, #d00000);\n  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);\n  color: #fff !important;\n}\n\n.jp-tertiary-btn:hover {\n  color: #ced2d9;\n}\n\n.jp-delete-btn {\n  background-color: #d00000 !important;\n  border: 1px solid #d00000;\n  box-shadow: 0 1px 2px rgb(16 24 40 / 5%);\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n.jp-delete-btn:hover {\n  background-color: #b42318 !important;\n  border: #b42318 !important;\n}\n\n.jp-delete-btn:focus,\n.jp-cancel-btn:focus {\n  outline: none !important;\n}\n\n.jp-disable-secondary-btn img {\n  vertical-align: bottom;\n  padding-right: 5px;\n}\n\n.jp-confirmation-alert {\n  text-align: left;\n  max-width: 300px;\n}\n\n.jp-PAManager {\n  display: flex;\n  flex-direction: column;\n  min-width: var(--jp-sidebar-min-width);\n  color: var(--jp-ui-font-color1);\n  background: var(--jp-layout-color1);\n  font-size: var(--jp-ui-font-size1);\n}\n\n.jp-PAManager-section {\n  display: flex;\n  flex: 0 1 auto;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-between;\n  overflow: auto;\n}\n\n.jp-PAManager-section h1 {\n  flex: 0 0 auto;\n  font-weight: 600;\n  letter-spacing: 1px;\n  font-size: 17px;\n  margin: 0;\n}\n\n.jp-PAManager-sectionHeader .jp-ToolbarButtonComponent {\n  flex: 0 0 auto;\n}\n\n.jp-PAManager-sectionContainer {\n  flex: 1 1 auto;\n  margin: 0;\n  padding: 0;\n  overflow: auto;\n}\n\n.jp-PAManager-section-header {\n  border-bottom: var(--jp-border-width) solid var(--jp-border-color2);\n}\n\n.jp-PAManager-section-header h1 {\n  padding: 15px;\n}\n\n.jp-PAManager-section-body {\n  padding: 5px 15px;\n}\n\n.jp-PAManager-section-body p {\n  padding: 10px 0;\n}\n\n.jp-PAManager-section-footer {\n  margin: 24px;\n}\n\n.jp-PAManager-sectionList {\n  margin: 0;\n  padding: 0 15px;\n  list-style-type: none;\n  padding-inline-start: 0;\n}\n\n.jp-PAManager-sectionList h2 {\n  font-weight: 700 !important;\n  font-size: 16px !important;\n}\n\n.jp-PAManager-listItem {\n  display: flex;\n  flex-direction: column;\n  color: var(--jp-ui-font-color1);\n  margin-bottom: 14px;\n}\n\n.jp-PAManager-listItem-flex {\n  display: flex;\n  padding: 6px;\n  margin-bottom: 3px;\n}\n\n.jp-PAManager-listItem-project:hover,\n.jp-highlight-text {\n  background: var(--jp-brand-color4);\n  opacity: 1;\n  color: #2c303a;\n  cursor: pointer;\n}\n\n.jp-hidden {\n  visibility: hidden;\n}\n\n.jp-PAManager-listItem-version {\n  margin-left: 0.5em;\n  font-weight: 400;\n  font-size: 10px;\n  background: var(--jp-brand-color4);\n  opacity: 1;\n  color: #000;\n  border-radius: 8px;\n  padding: 3px 5px;\n  text-align: center;\n}\n\n.jp-PAManager-listItem-project:hover .jp-PAManager-listItem-version {\n  background: #fff;\n}\n\n.jp-PAManager-listItem-title {\n  flex: 1 1 70%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.jp-file-name {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.jp-PAManager-listItem-statusSection {\n  padding: 0 10px 0 0;\n}\n\n.jp-PAManager-listItem-status {\n  margin-left: 0.7em;\n}\n\n.jp-PAManager-SettingsIcon {\n  margin-left: 0.5em;\n  cursor: pointer;\n  filter: contrast(0.5);\n}\n\n.jp-PAManager-item:hover {\n  background-color: var(--jp-layout-color2);\n}\n\n.jp-app-menu {\n  border: 1px solid rgb(0 0 0 / 87%);\n  box-shadow: 0 4px 4px rgb(0 0 0 / 25%);\n}\n\n.jp-app-menu-option-icon svg {\n  vertical-align: middle;\n}\n\n.jp-app-status-container {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  text-align: center;\n  width: 100%;\n  color: var(--jp-ui-font-color0);\n}\n\n.jp-app-status-icon img {\n  width: 85px;\n}\n\n.jp-mt-40 {\n  margin-top: 40px;\n}\n\n.jp-app-status-desc {\n  margin: 40px;\n  text-align: left;\n  word-break: break-all;\n}\n\n.jp-app-status-desc a {\n  color: #34d;\n}\n\n.jp-PublishAppForm-text-panel-warning {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  margin-top: 10px;\n  margin-bottom: 0;\n  color: var(--informational-error, #d00000);\n}\n\n.jp-PublishAppForm-code {\n  background: lightgrey;\n  color: var(--jp-ui-font-color0);\n  border-radius: 4px;\n  padding: 2px 4px;\n}\n\n.jp-PublishAppForm-text-legal-info {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 11px;\n  margin-top: 20px;\n  margin-bottom: 0px;\n  color: var(--jp-ui-font-color0);\n}\n\n.jp-PublishAppForm-text-panel-tip {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  margin-top: 20px;\n  margin-bottom: 0px;\n  color: var(--jp-ui-font-color1);\n}\n\n.jp-PublishAppForm-text-legal-info a,\n.jp-PAManager-section-body a {\n  text-decoration: underline;\n  color: #106ba3;\n  cursor: pointer;\n}\n\n/* visited status */\n.jp-PublishAppForm-text-legal-info a:visited {\n  color: #551a8b;\n}\n\n.jp-app-status-actions {\n  position: absolute;\n  right: 30px;\n  bottom: 30px;\n}\n\n.jp-PAManager-itemLabel {\n  font-size: var(--jp-ui-font-size1);\n  flex: 1 1 55%;\n  padding: 0 4px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.jp-PAManager-itemLabel:focus {\n  background-color: var(--jp-layout-color2);\n}\n\n.jp-PAManager-itemDetail {\n  font-size: var(--jp-ui-font-size1);\n  flex: 1 1 45%;\n  padding: 0 4px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.jp-page-not-found {\n  position: absolute;\n  padding: 40px 20% 60px;\n  background: #06262d;\n  display: flex;\n  flex-direction: column;\n  color: #fff;\n  height: 100%;\n  width: -webkit-fill-available;\n  background-repeat: no-repeat;\n  background-size: auto 80%;\n  background-position: center bottom;\n}\n\n.jp-page-not-found h1 {\n  font-size: 28px;\n  font-weight: 400;\n}\n\n.jp-page-not-found h2 {\n  font-size: 19px;\n  font-weight: 400;\n}\n\n.jp-link {\n  color: #43b049 !important;\n}\n\n.jp-page-not-found-actions {\n  display: flex;\n  column-gap: 30px;\n}\n\n.jp-mb40 {\n  margin-bottom: 40px;\n  margin-top: 0;\n}\n\n.jp-PAManager-item .jp-PAManager-itemShutdown {\n  border-radius: 0;\n}\n\n.jp-PAManager-item:not(:hover) .jp-PAManager-itemShutdown {\n  visibility: hidden;\n}\n\n.jp-PAManager-sectionList\n  .jp-PAManager-item\n  .jp-Button.jp-PAManager-itemShutdown:hover {\n  background: var(--jp-layout-color3);\n}\n\n.jp-PAManager-shutdownAll.jp-mod-styled {\n  margin: 0 8px;\n  color: var(--jp-warn-color1);\n  background-color: transparent;\n  height: var(--jp-private-running-shutdown-button-height);\n  line-height: var(--jp-private-running-shutdown-button-height);\n  border-radius: 2px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.jp-PAManager-shutdownAll.jp-mod-styled:hover {\n  background-color: var(--jp-layout-color2);\n}\n\n.jp-PAManager-shutdownAll.jp-mod-styled:focus {\n  border: none;\n  box-shadow: none;\n  background-color: var(--jp-layout-color2);\n}\n\n.jp-PAManager-shutdownAll.jp-mod-styled.jp-mod-disabled {\n  color: var(--jp-ui-font-color2);\n}\n\n.jp-PAManager-shutdownAll.jp-mod-styled.jp-mod-disabled:hover {\n  background: none;\n}\n\n.jp-tooltip {\n  max-width: 185px;\n  line-height: 18px;\n}\n\n#app-quota {\n  max-width: 90px;\n  cursor: pointer;\n}\n\n.jp-tooltip__limit {\n  color: #d00000;\n}\n\n.jp-xterm-container {\n  width: 100%;\n  height: 100%;\n}\n\n.jp-xterm-loading-icon {\n  position: absolute;\n  margin: auto;\n  inset: 0;\n  z-index: 1;\n}\n\n.jp-NotebookPanel-notebook {\n  min-width: 300px;\n}\n\n.jp-CustomWidget {\n  min-width: 300px;\n  overflow: auto;\n}\n\n.loading-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 200px;\n  width: -webkit-fill-available;\n}\n\n.jp-app-menu-option:hover {\n  background-color: #0cca4a;\n}\n\n.anaconda-logo-icon {\n  align-items: center;\n  display: flex;\n  height: 52px;\n  width: 52px;\n  background-color: var(--anaconda-primary-color);\n  -webkit-mask-image: var(--anaconda-icon-launcher);\n  mask-image: var(--anaconda-icon-launcher);\n}\n\n/* New Design Changes */\n/* @TODO put on top the root block */\n:root {\n  --anaconda-rs-running-icon: url(\"./images/publishing.svg\");\n  --anaconda-rs-check-icon: url(\"./images/published.svg\");\n  --anaconda-rs-warning-icon: url(\"./images/warning-small.svg\");\n  --anaconda-icon-launcher: url(\"./images/icon-anaconda-logo.svg\");\n  --anaconda-rs-eye-icon: url(\"./images/eye.svg\");\n  --anaconda-rs-settings-icon: url(\"./images/more-vertical.svg\");\n  --anaconda-rs-rocket-icon-green-icon: url(\"./images/rocket-icon-green.svg\");\n  --anaconda-rs-rocket-icon-gray-icon: url(\"./images/rocket-icon-gray.svg\");\n  --anaconda-rs-log-icon: url(\"./images/log.svg\");\n  --anaconda-primary-color: #43b049;\n  --anaconda-apps-alert-color: #d50000;\n  --anaconda-apps-download-icon: url(\"./images/download.svg\");\n  --anaconda-apps-delete-icon: url(\"./images/delete.svg\");\n  --anaconda-apps-preview-icon: url(\"./images/preview.svg\");\n  --anaconda-apps-notebook-icon: url(\"./images/notebook.svg\");\n  --anaconda-apps-check-icon: url(\"./images/check-outline.svg\");\n  --anaconda-apps-tile-border: var(--jp-border-color3);\n  --anaconda-apps-tile-background: var(--jp-layout-color0);\n  --anaconda-apps-tile-background-hover: var(--jp-layout-color2);\n}\n.anaconda-app-status-publishing-icon {\n  -webkit-mask-image: var(--anaconda-rs-running-icon);\n  mask-image: var(--anaconda-rs-running-icon);\n  background: #ffba0a;\n  width: 16px;\n  height: 12px;\n}\n\n.anaconda-app-publish-green-icon {\n  -webkit-mask-image: var(--anaconda-rs-rocket-icon-green-icon);\n  mask-image: var(--anaconda-rs-rocket-icon-green-icon);\n  width: 20px;\n  height: 15px;\n  flex-shrink: 0;\n  background: #0cca4a;\n  margin-left: 4px;\n  margin-right: 4px;\n}\n\n.anaconda-app-publish-gray-icon {\n  -webkit-mask-image: var(--anaconda-rs-rocket-icon-gray-icon);\n  mask-image: var(--anaconda-rs-rocket-icon-gray-icon);\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n  background: #2c303a;\n  margin-right: 4px;\n}\n\n.anaconda-apps-download-icon {\n  -webkit-mask-image: var(--anaconda-apps-download-icon);\n  mask-image: var(--anaconda-apps-download-icon);\n  width: 30px;\n  height: 30px;\n  background: #2c303a;\n}\n\n.anaconda-apps-delete-icon {\n  -webkit-mask-image: var(--anaconda-apps-delete-icon);\n  mask-image: var(--anaconda-apps-delete-icon);\n  width: 30px;\n  height: 30px;\n  background: #2c303a;\n}\n\n.anaconda-app-log-icon {\n  -webkit-mask-image: var(--anaconda-rs-log-icon);\n  mask-image: var(--anaconda-rs-log-icon);\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n  background: #2c303a;\n  margin-right: 4px;\n}\n\n.anaconda-app-status-published-icon {\n  -webkit-mask-image: var(--anaconda-rs-check-icon);\n  mask-image: var(--anaconda-rs-check-icon);\n  width: 16px;\n  height: 16px;\n  background: #0cca4a;\n}\n\n.anaconda-app-status-failed-icon {\n  -webkit-mask-image: var(--anaconda-rs-warning-icon);\n  mask-image: var(--anaconda-rs-warning-icon);\n  width: 16px;\n  height: 16px;\n  background: #dc3246;\n}\n\n.anaconda-app-eye-icon {\n  -webkit-mask-image: var(--anaconda-rs-eye-icon);\n  mask-image: var(--anaconda-rs-eye-icon);\n  width: 16px;\n  height: 16px;\n  background: var(--jp-ui-font-color0);\n  margin-right: 4px;\n  align-self: center;\n  cursor: pointer;\n}\n\n.anaconda-app-settings-icon {\n  -webkit-mask-image: var(--anaconda-rs-settings-icon);\n  mask-image: var(--anaconda-rs-settings-icon);\n  width: 16px;\n  height: 16px;\n  background: #2c303a;\n  margin-left: auto;\n}\n\n.anaconda-app-settings-gray-icon {\n  -webkit-mask-image: var(--anaconda-rs-settings-icon);\n  mask-image: var(--anaconda-rs-settings-icon);\n  width: 16px;\n  height: 16px;\n  background: #6a718a;\n  cursor: pointer;\n}\n\n.anaconda-app-list {\n  display: flex;\n  gap: 25px;\n  flex-wrap: wrap;\n  margin-bottom: 40px;\n}\n\n.anaconda-app-div {\n  margin-top: 25px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.anaconda-app-header {\n  display: inline-flex;\n  flex: 0 0 auto;\n  position: relative;\n  gap: 10px;\n  justify-content: space-between;\n}\n\n.anaconda-app-header h3 {\n  font-weight: 500;\n  font-size: 34px;\n  line-height: 38px;\n  margin: 0;\n  margin-bottom: 25px;\n}\n\n.anaconda-app-tile {\n  width: 260px;\n  border: 1px solid;\n  border-radius: 8px;\n  background-color: var(--anaconda-lms-tile-background);\n  border: 1px solid var(--gray-400, #8c94a6);\n  cursor: pointer;\n  display: flex;\n}\n\n.anaconda-app-frame {\n  align-items: flex-start;\n  display: flex;\n  position: relative;\n  width: -webkit-fill-available;\n}\n\n.anaconda-app-gradient-published,\n.anaconda-app-gradient-publishing,\n.anaconda-app-gradient-failed,\n.anaconda-app-gradient-inactive {\n  border-radius: 6px 0px 0px 6px;\n  height: 107px;\n  position: relative;\n  width: 6px;\n}\n\n.anaconda-app-gradient-published {\n  background: #0cca4a;\n}\n\n.anaconda-app-gradient-publishing {\n  background: #ffc105;\n}\n\n.anaconda-app-gradient-failed {\n  background: #dc3246;\n}\n\n.anaconda-app-gradient-inactive {\n  background: #8c94a6;\n}\n\n.anaconda-app-container {\n  display: flex;\n  flex-direction: column;\n  height: 67px;\n  justify-content: space-between;\n  margin-right: -10px;\n  padding: 12px;\n  position: relative;\n  width: -webkit-fill-available;\n}\n\n.anaconda-app-header-div,\n.anaconda-app-status-div {\n  align-items: center;\n  display: inline-flex;\n  flex: 0 0 auto;\n  position: relative;\n  width: 225px;\n  gap: 8px;\n}\n\n.anaconda-app-header-div {\n  justify-content: flex-start;\n}\n\n.anaconda-app-status-div {\n  justify-content: space-between;\n}\n\n.anaconda-app-subheader {\n  display: flex;\n  margin: 10px 0px;\n}\n\n.anaconda-app-subheader a {\n  color: #43b049;\n  font-weight: 700;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.anaconda-app-header-text {\n  color: var(--anaconda-lms-default-color);\n  font-family: var(--anaconda-lms-font-family);\n  font-size: 16px;\n  font-weight: 700;\n  text-transform: capitalize;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 165px;\n}\n\n.anaconda-app-launcher {\n  display: flex;\n  flex-direction: column;\n  padding: 42px;\n  height: calc(100% - 60px);\n  overflow: auto;\n}\n\n.anaconda-app-version-published,\n.anaconda-app-version-publishing,\n.anaconda-app-version-inactive,\n.anaconda-app-version-failed {\n  background: rgba(67, 176, 73, 0.12);\n  border-radius: 8px;\n  padding: 5px;\n  margin-top: 10px;\n  width: max-content;\n}\n\n.anaconda-app-version-publishing {\n  background: rgba(255, 193, 5, 0.12);\n}\n\n.anaconda-app-version-inactive {\n  background: rgba(44, 48, 58, 0.12);\n}\n\n.anaconda-app-version-failed {\n  background: rgba(220, 50, 70, 0.12);\n}\n\n.anaconda-app-status {\n  display: flex;\n  align-self: end;\n}\n\n.anaconda-app-status span {\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 700;\n}\n\n/* Apps Error Container Styles */\n.anaconda-apps-error {\n  background: var(--anaconda-apps-tile-background);\n  border: 0.5px solid var(--anaconda-apps-tile-border);\n  border-radius: 4px;\n  position: relative;\n  padding: 17px 36px;\n  display: flex;\n  flex-direction: column;\n  width: -webkit-fill-available;\n}\n\n.anaconda-apps-tile-left-border {\n  position: absolute;\n  width: 5px;\n  height: calc(100% + 1px);\n  background: var(--anaconda-apps-alert-color);\n  border-radius: 4px 0 0 4px;\n  top: -1px;\n  left: -1px;\n}\n\n.anaconda-apps-modal .jp-Dialog-content {\n  border-radius: 8px;\n  background: var(--bg-color, #fff);\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n  backdrop-filter: blur(5px);\n  width: 520px;\n  min-height: 480px;\n  max-height: 520px;\n  padding: 0px;\n}\n\n.anaconda-apps-modal .jp-Dialog-header,\n.anaconda-versions-modal .jp-Dialog-header {\n  border-bottom: 1px solid var(--gray-200, #ced2d9);\n  padding: 15px 20px;\n  background: var(--jp-layout-color1);\n  font-size: 22px;\n  font-style: normal;\n  font-weight: 700;\n}\n\n.anaconda-apps-modal .jp-Dialog-footer {\n  margin: 0px;\n  padding: 0px;\n}\n\n.anaconda-apps-modal .jp-Dialog-body,\n.anaconda-versions-modal .jp-Dialog-body {\n  overflow: hidden !important;\n}\n\n#topbar-app-counter {\n  display: flex;\n}\n\n.anaconda-versions-modal .jp-Dialog-content {\n  border-radius: 8px;\n  background: var(--bg-color, #fff);\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n  backdrop-filter: blur(5px);\n  width: 806px;\n  min-height: 450px;\n  padding: 0px;\n}\n\n.anaconda-versions-modal .jp-Dialog-header {\n  padding: 15px 20px;\n  background: var(--jp-layout-color1);\n}\n\n.anaconda-versions-modal .jp-Dialog-footer {\n  margin: 0px;\n  padding: 0px;\n}\n\n.anaconda-versions-modal__grid-container {\n  width: 470px;\n  height: 470px;\n}\n\n.paDeploy svg {\n  width: 24px !important;\n}\n\n.anaconda-panel-tabs {\n  font-family: arial;\n  margin: 0 auto;\n  display: flex;\n  text-align: center;\n  padding: 20px;\n  gap: 24px;\n}\n\n.anaconda-panel-tab-active,\n.anaconda-panel-tab-inactive {\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.anaconda-panel-tab-inactive {\n  color: var(--gray-400, #8c94a6);\n}\n.anaconda-panel-tab-active {\n  border-bottom: 2px solid var(--jp-ui-font-color1);\n  padding-bottom: 5px;\n  color: var(--jp-ui-font-color1);\n}\n\n.anaconda-apps-preview-icon {\n  -webkit-mask-image: var(--anaconda-apps-preview-icon);\n  mask-image: var(--anaconda-apps-preview-icon);\n  width: 20px;\n  height: 20px;\n  background: #2c303a;\n  cursor: pointer;\n}\n\n.anaconda-apps-notebook-icon {\n  -webkit-mask-image: var(--anaconda-apps-notebook-icon);\n  mask-image: var(--anaconda-apps-notebook-icon);\n  width: 19px;\n  height: 20px;\n  background: var(--jp-ui-font-color0);\n  cursor: pointer;\n  align-self: end;\n}\n\n.anaconda-apps-check-icon {\n  -webkit-mask-image: var(--anaconda-apps-check-icon);\n  mask-image: var(--anaconda-apps-check-icon);\n  width: 16px;\n  height: 16px;\n  background: #0cca4a;\n  margin-right: 8px;\n}\n\n.anaconda-versions-modal__grid-container {\n  width: auto;\n  padding: 0px 20px;\n}\n\n.anaconda-versions-modal .anaconda-versions-modal__grid-container {\n  padding: 20px !important;\n}\n\n.anaconda-versions-modal\n  .anaconda-versions-modal__grid-container\n  .ag-root-wrapper {\n  height: 400px !important;\n}\n\n.anaconda-versions-modal__grid-container .ag-root-wrapper {\n  height: 380px !important;\n  overflow: auto;\n}\n\n.anaconda-versions-modal__grid-container .ag-cell {\n  display: flex;\n  align-items: center;\n}\n\n.anaconda-apps-grid-action-button-cell {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  gap: 12px;\n}\n\n.anaconda-apps-grid-action-background {\n  border-radius: 100px;\n  background: var(--buttons-secondary-secondary-button-bg, #e5e8eb);\n  padding: 10px;\n}\n\ninput[name=\"published\"] {\n  accent-color: rgb(77 162 97);\n  width: 20px;\n  height: 20px;\n  transform: scale(0.9);\n}\n\n.anaconda-app-list-desc {\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.anaconda-example-app-tile {\n  width: 260px;\n  height: 200px;\n  border-radius: 8px;\n  background-color: var(--anaconda-lms-tile-background);\n  border: 1px solid var(--gray-400, #8c94a6);\n  cursor: pointer;\n  display: flex;\n}\n\n.anaconda-example-app-frame {\n  position: relative;\n  width: 260px;\n  align-items: flex-start;\n  display: flex;\n}\n\n.anaconda-example-app-container {\n  display: flex;\n  flex-direction: column;\n  padding: 11px;\n  height: -webkit-fill-available;\n}\n\n.anaconda-example-app-gradient {\n  border-radius: 6px 0px 0px 6px;\n  height: 200px;\n  width: 6px;\n  position: relative;\n  background: #0cca4a;\n}\n\n.anaconda-example-app-preview {\n  width: 230px;\n  height: 120px;\n  border-radius: 4px;\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.anaconda-example-app-title {\n  font-size: 16px;\n  font-weight: 700;\n  margin-bottom: 10px;\n}\n.anaconda-example-app-owner {\n  width: 25px;\n  height: 20px;\n  border-radius: 90px;\n  background-color: #43b049;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  margin-top: 10px;\n  cursor: pointer;\n}\n\n.anaconda-example-app-action-div {\n  align-items: center;\n  display: inline-flex;\n  flex: 0 0 auto;\n  position: relative;\n  width: 230px;\n  gap: 8px;\n}\n\n.anaconda-example-app-actions {\n  display: flex;\n  align-self: end;\n  justify-content: flex-end;\n  width: -webkit-fill-available;\n  gap: 10px;\n}\n\n.anaconda-app-resources-header {\n  display: flex;\n  width: -webkit-fill-available;\n  flex-direction: row;\n}\n\n.anaconda-app-resources-collapsible-div {\n  align-self: center;\n  margin-right: 30px;\n}\n\n.anaconda-app-resources-collapsible {\n  display: flex;\n  gap: 10px;\n  font-size: 16px;\n  color: #6c5af6;\n  cursor: pointer;\n}\n\n.anaconda-app-resources-collapsible span {\n  align-self: end;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./style/base.css":
/*!************************!*\
  !*** ./style/base.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./base.css */ "../../node_modules/css-loader/dist/cjs.js!./style/base.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../../lib/panel/lib/style/index.css":
/*!*******************************************!*\
  !*** ../../lib/panel/lib/style/index.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./index.css */ "../../node_modules/css-loader/dist/cjs.js!../../lib/panel/lib/style/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../../lib/panel/lib/style/images/check-outline.svg":
/*!**********************************************************!*\
  !*** ../../lib/panel/lib/style/images/check-outline.svg ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='17' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg id='check-outline'%3e %3cpath id='vector' fill-rule='evenodd' clip-rule='evenodd' d='M8.5 1C4.63437 1 1.5 4.13437 1.5 8C1.5 11.8656 4.63437 15 8.5 15C12.3656 15 15.5 11.8656 15.5 8C15.5 4.13437 12.3656 1 8.5 1ZM8.5 14C5.1875 14 2.5 11.3125 2.5 8C2.5 4.6875 5.1875 2 8.5 2C11.8125 2 14.5 4.6875 14.5 8C14.5 11.3125 11.8125 14 8.5 14ZM4.90625 6.59375L7.5 9.1875L11.5938 5.09375L13 6.5L7.5 12L3.5 8L4.90625 6.59375Z' fill='%230CCA4A'/%3e %3c/g%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/panel/lib/style/images/delete.svg":
/*!***************************************************!*\
  !*** ../../lib/panel/lib/style/images/delete.svg ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='36' height='36' viewBox='0 0 36 36' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_996_9916)'%3e %3cpath d='M12.9998 23.8333C12.9998 24.75 13.7498 25.5 14.6665 25.5H21.3332C22.2498 25.5 22.9998 24.75 22.9998 23.8333V15.5C22.9998 14.5833 22.2498 13.8333 21.3332 13.8333H14.6665C13.7498 13.8333 12.9998 14.5833 12.9998 15.5V23.8333ZM15.4998 15.5H20.4998C20.9582 15.5 21.3332 15.875 21.3332 16.3333V23C21.3332 23.4583 20.9582 23.8333 20.4998 23.8333H15.4998C15.0415 23.8333 14.6665 23.4583 14.6665 23V16.3333C14.6665 15.875 15.0415 15.5 15.4998 15.5ZM20.9165 11.3333L20.3248 10.7417C20.1748 10.5917 19.9582 10.5 19.7415 10.5H16.2582C16.0415 10.5 15.8248 10.5917 15.6748 10.7417L15.0832 11.3333H12.9998C12.5415 11.3333 12.1665 11.7083 12.1665 12.1667C12.1665 12.625 12.5415 13 12.9998 13H22.9998C23.4582 13 23.8332 12.625 23.8332 12.1667C23.8332 11.7083 23.4582 11.3333 22.9998 11.3333H20.9165Z' fill='%23CED2D9'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_996_9916'%3e %3crect width='20' height='20' fill='white' transform='translate(8 8)'/%3e %3c/clipPath%3e %3c/defs%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/panel/lib/style/images/download.svg":
/*!*****************************************************!*\
  !*** ../../lib/panel/lib/style/images/download.svg ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='36' height='36' viewBox='0 0 36 36' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M16.75 9.25H19.25V14.25H23L18 20.5L13 14.25H16.75V9.25ZM9.25 26.75V23H26.75V26.75H9.25Z' fill='%23CED2D9'/%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/panel/lib/style/images/eye.svg":
/*!************************************************!*\
  !*** ../../lib/panel/lib/style/images/eye.svg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg id='eye'%3e %3cpath id='Vector' d='M7.99861 3.11154C6.18766 3.11154 4.6989 3.93369 3.55733 4.99193C2.48798 5.98629 1.74915 7.16674 1.37141 8C1.74915 8.83326 2.48798 10.0137 3.55455 11.0081C4.6989 12.0663 6.18766 12.8885 7.99861 12.8885C9.80957 12.8885 11.2983 12.0663 12.4399 11.0081C13.5092 10.0137 14.2481 8.83326 14.6258 8C14.2481 7.16674 13.5092 5.98629 12.4427 4.99193C11.2983 3.93369 9.80957 3.11154 7.99861 3.11154ZM2.64908 4.01701C3.9573 2.80045 5.75436 1.77832 7.99861 1.77832C10.2429 1.77832 12.0399 2.80045 13.3481 4.01701C14.648 5.22524 15.5174 6.66678 15.9313 7.65837C16.0229 7.87779 16.0229 8.12221 15.9313 8.34164C15.5174 9.33322 14.648 10.7775 13.3481 11.983C12.0399 13.1996 10.2429 14.2217 7.99861 14.2217C5.75436 14.2217 3.9573 13.1996 2.64908 11.983C1.34919 10.7775 0.479819 9.33322 0.068744 8.34164C-0.0229147 8.12221 -0.0229147 7.87779 0.068744 7.65837C0.479819 6.66678 1.34919 5.22247 2.64908 4.01701ZM7.99861 10.222C9.22628 10.222 10.2206 9.22767 10.2206 8C10.2206 6.77233 9.22628 5.77797 7.99861 5.77797C7.97917 5.77797 7.9625 5.77797 7.94306 5.77797C7.97917 5.91963 7.99861 6.06961 7.99861 6.22238C7.99861 7.20285 7.20146 8 6.22099 8C6.06822 8 5.91824 7.98056 5.77658 7.94445C5.77658 7.96389 5.77658 7.98056 5.77658 8C5.77658 9.22767 6.77094 10.222 7.99861 10.222ZM7.99861 4.44476C8.94152 4.44476 9.84581 4.81932 10.5126 5.48606C11.1793 6.1528 11.5539 7.05709 11.5539 8C11.5539 8.94291 11.1793 9.8472 10.5126 10.5139C9.84581 11.1807 8.94152 11.5552 7.99861 11.5552C7.0557 11.5552 6.15141 11.1807 5.48467 10.5139C4.81793 9.8472 4.44336 8.94291 4.44336 8C4.44336 7.05709 4.81793 6.1528 5.48467 5.48606C6.15141 4.81932 7.0557 4.44476 7.99861 4.44476Z' fill='%232C303A'/%3e %3c/g%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/panel/lib/style/images/icon-anaconda-logo.svg":
/*!***************************************************************!*\
  !*** ../../lib/panel/lib/style/images/icon-anaconda-logo.svg ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512%3b' xml:space='preserve'%3e %3cg%3e %3cpath d='M93%2c391.4c-19.3-1.9-38.5-5.6-57.3-10.7l-1.7-0.4l0.4-1.7c5.6-18.1%2c12.6-35.9%2c20.9-52.7l0.8-1.7l1.5%2c0.8c12.6%2c7%2c26.1%2c13.5%2c39.6%2c19l1.3%2c0.4l-0.2%2c1.2c-2.2%2c14.4-3.3%2c29.1-3.7%2c43.8v1.9H93z M134.4%2c132.6v-0.4c-11.1%2c0.2-22.2%2c0.8-33.1%2c2.1c1.2%2c11.3%2c3.4%2c22.4%2c5.8%2c33.4C114.8%2c154.9%2c123.9%2c143.1%2c134.4%2c132.6L134.4%2c132.6z M94.9%2c404.4v-1.5l-1.5-0.2c-16.3-1.5-32.7-4.2-48.9-8.2l-4.4-1l2.4%2c3.8c14.7%2c22.2%2c32.6%2c41.8%2c53.4%2c58.5l3.4%2c2.8l-0.7-4.2C96.4%2c437.3%2c95.1%2c420.4%2c94.9%2c404.4zM174.2%2c14.4c-20%2c6.9-38.7%2c16-56%2c27.4c13%2c2.4%2c26%2c5.3%2c38.6%2c9.2C162%2c38.3%2c167.8%2c26.4%2c174.2%2c14.4z M256.8%2c0.7c-9.9%2c0-19.4%2c0.6-29%2c1.7c13.4%2c9.3%2c26.5%2c19.6%2c38.6%2c31l10.3%2c9.4l-10%2c9.6c-8.4%2c8-16.3%2c16.5-24%2c25.6l-0.4%2c0.4c0%2c0-1.5%2c1.8-3.8%2c4.5c6-0.7%2c12.2-1.1%2c18.3-1.1c96%2c0%2c174%2c77.8%2c174%2c174c0%2c95.9-77.8%2c174-174%2c174c-33.3%2c0-64.5-9.4-90.8-25.6c-13%2c1.5-26%2c2.1-39.3%2c2.1c-6.2%2c0-12.2-0.2-18.4-0.4c0.4%2c19.9%2c2.3%2c40.1%2c5.6%2c61.5c40.8%2c27.6%2c89.9%2c43.8%2c142.9%2c43.8C397.9%2c511.3%2c512%2c397%2c512%2c256.2C512%2c115.1%2c397.9%2c0.8%2c256.8%2c0.7L256.8%2c0.7z M223.1%2c61c5.1-5.9%2c10.3-11.8%2c15.6-17.5c-12-10.3-24.6-19.5-37.8-27.7c-8.2%2c13.6-15.2%2c27.9-21.2%2c42.5c11.5%2c4.2%2c22.6%2c9.2%2c33.8%2c14.5C218.3%2c66.2%2c222%2c62.3%2c223.1%2c61L223.1%2c61z M49.8%2c206.7l1%2c1.5l1.5-1.1c11.8-8.5%2c24.2-16.5%2c37-23.5l1.3-0.4l-0.5-1.5c-3.8-14.4-6.7-29.3-8.8-44.5l-0.2-1.7l-1.7%2c0.4c-18.8%2c3.4-37.6%2c8.5-55.5%2c14.9l-1.7%2c0.6l0.7%2c1.7C30.4%2c171.7%2c39.3%2c189.6%2c49.8%2c206.7z M46.8%2c231.4l-1.5%2c1c-13.7%2c11.2-26.7%2c23.5-38.7%2c36.8l-1.2%2c1.3l1.2%2c1.1c13.3%2c11.5%2c27.6%2c22.2%2c42.6%2c31.7l1.5%2c1.1l0.8-1.5c6.6-12%2c14.4-23.8%2c22.4-35.1l0.8-1.1l-0.8-1.1c-9.4-10.4-18.2-21.4-26.3-32.9L46.8%2c231.4z M147%2c392.2l4.5-0.2l-3.4-2.8c-13.7-11.1-25.4-24.1-35.1-39.1v-0.4l-2.8-1.3l-0.4%2c2.4c-1.7%2c12.8-2.8%2c26-3%2c39.7v1.7h1.7c5.9%2c0.4%2c12.2%2c0.4%2c18.1%2c0.4C133.4%2c392.9%2c140.1%2c392.6%2c147%2c392.2L147%2c392.2z M138.5%2c110.4c2.8-12.6%2c6.2-25%2c10.3-37.2c-16-4.5-32.5-7.9-48.9-10.3c-1.5%2c16.7-1.7%2c33.4-0.7%2c49.8C112.2%2c111.2%2c125.5%2c110.5%2c138.5%2c110.4L138.5%2c110.4z M163%2c109.5c11.2-7%2c23.1-13%2c35.7-17.5c-9-4-17.9-7.8-27.4-11.3C168.2%2c90%2c165.4%2c99.9%2c163%2c109.5z M44.5%2c316.9l-1.3-0.9c-13.2-8.3-25.9-17.6-37.8-27.3l-3.4-2.8l0.7%2c4.5c3.2%2c24.6%2c10%2c48.3%2c20%2c71l1.7%2c4.1l1.5-4.1c4.9-14.5%2c11.1-28.9%2c17.9-42.5L44.5%2c316.9z M77.1%2c74.7C62%2c89.9%2c48.5%2c106.7%2c37.6%2c125.3c13.2-3.9%2c26.5-7.1%2c39.9-9.4C76.7%2c102.2%2c76.6%2c88.6%2c77.1%2c74.7z M84.8%2c253.7l0.3-4.4c0.7-15.6%2c3.2-30.8%2c7.9-45.6l1.3-4.3l-3.9%2c2.2c-10%2c5.8-19.9%2c12.2-29.3%2c19l-1.5%2c1l1.1%2c1.5c6.7%2c9.4%2c13.7%2c18.6%2c21.2%2c27.4L84.8%2c253.7zM86.6%2c279.9l-0.7-4.2l-2.5%2c3.8c-7.1%2c10-13.7%2c20.3-19.7%2c31l-0.8%2c1.5l1.5%2c0.8c10.7%2c6%2c22%2c11.5%2c33.3%2c16.5l4.1%2c1.7l-1.9-4.1C93.2%2c311.9%2c88.7%2c296.1%2c86.6%2c279.9L86.6%2c279.9z M36.7%2c218.9l1.3-1.1l-0.8-1.3c-7.9-12.8-15.2-26.3-21.6-40l-1.9-3.8l-1.2%2c4.3c-7.5%2c23.1-11.6%2c47.3-12.2%2c71.6L0%2c253.1l3.3-3.2C13.7%2c238.8%2c25%2c228.1%2c36.7%2c218.9L36.7%2c218.9z' style='fill: green%3b'/%3e %3c/g%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/panel/lib/style/images/log.svg":
/*!************************************************!*\
  !*** ../../lib/panel/lib/style/images/log.svg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9.44667 2H3.33333C2.6 2 2 2.6 2 3.33333V12.6667C2 13.4 2.6 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V6.55333C14 6.2 13.86 5.86 13.6067 5.61333L10.3867 2.39333C10.14 2.14 9.8 2 9.44667 2ZM5.33333 10H10.6667C11.0333 10 11.3333 10.3 11.3333 10.6667C11.3333 11.0333 11.0333 11.3333 10.6667 11.3333H5.33333C4.96667 11.3333 4.66667 11.0333 4.66667 10.6667C4.66667 10.3 4.96667 10 5.33333 10ZM5.33333 7.33333H10.6667C11.0333 7.33333 11.3333 7.63333 11.3333 8C11.3333 8.36667 11.0333 8.66667 10.6667 8.66667H5.33333C4.96667 8.66667 4.66667 8.36667 4.66667 8C4.66667 7.63333 4.96667 7.33333 5.33333 7.33333ZM5.33333 4.66667H8.66667C9.03333 4.66667 9.33333 4.96667 9.33333 5.33333C9.33333 5.7 9.03333 6 8.66667 6H5.33333C4.96667 6 4.66667 5.7 4.66667 5.33333C4.66667 4.96667 4.96667 4.66667 5.33333 4.66667Z' fill='%232C303A'/%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/panel/lib/style/images/more-vertical.svg":
/*!**********************************************************!*\
  !*** ../../lib/panel/lib/style/images/more-vertical.svg ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg id='more-vertical'%3e %3cg id='vector'%3e %3cpath d='M7.5 4C8.325 4 9 3.325 9 2.5C9 1.675 8.325 1 7.5 1C6.675 1 6 1.675 6 2.5C6 3.325 6.675 4 7.5 4Z' fill='%238C94A6'/%3e %3cpath d='M7.5 6C6.675 6 6 6.675 6 7.5C6 8.325 6.675 9 7.5 9C8.325 9 9 8.325 9 7.5C9 6.675 8.325 6 7.5 6Z' fill='%238C94A6'/%3e %3cpath d='M7.5 11C6.675 11 6 11.675 6 12.5C6 13.325 6.675 14 7.5 14C8.325 14 9 13.325 9 12.5C9 11.675 8.325 11 7.5 11Z' fill='%238C94A6'/%3e %3c/g%3e %3c/g%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/panel/lib/style/images/notebook.svg":
/*!*****************************************************!*\
  !*** ../../lib/panel/lib/style/images/notebook.svg ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='19' height='21' viewBox='0 0 19 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg id='Layer_1-2'%3e %3cpath id='Vector' d='M15.45 1.5C16.416 1.5 17.2 2.24667 17.2 3.16667V17.8333C17.2 18.7533 16.416 19.5 15.45 19.5H3.55C2.584 19.5 1.8 18.7533 1.8 17.8333V3.16667C1.8 2.24667 2.584 1.5 3.55 1.5H15.45ZM15.45 0.5H3.55C2.01 0.5 0.75 1.7 0.75 3.16667V17.8333C0.75 19.3 2.01 20.5 3.55 20.5H15.45C16.99 20.5 18.25 19.3 18.25 17.8333V3.16667C18.25 1.7 16.99 0.5 15.45 0.5Z' fill='%232C303A'/%3e %3cpath id='Vector_2' d='M11.3831 7.23333L12.1251 6.52666L14.5401 8.82333L12.1251 11.1233L11.3831 10.4167L13.0526 8.82333L11.3831 7.23333Z' fill='%232C303A'/%3e %3cpath id='Vector_3' d='M9.72464 6.13638L8.28003 11.0508L9.29115 11.3204L10.7358 6.40597L9.72464 6.13638Z' fill='%232C303A'/%3e %3cpath id='Vector_4' d='M6.19258 3.92C6.53085 3.92 6.80508 3.65883 6.80508 3.33667C6.80508 3.0145 6.53085 2.75333 6.19258 2.75333C5.8543 2.75333 5.58008 3.0145 5.58008 3.33667C5.58008 3.65883 5.8543 3.92 6.19258 3.92Z' fill='%232C303A'/%3e %3cpath id='Vector_5' d='M6.76998 6.52666L7.51198 7.23333L5.83898 8.82333L7.51198 10.4167L6.76998 11.1233L4.35498 8.82333L6.76998 6.52666Z' fill='%232C303A'/%3e %3cpath id='Vector_6' d='M4.09248 3.92C4.43075 3.92 4.70498 3.65883 4.70498 3.33667C4.70498 3.0145 4.43075 2.75333 4.09248 2.75333C3.75421 2.75333 3.47998 3.0145 3.47998 3.33667C3.47998 3.65883 3.75421 3.92 4.09248 3.92Z' fill='%232C303A'/%3e %3cpath id='Vector_7' d='M9.25503 16.92H3.65503V17.5867H9.25503V16.92Z' fill='%232C303A'/%3e %3cpath id='Vector_8' d='M15.205 14.92H3.65503V15.5867H15.205V14.92Z' fill='%232C303A'/%3e %3c/g%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/panel/lib/style/images/preview.svg":
/*!****************************************************!*\
  !*** ../../lib/panel/lib/style/images/preview.svg ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='21' height='21' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg id='preview'%3e %3cpath id='vector' fill-rule='evenodd' clip-rule='evenodd' d='M1.75 10.5C3.47656 7.51172 6.79688 5.5 10.5 5.5C14.2031 5.5 17.5234 7.51172 19.25 10.5C17.5234 13.4883 14.1992 15.5 10.5 15.5C6.80078 15.5 3.48047 13.4883 1.75 10.5ZM10.5 9.25C10.5 8.55859 9.94141 8 9.25 8C8.55859 8 8 8.55859 8 9.25C8 9.94141 8.55859 10.5 9.25 10.5C9.94141 10.5 10.5 9.94141 10.5 9.25ZM3.22659 10.5C3.94534 9.46875 4.97659 8.59766 6.06253 7.95703C6.53909 7.67578 7.043 7.44141 7.56253 7.25781C6.67972 8.05859 6.12503 9.21484 6.12503 10.5C6.12503 11.7852 6.67972 12.9414 7.56253 13.7422C7.043 13.5586 6.53909 13.3242 6.06253 13.043C4.97659 12.4023 3.94534 11.5312 3.22659 10.5ZM13.4375 13.7422C13.957 13.5586 14.4609 13.3242 14.9375 13.043C16.0234 12.4023 17.0508 11.5312 17.7734 10.5C17.0547 9.46875 16.0234 8.59766 14.9375 7.95703C14.4609 7.67578 13.957 7.44141 13.4375 7.25781C14.3203 8.05859 14.875 9.21484 14.875 10.5C14.875 11.7852 14.3203 12.9414 13.4375 13.7422Z' fill='%232C303A'/%3e %3c/g%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/panel/lib/style/images/published.svg":
/*!******************************************************!*\
  !*** ../../lib/panel/lib/style/images/published.svg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M1 8C1 4.13437 4.13437 1 8 1C11.8656 1 15 4.13437 15 8C15 11.8656 11.8656 15 8 15C4.13437 15 1 11.8656 1 8ZM3 8L7 12L13 6L11.5938 4.59375L7 9.1875L4.40625 6.59375L3 8Z' fill='%2327871D'/%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/panel/lib/style/images/publishing.svg":
/*!*******************************************************!*\
  !*** ../../lib/panel/lib/style/images/publishing.svg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='16' height='10' viewBox='0 0 16 10' fill='none' xmlns='http://www.w3.org/2000/svg' %3e %3ccircle cx='11' cy='5' r='3' fill='%23FFBA0A'%3e %3canimate attributeName='r' from='3' to='2' dur='1s' repeatCount='indefinite' /%3e %3c/circle%3e %3ccircle cx='4' cy='5' r='2' fill='%23FFBA0A'%3e %3canimate attributeName='r' from='2' to='3' dur='1s' repeatCount='indefinite' /%3e %3c/circle%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/panel/lib/style/images/rocket-icon-gray.svg":
/*!*************************************************************!*\
  !*** ../../lib/panel/lib/style/images/rocket-icon-gray.svg ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_345_19040)'%3e %3cpath d='M17.9113 0.428824C17.8716 0.1857 17.6841 0.0656821 17.3871 0.0427376C16.5951 -0.018595 15.8057 -0.0247723 15.0168 0.0970103C14.1202 0.23556 13.2544 0.476919 12.4179 0.823735C11.2931 1.28969 10.265 1.91801 9.31549 2.67783C9.26077 2.72151 9.17297 2.76034 9.10899 2.75019C8.68937 2.68313 8.27328 2.5962 7.8541 2.52648C6.92352 2.37161 6.0481 2.53134 5.27328 3.07362C4.92955 3.3141 4.6348 3.62826 4.33211 3.92345C3.58288 4.65415 2.22253 6.00435 2.09678 6.1279L1.17723 7.17364C1.00603 7.37573 1.10266 7.66651 1.40756 7.72078L2.94661 7.89507C3.66363 7.96125 4.38109 8.02215 5.09855 8.08745C5.14576 8.09186 5.19165 8.11348 5.24062 8.12804C5.09281 8.51987 4.95205 8.89183 4.81218 9.26468C4.73187 9.47868 4.7857 9.65783 4.9472 9.81667C5.25033 10.1145 5.54817 10.4172 5.8491 10.7172C6.6398 11.5071 7.43006 12.2969 8.22253 13.0849C8.3527 13.2147 8.51155 13.2584 8.69025 13.197C8.79526 13.1613 8.89984 13.1229 9.00397 13.0836C9.29475 12.9733 9.58509 12.8621 9.89043 12.7456C9.90057 12.8184 9.90984 12.8687 9.91469 12.9195C10.025 14.0861 10.1353 15.2532 10.2447 16.4199C10.2633 16.6166 10.3401 16.7724 10.5333 16.8492C10.7345 16.929 10.9084 16.8726 11.0544 16.727L14.8628 12.8502C14.9647 12.683 15.0741 12.5308 15.1558 12.3648C15.4695 11.7272 15.6041 11.0526 15.5048 10.3453C15.4386 9.87271 15.338 9.40544 15.2656 8.93375C15.2528 8.84991 15.2806 8.74049 15.3292 8.67033C15.6045 8.27277 15.909 7.89507 16.1715 7.49001C16.8409 6.45795 17.3421 5.34558 17.658 4.15599C17.8667 3.37014 17.9974 2.56929 17.9965 1.75211L18.0004 1.34925C17.9726 1.04215 17.9612 0.731957 17.9118 0.428383L17.9113 0.428824ZM16.2567 5.3769C15.5326 7.04171 14.4617 8.44883 13.1 9.64327C12.484 10.1833 11.82 10.6542 11.1197 11.076C11.0527 11.1161 10.9834 11.1523 10.8669 11.2167C10.5761 10.9114 10.2853 10.595 9.98265 10.2901C8.97044 9.27174 7.95646 8.25512 6.93631 7.24468C6.82159 7.13084 6.81056 7.05097 6.89087 6.91595C7.77511 5.43382 8.88484 4.15378 10.2655 3.11201C11.0632 2.5106 11.9268 2.02876 12.8445 1.63783C13.0329 1.55752 13.1499 1.57385 13.3003 1.72696C14.2199 2.66283 15.1496 3.58855 16.0819 4.51163C16.4649 4.8911 16.4707 4.8836 16.2562 5.37646L16.2567 5.3769Z' fill='%23616161'/%3e %3cpath d='M11.9237 4.4438C11.016 4.44159 10.2959 5.16214 10.2959 6.07286C10.2959 6.99594 10.9962 7.70104 11.9135 7.70193C12.8269 7.70325 13.5452 6.99329 13.5523 6.08213C13.5589 5.18773 12.822 4.44601 11.9237 4.44336V4.4438Z' fill='%23616161'/%3e %3cpath d='M0.733782 17.2304C0.573611 17.2304 0.413882 17.1655 0.297394 17.038C0.0776562 16.7971 0.0944234 16.4234 0.335782 16.2036L4.91013 12.0299C5.15105 11.8102 5.52478 11.8274 5.74452 12.0683C5.96426 12.3092 5.94749 12.683 5.70613 12.9027L1.13178 17.0759C1.01838 17.1792 0.875862 17.2304 0.733782 17.2304Z' fill='%23616161'/%3e %3cpath d='M4.13178 17.3977C3.97161 17.3977 3.81188 17.3328 3.6954 17.2053C3.47566 16.9644 3.49243 16.5906 3.73379 16.3709L5.55699 14.7074C5.79791 14.4877 6.17164 14.5049 6.39138 14.7458C6.61112 14.9867 6.59435 15.3604 6.35299 15.5802L4.52978 17.2437C4.41639 17.3469 4.27386 17.3981 4.13178 17.3981V17.3977Z' fill='%23616161'/%3e %3cpath d='M0.590823 14.3828C0.430652 14.3828 0.270923 14.3179 0.154435 14.1904C-0.0653034 13.9495 -0.0485362 13.5757 0.192823 13.356L2.01603 11.6925C2.25695 11.4728 2.63024 11.49 2.85042 11.7309C3.07016 11.9718 3.05339 12.3455 2.81203 12.5653L0.988822 14.2288C0.875423 14.332 0.732902 14.3832 0.590823 14.3832V14.3828Z' fill='%23616161'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_345_19040'%3e %3crect width='18' height='17.3977' fill='white'/%3e %3c/clipPath%3e %3c/defs%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/panel/lib/style/images/rocket-icon-green.svg":
/*!**************************************************************!*\
  !*** ../../lib/panel/lib/style/images/rocket-icon-green.svg ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='21' height='15' viewBox='0 0 21 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_360_67481)'%3e %3cpath d='M14.9261 0.369778C14.893 0.160161 14.7367 0.0566834 14.4892 0.036901C13.8292 -0.0159789 13.1714 -0.0213049 12.5139 0.083694C11.7668 0.203149 11.0453 0.411245 10.3482 0.710263C9.41091 1.112 8.55417 1.65373 7.76288 2.30883C7.71728 2.3465 7.64411 2.37997 7.59079 2.37122C7.24111 2.3134 6.89437 2.23845 6.54505 2.17834C5.76957 2.04481 5.04005 2.18253 4.39437 2.65008C4.10793 2.85741 3.8623 3.12828 3.61006 3.38279C2.9857 4.01278 1.85208 5.1769 1.74729 5.28342L0.980998 6.18504C0.83833 6.35928 0.918857 6.60998 1.17294 6.65677L2.45548 6.80704C3.05299 6.86411 3.65088 6.91661 4.24876 6.97291C4.2881 6.97672 4.32634 6.99536 4.36716 7.00791C4.24398 7.34573 4.12668 7.66644 4.01012 7.9879C3.9432 8.17241 3.98806 8.32687 4.12264 8.46382C4.37525 8.72061 4.62345 8.98159 4.87422 9.24028C5.53314 9.92125 6.19169 10.6022 6.85208 11.2817C6.96055 11.3935 7.09293 11.4312 7.24185 11.3783C7.32936 11.3475 7.4165 11.3144 7.50328 11.2805C7.7456 11.1854 7.98754 11.0896 8.24199 10.9891C8.25045 11.0519 8.25817 11.0953 8.26222 11.139C8.35414 12.1449 8.44607 13.1511 8.53726 14.157C8.5527 14.3266 8.61668 14.4609 8.77773 14.5271C8.94541 14.596 9.09028 14.5473 9.21199 14.4217L12.3856 11.0793C12.4706 10.9351 12.5617 10.8038 12.6298 10.6608C12.8912 10.1111 13.0034 9.52941 12.9206 8.91958C12.8655 8.51214 12.7816 8.10926 12.7213 7.70258C12.7107 7.6303 12.7338 7.53595 12.7743 7.47546C13.0037 7.13269 13.2574 6.80704 13.4762 6.45781C14.034 5.56798 14.4517 4.60892 14.715 3.58328C14.8889 2.90573 14.9978 2.21525 14.997 1.51069L15.0003 1.16336C14.9772 0.898576 14.9676 0.631134 14.9264 0.369397L14.9261 0.369778ZM13.5472 4.63593C12.9438 6.07129 12.0514 7.28449 10.9167 8.31431C10.4033 8.77996 9.84995 9.18588 9.26641 9.54957C9.21052 9.58419 9.15279 9.61538 9.05571 9.67093C8.8134 9.40767 8.57108 9.1349 8.31884 8.87202C7.47534 7.99399 6.63036 7.11748 5.78023 6.24629C5.68463 6.14814 5.67544 6.07928 5.74236 5.96287C6.47923 4.685 7.404 3.58137 8.55454 2.68318C9.21934 2.16465 9.93893 1.74922 10.7038 1.41216C10.8608 1.34292 10.9582 1.357 11.0836 1.489C11.8499 2.2959 12.6246 3.09404 13.4016 3.8899C13.7207 4.21707 13.7255 4.21061 13.5468 4.63555L13.5472 4.63593Z' fill='%230CCA4A'/%3e %3cpath d='M9.93641 3.83131C9.18004 3.82941 8.57996 4.45065 8.57996 5.23586C8.57996 6.03172 9.1635 6.63965 9.92795 6.64041C10.6891 6.64155 11.2877 6.02944 11.2936 5.24385C11.2991 4.47272 10.685 3.83322 9.93641 3.83093V3.83131Z' fill='%230CCA4A'/%3e %3cpath d='M0.611532 14.8558C0.478057 14.8558 0.344949 14.7999 0.247876 14.6899C0.0647606 14.4822 0.0787332 14.16 0.279866 13.9706L4.09182 10.3721C4.29259 10.1826 4.60403 10.1974 4.78715 10.4052C4.97026 10.6129 4.95629 10.9351 4.75516 11.1246L0.943199 14.7227C0.848699 14.8117 0.729932 14.8558 0.611532 14.8558Z' fill='%230CCA4A'/%3e %3cpath d='M3.4432 15C3.30972 15 3.17661 14.9441 3.07954 14.8341C2.89643 14.6264 2.9104 14.3042 3.11153 14.1147L4.63087 12.6805C4.83164 12.4911 5.14308 12.5059 5.3262 12.7136C5.50931 12.9213 5.49534 13.2436 5.2942 13.433L3.77486 14.8672C3.68036 14.9563 3.5616 15.0004 3.4432 15.0004V15Z' fill='%230CCA4A'/%3e %3cpath d='M0.492392 12.4005C0.358916 12.4005 0.225808 12.3446 0.128735 12.2346C-0.05438 12.0269 -0.0404074 11.7047 0.160725 11.5153L1.68007 10.081C1.88083 9.89157 2.19191 9.90641 2.37539 10.1141C2.5585 10.3218 2.54453 10.6441 2.3434 10.8335L0.824058 12.2677C0.729559 12.3568 0.610791 12.4009 0.492392 12.4009V12.4005Z' fill='%230CCA4A'/%3e %3c/g%3e %3cpath d='M17.5 6.5V4.5H16.5V6.5H14.5V7.5H16.5V9.5H17.5V7.5H19.5V6.5H17.5Z' fill='%230CCA4A'/%3e %3cdefs%3e %3cclipPath id='clip0_360_67481'%3e %3crect width='15' height='15' fill='white'/%3e %3c/clipPath%3e %3c/defs%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/panel/lib/style/images/warning-small.svg":
/*!**********************************************************!*\
  !*** ../../lib/panel/lib/style/images/warning-small.svg ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg id='warning'%3e %3cpath id='vector' fill-rule='evenodd' clip-rule='evenodd' d='M15 8C15 11.8656 11.8656 15 8 15C4.13437 15 1 11.8656 1 8C1 4.13437 4.13437 1 8 1C11.8656 1 15 4.13437 15 8ZM14 8C14 4.6875 11.3125 2 8 2C4.6875 2 2 4.6875 2 8C2 11.3125 4.6875 14 8 14C11.3125 14 14 11.3125 14 8ZM7 9V4H9V9H7ZM7 10V12H9V10H7Z' fill='%23DC3246'/%3e %3c/g%3e %3c/svg%3e";

/***/ })

}]);
//# sourceMappingURL=style_index_js.9c8be19e0d2e80b7c2de.js.map