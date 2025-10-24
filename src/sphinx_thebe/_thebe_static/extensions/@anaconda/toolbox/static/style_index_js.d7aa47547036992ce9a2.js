"use strict";
(self["webpackChunk_anaconda_toolbox"] = self["webpackChunk_anaconda_toolbox"] || []).push([["style_index_js"],{

/***/ "./style/index.js":
/*!************************!*\
  !*** ./style/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.css */ "./style/base.css");
/* harmony import */ var _anaconda_toolbox_lib_style_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @anaconda/toolbox_lib/style/index.js */ "../../lib/toolbox/lib/style/index.js");




/***/ }),

/***/ "../../lib/toolbox/lib/style/index.js":
/*!********************************************!*\
  !*** ../../lib/toolbox/lib/style/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.css */ "../../lib/toolbox/lib/style/reset.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../../lib/toolbox/lib/style/index.css");




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

/***/ "../../node_modules/css-loader/dist/cjs.js!../../lib/toolbox/lib/style/index.css":
/*!***************************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!../../lib/toolbox/lib/style/index.css ***!
  \***************************************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icon-anaconda-logo.svg */ "../../lib/toolbox/lib/style/images/icon-anaconda-logo.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/menu.svg */ "../../lib/toolbox/lib/style/images/menu.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/assistant.svg */ "../../lib/toolbox/lib/style/images/assistant.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/create.svg */ "../../lib/toolbox/lib/style/images/create.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/cloud.svg */ "../../lib/toolbox/lib/style/images/cloud.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home.svg */ "../../lib/toolbox/lib/style/images/home.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./images/settings-icon.svg */ "../../lib/toolbox/lib/style/images/settings-icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./images/plus.svg */ "../../lib/toolbox/lib/style/images/plus.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./images/cloud_success.svg */ "../../lib/toolbox/lib/style/images/cloud_success.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./images/cloud_load.svg */ "../../lib/toolbox/lib/style/images/cloud_load.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./images/cloud-xmark.svg */ "../../lib/toolbox/lib/style/images/cloud-xmark.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./images/cloud-arrow-down.svg */ "../../lib/toolbox/lib/style/images/cloud-arrow-down.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./images/cloud_import.svg */ "../../lib/toolbox/lib/style/images/cloud_import.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./images/code-snippet.svg */ "../../lib/toolbox/lib/style/images/code-snippet.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./images/plus-outline.svg */ "../../lib/toolbox/lib/style/images/plus-outline.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./images/push.svg */ "../../lib/toolbox/lib/style/images/push.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./images/unstaged.svg */ "../../lib/toolbox/lib/style/images/unstaged.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./images/pull.svg */ "../../lib/toolbox/lib/style/images/pull.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./images/play-snippet.svg */ "../../lib/toolbox/lib/style/images/play-snippet.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./images/refresh.svg */ "../../lib/toolbox/lib/style/images/refresh.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ./images/refresh-running.svg */ "../../lib/toolbox/lib/style/images/refresh-running.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ./images/pull-running.svg */ "../../lib/toolbox/lib/style/images/pull-running.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ./images/push-running.svg */ "../../lib/toolbox/lib/style/images/push-running.svg"), __webpack_require__.b);
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
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_14___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_15___);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_16___);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_17___);
var ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_18___);
var ___CSS_LOADER_URL_REPLACEMENT_19___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_19___);
var ___CSS_LOADER_URL_REPLACEMENT_20___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_20___);
var ___CSS_LOADER_URL_REPLACEMENT_21___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_21___);
var ___CSS_LOADER_URL_REPLACEMENT_22___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_22___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --anaconda-icon-launcher: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  --anaconda-toolbox-menu-icon: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  --anaconda-toolbox-assistant-icon: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  --anaconda-toolbox-create-new-icon: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  --anaconda-toolbox-cloud-icon: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
  --anaconda-toolbox-home-icon: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
  --anaconda-toolbox-settings-icon: url(${___CSS_LOADER_URL_REPLACEMENT_6___});
  --anaconda-toolbox-add-icon: url(${___CSS_LOADER_URL_REPLACEMENT_7___});
  --anaconda-toolbox-cloud-success-icon: url(${___CSS_LOADER_URL_REPLACEMENT_8___});
  --anaconda-toolbox-cloud-load-icon: url(${___CSS_LOADER_URL_REPLACEMENT_9___});
  --anaconda-toolbox-cloud-conflict-icon: url(${___CSS_LOADER_URL_REPLACEMENT_10___});
  --anaconda-toolbox-cloud-arrow-down-icon: url(${___CSS_LOADER_URL_REPLACEMENT_11___});
  --anaconda-toolbox-cloud-import-icon: url(${___CSS_LOADER_URL_REPLACEMENT_12___});
  --anaconda-toolbox-code-snippet-icon: url(${___CSS_LOADER_URL_REPLACEMENT_13___});
  --anaconda-toolbox-plus-outline-icon: url(${___CSS_LOADER_URL_REPLACEMENT_14___});
  --anaconda-toolbox-push-icon: url(${___CSS_LOADER_URL_REPLACEMENT_15___});
  --anaconda-toolbox-unstaged-icon: url(${___CSS_LOADER_URL_REPLACEMENT_16___});
  --anaconda-toolbox-pull-icon: url(${___CSS_LOADER_URL_REPLACEMENT_17___});
  --anaconda-toolbox-play-snippet-icon: url(${___CSS_LOADER_URL_REPLACEMENT_18___});
  --anaconda-toolbox-refresh-icon: url(${___CSS_LOADER_URL_REPLACEMENT_19___});
  --anaconda-toolbox-refresh-running-icon: url(${___CSS_LOADER_URL_REPLACEMENT_20___});
  --anaconda-toolbox-pull-progress-icon: url(${___CSS_LOADER_URL_REPLACEMENT_21___});
  --anaconda-toolbox-push-progress-icon: url(${___CSS_LOADER_URL_REPLACEMENT_22___});
}

.anaconda-toolbox-ai-assistant-icon {
  align-items: center;
  display: flex;
  height: 18px;
  width: 18px;
  background-color: var(--anaconda-primary-color);
  -webkit-mask-image: var(--anaconda-toolbox-assistant-icon);
  mask-image: var(--anaconda-toolbox-assistant-icon);
}
.anaconda-toolbox-create-new-icon {
  align-items: center;
  display: flex;
  height: 16px;
  width: 16px;
  background-color: var(--anaconda-primary-color);
  -webkit-mask-image: var(--anaconda-toolbox-create-new-icon);
  mask-image: var(--anaconda-toolbox-create-new-icon);
}

.anaconda-tab-inactive {
	color: #8C94A6;
}

