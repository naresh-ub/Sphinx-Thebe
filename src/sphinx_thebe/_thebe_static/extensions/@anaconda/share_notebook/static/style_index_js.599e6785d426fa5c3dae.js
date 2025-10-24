"use strict";
(self["webpackChunk_anaconda_share_notebook"] = self["webpackChunk_anaconda_share_notebook"] || []).push([["style_index_js"],{

/***/ "./style/index.js":
/*!************************!*\
  !*** ./style/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.css */ "./style/base.css");
/* harmony import */ var _anaconda_share_notebook_lib_style_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @anaconda/share_notebook_lib/style/index.js */ "../../lib/share_notebook/lib/style/index.js");




/***/ }),

/***/ "../../lib/share_notebook/lib/style/index.js":
/*!***************************************************!*\
  !*** ../../lib/share_notebook/lib/style/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "../../lib/share_notebook/lib/style/index.css");



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

/***/ "../../node_modules/css-loader/dist/cjs.js!../../lib/share_notebook/lib/style/index.css":
/*!**********************************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!../../lib/share_notebook/lib/style/index.css ***!
  \**********************************************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icon-catalog-default.svg */ "../../lib/share_notebook/lib/style/images/icon-catalog-default.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icon-anaconda-logo.svg */ "../../lib/share_notebook/lib/style/images/icon-anaconda-logo.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icon-chevron-right.svg */ "../../lib/share_notebook/lib/style/images/icon-chevron-right.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icon-list.svg */ "../../lib/share_notebook/lib/style/images/icon-list.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icon-grid.svg */ "../../lib/share_notebook/lib/style/images/icon-grid.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icon-search.svg */ "../../lib/share_notebook/lib/style/images/icon-search.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icon-share.svg */ "../../lib/share_notebook/lib/style/images/icon-share.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icon-copy.svg */ "../../lib/share_notebook/lib/style/images/icon-copy.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icon-copy-code.svg */ "../../lib/share_notebook/lib/style/images/icon-copy-code.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icon-link.svg */ "../../lib/share_notebook/lib/style/images/icon-link.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icon-code.svg */ "../../lib/share_notebook/lib/style/images/icon-code.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Inter/Inter-VariableFont_slnt,wght.ttf */ "../../lib/share_notebook/lib/style/fonts/Inter/Inter-VariableFont_slnt,wght.ttf"), __webpack_require__.b);
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
    See the JupyterLab Developer Guide for useful CSS Patterns:

    https://jupyterlab.readthedocs.io/en/stable/developer/css.html
*/

:root {
  --anaconda-catalog-default-color: var(--jp-ui-font-color1);
  --anaconda-catalog-primary-color: #43b049;
  --anaconda-catalog-primary-color-hover: #337234;
  --anaconda-catalog-alert-color: #d50000;
  --anaconda-catalog-tile-background: var(--jp-layout-color1);
  /* #fcfcfc; */
  --anaconda-catalog-tile-border: var(--jp-border-color3);
  --anaconda-catalog-tile-shadow: drop-shadow(2px 2px 4px var(--jp-layout-color2));
  --anaconda-catalog-tile-toggle-background: var(--jp-layout-color1);
  --anaconda-catalog-tile-toggle-background-hover: var(--jp-layout-color2);
  --anaconda-catalog-open-notebook-border: #0cca4a;
  --anaconda-catalog-open-notebook-background: #0cca4a;
  --anaconda-catalog-open-notebook-hover: #4fab4f;
  --anaconda-catalog-default-icon-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  --anaconda-catalog-icon-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  --anaconda-catalog-chevron-right-icon-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  --anaconda-catalog-list-icon-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  --anaconda-catalog-grid-icon-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
  --anaconda-catalog-search-icon-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
  --anaconda-catalog-share-icon-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___});
  --notebook-shared-link-copy-icon-image: url(${___CSS_LOADER_URL_REPLACEMENT_7___});
  --notebook-shared-badge-copy-icon-image: url(${___CSS_LOADER_URL_REPLACEMENT_8___});
  --notebook-shared-link-icon-image: url(${___CSS_LOADER_URL_REPLACEMENT_9___});
  --notebook-shared-code-icon-image: url(${___CSS_LOADER_URL_REPLACEMENT_10___});
  --anaconda-catalog-icon-default-square-width-and-height: 30px;
  --anaconda-catalog-icon-compact-square-width-and-height: 23px;
  --anaconda-catalog-font-family: inter, serif;
  --anaconda-notebook-shared-link-secondary-color: #6d5bf6;
  --anaconda-notebook-shared-link-secondary-color-hover: #9286f7;
}

/* Inter */
@font-face {
  font-family: Inter;
  src: local('Inter'),
    url(${___CSS_LOADER_URL_REPLACEMENT_11___}) format('truetype');
}

.notebook-shared-dialog p,
.notebook-shared-dialog h4 {
  margin-bottom: 14px;
  margin-top: 14px;
}

.anaconda-data-catalog-icon {
  align-items: center;
  display: flex;
  height: 52px;
  width: 52px;
  background-color: var(--anaconda-catalog-primary-color);
  -webkit-mask-image: var(--anaconda-catalog-icon-image);
  mask-image: var(--anaconda-catalog-icon-image);
}

div[class\$='-sectionHeader'] .anaconda-data-catalog-icon {
  width: 32px;
  height: 32px;
}

.anaconda-catalog-launcher {
  font-family: var(--anaconda-catalog-font-family);
  display: flex;
  flex-direction: column;
  padding: 42px;
  color: var(--anaconda-catalog-default-color);
  height: calc(100% - 29px);
  overflow: auto;
}

.anaconda-catalog-launcher-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, 291px);
  justify-content: space-between;
  margin-left: -28px;
}

.anaconda-catalog-launcher-header {
  margin-bottom: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}

.anaconda-catalog-launcher-subheader h3,
.anaconda-catalog-launcher-header h3,
.anaconda-catalog-launcher-header h4 {
  font-weight: 500;
  font-size: 34px;
  line-height: 38px;
  margin: 0;
}

.anaconda-catalog-launcher-header h4 {
  font-weight: 300;
  font-size: 18px;
  line-height: 20px;
  margin-top: 10px;
}

.anaconda-catalog-launcher-subheader {
  margin-bottom: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}

.anaconda-catalog-chevron-right-icon {
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  background-color: var(--anaconda-catalog-primary-color);
  -webkit-mask-image: var(--anaconda-catalog-chevron-right-icon-image);
  mask-image: var(--anaconda-catalog-chevron-right-icon-image);
}

.anaconda-catalog-share-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  background-color: var(--jp-ui-font-color1);
  -webkit-mask-image: var(--anaconda-catalog-share-icon-image);
  mask-image: var(--anaconda-catalog-share-icon-image);
}

.anaconda-catalog-launcher-toolbar {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 28px;
  align-items: center;
}