.anaconda-tab-active {
  border-bottom: 2px solid #0CCA4A;
  padding-bottom: 5px;
  color: #0CCA4A;
}
`, "",{"version":3,"sources":["webpack://./../../lib/toolbox/lib/style/index.css"],"names":[],"mappings":"AAAA;EACE,iEAAgE;EAChE,qEAAsD;EACtD,0EAAgE;EAChE,2EAA8D;EAC9D,sEAAwD;EACxD,qEAAsD;EACtD,yEAAmE;EACnE,oEAAqD;EACrD,8EAAwE;EACxE,2EAAkE;EAClE,gFAAuE;EACvE,kFAA8E;EAC9E,8EAAsE;EACtE,8EAAsE;EACtE,8EAAsE;EACtE,sEAAsD;EACtD,0EAA8D;EAC9D,sEAAsD;EACtD,8EAAsE;EACtE,yEAA4D;EAC5D,iFAA4E;EAC5E,+EAAuE;EACvE,+EAAuE;AACzE;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,WAAW;EACX,+CAA+C;EAC/C,0DAA0D;EAC1D,kDAAkD;AACpD;AACA;EACE,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,WAAW;EACX,+CAA+C;EAC/C,2DAA2D;EAC3D,mDAAmD;AACrD;;AAEA;CACC,cAAc;AACf;;AAEA;EACE,gCAAgC;EAChC,mBAAmB;EACnB,cAAc;AAChB","sourcesContent":[":root {\n  --anaconda-icon-launcher: url('./images/icon-anaconda-logo.svg');\n  --anaconda-toolbox-menu-icon: url('./images/menu.svg');\n  --anaconda-toolbox-assistant-icon: url('./images/assistant.svg');\n  --anaconda-toolbox-create-new-icon: url('./images/create.svg');\n  --anaconda-toolbox-cloud-icon: url('./images/cloud.svg');\n  --anaconda-toolbox-home-icon: url('./images/home.svg');\n  --anaconda-toolbox-settings-icon: url('./images/settings-icon.svg');\n  --anaconda-toolbox-add-icon: url('./images/plus.svg');\n  --anaconda-toolbox-cloud-success-icon: url('./images/cloud_success.svg');\n  --anaconda-toolbox-cloud-load-icon: url('./images/cloud_load.svg');\n  --anaconda-toolbox-cloud-conflict-icon: url('./images/cloud-xmark.svg');\n  --anaconda-toolbox-cloud-arrow-down-icon: url('./images/cloud-arrow-down.svg');\n  --anaconda-toolbox-cloud-import-icon: url('./images/cloud_import.svg');\n  --anaconda-toolbox-code-snippet-icon: url('./images/code-snippet.svg');\n  --anaconda-toolbox-plus-outline-icon: url('./images/plus-outline.svg');\n  --anaconda-toolbox-push-icon: url('./images/push.svg');\n  --anaconda-toolbox-unstaged-icon: url('./images/unstaged.svg');\n  --anaconda-toolbox-pull-icon: url('./images/pull.svg');\n  --anaconda-toolbox-play-snippet-icon: url('./images/play-snippet.svg');\n  --anaconda-toolbox-refresh-icon: url('./images/refresh.svg');\n  --anaconda-toolbox-refresh-running-icon: url('./images/refresh-running.svg');\n  --anaconda-toolbox-pull-progress-icon: url('./images/pull-running.svg');\n  --anaconda-toolbox-push-progress-icon: url('./images/push-running.svg');\n}\n\n.anaconda-toolbox-ai-assistant-icon {\n  align-items: center;\n  display: flex;\n  height: 18px;\n  width: 18px;\n  background-color: var(--anaconda-primary-color);\n  -webkit-mask-image: var(--anaconda-toolbox-assistant-icon);\n  mask-image: var(--anaconda-toolbox-assistant-icon);\n}\n.anaconda-toolbox-create-new-icon {\n  align-items: center;\n  display: flex;\n  height: 16px;\n  width: 16px;\n  background-color: var(--anaconda-primary-color);\n  -webkit-mask-image: var(--anaconda-toolbox-create-new-icon);\n  mask-image: var(--anaconda-toolbox-create-new-icon);\n}\n\n.anaconda-tab-inactive {\n\tcolor: #8C94A6;\n}\n\n.anaconda-tab-active {\n  border-bottom: 2px solid #0CCA4A;\n  padding-bottom: 5px;\n  color: #0CCA4A;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js!../../lib/toolbox/lib/style/reset.css":
/*!***************************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!../../lib/toolbox/lib/style/reset.css ***!
  \***************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html[focus-within] {
  scroll-behavior: smooth;
}
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  -webkit-text-decoration-skip: ink;
          text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html[focus-within] {
    scroll-behavior: auto;
  }
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`, "",{"version":3,"sources":["webpack://./../../lib/toolbox/lib/style/reset.css"],"names":[],"mappings":";AACA,qBAAqB;AACrB;;;EAGE,sBAAsB;AACxB;;AAEA,0BAA0B;AAC1B;;;;;;;;;;;;EAYE,SAAS;AACX;;AAEA,2GAA2G;AAC3G;;EAEE,gBAAgB;AAClB;;AAEA,2BAA2B;AAC3B;EACE,uBAAuB;AACzB;AACA;EACE,uBAAuB;AACzB;;AAEA,2BAA2B;AAC3B;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA,0DAA0D;AAC1D;EACE,iCAAiC;UACzB,8BAA8B;AACxC;;AAEA,oCAAoC;AACpC;;EAEE,eAAe;EACf,cAAc;AAChB;;AAEA,yCAAyC;AACzC;;;;EAIE,aAAa;AACf;;AAEA,gGAAgG;AAChG;EACE;IACE,qBAAqB;EACvB;EACA;IACE,qBAAqB;EACvB;;EAEA;;;IAGE,qCAAqC;IACrC,uCAAuC;IACvC,sCAAsC;IACtC,gCAAgC;EAClC;AACF","sourcesContent":["\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role='list'],\nol[role='list'] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml[focus-within] {\n  scroll-behavior: smooth;\n}\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  line-height: 1.5;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  -webkit-text-decoration-skip: ink;\n          text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html[focus-within] {\n    scroll-behavior: auto;\n  }\n  html:focus-within {\n    scroll-behavior: auto;\n  }\n\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "../../lib/toolbox/lib/style/index.css":
/*!*********************************************!*\
  !*** ../../lib/toolbox/lib/style/index.css ***!
  \*********************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./index.css */ "../../node_modules/css-loader/dist/cjs.js!../../lib/toolbox/lib/style/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../../lib/toolbox/lib/style/reset.css":
/*!*********************************************!*\
  !*** ../../lib/toolbox/lib/style/reset.css ***!
  \*********************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./reset.css */ "../../node_modules/css-loader/dist/cjs.js!../../lib/toolbox/lib/style/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../../lib/toolbox/lib/style/images/assistant.svg":
/*!********************************************************!*\
  !*** ../../lib/toolbox/lib/style/images/assistant.svg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M11.3906 3.65625C11.2852 3.58594 11.25 3.48047 11.25 3.375C11.25 3.26953 11.2852 3.19922 11.3906 3.12891L13.5 2.25L14.3438 0.175781C14.4141 0.0703125 14.5195 0 14.625 0C14.7305 0 14.8008 0.0703125 14.8711 0.175781L15.75 2.25L17.8242 3.12891C17.9297 3.19922 18 3.26953 18 3.375C18 3.48047 17.9297 3.58594 17.8242 3.65625L15.75 4.5L14.8711 6.60938C14.8008 6.71484 14.7305 6.75 14.625 6.75C14.5195 6.75 14.4141 6.71484 14.3438 6.60938L13.5 4.5L11.3906 3.65625ZM17.8242 14.3789C17.9297 14.4492 18 14.5195 18 14.625C18 14.7305 17.9297 14.8359 17.8242 14.9062L15.75 15.75L14.8711 17.8594C14.8008 17.9648 14.7305 18 14.625 18C14.5195 18 14.4141 17.9648 14.3438 17.8594L13.5 15.75L11.3906 14.9062C11.2852 14.8359 11.25 14.7305 11.25 14.625C11.25 14.5195 11.2852 14.4492 11.3906 14.3789L13.5 13.5L14.3438 11.4258C14.4141 11.3203 14.5195 11.25 14.625 11.25C14.7305 11.25 14.8008 11.3203 14.8711 11.4258L15.75 13.5L17.8242 14.3789ZM13.5 9C13.5 9.21094 13.3594 9.42188 13.1836 9.49219L9.21094 11.4961L7.24219 15.4688C7.13672 15.6445 6.92578 15.75 6.75 15.75C6.50391 15.75 6.32812 15.6445 6.22266 15.4688L4.25391 11.4961L0.28125 9.49219C0.105469 9.42188 0 9.21094 0 9C0 8.78906 0.105469 8.57812 0.28125 8.50781L4.25391 6.50391L6.22266 2.56641C6.43359 2.17969 7.03125 2.17969 7.24219 2.56641L9.21094 6.50391L13.1836 8.50781C13.3594 8.57812 13.5 8.78906 13.5 9Z' fill='%230CCA4A'/%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/toolbox/lib/style/images/cloud-arrow-down.svg":
/*!***************************************************************!*\
  !*** ../../lib/toolbox/lib/style/images/cloud-arrow-down.svg ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M8.8725 4.6424C9.2175 5.0424 9.785 5.1699 10.27 4.9549C10.4925 4.8574 10.7375 4.7999 11 4.7999C11.995 4.7999 12.8 5.6049 12.8 6.5999C12.8 6.6999 12.7925 6.7974 12.7775 6.8924C12.69 7.4324 12.98 7.9649 13.48 8.1849C14.26 8.5224 14.8 9.2999 14.8 10.1999C14.8 11.3699 13.885 12.3299 12.73 12.3949C12.715 12.3949 12.6975 12.3974 12.6825 12.3999H12.6H3.6C2.275 12.3999 1.2 11.3249 1.2 9.9999C1.2 8.9574 1.865 8.0674 2.8 7.7374C3.28 7.5674 3.6 7.1149 3.6 6.6049V6.5999C3.6 4.9424 4.9425 3.5999 6.6 3.5999C7.5075 3.5999 8.32 4.0024 8.8725 4.6424ZM12.8 13.5999V13.5949C14.585 13.4924 16 12.0124 16 10.1999C16 8.8074 15.1625 7.6074 13.9625 7.0824C13.9875 6.9249 14 6.7624 14 6.5999C14 4.9424 12.6575 3.5999 11 3.5999C10.565 3.5999 10.155 3.6924 9.7825 3.8574C9.01 2.9649 7.8725 2.3999 6.6 2.3999C4.28 2.3999 2.4 4.2799 2.4 6.5999V6.6049C1.0025 7.0999 0 8.4324 0 9.9999C0 11.9874 1.6125 13.5999 3.6 13.5999H11.6H12.6H12.8ZM5.575 9.4249L7.575 11.4249C7.81 11.6599 8.19 11.6599 8.4225 11.4249L10.4225 9.4249C10.6575 9.1899 10.6575 8.8099 10.4225 8.5774C10.1875 8.3449 9.8075 8.3424 9.575 8.5774L8.6 9.5524V6.1999C8.6 5.8674 8.3325 5.5999 8 5.5999C7.6675 5.5999 7.4 5.8674 7.4 6.1999V9.5524L6.425 8.5774C6.19 8.3424 5.81 8.3424 5.5775 8.5774C5.345 8.8124 5.3425 9.1924 5.5775 9.4249H5.575Z' fill='%238C94A6'/%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/toolbox/lib/style/images/cloud-xmark.svg":
/*!**********************************************************!*\
  !*** ../../lib/toolbox/lib/style/images/cloud-xmark.svg ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M8.8725 4.6424C9.2175 5.0424 9.785 5.1699 10.27 4.9549C10.4925 4.8574 10.7375 4.7999 11 4.7999C11.995 4.7999 12.8 5.6049 12.8 6.5999C12.8 6.6999 12.7925 6.7974 12.7775 6.8924C12.69 7.4324 12.98 7.9649 13.48 8.1849C14.26 8.5224 14.8 9.2999 14.8 10.1999C14.8 11.3699 13.885 12.3299 12.73 12.3949C12.715 12.3949 12.6975 12.3974 12.6825 12.3999H12.6H3.6C2.275 12.3999 1.2 11.3249 1.2 9.9999C1.2 8.9574 1.865 8.0674 2.8 7.7374C3.28 7.5674 3.6 7.1149 3.6 6.6049V6.5999C3.6 4.9424 4.9425 3.5999 6.6 3.5999C7.5075 3.5999 8.32 4.0024 8.8725 4.6424ZM12.8 13.5999V13.5949C14.585 13.4924 16 12.0124 16 10.1999C16 8.8074 15.1625 7.6074 13.9625 7.0824C13.9875 6.9249 14 6.7624 14 6.5999C14 4.9424 12.6575 3.5999 11 3.5999C10.565 3.5999 10.155 3.6924 9.7825 3.8574C9.01 2.9649 7.8725 2.3999 6.6 2.3999C4.28 2.3999 2.4 4.2799 2.4 6.5999V6.6049C1.0025 7.0999 0 8.4324 0 9.9999C0 11.9874 1.6125 13.5999 3.6 13.5999H11.6H12.6H12.8ZM5.975 6.7749C5.74 7.0099 5.74 7.3899 5.975 7.6224L7.15 8.7974L5.975 9.9724C5.74 10.2074 5.74 10.5874 5.975 10.8199C6.21 11.0524 6.59 11.0549 6.8225 10.8199L7.9975 9.6449L9.1725 10.8199C9.4075 11.0549 9.7875 11.0549 10.02 10.8199C10.2525 10.5849 10.255 10.2049 10.02 9.9724L8.845 8.7974L10.02 7.6224C10.255 7.3874 10.255 7.0074 10.02 6.7749C9.785 6.5424 9.405 6.5399 9.1725 6.7749L7.9975 7.9499L6.8225 6.7749C6.5875 6.5399 6.2075 6.5399 5.975 6.7749Z' fill='%23DC3246'/%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/toolbox/lib/style/images/cloud.svg":
/*!****************************************************!*\
  !*** ../../lib/toolbox/lib/style/images/cloud.svg ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M13.8188 7.6125C13.9344 7.2625 14 6.8875 14 6.5C14 4.56562 12.4344 3 10.5 3C9.31875 3 8.27187 3.5875 7.6375 4.48438C7.16875 4.17813 6.60625 4 6.00313 4C4.35 4 3.00938 5.34063 3.00938 6.99375C3.00938 7.05 3.0125 7.10625 3.01562 7.16563C1.84063 7.57188 1 8.6875 1 10C1 11.6562 2.34375 13 4 13H12C13.6562 13 15 11.6562 15 10C15 9.02812 14.5375 8.1625 13.8188 7.6125Z'/%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/toolbox/lib/style/images/cloud_import.svg":
/*!***********************************************************!*\
  !*** ../../lib/toolbox/lib/style/images/cloud_import.svg ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='20' height='22' viewBox='0 0 20 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M4.24458 9.70053C4.43393 8.63667 4.99163 7.67338 5.81996 6.97947C6.64829 6.28555 7.6944 5.90527 8.77498 5.90527C9.85555 5.90527 10.9017 6.28555 11.73 6.97947C12.5583 7.67338 13.116 8.63667 13.3054 9.70053H13.375C13.8325 9.70049 14.2848 9.79859 14.7012 9.98819C15.1176 10.1778 15.4885 10.4545 15.7889 10.7996C16.0893 11.1448 16.3122 11.5503 16.4426 11.9889C16.5729 12.4275 16.6077 12.8889 16.5446 13.3421C16.1803 12.9119 15.7489 12.5434 15.267 12.2509C15.1315 11.8568 14.8764 11.5149 14.5372 11.2728C14.198 11.0307 13.7917 10.9006 13.375 10.9005H12.7702C12.616 10.9007 12.4678 10.8416 12.356 10.7354C12.2443 10.6292 12.1778 10.4841 12.1702 10.3301C12.1258 9.45945 11.7487 8.63908 11.1168 8.0385C10.4849 7.43793 9.64638 7.10304 8.77458 7.10304C7.90278 7.10304 7.06428 7.43793 6.43235 8.0385C5.80041 8.63908 5.42331 9.45945 5.37898 10.3301C5.37138 10.4839 5.30494 10.6289 5.1934 10.7351C5.08186 10.8413 4.93377 10.9005 4.77978 10.9005H4.17498C3.64454 10.9005 3.13583 11.1112 2.76076 11.4863C2.38569 11.8614 2.17498 12.3701 2.17498 12.9005C2.17498 13.431 2.38569 13.9397 2.76076 14.3147C3.13583 14.6898 3.64454 14.9005 4.17498 14.9005H7.69498C7.55219 15.2877 7.45631 15.6906 7.40938 16.1005H4.17498C3.32628 16.1005 2.51235 15.7634 1.91223 15.1633C1.31212 14.5632 0.974976 13.7492 0.974976 12.9005C0.974976 12.0518 1.31212 11.2379 1.91223 10.6378C2.51235 10.0377 3.32628 9.70053 4.17498 9.70053H4.24458ZM16.975 16.7005C16.975 17.8675 16.5114 18.9866 15.6862 19.8118C14.8611 20.637 13.7419 21.1005 12.575 21.1005C11.408 21.1005 10.2889 20.637 9.46371 19.8118C8.63855 18.9866 8.17498 17.8675 8.17498 16.7005C8.17498 15.5336 8.63855 14.4144 9.46371 13.5893C10.2889 12.7641 11.408 12.3005 12.575 12.3005C13.7419 12.3005 14.8611 12.7641 15.6862 13.5893C16.5114 14.4144 16.975 15.5336 16.975 16.7005ZM12.175 15.2661V19.1005C12.175 19.2066 12.2171 19.3084 12.2921 19.3834C12.3671 19.4584 12.4689 19.5005 12.575 19.5005C12.6811 19.5005 12.7828 19.4584 12.8578 19.3834C12.9328 19.3084 12.975 19.2066 12.975 19.1005V15.2661L14.2918 16.5837C14.3669 16.6588 14.4688 16.701 14.575 16.701C14.6812 16.701 14.7831 16.6588 14.8582 16.5837C14.9333 16.5086 14.9755 16.4067 14.9755 16.3005C14.9755 16.1943 14.9333 16.0924 14.8582 16.0173L12.8582 14.0173C12.821 13.9801 12.7769 13.9505 12.7283 13.9304C12.6797 13.9102 12.6276 13.8998 12.575 13.8998C12.5224 13.8998 12.4703 13.9102 12.4217 13.9304C12.3731 13.9505 12.3289 13.9801 12.2918 14.0173L10.2918 16.0173C10.2167 16.0924 10.1745 16.1943 10.1745 16.3005C10.1745 16.4067 10.2167 16.5086 10.2918 16.5837C10.3669 16.6588 10.4688 16.701 10.575 16.701C10.6812 16.701 10.7831 16.6588 10.8582 16.5837L12.175 15.2661Z' fill='%23212121'/%3e %3ccircle cx='16.025' cy='3.89941' r='3' fill='%232C303A'/%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/toolbox/lib/style/images/cloud_load.svg":
/*!*********************************************************!*\
  !*** ../../lib/toolbox/lib/style/images/cloud_load.svg ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M6.24458 10.7005C6.43393 9.63667 6.99163 8.67338 7.81996 7.97947C8.64829 7.28555 9.6944 6.90527 10.775 6.90527C11.8556 6.90527 12.9017 7.28555 13.73 7.97947C14.5583 8.67338 15.116 9.63667 15.3054 10.7005H15.375C15.8325 10.7005 16.2848 10.7986 16.7012 10.9882C17.1176 11.1778 17.4885 11.4545 17.7889 11.7996C18.0893 12.1448 18.3122 12.5503 18.4426 12.9889C18.5729 13.4275 18.6077 13.8889 18.5446 14.3421C18.1803 13.9119 17.7489 13.5434 17.267 13.2509C17.1315 12.8568 16.8764 12.5149 16.5372 12.2728C16.198 12.0307 15.7917 11.9006 15.375 11.9005H14.7702C14.616 11.9007 14.4678 11.8416 14.356 11.7354C14.2443 11.6292 14.1778 11.4841 14.1702 11.3301C14.1258 10.4595 13.7487 9.63908 13.1168 9.0385C12.4849 8.43793 11.6464 8.10304 10.7746 8.10304C9.90278 8.10304 9.06428 8.43793 8.43235 9.0385C7.80041 9.63908 7.42331 10.4595 7.37898 11.3301C7.37138 11.4839 7.30494 11.6289 7.1934 11.7351C7.08186 11.8413 6.93377 11.9005 6.77978 11.9005H6.17498C5.64454 11.9005 5.13583 12.1112 4.76076 12.4863C4.38569 12.8614 4.17498 13.3701 4.17498 13.9005C4.17498 14.431 4.38569 14.9397 4.76076 15.3147C5.13583 15.6898 5.64454 15.9005 6.17498 15.9005H9.69498C9.55219 16.2877 9.45631 16.6906 9.40938 17.1005H6.17498C5.32628 17.1005 4.51235 16.7634 3.91223 16.1633C3.31212 15.5632 2.97498 14.7492 2.97498 13.9005C2.97498 13.0518 3.31212 12.2379 3.91223 11.6378C4.51235 11.0377 5.32628 10.7005 6.17498 10.7005H6.24458ZM18.975 17.7005C18.975 16.5336 18.5114 15.4144 17.6862 14.5893C16.8611 13.7641 15.7419 13.3005 14.575 13.3005C13.408 13.3005 12.2889 13.7641 11.4637 14.5893C10.6385 15.4144 10.175 16.5336 10.175 17.7005C10.175 18.8675 10.6385 19.9866 11.4637 20.8118C12.2889 21.637 13.408 22.1005 14.575 22.1005C15.7419 22.1005 16.8611 21.637 17.6862 20.8118C18.5114 19.9866 18.975 18.8675 18.975 17.7005ZM14.175 15.3005C14.175 15.1944 14.2171 15.0927 14.2921 15.0177C14.3671 14.9427 14.4689 14.9005 14.575 14.9005C14.6811 14.9005 14.7828 14.9427 14.8578 15.0177C14.9328 15.0927 14.975 15.1944 14.975 15.3005V19.1349L16.2918 17.8173C16.329 17.7801 16.3731 17.7506 16.4217 17.7305C16.4703 17.7104 16.5224 17.7 16.575 17.7C16.6276 17.7 16.6797 17.7104 16.7282 17.7305C16.7768 17.7506 16.821 17.7801 16.8582 17.8173C16.8954 17.8545 16.9249 17.8987 16.945 17.9473C16.9651 17.9958 16.9755 18.0479 16.9755 18.1005C16.9755 18.1531 16.9651 18.2052 16.945 18.2538C16.9249 18.3024 16.8954 18.3465 16.8582 18.3837L14.8582 20.3837C14.821 20.421 14.7769 20.4505 14.7283 20.4707C14.6797 20.4909 14.6276 20.5012 14.575 20.5012C14.5224 20.5012 14.4703 20.4909 14.4217 20.4707C14.3731 20.4505 14.3289 20.421 14.2918 20.3837L12.2918 18.3837C12.2167 18.3086 12.1745 18.2067 12.1745 18.1005C12.1745 17.9943 12.2167 17.8924 12.2918 17.8173C12.3669 17.7422 12.4688 17.7 12.575 17.7C12.6812 17.7 12.7831 17.7422 12.8582 17.8173L14.175 19.1349V15.3005Z' fill='%23212121'/%3e %3ccircle cx='18.025' cy='4.89941' r='3' fill='%232C303A'/%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/toolbox/lib/style/images/cloud_success.svg":
/*!************************************************************!*\
  !*** ../../lib/toolbox/lib/style/images/cloud_success.svg ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='16' height='12' viewBox='0 0 16 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M8.8725 2.64249C9.2175 3.04249 9.785 3.16999 10.27 2.95499C10.4925 2.85749 10.7375 2.79999 11 2.79999C11.995 2.79999 12.8 3.60499 12.8 4.59999C12.8 4.69999 12.7925 4.79749 12.7775 4.89249C12.69 5.43249 12.98 5.96499 13.48 6.18499C14.26 6.52249 14.8 7.29999 14.8 8.19999C14.8 9.36999 13.885 10.33 12.73 10.395C12.715 10.395 12.6975 10.3975 12.6825 10.4H12.6H3.6C2.275 10.4 1.2 9.32499 1.2 7.99999C1.2 6.95749 1.865 6.06749 2.8 5.73749C3.28 5.56749 3.6 5.11499 3.6 4.60499V4.59999C3.6 2.94249 4.9425 1.59999 6.6 1.59999C7.5075 1.59999 8.32 2.00249 8.8725 2.64249ZM12.8 11.6V11.595C14.585 11.4925 16 10.0125 16 8.19999C16 6.80749 15.1625 5.60749 13.9625 5.08249C13.9875 4.92499 14 4.76249 14 4.59999C14 2.94249 12.6575 1.59999 11 1.59999C10.565 1.59999 10.155 1.69249 9.7825 1.85749C9.01 0.964994 7.8725 0.399994 6.6 0.399994C4.28 0.399994 2.4 2.27999 2.4 4.59999V4.60499C1.0025 5.09999 0 6.43249 0 7.99999C0 9.98749 1.6125 11.6 3.6 11.6H11.6H12.6H12.8ZM10.825 5.62499C11.06 5.38999 11.06 5.00999 10.825 4.77749C10.59 4.54499 10.21 4.54249 9.9775 4.77749L7.2025 7.55249L6.0275 6.37749C5.7925 6.14249 5.4125 6.14249 5.18 6.37749C4.9475 6.61249 4.945 6.99249 5.18 7.22499L6.78 8.82499C7.015 9.05999 7.395 9.05999 7.6275 8.82499L10.825 5.62499Z' fill='%230CCA4A'/%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/toolbox/lib/style/images/code-snippet.svg":
/*!***********************************************************!*\
  !*** ../../lib/toolbox/lib/style/images/code-snippet.svg ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M13.7143 1.14286C14.3464 1.14286 14.8571 1.65357 14.8571 2.28571V13.7143C14.8571 14.3464 14.3464 14.8571 13.7143 14.8571H2.28571C1.65357 14.8571 1.14286 14.3464 1.14286 13.7143V2.28571C1.14286 1.65357 1.65357 1.14286 2.28571 1.14286H13.7143ZM2.28571 0C1.025 0 0 1.025 0 2.28571V13.7143C0 14.975 1.025 16 2.28571 16H13.7143C14.975 16 16 14.975 16 13.7143V2.28571C16 1.025 14.975 0 13.7143 0H2.28571ZM9.33571 5C9.1 5.21071 9.07857 5.57143 9.28929 5.80714L11.2357 8L9.28572 10.1929C9.075 10.4286 9.09643 10.7893 9.33214 11C9.56786 11.2107 9.92857 11.1893 10.1393 10.9536L12.425 8.38214C12.6179 8.16429 12.6179 7.83929 12.425 7.62143L10.1393 5.05C9.92857 4.81429 9.56786 4.79286 9.33214 5.00357L9.33571 5ZM6.71429 5.80714C6.925 5.57143 6.90357 5.21071 6.66786 5C6.43214 4.78929 6.07143 4.81071 5.86071 5.04643L3.575 7.61786C3.38214 7.83571 3.38214 8.16072 3.575 8.37857L5.86071 10.95C6.07143 11.1857 6.43214 11.2071 6.66786 10.9964C6.90357 10.7857 6.925 10.425 6.71429 10.1893L4.76429 8L6.71429 5.80714Z' fill='%2331a824'/%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/toolbox/lib/style/images/create.svg":
/*!*****************************************************!*\
  !*** ../../lib/toolbox/lib/style/images/create.svg ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_286_17032)'%3e %3cpath d='M11.4286 7.42603H8.57397V4.57142C8.57397 4.2565 8.32 4.00253 8.00508 4.00253C7.69016 4.00253 7.43619 4.2565 7.43619 4.57142V7.42603H4.58158C4.26666 7.42603 4.0127 7.67999 4.0127 7.99491C4.0127 8.30983 4.26666 8.5638 4.58158 8.5638H7.43619V11.4184C7.43619 11.7333 7.69016 11.9873 8.00508 11.9873C8.32 11.9873 8.57397 11.7333 8.57397 11.4184V8.5638H11.4286C11.7435 8.5638 11.9975 8.30983 11.9975 7.99491C11.9975 7.67999 11.7435 7.42603 11.4286 7.42603Z' fill='%230CCA4A'/%3e %3cpath d='M13.7143 0H2.28571C1.02603 0 0 1.02603 0 2.28571V13.7143C0 14.974 1.02603 16 2.28571 16H13.7143C14.974 16 16 14.974 16 13.7143V2.28571C16 1.02603 14.974 0 13.7143 0ZM14.8521 13.7143C14.8521 14.3441 14.3441 14.8521 13.7143 14.8521H2.28571C1.65587 14.8521 1.14794 14.3441 1.14794 13.7143V2.28571C1.14794 1.65587 1.65587 1.14794 2.28571 1.14794H13.7143C14.3441 1.14794 14.8521 1.65587 14.8521 2.28571V13.7143Z' fill='%230CCA4A'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_286_17032'%3e %3crect width='16' height='16' fill='white'/%3e %3c/clipPath%3e %3c/defs%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/toolbox/lib/style/images/home.svg":
/*!***************************************************!*\
  !*** ../../lib/toolbox/lib/style/images/home.svg ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M15 8C15 8.55312 14.5531 9 14 9C13.7156 9 13.4562 8.88125 13.275 8.6875L13 8.41562V13C13 13.5531 12.5531 14 12 14H10C9.44687 14 9 13.5531 9 13V10H7V13C7 13.5531 6.55312 14 6 14H4C3.44688 14 3 13.5531 3 13V8.39375L2.74062 8.67187C2.55625 8.875 2.29375 9 2 9C1.44687 9 1 8.55312 1 8C1 7.73437 1.10312 7.49687 1.26875 7.31562L1.275 7.30937C1.28437 7.3 1.29687 7.2875 1.30625 7.27812L7.275 1.30001C7.28438 1.29063 7.29375 1.28126 7.30625 1.26876C7.4875 1.09688 7.73125 0.990631 8 0.990631C8.28438 0.990631 8.54063 1.10938 8.72188 1.30001L14.6969 7.28125C14.7031 7.2875 14.7125 7.29687 14.7188 7.30312L14.7281 7.3125C14.8969 7.49375 15 7.73437 15 8Z' fill='%232C303A'/%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/toolbox/lib/style/images/icon-anaconda-logo.svg":
/*!*****************************************************************!*\
  !*** ../../lib/toolbox/lib/style/images/icon-anaconda-logo.svg ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512%3b' xml:space='preserve'%3e %3cg%3e %3cpath d='M93%2c391.4c-19.3-1.9-38.5-5.6-57.3-10.7l-1.7-0.4l0.4-1.7c5.6-18.1%2c12.6-35.9%2c20.9-52.7l0.8-1.7l1.5%2c0.8c12.6%2c7%2c26.1%2c13.5%2c39.6%2c19l1.3%2c0.4l-0.2%2c1.2c-2.2%2c14.4-3.3%2c29.1-3.7%2c43.8v1.9H93z M134.4%2c132.6v-0.4c-11.1%2c0.2-22.2%2c0.8-33.1%2c2.1c1.2%2c11.3%2c3.4%2c22.4%2c5.8%2c33.4C114.8%2c154.9%2c123.9%2c143.1%2c134.4%2c132.6L134.4%2c132.6z M94.9%2c404.4v-1.5l-1.5-0.2c-16.3-1.5-32.7-4.2-48.9-8.2l-4.4-1l2.4%2c3.8c14.7%2c22.2%2c32.6%2c41.8%2c53.4%2c58.5l3.4%2c2.8l-0.7-4.2C96.4%2c437.3%2c95.1%2c420.4%2c94.9%2c404.4zM174.2%2c14.4c-20%2c6.9-38.7%2c16-56%2c27.4c13%2c2.4%2c26%2c5.3%2c38.6%2c9.2C162%2c38.3%2c167.8%2c26.4%2c174.2%2c14.4z M256.8%2c0.7c-9.9%2c0-19.4%2c0.6-29%2c1.7c13.4%2c9.3%2c26.5%2c19.6%2c38.6%2c31l10.3%2c9.4l-10%2c9.6c-8.4%2c8-16.3%2c16.5-24%2c25.6l-0.4%2c0.4c0%2c0-1.5%2c1.8-3.8%2c4.5c6-0.7%2c12.2-1.1%2c18.3-1.1c96%2c0%2c174%2c77.8%2c174%2c174c0%2c95.9-77.8%2c174-174%2c174c-33.3%2c0-64.5-9.4-90.8-25.6c-13%2c1.5-26%2c2.1-39.3%2c2.1c-6.2%2c0-12.2-0.2-18.4-0.4c0.4%2c19.9%2c2.3%2c40.1%2c5.6%2c61.5c40.8%2c27.6%2c89.9%2c43.8%2c142.9%2c43.8C397.9%2c511.3%2c512%2c397%2c512%2c256.2C512%2c115.1%2c397.9%2c0.8%2c256.8%2c0.7L256.8%2c0.7z M223.1%2c61c5.1-5.9%2c10.3-11.8%2c15.6-17.5c-12-10.3-24.6-19.5-37.8-27.7c-8.2%2c13.6-15.2%2c27.9-21.2%2c42.5c11.5%2c4.2%2c22.6%2c9.2%2c33.8%2c14.5C218.3%2c66.2%2c222%2c62.3%2c223.1%2c61L223.1%2c61z M49.8%2c206.7l1%2c1.5l1.5-1.1c11.8-8.5%2c24.2-16.5%2c37-23.5l1.3-0.4l-0.5-1.5c-3.8-14.4-6.7-29.3-8.8-44.5l-0.2-1.7l-1.7%2c0.4c-18.8%2c3.4-37.6%2c8.5-55.5%2c14.9l-1.7%2c0.6l0.7%2c1.7C30.4%2c171.7%2c39.3%2c189.6%2c49.8%2c206.7z M46.8%2c231.4l-1.5%2c1c-13.7%2c11.2-26.7%2c23.5-38.7%2c36.8l-1.2%2c1.3l1.2%2c1.1c13.3%2c11.5%2c27.6%2c22.2%2c42.6%2c31.7l1.5%2c1.1l0.8-1.5c6.6-12%2c14.4-23.8%2c22.4-35.1l0.8-1.1l-0.8-1.1c-9.4-10.4-18.2-21.4-26.3-32.9L46.8%2c231.4z M147%2c392.2l4.5-0.2l-3.4-2.8c-13.7-11.1-25.4-24.1-35.1-39.1v-0.4l-2.8-1.3l-0.4%2c2.4c-1.7%2c12.8-2.8%2c26-3%2c39.7v1.7h1.7c5.9%2c0.4%2c12.2%2c0.4%2c18.1%2c0.4C133.4%2c392.9%2c140.1%2c392.6%2c147%2c392.2L147%2c392.2z M138.5%2c110.4c2.8-12.6%2c6.2-25%2c10.3-37.2c-16-4.5-32.5-7.9-48.9-10.3c-1.5%2c16.7-1.7%2c33.4-0.7%2c49.8C112.2%2c111.2%2c125.5%2c110.5%2c138.5%2c110.4L138.5%2c110.4z M163%2c109.5c11.2-7%2c23.1-13%2c35.7-17.5c-9-4-17.9-7.8-27.4-11.3C168.2%2c90%2c165.4%2c99.9%2c163%2c109.5z M44.5%2c316.9l-1.3-0.9c-13.2-8.3-25.9-17.6-37.8-27.3l-3.4-2.8l0.7%2c4.5c3.2%2c24.6%2c10%2c48.3%2c20%2c71l1.7%2c4.1l1.5-4.1c4.9-14.5%2c11.1-28.9%2c17.9-42.5L44.5%2c316.9z M77.1%2c74.7C62%2c89.9%2c48.5%2c106.7%2c37.6%2c125.3c13.2-3.9%2c26.5-7.1%2c39.9-9.4C76.7%2c102.2%2c76.6%2c88.6%2c77.1%2c74.7z M84.8%2c253.7l0.3-4.4c0.7-15.6%2c3.2-30.8%2c7.9-45.6l1.3-4.3l-3.9%2c2.2c-10%2c5.8-19.9%2c12.2-29.3%2c19l-1.5%2c1l1.1%2c1.5c6.7%2c9.4%2c13.7%2c18.6%2c21.2%2c27.4L84.8%2c253.7zM86.6%2c279.9l-0.7-4.2l-2.5%2c3.8c-7.1%2c10-13.7%2c20.3-19.7%2c31l-0.8%2c1.5l1.5%2c0.8c10.7%2c6%2c22%2c11.5%2c33.3%2c16.5l4.1%2c1.7l-1.9-4.1C93.2%2c311.9%2c88.7%2c296.1%2c86.6%2c279.9L86.6%2c279.9z M36.7%2c218.9l1.3-1.1l-0.8-1.3c-7.9-12.8-15.2-26.3-21.6-40l-1.9-3.8l-1.2%2c4.3c-7.5%2c23.1-11.6%2c47.3-12.2%2c71.6L0%2c253.1l3.3-3.2C13.7%2c238.8%2c25%2c228.1%2c36.7%2c218.9L36.7%2c218.9z' style='fill: green%3b'/%3e %3c/g%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/toolbox/lib/style/images/menu.svg":
/*!***************************************************!*\
  !*** ../../lib/toolbox/lib/style/images/menu.svg ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='18' height='15' viewBox='0 0 18 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M0.925049 1.875C0.573486 1.875 0.300049 1.5625 0.300049 1.25C0.300049 0.9375 0.573486 0.625 0.925049 0.625H17.175C17.4875 0.625 17.8 0.976562 17.8 1.28906C17.8 1.60156 17.4875 1.875 17.175 1.875H0.925049ZM17.175 6.875C17.4875 6.875 17.8 7.1875 17.8 7.5C17.8 7.85156 17.4875 8.125 17.175 8.125H0.925049C0.573486 8.125 0.300049 7.85156 0.300049 7.5C0.300049 7.1875 0.573486 6.875 0.925049 6.875H17.175ZM17.175 13.125C17.4875 13.125 17.8 13.4766 17.8 13.7891C17.8 14.1016 17.4875 14.375 17.175 14.375H0.925049C0.573486 14.375 0.300049 14.0625 0.300049 13.75C0.300049 13.4375 0.573486 13.125 0.925049 13.125H17.175Z' fill='%232C303A'/%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/toolbox/lib/style/images/play-snippet.svg":
/*!***********************************************************!*\
  !*** ../../lib/toolbox/lib/style/images/play-snippet.svg ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M2.85803 14.284L13.1419 7.99936L2.85803 1.71475V14.284ZM2.01889 0.218588C2.56165 -0.0849296 3.22225 -0.0706463 3.75072 0.250725L14.0346 6.53533C14.5452 6.84599 14.8559 7.39946 14.8559 7.99936C14.8559 8.59925 14.5452 9.14915 14.0346 9.46338L3.75072 15.748C3.22225 16.0729 2.55808 16.0836 2.01889 15.7801C1.4797 15.4766 1.14404 14.9053 1.14404 14.284V1.71475C1.14404 1.09343 1.4797 0.522106 2.01889 0.218588Z' fill='%23343539'/%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/toolbox/lib/style/images/plus-outline.svg":
/*!***********************************************************!*\
  !*** ../../lib/toolbox/lib/style/images/plus-outline.svg ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M8 1C4.13437 1 1 4.13437 1 8C1 11.8656 4.13437 15 8 15C11.8656 15 15 11.8656 15 8C15 4.13437 11.8656 1 8 1ZM9 9V12H7V9H4V7H7V4H9V7H12V9H9ZM2 8C2 11.3125 4.6875 14 8 14C11.3125 14 14 11.3125 14 8C14 4.6875 11.3125 2 8 2C4.6875 2 2 4.6875 2 8Z' fill='%232C303A'/%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/toolbox/lib/style/images/plus.svg":
/*!***************************************************!*\
  !*** ../../lib/toolbox/lib/style/images/plus.svg ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M6 4V0H4V4H0V6H4V10H6V6H10V4H6Z' fill='%232C303A'/%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/toolbox/lib/style/images/pull-running.svg":
/*!***********************************************************!*\
  !*** ../../lib/toolbox/lib/style/images/pull-running.svg ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3c!-- Define the main shape of the icon --%3e %3cpath d='M3.28437 6.3313C3.525 5.65005 3.91562 5.00942 4.46562 4.46255C6.41875 2.50942 9.58437 2.50942 11.5375 4.46255L12.0719 5.00005H11C10.4469 5.00005 10 5.44692 10 6.00005C10 6.55317 10.4469 7.00005 11 7.00005H14.4844H14.4969C15.05 7.00005 15.4969 6.55317 15.4969 6.00005V2.50005C15.4969 1.94692 15.05 1.50005 14.4969 1.50005C13.9437 1.50005 13.4969 1.94692 13.4969 2.50005V3.60005L12.95 3.05005C10.2156 0.315674 5.78437 0.315674 3.05 3.05005C2.2875 3.81255 1.7375 4.70942 1.4 5.6688C1.21562 6.19067 1.49063 6.75942 2.00937 6.9438C2.52813 7.12817 3.1 6.85317 3.28437 6.33442V6.3313ZM1.21875 9.04067C1.0625 9.08755 0.9125 9.17192 0.790625 9.29692C0.665625 9.42192 0.58125 9.57192 0.5375 9.73442C0.528125 9.77192 0.51875 9.81255 0.5125 9.85317C0.503125 9.9063 0.5 9.95942 0.5 10.0125V13.5001C0.5 14.0532 0.946875 14.5001 1.5 14.5001C2.05312 14.5001 2.5 14.0532 2.5 13.5001V12.4032L3.05 12.95C5.78437 15.6813 10.2156 15.6813 12.9469 12.95C13.7094 12.1875 14.2625 11.2907 14.6 10.3344C14.7844 9.81255 14.5094 9.2438 13.9906 9.05942C13.4719 8.87505 12.9 9.15005 12.7156 9.6688C12.475 10.35 12.0844 10.9907 11.5344 11.5375C9.58125 13.4907 6.41562 13.4907 4.4625 11.5375L4.45937 11.5344L3.925 11H5C5.55312 11 6 10.5532 6 10C6 9.44692 5.55312 9.00005 5 9.00005H1.5125C1.4625 9.00005 1.4125 9.00317 1.3625 9.00942C1.3125 9.01567 1.26562 9.02505 1.21875 9.04067Z' fill='%23343539'/%3e %3c!-- Animated arrow path --%3e %3cpath d='M6.32427 13.2094L8.32427 15.2094C8.55927 15.4444 8.93927 15.4444 9.17177 15.2094L11.1718 13.2094C11.4068 12.9744 11.4068 12.5944 11.1718 12.3619C10.9368 12.1294 10.5568 12.1269 10.3243 12.3619L9.34927 13.3369V9.98445C9.34927 9.65195 9.08177 9.38445 8.74927 9.38445C8.41677 9.38445 8.14927 9.65195 8.14927 9.98445V13.3369L7.17427 12.3619C6.93927 12.1269 6.55927 12.1269 6.32677 12.3619C6.09427 12.5969 6.09177 12.9769 6.32677 13.2094H6.32427Z' fill='%23343539'%3e %3c!-- Arrow movement animation --%3e %3canimateTransform attributeName='transform' type='translate' from='0 -5' to='0 5' begin='0s' dur='1s' repeatCount='indefinite' keyTimes='0%3b0.5%3b1' values='0 -5%3b0 5%3b0 -5' /%3e %3c/path%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/toolbox/lib/style/images/pull.svg":
/*!***************************************************!*\
  !*** ../../lib/toolbox/lib/style/images/pull.svg ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M3.28437 6.3313C3.525 5.65005 3.91562 5.00942 4.46562 4.46255C6.41875 2.50942 9.58437 2.50942 11.5375 4.46255L12.0719 5.00005H11C10.4469 5.00005 10 5.44692 10 6.00005C10 6.55317 10.4469 7.00005 11 7.00005H14.4844H14.4969C15.05 7.00005 15.4969 6.55317 15.4969 6.00005V2.50005C15.4969 1.94692 15.05 1.50005 14.4969 1.50005C13.9437 1.50005 13.4969 1.94692 13.4969 2.50005V3.60005L12.95 3.05005C10.2156 0.315674 5.78437 0.315674 3.05 3.05005C2.2875 3.81255 1.7375 4.70942 1.4 5.6688C1.21562 6.19067 1.49063 6.75942 2.00937 6.9438C2.52813 7.12817 3.1 6.85317 3.28437 6.33442V6.3313ZM1.21875 9.04067C1.0625 9.08755 0.9125 9.17192 0.790625 9.29692C0.665625 9.42192 0.58125 9.57192 0.5375 9.73442C0.528125 9.77192 0.51875 9.81255 0.5125 9.85317C0.503125 9.9063 0.5 9.95942 0.5 10.0125V13.5001C0.5 14.0532 0.946875 14.5001 1.5 14.5001C2.05312 14.5001 2.5 14.0532 2.5 13.5001V12.4032L3.05 12.95C5.78437 15.6813 10.2156 15.6813 12.9469 12.95C13.7094 12.1875 14.2625 11.2907 14.6 10.3344C14.7844 9.81255 14.5094 9.2438 13.9906 9.05942C13.4719 8.87505 12.9 9.15005 12.7156 9.6688C12.475 10.35 12.0844 10.9907 11.5344 11.5375C9.58125 13.4907 6.41562 13.4907 4.4625 11.5375L4.45937 11.5344L3.925 11H5C5.55312 11 6 10.5532 6 10C6 9.44692 5.55312 9.00005 5 9.00005H1.5125C1.4625 9.00005 1.4125 9.00317 1.3625 9.00942C1.3125 9.01567 1.26562 9.02505 1.21875 9.04067Z' fill='%23343539'/%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/toolbox/lib/style/images/push-running.svg":
/*!***********************************************************!*\
  !*** ../../lib/toolbox/lib/style/images/push-running.svg ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='18' height='20' viewBox='0 0 18 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3c!-- Cloud --%3e %3cpath d='M9.62177 8.42695C9.96677 8.82695 10.5343 8.95445 11.0193 8.73945C11.2418 8.64195 11.4868 8.58445 11.7493 8.58445C12.7443 8.58445 13.5493 9.38945 13.5493 10.3844C13.5493 10.4844 13.5418 10.5819 13.5268 10.6769C13.4393 11.2169 13.7293 11.7494 14.2293 11.9694C15.0093 12.3069 15.5493 13.0844 15.5493 13.9844C15.5493 15.1544 14.6343 16.1144 13.4793 16.1794C13.4643 16.1794 13.4468 16.1819 13.4318 16.1844H13.3493H4.34927C3.02427 16.1844 1.94927 15.1094 1.94927 13.7844C1.94927 12.7419 2.61427 11.8519 3.54927 11.5219C4.02927 11.3519 4.34927 10.8994 4.34927 10.3894V10.3844C4.34927 8.72695 5.69177 7.38445 7.34927 7.38445C8.25677 7.38445 9.06927 7.78695 9.62177 8.42695ZM13.5493 17.3844V17.3794C15.3343 17.2769 16.7493 15.7969 16.7493 13.9844C16.7493 12.5919 15.9118 11.3919 14.7118 10.8669C14.7368 10.7094 14.7493 10.5469 14.7493 10.3844C14.7493 8.72695 13.4068 7.38445 11.7493 7.38445C11.3143 7.38445 10.9043 7.47695 10.5318 7.64195C9.75927 6.74945 8.62177 6.18445 7.34927 6.18445C5.02927 6.18445 3.14927 8.06445 3.14927 10.3844V10.3894C1.75177 10.8844 0.749268 12.2169 0.749268 13.7844C0.749268 15.7719 2.36177 17.3844 4.34927 17.3844H12.3493H13.3493H13.5493Z' fill='%232C303A'/%3e %3c!-- Circle --%3e %3ccircle cx='15.0062' cy='3.72485' r='3' fill='%232C303A'/%3e %3c!-- Moving Arrow --%3e %3cpath d='M6.32427 6.7906L8.32427 4.7906C8.55927 4.5556 8.93927 4.5556 9.17177 4.7906L11.1718 6.7906C11.4068 7.0256 11.4068 7.4056 11.1718 7.6381C10.9368 7.8706 10.5568 7.8731 10.3243 7.6381L9.34927 6.6631V10.0156C9.34927 10.3481 9.08177 10.6156 8.74927 10.6156C8.41677 10.6156 8.14927 10.3481 8.14927 10.0156V6.6631L7.17427 7.6381C6.93927 7.8731 6.55927 7.8731 6.32677 7.6381C6.09427 7.4031 6.09177 7.0231 6.32677 6.7906H6.32427Z' fill='%232C303A'%3e %3c!-- Arrow movement animation --%3e %3canimateTransform attributeName='transform' type='translate' from='0 5' to='0 -5' begin='0s' dur='1s' repeatCount='indefinite' keyTimes='0%3b0.5%3b1' values='0 5%3b0 -5%3b0 5' /%3e %3c/path%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/toolbox/lib/style/images/push.svg":
/*!***************************************************!*\
  !*** ../../lib/toolbox/lib/style/images/push.svg ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_6526_138433)'%3e %3cpath d='M1.71599 2.28571V13.7143C1.71599 14.0286 1.97314 14.2857 2.28742 14.2857H13.716C14.0303 14.2857 14.2874 14.0286 14.2874 13.7143V4.94643C14.2874 4.79643 14.2267 4.65 14.1196 4.54286L15.3303 3.33214C15.7589 3.76071 15.9981 4.34286 15.9981 4.95V13.7143C15.9981 14.975 14.9731 16 13.7124 16H2.28742C1.02671 16 0.00170898 14.975 0.00170898 13.7143V2.28571C0.00170898 1.025 1.02671 0 2.28742 0H11.0553C11.6624 0 12.2446 0.239286 12.6731 0.667857L15.3339 3.32857L14.1231 4.53929L11.4589 1.88214C11.4481 1.87143 11.441 1.86429 11.4303 1.85357V5.42857C11.4303 5.90357 11.0481 6.28571 10.5731 6.28571H3.71599C3.24099 6.28571 2.85885 5.90357 2.85885 5.42857V1.71429H2.28742C1.97314 1.71429 1.71599 1.97143 1.71599 2.28571ZM4.57314 1.71429V4.57143H9.71599V1.71429H4.57314ZM5.71599 10.2857C5.71599 9.67951 5.95681 9.09813 6.38547 8.66947C6.81412 8.24082 7.3955 8 8.00171 8C8.60792 8 9.1893 8.24082 9.61795 8.66947C10.0466 9.09813 10.2874 9.67951 10.2874 10.2857C10.2874 10.8919 10.0466 11.4733 9.61795 11.902C9.1893 12.3306 8.60792 12.5714 8.00171 12.5714C7.3955 12.5714 6.81412 12.3306 6.38547 11.902C5.95681 11.4733 5.71599 10.8919 5.71599 10.2857Z' fill='black'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_6526_138433'%3e %3crect width='16' height='16' fill='white'/%3e %3c/clipPath%3e %3c/defs%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/toolbox/lib/style/images/refresh-running.svg":
/*!**************************************************************!*\
  !*** ../../lib/toolbox/lib/style/images/refresh-running.svg ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M3.28437 6.3313C3.525 5.65005 3.91562 5.00942 4.46562 4.46255C6.41875 2.50942 9.58437 2.50942 11.5375 4.46255L12.0719 5.00005H11C10.4469 5.00005 10 5.44692 10 6.00005C10 6.55317 10.4469 7.00005 11 7.00005H14.4844H14.4969C15.05 7.00005 15.4969 6.55317 15.4969 6.00005V2.50005C15.4969 1.94692 15.05 1.50005 14.4969 1.50005C13.9437 1.50005 13.4969 1.94692 13.4969 2.50005V3.60005L12.95 3.05005C10.2156 0.315674 5.78437 0.315674 3.05 3.05005C2.2875 3.81255 1.7375 4.70942 1.4 5.6688C1.21562 6.19067 1.49063 6.75942 2.00937 6.9438C2.52813 7.12817 3.1 6.85317 3.28437 6.33442V6.3313ZM1.21875 9.04067C1.0625 9.08755 0.9125 9.17192 0.790625 9.29692C0.665625 9.42192 0.58125 9.57192 0.5375 9.73442C0.528125 9.77192 0.51875 9.81255 0.5125 9.85317C0.503125 9.9063 0.5 9.95942 0.5 10.0125V13.5001C0.5 14.0532 0.946875 14.5001 1.5 14.5001C2.05312 14.5001 2.5 14.0532 2.5 13.5001V12.4032L3.05 12.95C5.78437 15.6813 10.2156 15.6813 12.9469 12.95C13.7094 12.1875 14.2625 11.2907 14.6 10.3344C14.7844 9.81255 14.5094 9.2438 13.9906 9.05942C13.4719 8.87505 12.9 9.15005 12.7156 9.6688C12.475 10.35 12.0844 10.9907 11.5344 11.5375C9.58125 13.4907 6.41562 13.4907 4.4625 11.5375L4.45937 11.5344L3.925 11H5C5.55312 11 6 10.5532 6 10C6 9.44692 5.55312 9.00005 5 9.00005H1.5125C1.4625 9.00005 1.4125 9.00317 1.3625 9.00942C1.3125 9.01567 1.26562 9.02505 1.21875 9.04067Z' fill='%23343539'%3e %3canimateTransform attributeType='xml' attributeName='transform' type='rotate' from='0 8 8' to='360 8 8' dur='2s' repeatCount='indefinite' /%3e %3c/path%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/toolbox/lib/style/images/refresh.svg":
/*!******************************************************!*\
  !*** ../../lib/toolbox/lib/style/images/refresh.svg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M3.28437 6.3313C3.525 5.65005 3.91562 5.00942 4.46562 4.46255C6.41875 2.50942 9.58437 2.50942 11.5375 4.46255L12.0719 5.00005H11C10.4469 5.00005 10 5.44692 10 6.00005C10 6.55317 10.4469 7.00005 11 7.00005H14.4844H14.4969C15.05 7.00005 15.4969 6.55317 15.4969 6.00005V2.50005C15.4969 1.94692 15.05 1.50005 14.4969 1.50005C13.9437 1.50005 13.4969 1.94692 13.4969 2.50005V3.60005L12.95 3.05005C10.2156 0.315674 5.78437 0.315674 3.05 3.05005C2.2875 3.81255 1.7375 4.70942 1.4 5.6688C1.21562 6.19067 1.49063 6.75942 2.00937 6.9438C2.52813 7.12817 3.1 6.85317 3.28437 6.33442V6.3313ZM1.21875 9.04067C1.0625 9.08755 0.9125 9.17192 0.790625 9.29692C0.665625 9.42192 0.58125 9.57192 0.5375 9.73442C0.528125 9.77192 0.51875 9.81255 0.5125 9.85317C0.503125 9.9063 0.5 9.95942 0.5 10.0125V13.5001C0.5 14.0532 0.946875 14.5001 1.5 14.5001C2.05312 14.5001 2.5 14.0532 2.5 13.5001V12.4032L3.05 12.95C5.78437 15.6813 10.2156 15.6813 12.9469 12.95C13.7094 12.1875 14.2625 11.2907 14.6 10.3344C14.7844 9.81255 14.5094 9.2438 13.9906 9.05942C13.4719 8.87505 12.9 9.15005 12.7156 9.6688C12.475 10.35 12.0844 10.9907 11.5344 11.5375C9.58125 13.4907 6.41562 13.4907 4.4625 11.5375L4.45937 11.5344L3.925 11H5C5.55312 11 6 10.5532 6 10C6 9.44692 5.55312 9.00005 5 9.00005H1.5125C1.4625 9.00005 1.4125 9.00317 1.3625 9.00942C1.3125 9.01567 1.26562 9.02505 1.21875 9.04067Z' fill='%23343539'/%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/toolbox/lib/style/images/settings-icon.svg":
/*!************************************************************!*\
  !*** ../../lib/toolbox/lib/style/images/settings-icon.svg ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='13' height='11' viewBox='0 0 13 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M6.07025 3.19999C6.66244 3.19999 7.14697 2.79499 7.14697 2.29999C7.14697 1.80499 6.66244 1.39999 6.07025 1.39999C5.47805 1.39999 4.99353 1.80499 4.99353 2.29999C4.99353 2.79499 5.47805 3.19999 6.07025 3.19999Z' fill='%232C303A'/%3e %3cpath d='M6.07025 4.39999C5.47805 4.39999 4.99353 4.80499 4.99353 5.29999C4.99353 5.79499 5.47805 6.19999 6.07025 6.19999C6.66244 6.19999 7.14697 5.79499 7.14697 5.29999C7.14697 4.80499 6.66244 4.39999 6.07025 4.39999Z' fill='%232C303A'/%3e %3cpath d='M6.07025 7.39999C5.47805 7.39999 4.99353 7.80499 4.99353 8.29999C4.99353 8.79499 5.47805 9.19999 6.07025 9.19999C6.66244 9.19999 7.14697 8.79499 7.14697 8.29999C7.14697 7.80499 6.66244 7.39999 6.07025 7.39999Z' fill='%232C303A'/%3e %3c/svg%3e";

/***/ }),