.anaconda-catalog-share {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.anaconda-catalog-share label {
  text-align: center;
  font-weight: 400;
  font-size: 10px;
  line-height: 16px;
  text-transform: uppercase;
}

.anaconda-catalog-share-button,
.display-toggle {
  box-sizing: border-box;
  display: flex;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
}

.display-toggle {
  margin-left: 5px;
}

.anaconda-catalog-share-button,
.anaconda-catalog-launcher-toolbar .display-toggle.active {
  border: 0.5px solid var(--anaconda-catalog-tile-border);
  background: var(--anaconda-catalog-tile-toggle-background);
}

.anaconda-catalog-share-button:hover,
.anaconda-catalog-launcher-toolbar .display-toggle:hover {
  background: var(--anaconda-catalog-tile-toggle-background-hover);
}

.anaconda-catalog-search-field {
  display: flex;
  flex-grow: 1;
  font-size: 18px;
  line-height: 20px;
  align-items: center;
}

.anaconda-catalog-search-icon {
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  background-color: var(--jp-ui-font-color1);
  -webkit-mask-image: var(--anaconda-catalog-search-icon-image);
  mask-image: var(--anaconda-catalog-search-icon-image);
  margin-left: 14px;
  margin-right: -30px;
}

.anaconda-catalog-search-field input {
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  height: 34px;
  box-sizing: border-box;
  width: 50%;
  border-radius: 17px;
  border: 1px solid var(--jp-border-color3);
  padding: 0 10px 0 44px;
}

.anaconda-catalog-tile {
  box-sizing: border-box;
  width: 263px;
  height: 190px;
  margin: 0 0 28px 28px;
  background: var(--anaconda-catalog-tile-background);
  border: 0.5px solid var(--anaconda-catalog-tile-border);
  border-radius: 4px;
  position: relative;
  padding: 17px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.anaconda-catalog-error,
.anaconda-catalog-no-results {
  background: var(--anaconda-catalog-tile-background);
  border: 0.5px solid var(--anaconda-catalog-tile-border);
  border-radius: 4px;
  position: relative;
  padding: 17px 36px;
  display: flex;
  flex-direction: column;
}

.anaconda-catalog-tile:hover,
.anaconda-catalog-tile:active,
.anaconda-catalog-tile:focus {
  filter: var(--anaconda-catalog-tile-shadow);
}

.anaconda-catalog-tile:hover {
  cursor: pointer;
}

.anaconda-catalog-tile-left-border {
  position: absolute;
  width: 5px;
  height: 190px;
  background: var(--anaconda-catalog-primary-color);
  border-radius: 4px 0 0 4px;
  top: -1px;
  left: -1px;
}

.anaconda-catalog-error .anaconda-catalog-tile-left-border,
.anaconda-catalog-no-results .anaconda-catalog-tile-left-border {
  position: absolute;
  width: 5px;
  height: calc(100% + 1px);
  background: var(--anaconda-catalog-primary-color);
}

.anaconda-catalog-error .anaconda-catalog-tile-left-border {
  background: var(--anaconda-catalog-alert-color);
}

.anaconda-catalog-tile-name {
  font-weight: 400;
  font-size: 22px;
  line-height: 23px;
  margin: 8px;
}

.anaconda-catalog-tile-description {
  box-sizing: border-box;
  margin: 8px 0;
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
  text-align: start;
  width: 263px;
  padding: 0 26px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.anaconda-catalog-learn-more {
  font-weight: 400;
  font-size: 11px;
  line-height: 15px;
  color: var(--anaconda-catalog-primary-color);
  white-space: nowrap;
}

.anaconda-catalog-learn-more:hover {
  color: var(--anaconda-catalog-primary-color-hover);
}

.anaconda-catalog-learn-more::before {
  content: ' ';
}

.anaconda-catalog-tile-action {
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: var(--anaconda-catalog-primary-color);
  width: 100%;
  position: absolute;
  bottom: 17px;
}

.anaconda-catalog-tile:hover .anaconda-catalog-tile-action,
.anaconda-catalog-tile:active .anaconda-catalog-tile-action,
.anaconda-catalog-tile:focus .anaconda-catalog-tile-action {
  color: var(--jp-ui-font-color1);
}

.anaconda-catalog-tile-icon {
  width: var(--anaconda-catalog-icon-default-square-width-and-height);
  height: var(--anaconda-catalog-icon-default-square-width-and-height);
  display: flex;
  align-items: center;
  background-color: var(--anaconda-catalog-primary-color);
  -webkit-mask-image: var(--anaconda-catalog-default-icon-image);
  mask-image: var(--anaconda-catalog-default-icon-image);
}

.anaconda-catalog-list-icon {
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  background-color: var(--jp-ui-font-color1);
  -webkit-mask-image: var(--anaconda-catalog-list-icon-image);
  mask-image: var(--anaconda-catalog-list-icon-image);
}

.anaconda-catalog-grid-icon {
  width: 15px;
  height: 11px;
  display: flex;
  align-items: center;
  background-color: var(--jp-ui-font-color1);
  -webkit-mask-image: var(--anaconda-catalog-grid-icon-image);
  mask-image: var(--anaconda-catalog-grid-icon-image);
}

.anaconda-catalog-launcher-list.compact {
  grid-template-columns: 100%;
  margin: 0;
}

.anaconda-catalog-launcher-list.compact .anaconda-catalog-tile {
  height: auto;
  width: 100%;
  margin: 0 20px 10px 0;
  padding: 5px;
  flex-direction: row;
  text-align: start;
}

.anaconda-catalog-launcher-list.compact .anaconda-catalog-tile-left-border {
  height: calc(100% + 1px);
}

.anaconda-catalog-launcher-list.compact .anaconda-catalog-tile-name-and-description {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  overflow: hidden;
}

.anaconda-catalog-launcher-list.compact .anaconda-catalog-tile-name {
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  margin: 0 0 2px;
}

.anaconda-catalog-launcher-list.compact .anaconda-catalog-tile-description {
  font-weight: 300;
  font-size: 10px;
  width: auto;
  margin: 0;
  padding: 0;
  white-space: nowrap;
}

.anaconda-catalog-launcher-list.compact .anaconda-catalog-tile-action {
  width: auto;
  position: static;
  bottom: auto;
  white-space: nowrap;
  margin-right: 10px;
}

.anaconda-catalog-launcher-list.compact .anaconda-catalog-tile-icon {
  min-width: var(--anaconda-catalog-icon-compact-square-width-and-height);
  min-height: var(--anaconda-catalog-icon-compact-square-width-and-height);
  width: var(--anaconda-catalog-icon-compact-square-width-and-height);
  height: var(--anaconda-catalog-icon-compact-square-width-and-height);
  -webkit-mask-size: var(--anaconda-catalog-icon-compact-square-width-and-height) var(--anaconda-catalog-icon-compact-square-width-and-height);
  mask-size: var(--anaconda-catalog-icon-compact-square-width-and-height) var(--anaconda-catalog-icon-compact-square-width-and-height);
  margin: -2px 10px 0;
}

.anaconda-catalog-launcher-list.compact .anaconda-catalog-learn-more {
  margin-left: 10px;
}

.catalog-launcher-open-notebook {
  background: var(--anaconda-catalog-open-notebook-background);
  border: 1px solid var(--anaconda-catalog-open-notebook-border);
  border-radius: 8px;
  padding: 8px 14px;
  margin: 0;
  white-space: nowrap;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
}

.catalog-launcher-open-notebook:hover,
.catalog-launcher-open-notebook:focus {
  background-color: var(--anaconda-catalog-open-notebook-hover);
  border-color: var(--anaconda-catalog-open-notebook-hover);
  text-decoration: none;
}

.catalog-view-back {
  display: block;
  font-size: 12px;
  line-height: 14px;
  font-weight: 400px;
  margin-bottom: 13px;
  color: var(--anaconda-catalog-primary-color);
}

.catalog-view-back:hover {
  color: var(--anaconda-catalog-primary-color-hover);
}

.catalog-view-title {
  font-size: 34px;
  line-height: 38px;
}

.anaconda-catalog-metadata {
  box-sizing: border-box;
  margin: 0 0 28px;
  background: var(--jp-layout-color1);
  border: 0.5px solid var(--jp-border-color3);
  border-radius: 4px;
  position: relative;
  padding: 17px 36px;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
}

.grouped-fields {
  display: flex;
  flex-flow: row wrap;
}

.grouped-fields .anaconda-catalog-metadata-field {
  flex-grow: 1;
  flex-basis: 50%;
}

.anaconda-catalog-metadata-field:not(:first-child) {
  margin-top: 10px;
}

.grouped-fields .anaconda-catalog-metadata-field:not(:first-child) {
  margin-top: 0;
}

.anaconda-catalog-metadata label {
  font-weight: 600;
  clear: both;
  display: block;
}

.anaconda-catalog-data-url,
.anaconda-catalog-data-url:hover {
  color: var(--anaconda-catalog-primary-color);
}

.anaconda-catalog-data-url:hover {
  color: var(--anaconda-catalog-primary-color-hover);
  text-decoration: none;
}

.anaconda-catalog-tile-left-border-2 {
  position: absolute;
  width: 5px;
  height: calc(100% + 1px);
  background: var(--anaconda-catalog-primary-color);
  border-radius: 4px 0 0 4px;
  top: -1px;
  left: -1px;
}

.notebook-shared-link {
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 465px;
  border-top: 1px solid var(--jp-border-color2);
}

.notebook-shared-link h4 {
  margin-bottom: 0;
}

.notebook-shared-subheader {
	font-size: 16px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 14px;
  margin-top: 14px;
}

.notebook-shared-badge p {
  margin-bottom: 14px;
}

.notebook-shared-link-copy {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.notebook-shared-badge h4 {
  margin: 20px 0 10px;
}

.notebook-shared-link-copy input,
.notebook-shared-badge input {
  width: 100%;
  margin-right: 10px;
  border-radius: 4px;
  height: 36px;
  background: var(--jp-input-background);
}

.notebook-shared-badge input {
	border-radius: 4px !important;
  border: 1px solid var(--gray-400, #8C94A6) !important;
  background: var(--gray-200, #CED2D9) !important;
  height: 57px !important;
}

.notebook-shared-link-copy-button {
  box-sizing: content-box;
  display: flex;
  width: 19px;
  height: 22px;
  align-items: right;
  justify-content: right;
}

.share-notebook-button {
  display: flex !important;
  align-items: center !important;
  font-family: var(--anaconda-catalog-font-family) !important;
  font-weight: 700 !important;
  font-size: 27px !important;
  line-height: 24px !important;
  background-color: var(--anaconda-catalog-open-notebook-background) !important;
  border-radius: 4px !important;
  padding: 0 10px !important;
}

.share-notebook-button * {
  color: var(--md-grey-900) !important;
}

button.share-notebook-button:hover {
  background-color: var(--anaconda-catalog-open-notebook-hover);
}

.share-notebook-button span {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
}

.share-notebook-button span .jp-ToolbarButtonComponent-icon {
  margin-left: 4px;
}

.share-notebook-button span span svg g path {
  fill: var(--md-grey-900);
}

.share-notebook-button .jp-ToolbarButtonComponent-label {
  font-size: var(--jp-ui-font-size1);
  line-height: 100%;
  font-weight: 700 !important;
  padding-left: 2px;
  color: var(--md-grey-900) !important;
  font-family: var(--jp-ui-font-family);
}
.notebook-shared-code-icon,
.notebook-shared-link-icon {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  background-color: var(--anaconda-notebook-shared-link-secondary-color);
  margin-right: 8px;
}

.notebook-shared-link-icon {
  -webkit-mask-image: var(--notebook-shared-link-icon-image);
  mask-image: var(--notebook-shared-link-icon-image);
}

.notebook-shared-code-icon {
  -webkit-mask-image: var(--notebook-shared-code-icon-image);
  mask-image: var(--notebook-shared-code-icon-image);
}

button:hover .notebook-shared-code-icon,
button:hover .notebook-shared-link-icon {
  background-color: var(--anaconda-notebook-shared-link-secondary-color-hover);
}

.notebook-shared-link-copy-icon {
  width: 19px;
  height: 22px;
  display: flex;
  align-items: right;
  background-color: var(--jp-layout-color4);
  -webkit-mask-image: var(--notebook-shared-link-copy-icon-image);
  mask-image: var(--notebook-shared-link-copy-icon-image);
  cursor: pointer;
}

.notebook-shared-badge {
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: 20px;
  border-top: 1px solid var(--jp-border-color2);
  border-bottom: 1px solid var(--jp-border-color2);
  padding-bottom: 20px;
  margin-bottom: 10px;
}

.notebook-shared-badge-copy {
  display: flex;
  flex-direction: row;
  align-items: left;
}


button.notebook-shared-copy-button {
  background: var(--jp-layout-color1)  !important;
  border: 1px solid var(--anaconda-notebook-shared-link-secondary-color) !important;
  color: var(--anaconda-notebook-shared-link-secondary-color) !important;
  border-radius: 4px !important;
  padding: 8px 14px !important;
  margin: 13px 0 0 !important;
  white-space: nowrap !important;
  font-weight: 700 !important;
  font-size: 16px !important;
  line-height: 24px !important;
  width: fit-content !important;
  display: flex !important;
  align-items: center !important;
  height: 40px !important;
}

button.notebook-shared-copy-button:hover {
  background-color: var(--jp-layout-color2) !important;
  border-color: var(--anaconda-notebook-shared-link-secondary-color-hover) !important;
  color: var(--anaconda-notebook-shared-link-secondary-color-hover) !important;
  text-decoration: none !important;
  cursor: pointer !important;
}

.notebook-shared-badge-copy-button {
  box-sizing: content-box !important;
  display: flex !important;
  width: 21px !important;
  height: 24px !important;
  align-items: right !important;
  justify-content: right !important;
  align-self: center !important;
}

.notebook-shared-badge-copy-icon {
  width: 21px !important;
  height: 24px !important;
  display: flex !important;
  align-items: right !important;
  background-color: var(--jp-layout-color4) !important;
  -webkit-mask-image: var(--notebook-shared-badge-copy-icon-image) !important;
  mask-image: var(--notebook-shared-badge-copy-icon-image) !important;
  cursor: pointer !important;
}

.notebook-shared-badge-image {
  margin-top: 12px !important;
  font-size: 11px !important;
  line-height: 20px !important;
}

/* When enabled, moves the data catalog to the top of the launcher */
.data-catalog-launcher-position-experiment .jp-Launcher-content {
  display: flex;
  flex-direction: column;
}

.data-catalog-launcher-position-experiment .jp-Launcher-content .jp-Launcher-cwd {
  order: -2;
}

.data-catalog-launcher-position-experiment .jp-Launcher-content .jp-Launcher-section:has([data-category='Anaconda']) {
  order: -1;
}

.notebook-shared-modal .jp-Dialog-header {
	font-size: 24px;
	font-style: normal;
	font-weight: 600;
}

.notebook-shared-modal .jp-Dialog-content {
    min-height: 585px;
    width: 515px;
}

.notebook-shared-modal .jp-Dialog-body {
	overflow: hidden;
}

.notebook-shared-modal .jp-Dialog-footer button {
	color: #06262D !important;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
}
`, "",{"version":3,"sources":["webpack://./../../lib/share_notebook/lib/style/index.css"],"names":[],"mappings":"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","sourcesContent":["/*\n    See the JupyterLab Developer Guide for useful CSS Patterns:\n\n    https://jupyterlab.readthedocs.io/en/stable/developer/css.html\n*/\n\n:root {\n  --anaconda-catalog-default-color: var(--jp-ui-font-color1);\n  --anaconda-catalog-primary-color: #43b049;\n  --anaconda-catalog-primary-color-hover: #337234;\n  --anaconda-catalog-alert-color: #d50000;\n  --anaconda-catalog-tile-background: var(--jp-layout-color1);\n  /* #fcfcfc; */\n  --anaconda-catalog-tile-border: var(--jp-border-color3);\n  --anaconda-catalog-tile-shadow: drop-shadow(2px 2px 4px var(--jp-layout-color2));\n  --anaconda-catalog-tile-toggle-background: var(--jp-layout-color1);\n  --anaconda-catalog-tile-toggle-background-hover: var(--jp-layout-color2);\n  --anaconda-catalog-open-notebook-border: #0cca4a;\n  --anaconda-catalog-open-notebook-background: #0cca4a;\n  --anaconda-catalog-open-notebook-hover: #4fab4f;\n  --anaconda-catalog-default-icon-image: url('./images/icon-catalog-default.svg');\n  --anaconda-catalog-icon-image: url('./images/icon-anaconda-logo.svg');\n  --anaconda-catalog-chevron-right-icon-image: url('./images/icon-chevron-right.svg');\n  --anaconda-catalog-list-icon-image: url('./images/icon-list.svg');\n  --anaconda-catalog-grid-icon-image: url('./images/icon-grid.svg');\n  --anaconda-catalog-search-icon-image: url('./images/icon-search.svg');\n  --anaconda-catalog-share-icon-image: url('./images/icon-share.svg');\n  --notebook-shared-link-copy-icon-image: url('./images/icon-copy.svg');\n  --notebook-shared-badge-copy-icon-image: url('./images/icon-copy-code.svg');\n  --notebook-shared-link-icon-image: url('./images/icon-link.svg');\n  --notebook-shared-code-icon-image: url('./images/icon-code.svg');\n  --anaconda-catalog-icon-default-square-width-and-height: 30px;\n  --anaconda-catalog-icon-compact-square-width-and-height: 23px;\n  --anaconda-catalog-font-family: inter, serif;\n  --anaconda-notebook-shared-link-secondary-color: #6d5bf6;\n  --anaconda-notebook-shared-link-secondary-color-hover: #9286f7;\n}\n\n/* Inter */\n@font-face {\n  font-family: Inter;\n  src: local('Inter'),\n    url('./fonts/Inter/Inter-VariableFont_slnt\\,wght.ttf') format('truetype');\n}\n\n.notebook-shared-dialog p,\n.notebook-shared-dialog h4 {\n  margin-bottom: 14px;\n  margin-top: 14px;\n}\n\n.anaconda-data-catalog-icon {\n  align-items: center;\n  display: flex;\n  height: 52px;\n  width: 52px;\n  background-color: var(--anaconda-catalog-primary-color);\n  -webkit-mask-image: var(--anaconda-catalog-icon-image);\n  mask-image: var(--anaconda-catalog-icon-image);\n}\n\ndiv[class$='-sectionHeader'] .anaconda-data-catalog-icon {\n  width: 32px;\n  height: 32px;\n}\n\n.anaconda-catalog-launcher {\n  font-family: var(--anaconda-catalog-font-family);\n  display: flex;\n  flex-direction: column;\n  padding: 42px;\n  color: var(--anaconda-catalog-default-color);\n  height: calc(100% - 29px);\n  overflow: auto;\n}\n\n.anaconda-catalog-launcher-list {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 291px);\n  justify-content: space-between;\n  margin-left: -28px;\n}\n\n.anaconda-catalog-launcher-header {\n  margin-bottom: 25px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.anaconda-catalog-launcher-subheader h3,\n.anaconda-catalog-launcher-header h3,\n.anaconda-catalog-launcher-header h4 {\n  font-weight: 500;\n  font-size: 34px;\n  line-height: 38px;\n  margin: 0;\n}\n\n.anaconda-catalog-launcher-header h4 {\n  font-weight: 300;\n  font-size: 18px;\n  line-height: 20px;\n  margin-top: 10px;\n}\n\n.anaconda-catalog-launcher-subheader {\n  margin-bottom: 25px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.anaconda-catalog-chevron-right-icon {\n  width: 16px;\n  height: 16px;\n  display: flex;\n  align-items: center;\n  background-color: var(--anaconda-catalog-primary-color);\n  -webkit-mask-image: var(--anaconda-catalog-chevron-right-icon-image);\n  mask-image: var(--anaconda-catalog-chevron-right-icon-image);\n}\n\n.anaconda-catalog-share-icon {\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  background-color: var(--jp-ui-font-color1);\n  -webkit-mask-image: var(--anaconda-catalog-share-icon-image);\n  mask-image: var(--anaconda-catalog-share-icon-image);\n}\n\n.anaconda-catalog-launcher-toolbar {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  margin-bottom: 28px;\n  align-items: center;\n}\n\n.anaconda-catalog-share {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.anaconda-catalog-share label {\n  text-align: center;\n  font-weight: 400;\n  font-size: 10px;\n  line-height: 16px;\n  text-transform: uppercase;\n}\n\n.anaconda-catalog-share-button,\n.display-toggle {\n  box-sizing: border-box;\n  display: flex;\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  align-items: center;\n  justify-content: center;\n}\n\n.display-toggle {\n  margin-left: 5px;\n}\n\n.anaconda-catalog-share-button,\n.anaconda-catalog-launcher-toolbar .display-toggle.active {\n  border: 0.5px solid var(--anaconda-catalog-tile-border);\n  background: var(--anaconda-catalog-tile-toggle-background);\n}\n\n.anaconda-catalog-share-button:hover,\n.anaconda-catalog-launcher-toolbar .display-toggle:hover {\n  background: var(--anaconda-catalog-tile-toggle-background-hover);\n}\n\n.anaconda-catalog-search-field {\n  display: flex;\n  flex-grow: 1;\n  font-size: 18px;\n  line-height: 20px;\n  align-items: center;\n}\n\n.anaconda-catalog-search-icon {\n  width: 18px;\n  height: 18px;\n  display: flex;\n  align-items: center;\n  background-color: var(--jp-ui-font-color1);\n  -webkit-mask-image: var(--anaconda-catalog-search-icon-image);\n  mask-image: var(--anaconda-catalog-search-icon-image);\n  margin-left: 14px;\n  margin-right: -30px;\n}\n\n.anaconda-catalog-search-field input {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 14px;\n  height: 34px;\n  box-sizing: border-box;\n  width: 50%;\n  border-radius: 17px;\n  border: 1px solid var(--jp-border-color3);\n  padding: 0 10px 0 44px;\n}\n\n.anaconda-catalog-tile {\n  box-sizing: border-box;\n  width: 263px;\n  height: 190px;\n  margin: 0 0 28px 28px;\n  background: var(--anaconda-catalog-tile-background);\n  border: 0.5px solid var(--anaconda-catalog-tile-border);\n  border-radius: 4px;\n  position: relative;\n  padding: 17px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\n.anaconda-catalog-error,\n.anaconda-catalog-no-results {\n  background: var(--anaconda-catalog-tile-background);\n  border: 0.5px solid var(--anaconda-catalog-tile-border);\n  border-radius: 4px;\n  position: relative;\n  padding: 17px 36px;\n  display: flex;\n  flex-direction: column;\n}\n\n.anaconda-catalog-tile:hover,\n.anaconda-catalog-tile:active,\n.anaconda-catalog-tile:focus {\n  filter: var(--anaconda-catalog-tile-shadow);\n}\n\n.anaconda-catalog-tile:hover {\n  cursor: pointer;\n}\n\n.anaconda-catalog-tile-left-border {\n  position: absolute;\n  width: 5px;\n  height: 190px;\n  background: var(--anaconda-catalog-primary-color);\n  border-radius: 4px 0 0 4px;\n  top: -1px;\n  left: -1px;\n}\n\n.anaconda-catalog-error .anaconda-catalog-tile-left-border,\n.anaconda-catalog-no-results .anaconda-catalog-tile-left-border {\n  position: absolute;\n  width: 5px;\n  height: calc(100% + 1px);\n  background: var(--anaconda-catalog-primary-color);\n}\n\n.anaconda-catalog-error .anaconda-catalog-tile-left-border {\n  background: var(--anaconda-catalog-alert-color);\n}\n\n.anaconda-catalog-tile-name {\n  font-weight: 400;\n  font-size: 22px;\n  line-height: 23px;\n  margin: 8px;\n}\n\n.anaconda-catalog-tile-description {\n  box-sizing: border-box;\n  margin: 8px 0;\n  font-weight: 300;\n  font-size: 12px;\n  line-height: 15px;\n  text-align: start;\n  width: 263px;\n  padding: 0 26px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.anaconda-catalog-learn-more {\n  font-weight: 400;\n  font-size: 11px;\n  line-height: 15px;\n  color: var(--anaconda-catalog-primary-color);\n  white-space: nowrap;\n}\n\n.anaconda-catalog-learn-more:hover {\n  color: var(--anaconda-catalog-primary-color-hover);\n}\n\n.anaconda-catalog-learn-more::before {\n  content: ' ';\n}\n\n.anaconda-catalog-tile-action {\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 15px;\n  color: var(--anaconda-catalog-primary-color);\n  width: 100%;\n  position: absolute;\n  bottom: 17px;\n}\n\n.anaconda-catalog-tile:hover .anaconda-catalog-tile-action,\n.anaconda-catalog-tile:active .anaconda-catalog-tile-action,\n.anaconda-catalog-tile:focus .anaconda-catalog-tile-action {\n  color: var(--jp-ui-font-color1);\n}\n\n.anaconda-catalog-tile-icon {\n  width: var(--anaconda-catalog-icon-default-square-width-and-height);\n  height: var(--anaconda-catalog-icon-default-square-width-and-height);\n  display: flex;\n  align-items: center;\n  background-color: var(--anaconda-catalog-primary-color);\n  -webkit-mask-image: var(--anaconda-catalog-default-icon-image);\n  mask-image: var(--anaconda-catalog-default-icon-image);\n}\n\n.anaconda-catalog-list-icon {\n  width: 16px;\n  height: 16px;\n  display: flex;\n  align-items: center;\n  background-color: var(--jp-ui-font-color1);\n  -webkit-mask-image: var(--anaconda-catalog-list-icon-image);\n  mask-image: var(--anaconda-catalog-list-icon-image);\n}\n\n.anaconda-catalog-grid-icon {\n  width: 15px;\n  height: 11px;\n  display: flex;\n  align-items: center;\n  background-color: var(--jp-ui-font-color1);\n  -webkit-mask-image: var(--anaconda-catalog-grid-icon-image);\n  mask-image: var(--anaconda-catalog-grid-icon-image);\n}\n\n.anaconda-catalog-launcher-list.compact {\n  grid-template-columns: 100%;\n  margin: 0;\n}\n\n.anaconda-catalog-launcher-list.compact .anaconda-catalog-tile {\n  height: auto;\n  width: 100%;\n  margin: 0 20px 10px 0;\n  padding: 5px;\n  flex-direction: row;\n  text-align: start;\n}\n\n.anaconda-catalog-launcher-list.compact .anaconda-catalog-tile-left-border {\n  height: calc(100% + 1px);\n}\n\n.anaconda-catalog-launcher-list.compact .anaconda-catalog-tile-name-and-description {\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  overflow: hidden;\n}\n\n.anaconda-catalog-launcher-list.compact .anaconda-catalog-tile-name {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 14px;\n  margin: 0 0 2px;\n}\n\n.anaconda-catalog-launcher-list.compact .anaconda-catalog-tile-description {\n  font-weight: 300;\n  font-size: 10px;\n  width: auto;\n  margin: 0;\n  padding: 0;\n  white-space: nowrap;\n}\n\n.anaconda-catalog-launcher-list.compact .anaconda-catalog-tile-action {\n  width: auto;\n  position: static;\n  bottom: auto;\n  white-space: nowrap;\n  margin-right: 10px;\n}\n\n.anaconda-catalog-launcher-list.compact .anaconda-catalog-tile-icon {\n  min-width: var(--anaconda-catalog-icon-compact-square-width-and-height);\n  min-height: var(--anaconda-catalog-icon-compact-square-width-and-height);\n  width: var(--anaconda-catalog-icon-compact-square-width-and-height);\n  height: var(--anaconda-catalog-icon-compact-square-width-and-height);\n  -webkit-mask-size: var(--anaconda-catalog-icon-compact-square-width-and-height) var(--anaconda-catalog-icon-compact-square-width-and-height);\n  mask-size: var(--anaconda-catalog-icon-compact-square-width-and-height) var(--anaconda-catalog-icon-compact-square-width-and-height);\n  margin: -2px 10px 0;\n}\n\n.anaconda-catalog-launcher-list.compact .anaconda-catalog-learn-more {\n  margin-left: 10px;\n}\n\n.catalog-launcher-open-notebook {\n  background: var(--anaconda-catalog-open-notebook-background);\n  border: 1px solid var(--anaconda-catalog-open-notebook-border);\n  border-radius: 8px;\n  padding: 8px 14px;\n  margin: 0;\n  white-space: nowrap;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 24px;\n}\n\n.catalog-launcher-open-notebook:hover,\n.catalog-launcher-open-notebook:focus {\n  background-color: var(--anaconda-catalog-open-notebook-hover);\n  border-color: var(--anaconda-catalog-open-notebook-hover);\n  text-decoration: none;\n}\n\n.catalog-view-back {\n  display: block;\n  font-size: 12px;\n  line-height: 14px;\n  font-weight: 400px;\n  margin-bottom: 13px;\n  color: var(--anaconda-catalog-primary-color);\n}\n\n.catalog-view-back:hover {\n  color: var(--anaconda-catalog-primary-color-hover);\n}\n\n.catalog-view-title {\n  font-size: 34px;\n  line-height: 38px;\n}\n\n.anaconda-catalog-metadata {\n  box-sizing: border-box;\n  margin: 0 0 28px;\n  background: var(--jp-layout-color1);\n  border: 0.5px solid var(--jp-border-color3);\n  border-radius: 4px;\n  position: relative;\n  padding: 17px 36px;\n  display: flex;\n  flex-direction: column;\n  word-wrap: break-word;\n}\n\n.grouped-fields {\n  display: flex;\n  flex-flow: row wrap;\n}\n\n.grouped-fields .anaconda-catalog-metadata-field {\n  flex-grow: 1;\n  flex-basis: 50%;\n}\n\n.anaconda-catalog-metadata-field:not(:first-child) {\n  margin-top: 10px;\n}\n\n.grouped-fields .anaconda-catalog-metadata-field:not(:first-child) {\n  margin-top: 0;\n}\n\n.anaconda-catalog-metadata label {\n  font-weight: 600;\n  clear: both;\n  display: block;\n}\n\n.anaconda-catalog-data-url,\n.anaconda-catalog-data-url:hover {\n  color: var(--anaconda-catalog-primary-color);\n}\n\n.anaconda-catalog-data-url:hover {\n  color: var(--anaconda-catalog-primary-color-hover);\n  text-decoration: none;\n}\n\n.anaconda-catalog-tile-left-border-2 {\n  position: absolute;\n  width: 5px;\n  height: calc(100% + 1px);\n  background: var(--anaconda-catalog-primary-color);\n  border-radius: 4px 0 0 4px;\n  top: -1px;\n  left: -1px;\n}\n\n.notebook-shared-link {\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n  width: 465px;\n  border-top: 1px solid var(--jp-border-color2);\n}\n\n.notebook-shared-link h4 {\n  margin-bottom: 0;\n}\n\n.notebook-shared-subheader {\n\tfont-size: 16px;\n  font-style: normal;\n  font-weight: 700;\n  margin-bottom: 14px;\n  margin-top: 14px;\n}\n\n.notebook-shared-badge p {\n  margin-bottom: 14px;\n}\n\n.notebook-shared-link-copy {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.notebook-shared-badge h4 {\n  margin: 20px 0 10px;\n}\n\n.notebook-shared-link-copy input,\n.notebook-shared-badge input {\n  width: 100%;\n  margin-right: 10px;\n  border-radius: 4px;\n  height: 36px;\n  background: var(--jp-input-background);\n}\n\n.notebook-shared-badge input {\n\tborder-radius: 4px !important;\n  border: 1px solid var(--gray-400, #8C94A6) !important;\n  background: var(--gray-200, #CED2D9) !important;\n  height: 57px !important;\n}\n\n.notebook-shared-link-copy-button {\n  box-sizing: content-box;\n  display: flex;\n  width: 19px;\n  height: 22px;\n  align-items: right;\n  justify-content: right;\n}\n\n.share-notebook-button {\n  display: flex !important;\n  align-items: center !important;\n  font-family: var(--anaconda-catalog-font-family) !important;\n  font-weight: 700 !important;\n  font-size: 27px !important;\n  line-height: 24px !important;\n  background-color: var(--anaconda-catalog-open-notebook-background) !important;\n  border-radius: 4px !important;\n  padding: 0 10px !important;\n}\n\n.share-notebook-button * {\n  color: var(--md-grey-900) !important;\n}\n\nbutton.share-notebook-button:hover {\n  background-color: var(--anaconda-catalog-open-notebook-hover);\n}\n\n.share-notebook-button span {\n  display: flex;\n  align-items: center;\n  flex-direction: row-reverse;\n}\n\n.share-notebook-button span .jp-ToolbarButtonComponent-icon {\n  margin-left: 4px;\n}\n\n.share-notebook-button span span svg g path {\n  fill: var(--md-grey-900);\n}\n\n.share-notebook-button .jp-ToolbarButtonComponent-label {\n  font-size: var(--jp-ui-font-size1);\n  line-height: 100%;\n  font-weight: 700 !important;\n  padding-left: 2px;\n  color: var(--md-grey-900) !important;\n  font-family: var(--jp-ui-font-family);\n}\n.notebook-shared-code-icon,\n.notebook-shared-link-icon {\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  background-color: var(--anaconda-notebook-shared-link-secondary-color);\n  margin-right: 8px;\n}\n\n.notebook-shared-link-icon {\n  -webkit-mask-image: var(--notebook-shared-link-icon-image);\n  mask-image: var(--notebook-shared-link-icon-image);\n}\n\n.notebook-shared-code-icon {\n  -webkit-mask-image: var(--notebook-shared-code-icon-image);\n  mask-image: var(--notebook-shared-code-icon-image);\n}\n\nbutton:hover .notebook-shared-code-icon,\nbutton:hover .notebook-shared-link-icon {\n  background-color: var(--anaconda-notebook-shared-link-secondary-color-hover);\n}\n\n.notebook-shared-link-copy-icon {\n  width: 19px;\n  height: 22px;\n  display: flex;\n  align-items: right;\n  background-color: var(--jp-layout-color4);\n  -webkit-mask-image: var(--notebook-shared-link-copy-icon-image);\n  mask-image: var(--notebook-shared-link-copy-icon-image);\n  cursor: pointer;\n}\n\n.notebook-shared-badge {\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n  margin-top: 20px;\n  border-top: 1px solid var(--jp-border-color2);\n  border-bottom: 1px solid var(--jp-border-color2);\n  padding-bottom: 20px;\n  margin-bottom: 10px;\n}\n\n.notebook-shared-badge-copy {\n  display: flex;\n  flex-direction: row;\n  align-items: left;\n}\n\n\nbutton.notebook-shared-copy-button {\n  background: var(--jp-layout-color1)  !important;\n  border: 1px solid var(--anaconda-notebook-shared-link-secondary-color) !important;\n  color: var(--anaconda-notebook-shared-link-secondary-color) !important;\n  border-radius: 4px !important;\n  padding: 8px 14px !important;\n  margin: 13px 0 0 !important;\n  white-space: nowrap !important;\n  font-weight: 700 !important;\n  font-size: 16px !important;\n  line-height: 24px !important;\n  width: fit-content !important;\n  display: flex !important;\n  align-items: center !important;\n  height: 40px !important;\n}\n\nbutton.notebook-shared-copy-button:hover {\n  background-color: var(--jp-layout-color2) !important;\n  border-color: var(--anaconda-notebook-shared-link-secondary-color-hover) !important;\n  color: var(--anaconda-notebook-shared-link-secondary-color-hover) !important;\n  text-decoration: none !important;\n  cursor: pointer !important;\n}\n\n.notebook-shared-badge-copy-button {\n  box-sizing: content-box !important;\n  display: flex !important;\n  width: 21px !important;\n  height: 24px !important;\n  align-items: right !important;\n  justify-content: right !important;\n  align-self: center !important;\n}\n\n.notebook-shared-badge-copy-icon {\n  width: 21px !important;\n  height: 24px !important;\n  display: flex !important;\n  align-items: right !important;\n  background-color: var(--jp-layout-color4) !important;\n  -webkit-mask-image: var(--notebook-shared-badge-copy-icon-image) !important;\n  mask-image: var(--notebook-shared-badge-copy-icon-image) !important;\n  cursor: pointer !important;\n}\n\n.notebook-shared-badge-image {\n  margin-top: 12px !important;\n  font-size: 11px !important;\n  line-height: 20px !important;\n}\n\n/* When enabled, moves the data catalog to the top of the launcher */\n.data-catalog-launcher-position-experiment .jp-Launcher-content {\n  display: flex;\n  flex-direction: column;\n}\n\n.data-catalog-launcher-position-experiment .jp-Launcher-content .jp-Launcher-cwd {\n  order: -2;\n}\n\n.data-catalog-launcher-position-experiment .jp-Launcher-content .jp-Launcher-section:has([data-category='Anaconda']) {\n  order: -1;\n}\n\n.notebook-shared-modal .jp-Dialog-header {\n\tfont-size: 24px;\n\tfont-style: normal;\n\tfont-weight: 600;\n}\n\n.notebook-shared-modal .jp-Dialog-content {\n    min-height: 585px;\n    width: 515px;\n}\n\n.notebook-shared-modal .jp-Dialog-body {\n\toverflow: hidden;\n}\n\n.notebook-shared-modal .jp-Dialog-footer button {\n\tcolor: #06262D !important;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 700;\n}\n"],"sourceRoot":""}]);
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

/***/ "../../lib/share_notebook/lib/style/index.css":
/*!****************************************************!*\
  !*** ../../lib/share_notebook/lib/style/index.css ***!
  \****************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./index.css */ "../../node_modules/css-loader/dist/cjs.js!../../lib/share_notebook/lib/style/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../../lib/share_notebook/lib/style/fonts/Inter/Inter-VariableFont_slnt,wght.ttf":
/*!***************************************************************************************!*\
  !*** ../../lib/share_notebook/lib/style/fonts/Inter/Inter-VariableFont_slnt,wght.ttf ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4a772478a65263896de7.ttf";

/***/ }),

/***/ "../../lib/share_notebook/lib/style/images/icon-anaconda-logo.svg":
/*!************************************************************************!*\
  !*** ../../lib/share_notebook/lib/style/images/icon-anaconda-logo.svg ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512%3b' xml:space='preserve'%3e %3cg%3e %3cpath d='M93%2c391.4c-19.3-1.9-38.5-5.6-57.3-10.7l-1.7-0.4l0.4-1.7c5.6-18.1%2c12.6-35.9%2c20.9-52.7l0.8-1.7l1.5%2c0.8c12.6%2c7%2c26.1%2c13.5%2c39.6%2c19l1.3%2c0.4l-0.2%2c1.2c-2.2%2c14.4-3.3%2c29.1-3.7%2c43.8v1.9H93z M134.4%2c132.6v-0.4c-11.1%2c0.2-22.2%2c0.8-33.1%2c2.1c1.2%2c11.3%2c3.4%2c22.4%2c5.8%2c33.4C114.8%2c154.9%2c123.9%2c143.1%2c134.4%2c132.6L134.4%2c132.6z M94.9%2c404.4v-1.5l-1.5-0.2c-16.3-1.5-32.7-4.2-48.9-8.2l-4.4-1l2.4%2c3.8c14.7%2c22.2%2c32.6%2c41.8%2c53.4%2c58.5l3.4%2c2.8l-0.7-4.2C96.4%2c437.3%2c95.1%2c420.4%2c94.9%2c404.4zM174.2%2c14.4c-20%2c6.9-38.7%2c16-56%2c27.4c13%2c2.4%2c26%2c5.3%2c38.6%2c9.2C162%2c38.3%2c167.8%2c26.4%2c174.2%2c14.4z M256.8%2c0.7c-9.9%2c0-19.4%2c0.6-29%2c1.7c13.4%2c9.3%2c26.5%2c19.6%2c38.6%2c31l10.3%2c9.4l-10%2c9.6c-8.4%2c8-16.3%2c16.5-24%2c25.6l-0.4%2c0.4c0%2c0-1.5%2c1.8-3.8%2c4.5c6-0.7%2c12.2-1.1%2c18.3-1.1c96%2c0%2c174%2c77.8%2c174%2c174c0%2c95.9-77.8%2c174-174%2c174c-33.3%2c0-64.5-9.4-90.8-25.6c-13%2c1.5-26%2c2.1-39.3%2c2.1c-6.2%2c0-12.2-0.2-18.4-0.4c0.4%2c19.9%2c2.3%2c40.1%2c5.6%2c61.5c40.8%2c27.6%2c89.9%2c43.8%2c142.9%2c43.8C397.9%2c511.3%2c512%2c397%2c512%2c256.2C512%2c115.1%2c397.9%2c0.8%2c256.8%2c0.7L256.8%2c0.7z M223.1%2c61c5.1-5.9%2c10.3-11.8%2c15.6-17.5c-12-10.3-24.6-19.5-37.8-27.7c-8.2%2c13.6-15.2%2c27.9-21.2%2c42.5c11.5%2c4.2%2c22.6%2c9.2%2c33.8%2c14.5C218.3%2c66.2%2c222%2c62.3%2c223.1%2c61L223.1%2c61z M49.8%2c206.7l1%2c1.5l1.5-1.1c11.8-8.5%2c24.2-16.5%2c37-23.5l1.3-0.4l-0.5-1.5c-3.8-14.4-6.7-29.3-8.8-44.5l-0.2-1.7l-1.7%2c0.4c-18.8%2c3.4-37.6%2c8.5-55.5%2c14.9l-1.7%2c0.6l0.7%2c1.7C30.4%2c171.7%2c39.3%2c189.6%2c49.8%2c206.7z M46.8%2c231.4l-1.5%2c1c-13.7%2c11.2-26.7%2c23.5-38.7%2c36.8l-1.2%2c1.3l1.2%2c1.1c13.3%2c11.5%2c27.6%2c22.2%2c42.6%2c31.7l1.5%2c1.1l0.8-1.5c6.6-12%2c14.4-23.8%2c22.4-35.1l0.8-1.1l-0.8-1.1c-9.4-10.4-18.2-21.4-26.3-32.9L46.8%2c231.4z M147%2c392.2l4.5-0.2l-3.4-2.8c-13.7-11.1-25.4-24.1-35.1-39.1v-0.4l-2.8-1.3l-0.4%2c2.4c-1.7%2c12.8-2.8%2c26-3%2c39.7v1.7h1.7c5.9%2c0.4%2c12.2%2c0.4%2c18.1%2c0.4C133.4%2c392.9%2c140.1%2c392.6%2c147%2c392.2L147%2c392.2z M138.5%2c110.4c2.8-12.6%2c6.2-25%2c10.3-37.2c-16-4.5-32.5-7.9-48.9-10.3c-1.5%2c16.7-1.7%2c33.4-0.7%2c49.8C112.2%2c111.2%2c125.5%2c110.5%2c138.5%2c110.4L138.5%2c110.4z M163%2c109.5c11.2-7%2c23.1-13%2c35.7-17.5c-9-4-17.9-7.8-27.4-11.3C168.2%2c90%2c165.4%2c99.9%2c163%2c109.5z M44.5%2c316.9l-1.3-0.9c-13.2-8.3-25.9-17.6-37.8-27.3l-3.4-2.8l0.7%2c4.5c3.2%2c24.6%2c10%2c48.3%2c20%2c71l1.7%2c4.1l1.5-4.1c4.9-14.5%2c11.1-28.9%2c17.9-42.5L44.5%2c316.9z M77.1%2c74.7C62%2c89.9%2c48.5%2c106.7%2c37.6%2c125.3c13.2-3.9%2c26.5-7.1%2c39.9-9.4C76.7%2c102.2%2c76.6%2c88.6%2c77.1%2c74.7z M84.8%2c253.7l0.3-4.4c0.7-15.6%2c3.2-30.8%2c7.9-45.6l1.3-4.3l-3.9%2c2.2c-10%2c5.8-19.9%2c12.2-29.3%2c19l-1.5%2c1l1.1%2c1.5c6.7%2c9.4%2c13.7%2c18.6%2c21.2%2c27.4L84.8%2c253.7zM86.6%2c279.9l-0.7-4.2l-2.5%2c3.8c-7.1%2c10-13.7%2c20.3-19.7%2c31l-0.8%2c1.5l1.5%2c0.8c10.7%2c6%2c22%2c11.5%2c33.3%2c16.5l4.1%2c1.7l-1.9-4.1C93.2%2c311.9%2c88.7%2c296.1%2c86.6%2c279.9L86.6%2c279.9z M36.7%2c218.9l1.3-1.1l-0.8-1.3c-7.9-12.8-15.2-26.3-21.6-40l-1.9-3.8l-1.2%2c4.3c-7.5%2c23.1-11.6%2c47.3-12.2%2c71.6L0%2c253.1l3.3-3.2C13.7%2c238.8%2c25%2c228.1%2c36.7%2c218.9L36.7%2c218.9z' style='fill: green%3b'/%3e %3c/g%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/share_notebook/lib/style/images/icon-catalog-default.svg":
/*!**************************************************************************!*\
  !*** ../../lib/share_notebook/lib/style/images/icon-catalog-default.svg ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='30' height='31' viewBox='0 0 30 31' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M30 4.8125C30 4.82031 30 4.82812 30 4.83594C29.9609 7.48438 23.2578 9.625 15 9.625C6.74219 9.625 0.0390625 7.48438 0 4.83594C0 4.82812 0 4.82031 0 4.8125C0 2.15625 6.71875 0 15 0C23.2812 0 30 2.15625 30 4.8125ZM30 8.4375C30 8.4375 30 8.45312 30 8.46094C29.9609 11.1094 23.2578 13.25 15 13.25C6.74219 13.25 0.0390625 11.1094 0 8.46094V8.4375L0.078125 15.2187C0.078125 15.2187 0.078125 15.25 0.078125 15.2578C0.117188 17.8906 6.78125 20.0234 15 20.0234C23.2188 20.0234 29.8828 17.8906 29.9219 15.2578C29.9219 15.25 29.9219 15.2187 29.9219 15.2187L30 8.4375ZM30 18.4375C30 18.4375 30 18.4531 30 18.4609C29.9609 21.1094 23.2578 23.25 15 23.25C6.74219 23.25 0.0390625 21.1094 0 18.4609V18.4375L0.078125 25.2188C0.078125 25.2188 0.078125 25.25 0.078125 25.2578C0.117188 27.8906 6.78125 30.0234 15 30.0234C23.2188 30.0234 29.8828 27.8906 29.9219 25.2578C29.9219 25.25 29.9219 25.2188 29.9219 25.2188L30 18.4375Z' fill='%2343B049'/%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/share_notebook/lib/style/images/icon-chevron-right.svg":
/*!************************************************************************!*\
  !*** ../../lib/share_notebook/lib/style/images/icon-chevron-right.svg ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M4.93945 4.06066L8.87883 8.00003L4.93945 11.9394L6.00011 13L11.0001 8.00003L6.00011 3L4.93945 4.06066Z'/%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/share_notebook/lib/style/images/icon-code.svg":
/*!***************************************************************!*\
  !*** ../../lib/share_notebook/lib/style/images/icon-code.svg ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M7.52214 4.77167C7.85553 4.45217 7.86595 3.92777 7.54992 3.59438C7.23389 3.26099 6.70603 3.25057 6.37263 3.5666L0.260462 9.40094C0.0937663 9.55722 0 9.77254 0 10.0017C0 10.2309 0.0937663 10.4463 0.256989 10.606L6.36916 16.4404C6.70255 16.7599 7.23042 16.746 7.54645 16.4126C7.86248 16.0792 7.85206 15.5513 7.51867 15.2353L2.04202 10.0017L7.52214 4.77167ZM12.4848 4.77167L17.9615 10.0017L12.4813 15.2318C12.1479 15.5513 12.1375 16.0757 12.4536 16.4091C12.7696 16.7425 13.2974 16.7529 13.6308 16.4369L19.743 10.6025C19.9062 10.4463 20 10.2275 20 9.99827C20 9.76906 19.9062 9.55375 19.743 9.394L13.6308 3.55965C13.2974 3.24015 12.7696 3.25404 12.4536 3.58744C12.1375 3.92083 12.1479 4.4487 12.4813 4.76472L12.4848 4.77167Z' fill='black'/%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/share_notebook/lib/style/images/icon-copy-code.svg":
/*!********************************************************************!*\
  !*** ../../lib/share_notebook/lib/style/images/icon-copy-code.svg ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='21' height='24' viewBox='0 0 21 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M17.64 0H3.36C2.46887 0 1.61424 0.337142 0.984121 0.937258C0.353999 1.53737 0 2.35131 0 3.2L0 20.8C0 21.6487 0.353999 22.4626 0.984121 23.0627C1.61424 23.6629 2.46887 24 3.36 24H17.64C18.5311 24 19.3858 23.6629 20.0159 23.0627C20.646 22.4626 21 21.6487 21 20.8V3.2C21 2.35131 20.646 1.53737 20.0159 0.937258C19.3858 0.337142 18.5311 0 17.64 0V0ZM12.8226 7.976L13.713 7.128L16.611 9.884L13.713 12.644L12.8226 11.796L14.8302 9.884L12.8226 7.976ZM10.836 6.656L12.0498 6.98L10.3152 12.88L9.1014 12.556L10.836 6.656ZM5.754 2.2C5.90019 2.19602 6.04431 2.23367 6.16791 2.30813C6.29151 2.38258 6.38897 2.49047 6.44784 2.61797C6.5067 2.74548 6.52429 2.88681 6.49834 3.02389C6.4724 3.16097 6.40411 3.28756 6.3022 3.38746C6.20029 3.48737 6.06941 3.55605 5.92629 3.58472C5.78317 3.61339 5.63433 3.60075 5.49879 3.54841C5.36326 3.49607 5.24721 3.40641 5.16548 3.2909C5.08375 3.17539 5.04006 3.03929 5.04 2.9C5.03992 2.71776 5.11447 2.54268 5.2478 2.41196C5.38113 2.28125 5.56273 2.20521 5.754 2.2ZM7.287 7.128L8.1774 7.976L6.1698 9.884L8.1774 11.796L7.287 12.644L4.389 9.884L7.287 7.128ZM2.52 2.9C2.52006 2.76071 2.56375 2.62461 2.64548 2.5091C2.72721 2.3936 2.84326 2.30394 2.97879 2.25159C3.11433 2.19925 3.26317 2.1866 3.40629 2.21528C3.54941 2.24395 3.68029 2.31263 3.7822 2.41254C3.88411 2.51244 3.9524 2.63903 3.97834 2.77611C4.00429 2.91319 3.9867 3.05452 3.92784 3.18203C3.86897 3.30953 3.77151 3.41742 3.64791 3.49187C3.52431 3.56633 3.38019 3.60398 3.234 3.6C3.04273 3.59479 2.86113 3.51875 2.7278 3.38804C2.59447 3.25732 2.51992 3.08224 2.52 2.9ZM9.849 20.4H3.129V19.6H9.849V20.4ZM17.829 18H3.129V17.2H17.829V18Z' fill='%238C94A6'/%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/share_notebook/lib/style/images/icon-copy.svg":
/*!***************************************************************!*\
  !*** ../../lib/share_notebook/lib/style/images/icon-copy.svg ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='19' height='22' viewBox='0 0 19 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M13 0H2C0.9 0 0 0.9 0 2V15C0 15.55 0.45 16 1 16C1.55 16 2 15.55 2 15V3C2 2.45 2.45 2 3 2H13C13.55 2 14 1.55 14 1C14 0.45 13.55 0 13 0ZM13.59 4.59L18.42 9.42C18.79 9.79 19 10.3 19 10.83V20C19 21.1 18.1 22 17 22H5.99C4.89 22 4 21.1 4 20L4.01 6C4.01 4.9 4.9 4 6 4H12.17C12.7 4 13.21 4.21 13.59 4.59ZM13 11H17.5L12 5.5V10C12 10.55 12.45 11 13 11Z' fill='%238C94A6'/%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/share_notebook/lib/style/images/icon-grid.svg":
/*!***************************************************************!*\
  !*** ../../lib/share_notebook/lib/style/images/icon-grid.svg ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='15' height='11' viewBox='0 0 15 11' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M1.16659 5.16666H3.66659C4.12492 5.16666 4.49992 4.79166 4.49992 4.33332V0.99999C4.49992 0.541656 4.12492 0.166656 3.66659 0.166656H1.16659C0.708252 0.166656 0.333252 0.541656 0.333252 0.99999V4.33332C0.333252 4.79166 0.708252 5.16666 1.16659 5.16666ZM1.16659 11H3.66659C4.12492 11 4.49992 10.625 4.49992 10.1667V6.83332C4.49992 6.37499 4.12492 5.99999 3.66659 5.99999H1.16659C0.708252 5.99999 0.333252 6.37499 0.333252 6.83332V10.1667C0.333252 10.625 0.708252 11 1.16659 11ZM6.16659 11H8.66659C9.12492 11 9.49992 10.625 9.49992 10.1667V6.83332C9.49992 6.37499 9.12492 5.99999 8.66659 5.99999H6.16659C5.70825 5.99999 5.33325 6.37499 5.33325 6.83332V10.1667C5.33325 10.625 5.70825 11 6.16659 11ZM11.1666 11H13.6666C14.1249 11 14.4999 10.625 14.4999 10.1667V6.83332C14.4999 6.37499 14.1249 5.99999 13.6666 5.99999H11.1666C10.7083 5.99999 10.3333 6.37499 10.3333 6.83332V10.1667C10.3333 10.625 10.7083 11 11.1666 11ZM6.16659 5.16666H8.66659C9.12492 5.16666 9.49992 4.79166 9.49992 4.33332V0.99999C9.49992 0.541656 9.12492 0.166656 8.66659 0.166656H6.16659C5.70825 0.166656 5.33325 0.541656 5.33325 0.99999V4.33332C5.33325 4.79166 5.70825 5.16666 6.16659 5.16666ZM10.3333 0.99999V4.33332C10.3333 4.79166 10.7083 5.16666 11.1666 5.16666H13.6666C14.1249 5.16666 14.4999 4.79166 14.4999 4.33332V0.99999C14.4999 0.541656 14.1249 0.166656 13.6666 0.166656H11.1666C10.7083 0.166656 10.3333 0.541656 10.3333 0.99999Z'/%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/share_notebook/lib/style/images/icon-link.svg":
/*!***************************************************************!*\
  !*** ../../lib/share_notebook/lib/style/images/icon-link.svg ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M5 12.5C3.61719 12.5 2.5 11.3828 2.5 10C2.5 8.61719 3.61719 7.5 5 7.5H9.32812C8.46484 6.00781 6.85156 5 5 5C2.23828 5 0 7.23828 0 10C0 12.7617 2.23828 15 5 15C6.84766 15 8.46484 13.9922 9.32812 12.5H5ZM15 15C13.1484 15 11.5351 13.9922 10.6718 12.5H15C16.3828 12.5 17.5 11.3828 17.5 10C17.5 8.61719 16.3789 7.5 15 7.5H10.6718C11.5351 6.00781 13.1523 5 15 5C17.7617 5 20 7.23828 20 10C20 12.7617 17.7617 15 15 15ZM3.75 10C3.75 9.30859 4.30859 8.75 5 8.75H15C15.6914 8.75 16.25 9.30859 16.25 10C16.25 10.6914 15.6914 11.25 15 11.25H5C4.30859 11.25 3.75 10.6914 3.75 10Z' fill='%236D5BF6'/%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/share_notebook/lib/style/images/icon-list.svg":
/*!***************************************************************!*\
  !*** ../../lib/share_notebook/lib/style/images/icon-list.svg ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M4 5H1V2H4V5ZM4 7H1V10H4V7ZM4 12H1V15H4V12ZM6 4H15V3H6V4ZM6 9H15V8H6V9ZM6 14H15V13H6V14Z'/%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/share_notebook/lib/style/images/icon-search.svg":
/*!*****************************************************************!*\
  !*** ../../lib/share_notebook/lib/style/images/icon-search.svg ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M12.5 11H11.71L11.43 10.73C12.63 9.33 13.25 7.42 12.91 5.39C12.44 2.61 10.12 0.39 7.32 0.05C3.09 -0.47 -0.47 3.09 0.05 7.32C0.39 10.12 2.61 12.44 5.39 12.91C7.42 13.25 9.33 12.63 10.73 11.43L11 11.71V12.5L15.25 16.75C15.66 17.16 16.33 17.16 16.74 16.75C17.15 16.34 17.15 15.67 16.74 15.26L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z' fill='%23323232'/%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/share_notebook/lib/style/images/icon-share.svg":
/*!****************************************************************!*\
  !*** ../../lib/share_notebook/lib/style/images/icon-share.svg ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_289_5006)'%3e %3cpath d='M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5C21 3.34 19.66 2 18 2C16.34 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.35C15.11 18.56 15.08 18.78 15.08 19C15.08 20.61 16.39 21.92 18 21.92C19.61 21.92 20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08Z' fill='%23323232'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_289_5006'%3e %3crect width='24' height='24' fill='white'/%3e %3c/clipPath%3e %3c/defs%3e %3c/svg%3e";

/***/ })

}]);
//# sourceMappingURL=style_index_js.599e6785d426fa5c3dae.js.map