/***/ "../../lib/toolbox/lib/style/images/unstaged.svg":
/*!*******************************************************!*\
  !*** ../../lib/toolbox/lib/style/images/unstaged.svg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='18' height='20' viewBox='0 0 18 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M8.86615 7.91767C9.21115 8.31767 9.77865 8.44517 10.2637 8.23017C10.4862 8.13267 10.7312 8.07517 10.9937 8.07517C11.9887 8.07517 12.7937 8.88017 12.7937 9.87517C12.7937 9.97517 12.7862 10.0727 12.7712 10.1677C12.6837 10.7077 12.9737 11.2402 13.4737 11.4602C14.2537 11.7977 14.7937 12.5752 14.7937 13.4752C14.7937 14.6452 13.8787 15.6052 12.7237 15.6702C12.7087 15.6702 12.6912 15.6727 12.6762 15.6752H12.5937H3.59365C2.26865 15.6752 1.19365 14.6002 1.19365 13.2752C1.19365 12.2327 1.85865 11.3427 2.79365 11.0127C3.27365 10.8427 3.59365 10.3902 3.59365 9.88017V9.87517C3.59365 8.21767 4.93615 6.87517 6.59365 6.87517C7.50115 6.87517 8.31365 7.27767 8.86615 7.91767ZM12.7937 16.8752V16.8702C14.5787 16.7677 15.9937 15.2877 15.9937 13.4752C15.9937 12.0827 15.1562 10.8827 13.9562 10.3577C13.9812 10.2002 13.9937 10.0377 13.9937 9.87517C13.9937 8.21767 12.6512 6.87517 10.9937 6.87517C10.5587 6.87517 10.1487 6.96767 9.77615 7.13267C9.00365 6.24017 7.86615 5.67517 6.59365 5.67517C4.27365 5.67517 2.39365 7.55517 2.39365 9.87517V9.88017C0.996152 10.3752 -0.00634766 11.7077 -0.00634766 13.2752C-0.00634766 15.2627 1.60615 16.8752 3.59365 16.8752H11.5937H12.5937H12.7937ZM5.56865 11.2502C5.33365 11.4852 5.33365 11.8652 5.56865 12.0977C5.80365 12.3302 6.18365 12.3327 6.41615 12.0977L7.39115 11.1227V14.4752C7.39115 14.8077 7.65865 15.0752 7.99115 15.0752C8.32365 15.0752 8.59115 14.8077 8.59115 14.4752V11.1227L9.56615 12.0977C9.80115 12.3327 10.1812 12.3327 10.4137 12.0977C10.6462 11.8627 10.6487 11.4827 10.4137 11.2502L8.41365 9.25017C8.17865 9.01517 7.79865 9.01517 7.56615 9.25017L5.56615 11.2502H5.56865Z' fill='%232C303A'/%3e %3ccircle cx='15.0062' cy='3.72485' r='3' fill='%232C303A'/%3e %3c/svg%3e";

/***/ })

}]);
//# sourceMappingURL=style_index_js.d7aa47547036992ce9a2.js.map