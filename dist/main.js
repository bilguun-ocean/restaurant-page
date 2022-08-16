/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./seoul-street.jpg */ "./src/seoul-street.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@200;400&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* --header */\n\n:root {\n  --header: 2em;\n}\n\n* {\n  padding: 0px;\n  margin: 0px;\n  box-sizing: border-box;\n  font-family: 'JetBrains Mono','Courier New', Courier, monospace;\n}\n\nhtml, body {\n  height: 100%;\n}\n\nbody {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: contain;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  min-height: 100%;\n  margin: 0 auto;\n  max-width: 1000px;\n  background-color: rgb(255, 253, 253, 0.9);\n}\n\n\n/* TABS */\n.tab-container {\n  display: flex;\n  justify-content: space-evenly;\n  height: 100%;\n  padding: 20px;\n}\n\n.tab:hover {\n  cursor: pointer;\n  border-bottom: 3px solid green;\n  transition: 0.3s;\n}\n\n.tab {\n  height: 30px;\n}\n\n.current-tab {\n  border-bottom: 3px solid green;\n}\n\n.header-content {\n  color: rebeccapurple;\n  display: flex;\n  font-size: 2.5em;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n\n.logo {\n  width: 60px;\n  /* border: 3px solid greenyellow; */\n  border-radius: 100%;\n  transform: rotate(25deg);\n  padding: 5px;\n}\n\nfooter {\n  margin-top: auto;\n  text-align: center;\n  padding-bottom: 5px;\n}\n /* HOME PAGE */\n\n.introduction {\n  justify-self: center;\n  display: flex;\n  gap: 20px;\n  flex-direction: column;\n  margin: 0 auto;\n  width: 80%;\n}\n\n.header {\n  text-align: center;\n  color: rebeccapurple;\n  font-size: var(--header);\n}\n\n/* .food-image {\n  width: 80%\n} */\n\n.introduction-text {\n  font-size: large;\n}\n\n\n/* MENU PAGE */\n.menu-content {\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  width: 80%;\n}\n\n.menu-header {\n  color: rebeccapurple;\n  font-size: 3em;\n}\n\n.menu {\n  background-color: rgb(39, 38, 38);\n  color: white;\n  padding: 10px;\n  border-radius: 10px;\n  margin: 1em 0;\n}\n\n.menu .menu-items {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 30px;\n}\n\n.menu-item {\n  display: flex;\n  gap: 10px;\n}\n\n.menu-item-image {\n  width: 150px;\n  height: 100px;\n  border-radius: 10px;\n}\n\n.section-header {\n  padding: 3px;\n  margin: 20px 0px;\n  border-radius: 5px;\n  font-size: x-large;\n  background-color: darkorange;\n}\n\n.item-name {\n  color: rgb(245, 215, 171);\n}\n\n.price {\n  float: right;\n  color: orange;\n}\n\n.item-description {\n  width: 50%;\n}\n\n.google-map {\n  margin: auto;\n  max-width: 80%;\n  width: 500px;\n  height: 50vh;\n}\n\n.location-text {\n  text-align: center;\n  padding: 1em;\n}\n\n.menu-content.location-container {\n}\n\na {\n  text-decoration: none;\n  color: green;\n\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,aAAa;;AAGb;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,sBAAsB;EACtB,+DAA+D;AACjE;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,mDAAqC;EACrC,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,gBAAgB;EAChB,cAAc;EACd,iBAAiB;EACjB,yCAAyC;AAC3C;;;AAGA,SAAS;AACT;EACE,aAAa;EACb,6BAA6B;EAC7B,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,eAAe;EACf,8BAA8B;EAC9B,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,oBAAoB;EACpB,aAAa;EACb,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,WAAW;EACX,mCAAmC;EACnC,mBAAmB;EACnB,wBAAwB;EACxB,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;AACrB;CACC,cAAc;;AAEf;EACE,oBAAoB;EACpB,aAAa;EACb,SAAS;EACT,sBAAsB;EACtB,cAAc;EACd,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,wBAAwB;AAC1B;;AAEA;;GAEG;;AAEH;EACE,gBAAgB;AAClB;;;AAGA,cAAc;AACd;EACE,aAAa;EACb,sBAAsB;EACtB,cAAc;EACd,UAAU;AACZ;;AAEA;EACE,oBAAoB;EACpB,cAAc;AAChB;;AAEA;EACE,iCAAiC;EACjC,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,2DAA2D;EAC3D,SAAS;AACX;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;EAClB,4BAA4B;AAC9B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;AACA;;AAEA;EACE,qBAAqB;EACrB,YAAY;;AAEd","sourcesContent":["/* --header */\n@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@200;400&display=swap');\n\n:root {\n  --header: 2em;\n}\n\n* {\n  padding: 0px;\n  margin: 0px;\n  box-sizing: border-box;\n  font-family: 'JetBrains Mono','Courier New', Courier, monospace;\n}\n\nhtml, body {\n  height: 100%;\n}\n\nbody {\n  background: url('./seoul-street.jpg');\n  background-size: contain;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  min-height: 100%;\n  margin: 0 auto;\n  max-width: 1000px;\n  background-color: rgb(255, 253, 253, 0.9);\n}\n\n\n/* TABS */\n.tab-container {\n  display: flex;\n  justify-content: space-evenly;\n  height: 100%;\n  padding: 20px;\n}\n\n.tab:hover {\n  cursor: pointer;\n  border-bottom: 3px solid green;\n  transition: 0.3s;\n}\n\n.tab {\n  height: 30px;\n}\n\n.current-tab {\n  border-bottom: 3px solid green;\n}\n\n.header-content {\n  color: rebeccapurple;\n  display: flex;\n  font-size: 2.5em;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n\n.logo {\n  width: 60px;\n  /* border: 3px solid greenyellow; */\n  border-radius: 100%;\n  transform: rotate(25deg);\n  padding: 5px;\n}\n\nfooter {\n  margin-top: auto;\n  text-align: center;\n  padding-bottom: 5px;\n}\n /* HOME PAGE */\n\n.introduction {\n  justify-self: center;\n  display: flex;\n  gap: 20px;\n  flex-direction: column;\n  margin: 0 auto;\n  width: 80%;\n}\n\n.header {\n  text-align: center;\n  color: rebeccapurple;\n  font-size: var(--header);\n}\n\n/* .food-image {\n  width: 80%\n} */\n\n.introduction-text {\n  font-size: large;\n}\n\n\n/* MENU PAGE */\n.menu-content {\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  width: 80%;\n}\n\n.menu-header {\n  color: rebeccapurple;\n  font-size: 3em;\n}\n\n.menu {\n  background-color: rgb(39, 38, 38);\n  color: white;\n  padding: 10px;\n  border-radius: 10px;\n  margin: 1em 0;\n}\n\n.menu .menu-items {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 30px;\n}\n\n.menu-item {\n  display: flex;\n  gap: 10px;\n}\n\n.menu-item-image {\n  width: 150px;\n  height: 100px;\n  border-radius: 10px;\n}\n\n.section-header {\n  padding: 3px;\n  margin: 20px 0px;\n  border-radius: 5px;\n  font-size: x-large;\n  background-color: darkorange;\n}\n\n.item-name {\n  color: rgb(245, 215, 171);\n}\n\n.price {\n  float: right;\n  color: orange;\n}\n\n.item-description {\n  width: 50%;\n}\n\n.google-map {\n  margin: auto;\n  max-width: 80%;\n  width: 500px;\n  height: 50vh;\n}\n\n.location-text {\n  text-align: center;\n  padding: 1em;\n}\n\n.menu-content.location-container {\n}\n\na {\n  text-decoration: none;\n  color: green;\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
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
  } // For old IE

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

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
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

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateHome)
/* harmony export */ });
/* harmony import */ var _street_food_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./street-food.jpg */ "./src/street-food.jpg");



function generateHome() {
  const mainContainer = document.querySelector('.content')
  const container = document.createElement('div')
  container.classList.add('introduction')
  container.setAttribute('id', 'current-tab')
  // Header Section
  const header = document.createElement('header')
  header.textContent = 'Why Korean Street Food ?'
  header.classList.add('header')
  container.appendChild(header)

  // Intro-text Section
  const introText = document.createElement('div')
  introText.textContent = "Experience real authentic korean street foods" + 
                             " at these stalls! Quick and affordable, sweet and savory"
                              + ", filling and warming on cold days, these street foods are the real comfort-food!"
  introText.classList.add('introduction-text')
  container.appendChild(introText)
  
  // Image Section gotta tweak the css bit
  
  // const image = document.createElement('img')
  // image.classList.add('food-image')
  // image.setAttribute('src', Image)

  // container.appendChild(image)
  
  mainContainer.appendChild(container)

}

/***/ }),

/***/ "./src/location.js":
/*!*************************!*\
  !*** ./src/location.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateLocation)
/* harmony export */ });
function generateLocation() {
  const mainContainer = document.querySelector('.content')
  const container = document.createElement('div')
  container.classList.add('menu-content')
  container.classList.add('location-container')
  container.setAttribute('id', 'current-tab')

  //header 
  const header = document.createElement('header')
  header.classList.add('header-content')
  header.textContent = 'Where to find these stalls?'

  //text

  const text = document.createElement('div')
  text.classList.add("location-text")
  text.textContent = "One of the most popular places to go is Gwangjang Market."

  //map

  const map = document.createElement('iframe')
  map.classList.add('google-map')
  map.setAttribute('src', "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12649.456972515365!2d126.9996036!3d37.5700398!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd656a34831089f44!2sGwangjang%20Market!5e0!3m2!1sen!2smn!4v1660465577853!5m2!1sen!2smn")

  container.appendChild(header)
  container.appendChild(text)
  container.appendChild(map)

  mainContainer.appendChild(container)

}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateMenu)
/* harmony export */ });
/* harmony import */ var _food_images_mandu_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food-images/mandu.jpeg */ "./src/food-images/mandu.jpeg");
/* harmony import */ var _food_images_kimbap_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food-images/kimbap.jpg */ "./src/food-images/kimbap.jpg");
/* harmony import */ var _food_images_corndog_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./food-images/corndog.png */ "./src/food-images/corndog.png");
/* harmony import */ var _food_images_eomuk_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./food-images/eomuk.jpeg */ "./src/food-images/eomuk.jpeg");
/* harmony import */ var _food_images_hotteok_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./food-images/hotteok.jpeg */ "./src/food-images/hotteok.jpeg");
/* harmony import */ var _food_images_bungeoppang_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./food-images/bungeoppang.png */ "./src/food-images/bungeoppang.png");
/* harmony import */ var _food_images_tteokbokki_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./food-images/tteokbokki.jpg */ "./src/food-images/tteokbokki.jpg");
/* harmony import */ var _food_images_soju_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./food-images/soju.png */ "./src/food-images/soju.png");
/* harmony import */ var _food_images_makgeolli_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./food-images/makgeolli.jpg */ "./src/food-images/makgeolli.jpg");
/* harmony import */ var _food_images_hite_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./food-images/hite.png */ "./src/food-images/hite.png");











function generateMenu() {

  //function for creating menu-item 
  function createMenuItem(name, price, description, imageSrc) {
    const item = document.createElement('div')
    item.classList.add('menu-item')

    const image = document.createElement('img')
    image.setAttribute('src', imageSrc)
    image.classList.add('menu-item-image')

    const descriptionContainer = document.createElement('div')
    descriptionContainer.classList.add('item-description')

    const itemName = document.createElement('div')
    itemName.classList.add('item-name')
    itemName.textContent = name

    const itemPrice = document.createElement('span')
    itemPrice.textContent = price
    itemPrice.classList.add('price')
    itemName.appendChild(itemPrice)
    descriptionContainer.appendChild(itemName)

    const itemDescription = document.createElement('div')
    itemDescription.textContent = description
    itemDescription.classList.add('item-description-text')
    descriptionContainer.appendChild(itemDescription)

    item.appendChild(image)
    item.appendChild(descriptionContainer)
    
    return item

  }

  // Function for creating section header
  function createSectionHeader(sectionName) {
    const header = document.createElement('div')
    header.classList.add('section-header')
    header.textContent = sectionName

    return header

  }

  function createSectionContainer() {
    const container = document.createElement('div')
    container.classList.add('menu-items')

    return container
  }

  // Header and container for menu
  const mainContainer = document.querySelector('.content')
  const menuHeader = document.createElement('div')
  const menuContent = document.createElement('div')
  menuContent.classList.add('menu-content')
  menuContent.setAttribute('id', 'current-tab')
  menuHeader.classList.add('menu-header')
  menuHeader.textContent = 'Menu'
  menuContent.appendChild(menuHeader)
  const menuContainer = document.createElement('div')
  menuContainer.classList.add('menu')
  menuContent.appendChild(menuContainer)


  // Creating main food section 
  menuContainer.appendChild(createSectionHeader('Main'))
  const menuMainSectionItems = createSectionContainer()
  menuContainer.appendChild(menuMainSectionItems)
  
  menuMainSectionItems.appendChild(createMenuItem('Mandu | 만두', '$3.11', 'Korean dumplings that is either fried, boiled, or deep-fried', _food_images_mandu_jpeg__WEBPACK_IMPORTED_MODULE_0__))
  menuMainSectionItems.appendChild(createMenuItem('Gimbap | 김밥', '$2.75', 'Seaweed wrap of rolled rice with variations of ingredients', _food_images_kimbap_jpg__WEBPACK_IMPORTED_MODULE_1__))
  menuMainSectionItems.appendChild(createMenuItem('Corndog | 핫도그', '$2.50', 'Crispy, sweet and savory', _food_images_corndog_png__WEBPACK_IMPORTED_MODULE_2__))
  menuMainSectionItems.appendChild(createMenuItem('Eomuk | 어묵', '$0.58', 'Soft and savory fish cakes', _food_images_eomuk_jpeg__WEBPACK_IMPORTED_MODULE_3__))

  // Creating snack section
  menuContainer.appendChild(createSectionHeader('Snack'))
  const menuSnackSectionItems = createSectionContainer()
  menuContainer.appendChild(menuSnackSectionItems)

  menuSnackSectionItems.appendChild(createMenuItem('Hotteok | 호떡', '$3.51', 'Korean style pancake with brown sugar syrup, topped with nuts and seeds', _food_images_hotteok_jpeg__WEBPACK_IMPORTED_MODULE_4__))
  menuSnackSectionItems.appendChild(createMenuItem('Bungeoppang | 붕어빵', '$3.51', 'Fish shaped pastry stuffed with sweet red bean paste', _food_images_bungeoppang_png__WEBPACK_IMPORTED_MODULE_5__))
  menuSnackSectionItems.appendChild(createMenuItem('Tteokbokki | 떡볶이', '$3.51', 'Spicy yet sweet and savory fish cakes', _food_images_tteokbokki_jpg__WEBPACK_IMPORTED_MODULE_6__))

  // Creating beverages section
  menuContainer.appendChild(createSectionHeader('Beverages'))
  const menuBeverageSectionItems = createSectionContainer()
  menuContainer.appendChild(menuBeverageSectionItems)

  menuBeverageSectionItems.appendChild(createMenuItem('Soju | 소주', '$3.98', 'Korean traditional alcoholic drink made from rice', _food_images_soju_png__WEBPACK_IMPORTED_MODULE_7__))
  menuBeverageSectionItems.appendChild(createMenuItem('Makgeolli | 막걸리', '$9.21', 'Lightly sparkling alcoholic wine that tastes slightly sweet and tangy', _food_images_makgeolli_jpg__WEBPACK_IMPORTED_MODULE_8__))
  menuBeverageSectionItems.appendChild(createMenuItem('Hite | 하이트', '$1.29', 'Pale lager brewed with rice', _food_images_hite_png__WEBPACK_IMPORTED_MODULE_9__))

  mainContainer.appendChild(menuContent)


}

/***/ }),

/***/ "./src/food-images/bungeoppang.png":
/*!*****************************************!*\
  !*** ./src/food-images/bungeoppang.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ea9a84493e55bb259d56.png";

/***/ }),

/***/ "./src/food-images/corndog.png":
/*!*************************************!*\
  !*** ./src/food-images/corndog.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "565a774bdeff7760557d.png";

/***/ }),

/***/ "./src/food-images/eomuk.jpeg":
/*!************************************!*\
  !*** ./src/food-images/eomuk.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fb9c87861b97e7343cf7.jpeg";

/***/ }),

/***/ "./src/food-images/hite.png":
/*!**********************************!*\
  !*** ./src/food-images/hite.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f402cdb19b47f6147d84.png";

/***/ }),

/***/ "./src/food-images/hotteok.jpeg":
/*!**************************************!*\
  !*** ./src/food-images/hotteok.jpeg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb08b1b1bb6c16ed0c1e.jpeg";

/***/ }),

/***/ "./src/food-images/kimbap.jpg":
/*!************************************!*\
  !*** ./src/food-images/kimbap.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "464e5ca9d0942dd70aa0.jpg";

/***/ }),

/***/ "./src/food-images/makgeolli.jpg":
/*!***************************************!*\
  !*** ./src/food-images/makgeolli.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b63f7681951dedc6747f.jpg";

/***/ }),

/***/ "./src/food-images/mandu.jpeg":
/*!************************************!*\
  !*** ./src/food-images/mandu.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dc51e0ed882806b7c525.jpeg";

/***/ }),

/***/ "./src/food-images/soju.png":
/*!**********************************!*\
  !*** ./src/food-images/soju.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "53f448c2367fa4cd05dc.png";

/***/ }),

/***/ "./src/food-images/tteokbokki.jpg":
/*!****************************************!*\
  !*** ./src/food-images/tteokbokki.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9723885253301b24bc8d.jpg";

/***/ }),

/***/ "./src/seoul-street.jpg":
/*!******************************!*\
  !*** ./src/seoul-street.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "db617fe4c1564a31524e.jpg";

/***/ }),

/***/ "./src/soju.png":
/*!**********************!*\
  !*** ./src/soju.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5a6997db4244ae18ce34.png";

/***/ }),

/***/ "./src/street-food.jpg":
/*!*****************************!*\
  !*** ./src/street-food.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "34ea0345ec4cb06e79a7.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _soju_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./soju.png */ "./src/soju.png");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./location */ "./src/location.js");





/* SKELETON */

// LOGO/HEADING

const mainContainer = document.querySelector('.content');

// Tabs section
const tabsContainer = document.createElement('div');
tabsContainer.classList.add('tab-container')

function createTabElement(name) {
  let element = document.createElement('div');
  element.textContent = name;
  element.setAttribute('id', name.toLowerCase())
  element.classList.add("tab")
  return element
}

// Header 
const header = document.createElement('div')
header.classList.add('header-content')
const headerText = document.createElement('header')
headerText.textContent =  '포장마차'
header.appendChild(headerText)
const logo = document.createElement('img')
logo.setAttribute('src', _soju_png__WEBPACK_IMPORTED_MODULE_1__)
logo.classList.add('logo')
header.appendChild(logo)

// Footer 
const footer = document.createElement('footer')
footer.textContent = 'by '

const gitLink = document.createElement('a')
gitLink.setAttribute('href', 'https://github.com/bilguun-ocean')
gitLink.textContent = 'bilguun-ocean'

footer.appendChild(gitLink)



// Adding tab section

const tabHome = createTabElement("Home")
const tabMenu = createTabElement("Menu")
const tabLoc = createTabElement("Location")

tabsContainer.appendChild(tabHome)
tabsContainer.appendChild(tabMenu)
tabsContainer.appendChild(tabLoc)

mainContainer.prepend(tabsContainer)
mainContainer.prepend(header)


function deletePage() {
  const displayedTab =  document.querySelector('#current-tab')
  if (displayedTab != null)
    displayedTab.parentNode.removeChild(displayedTab)

}

function addFooter() {
  mainContainer.appendChild(footer)
}

let current_tab = ''

function selectTab(tabName) {
  console.log(`Selected Tab: ${tabName.id}`)
  if (current_tab == tabName.id)
    return
  current_tab = tabName.id
  deletePage()
  // deletePage()
  if (tabName.id == 'home'){
    (0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])()
    addFooter()
  }

  else if (tabName.id == 'menu'){
    (0,_menu__WEBPACK_IMPORTED_MODULE_3__["default"])()
    addFooter()
  }
  else {
    (0,_location__WEBPACK_IMPORTED_MODULE_4__["default"])()
    addFooter()
  }
}


tabHome.addEventListener('click', ()=> {
  selectTab(tabHome)
})
tabMenu.addEventListener('click', ()=> {
  selectTab(tabMenu)
})
tabLoc.addEventListener('click', ()=> {
  selectTab(tabLoc)
})

// Starting on Home Page

selectTab(tabHome)


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpREFBWTtBQUNoQjtBQUNBOztBQUVBO0FBQ0EsSUFBSSxpREFBWTtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFnQjtBQUNwQjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9zZW91bC1zdHJlZXQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1KZXRCcmFpbnMrTW9ubzp3Z2h0QDIwMDs0MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIC0taGVhZGVyICovXFxuXFxuOnJvb3Qge1xcbiAgLS1oZWFkZXI6IDJlbTtcXG59XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW46IDBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ0pldEJyYWlucyBNb25vJywnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTMsIDI1MywgMC45KTtcXG59XFxuXFxuXFxuLyogVEFCUyAqL1xcbi50YWItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi50YWI6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGdyZWVuO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLnRhYiB7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5jdXJyZW50LXRhYiB7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgZ3JlZW47XFxufVxcblxcbi5oZWFkZXItY29udGVudCB7XFxuICBjb2xvcjogcmViZWNjYXB1cnBsZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IDIuNWVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubG9nbyB7XFxuICB3aWR0aDogNjBweDtcXG4gIC8qIGJvcmRlcjogM3B4IHNvbGlkIGdyZWVueWVsbG93OyAqL1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDI1ZGVnKTtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG4gLyogSE9NRSBQQUdFICovXFxuXFxuLmludHJvZHVjdGlvbiB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiByZWJlY2NhcHVycGxlO1xcbiAgZm9udC1zaXplOiB2YXIoLS1oZWFkZXIpO1xcbn1cXG5cXG4vKiAuZm9vZC1pbWFnZSB7XFxuICB3aWR0aDogODAlXFxufSAqL1xcblxcbi5pbnRyb2R1Y3Rpb24tdGV4dCB7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG5cXG5cXG4vKiBNRU5VIFBBR0UgKi9cXG4ubWVudS1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG4ubWVudS1oZWFkZXIge1xcbiAgY29sb3I6IHJlYmVjY2FwdXJwbGU7XFxuICBmb250LXNpemU6IDNlbTtcXG59XFxuXFxuLm1lbnUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM5LCAzOCwgMzgpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBtYXJnaW46IDFlbSAwO1xcbn1cXG5cXG4ubWVudSAubWVudS1pdGVtcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxuICBnYXA6IDMwcHg7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLm1lbnUtaXRlbS1pbWFnZSB7XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnNlY3Rpb24taGVhZGVyIHtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIG1hcmdpbjogMjBweCAwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IHgtbGFyZ2U7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrb3JhbmdlO1xcbn1cXG5cXG4uaXRlbS1uYW1lIHtcXG4gIGNvbG9yOiByZ2IoMjQ1LCAyMTUsIDE3MSk7XFxufVxcblxcbi5wcmljZSB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBjb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4uaXRlbS1kZXNjcmlwdGlvbiB7XFxuICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uZ29vZ2xlLW1hcCB7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXgtd2lkdGg6IDgwJTtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNTB2aDtcXG59XFxuXFxuLmxvY2F0aW9uLXRleHQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG5cXG4ubWVudS1jb250ZW50LmxvY2F0aW9uLWNvbnRhaW5lciB7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGdyZWVuO1xcblxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGFBQWE7O0FBR2I7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFzQjtFQUN0QiwrREFBK0Q7QUFDakU7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtREFBcUM7RUFDckMsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIseUNBQXlDO0FBQzNDOzs7QUFHQSxTQUFTO0FBQ1Q7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1DQUFtQztFQUNuQyxtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0NBQ0MsY0FBYzs7QUFFZjtFQUNFLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsU0FBUztFQUNULHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQix3QkFBd0I7QUFDMUI7O0FBRUE7O0dBRUc7O0FBRUg7RUFDRSxnQkFBZ0I7QUFDbEI7OztBQUdBLGNBQWM7QUFDZDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyREFBMkQ7RUFDM0QsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0FBQ0E7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTs7QUFFZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiAtLWhlYWRlciAqL1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpldEJyYWlucytNb25vOndnaHRAMjAwOzQwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAtLWhlYWRlcjogMmVtO1xcbn1cXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIG1hcmdpbjogMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnSmV0QnJhaW5zIE1vbm8nLCdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogdXJsKCcuL3Nlb3VsLXN0cmVldC5qcGcnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IGF1dG87XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXgtd2lkdGg6IDEwMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1MywgMjUzLCAwLjkpO1xcbn1cXG5cXG5cXG4vKiBUQUJTICovXFxuLnRhYi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLnRhYjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgZ3JlZW47XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4udGFiIHtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLmN1cnJlbnQtdGFiIHtcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBncmVlbjtcXG59XFxuXFxuLmhlYWRlci1jb250ZW50IHtcXG4gIGNvbG9yOiByZWJlY2NhcHVycGxlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtc2l6ZTogMi41ZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5sb2dvIHtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgLyogYm9yZGVyOiAzcHggc29saWQgZ3JlZW55ZWxsb3c7ICovXFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjVkZWcpO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcbiAvKiBIT01FIFBBR0UgKi9cXG5cXG4uaW50cm9kdWN0aW9uIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHJlYmVjY2FwdXJwbGU7XFxuICBmb250LXNpemU6IHZhcigtLWhlYWRlcik7XFxufVxcblxcbi8qIC5mb29kLWltYWdlIHtcXG4gIHdpZHRoOiA4MCVcXG59ICovXFxuXFxuLmludHJvZHVjdGlvbi10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcblxcbi8qIE1FTlUgUEFHRSAqL1xcbi5tZW51LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbi5tZW51LWhlYWRlciB7XFxuICBjb2xvcjogcmViZWNjYXB1cnBsZTtcXG4gIGZvbnQtc2l6ZTogM2VtO1xcbn1cXG5cXG4ubWVudSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzksIDM4LCAzOCk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG1hcmdpbjogMWVtIDA7XFxufVxcblxcbi5tZW51IC5tZW51LWl0ZW1zIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gIGdhcDogMzBweDtcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubWVudS1pdGVtLWltYWdlIHtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uc2VjdGlvbi1oZWFkZXIge1xcbiAgcGFkZGluZzogM3B4O1xcbiAgbWFyZ2luOiAyMHB4IDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtvcmFuZ2U7XFxufVxcblxcbi5pdGVtLW5hbWUge1xcbiAgY29sb3I6IHJnYigyNDUsIDIxNSwgMTcxKTtcXG59XFxuXFxuLnByaWNlIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbi5pdGVtLWRlc2NyaXB0aW9uIHtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbi5nb29nbGUtbWFwIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1heC13aWR0aDogODAlO1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MHZoO1xcbn1cXG5cXG4ubG9jYXRpb24tdGV4dCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxZW07XFxufVxcblxcbi5tZW51LWNvbnRlbnQubG9jYXRpb24tY29udGFpbmVyIHtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogZ3JlZW47XFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcbmltcG9ydCBJbWFnZSBmcm9tICcuL3N0cmVldC1mb29kLmpwZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlSG9tZSgpIHtcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ludHJvZHVjdGlvbicpXG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2N1cnJlbnQtdGFiJylcbiAgLy8gSGVhZGVyIFNlY3Rpb25cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJylcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gJ1doeSBLb3JlYW4gU3RyZWV0IEZvb2QgPydcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpXG5cbiAgLy8gSW50cm8tdGV4dCBTZWN0aW9uXG4gIGNvbnN0IGludHJvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGludHJvVGV4dC50ZXh0Q29udGVudCA9IFwiRXhwZXJpZW5jZSByZWFsIGF1dGhlbnRpYyBrb3JlYW4gc3RyZWV0IGZvb2RzXCIgKyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgYXQgdGhlc2Ugc3RhbGxzISBRdWljayBhbmQgYWZmb3JkYWJsZSwgc3dlZXQgYW5kIHNhdm9yeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIFwiLCBmaWxsaW5nIGFuZCB3YXJtaW5nIG9uIGNvbGQgZGF5cywgdGhlc2Ugc3RyZWV0IGZvb2RzIGFyZSB0aGUgcmVhbCBjb21mb3J0LWZvb2QhXCJcbiAgaW50cm9UZXh0LmNsYXNzTGlzdC5hZGQoJ2ludHJvZHVjdGlvbi10ZXh0JylcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGludHJvVGV4dClcbiAgXG4gIC8vIEltYWdlIFNlY3Rpb24gZ290dGEgdHdlYWsgdGhlIGNzcyBiaXRcbiAgXG4gIC8vIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgLy8gaW1hZ2UuY2xhc3NMaXN0LmFkZCgnZm9vZC1pbWFnZScpXG4gIC8vIGltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgSW1hZ2UpXG5cbiAgLy8gY29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKVxuICBcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXIpXG5cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZUxvY2F0aW9uKCkge1xuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1jb250ZW50JylcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xvY2F0aW9uLWNvbnRhaW5lcicpXG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2N1cnJlbnQtdGFiJylcblxuICAvL2hlYWRlciBcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJylcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1jb250ZW50JylcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gJ1doZXJlIHRvIGZpbmQgdGhlc2Ugc3RhbGxzPydcblxuICAvL3RleHRcblxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgdGV4dC5jbGFzc0xpc3QuYWRkKFwibG9jYXRpb24tdGV4dFwiKVxuICB0ZXh0LnRleHRDb250ZW50ID0gXCJPbmUgb2YgdGhlIG1vc3QgcG9wdWxhciBwbGFjZXMgdG8gZ28gaXMgR3dhbmdqYW5nIE1hcmtldC5cIlxuXG4gIC8vbWFwXG5cbiAgY29uc3QgbWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJylcbiAgbWFwLmNsYXNzTGlzdC5hZGQoJ2dvb2dsZS1tYXAnKVxuICBtYXAuc2V0QXR0cmlidXRlKCdzcmMnLCBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xNCExbTghMW0zITFkMTI2NDkuNDU2OTcyNTE1MzY1ITJkMTI2Ljk5OTYwMzYhM2QzNy41NzAwMzk4ITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDAlM0EweGQ2NTZhMzQ4MzEwODlmNDQhMnNHd2FuZ2phbmclMjBNYXJrZXQhNWUwITNtMiExc2VuITJzbW4hNHYxNjYwNDY1NTc3ODUzITVtMiExc2VuITJzbW5cIilcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dClcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1hcClcblxuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcilcblxufSIsImltcG9ydCBtYW5kdSBmcm9tICcuL2Zvb2QtaW1hZ2VzL21hbmR1LmpwZWcnXG5pbXBvcnQga2ltYmFwIGZyb20gJy4vZm9vZC1pbWFnZXMva2ltYmFwLmpwZydcbmltcG9ydCBjb3JuZG9nIGZyb20gJy4vZm9vZC1pbWFnZXMvY29ybmRvZy5wbmcnXG5pbXBvcnQgZW9tdWsgZnJvbSAnLi9mb29kLWltYWdlcy9lb211ay5qcGVnJ1xuaW1wb3J0IGhvdHRlb2sgZnJvbSAnLi9mb29kLWltYWdlcy9ob3R0ZW9rLmpwZWcnXG5pbXBvcnQgYnVuZ2VvcHBhbmcgZnJvbSAnLi9mb29kLWltYWdlcy9idW5nZW9wcGFuZy5wbmcnXG5pbXBvcnQgdHRlb2tib2traSBmcm9tICcuL2Zvb2QtaW1hZ2VzL3R0ZW9rYm9ra2kuanBnJ1xuaW1wb3J0IHNvanUgZnJvbSAnLi9mb29kLWltYWdlcy9zb2p1LnBuZydcbmltcG9ydCBtYWtnZW9sbGkgZnJvbSAnLi9mb29kLWltYWdlcy9tYWtnZW9sbGkuanBnJ1xuaW1wb3J0IGhpdGUgZnJvbSAnLi9mb29kLWltYWdlcy9oaXRlLnBuZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVNZW51KCkge1xuXG4gIC8vZnVuY3Rpb24gZm9yIGNyZWF0aW5nIG1lbnUtaXRlbSBcbiAgZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0obmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBpbWFnZVNyYykge1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJylcblxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGltYWdlU3JjKVxuICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1pbWFnZScpXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnaXRlbS1kZXNjcmlwdGlvbicpXG5cbiAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaXRlbU5hbWUuY2xhc3NMaXN0LmFkZCgnaXRlbS1uYW1lJylcbiAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IG5hbWVcblxuICAgIGNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGl0ZW1QcmljZS50ZXh0Q29udGVudCA9IHByaWNlXG4gICAgaXRlbVByaWNlLmNsYXNzTGlzdC5hZGQoJ3ByaWNlJylcbiAgICBpdGVtTmFtZS5hcHBlbmRDaGlsZChpdGVtUHJpY2UpXG4gICAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpXG5cbiAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGl0ZW1EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uXG4gICAgaXRlbURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tZGVzY3JpcHRpb24tdGV4dCcpXG4gICAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbURlc2NyaXB0aW9uKVxuXG4gICAgaXRlbS5hcHBlbmRDaGlsZChpbWFnZSlcbiAgICBpdGVtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uQ29udGFpbmVyKVxuICAgIFxuICAgIHJldHVybiBpdGVtXG5cbiAgfVxuXG4gIC8vIEZ1bmN0aW9uIGZvciBjcmVhdGluZyBzZWN0aW9uIGhlYWRlclxuICBmdW5jdGlvbiBjcmVhdGVTZWN0aW9uSGVhZGVyKHNlY3Rpb25OYW1lKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi1oZWFkZXInKVxuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHNlY3Rpb25OYW1lXG5cbiAgICByZXR1cm4gaGVhZGVyXG5cbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNlY3Rpb25Db250YWluZXIoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtcycpXG5cbiAgICByZXR1cm4gY29udGFpbmVyXG4gIH1cblxuICAvLyBIZWFkZXIgYW5kIGNvbnRhaW5lciBmb3IgbWVudVxuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuICBjb25zdCBtZW51SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29uc3QgbWVudUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBtZW51Q29udGVudC5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRlbnQnKVxuICBtZW51Q29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2N1cnJlbnQtdGFiJylcbiAgbWVudUhlYWRlci5jbGFzc0xpc3QuYWRkKCdtZW51LWhlYWRlcicpXG4gIG1lbnVIZWFkZXIudGV4dENvbnRlbnQgPSAnTWVudSdcbiAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUhlYWRlcilcbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudScpXG4gIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpXG5cblxuICAvLyBDcmVhdGluZyBtYWluIGZvb2Qgc2VjdGlvbiBcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVTZWN0aW9uSGVhZGVyKCdNYWluJykpXG4gIGNvbnN0IG1lbnVNYWluU2VjdGlvbkl0ZW1zID0gY3JlYXRlU2VjdGlvbkNvbnRhaW5lcigpXG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudU1haW5TZWN0aW9uSXRlbXMpXG4gIFxuICBtZW51TWFpblNlY3Rpb25JdGVtcy5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnTWFuZHUgfCDrp4zrkZAnLCAnJDMuMTEnLCAnS29yZWFuIGR1bXBsaW5ncyB0aGF0IGlzIGVpdGhlciBmcmllZCwgYm9pbGVkLCBvciBkZWVwLWZyaWVkJywgbWFuZHUpKVxuICBtZW51TWFpblNlY3Rpb25JdGVtcy5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnR2ltYmFwIHwg6rmA67ClJywgJyQyLjc1JywgJ1NlYXdlZWQgd3JhcCBvZiByb2xsZWQgcmljZSB3aXRoIHZhcmlhdGlvbnMgb2YgaW5ncmVkaWVudHMnLCBraW1iYXApKVxuICBtZW51TWFpblNlY3Rpb25JdGVtcy5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnQ29ybmRvZyB8IO2Vq+uPhOq3uCcsICckMi41MCcsICdDcmlzcHksIHN3ZWV0IGFuZCBzYXZvcnknLCBjb3JuZG9nKSlcbiAgbWVudU1haW5TZWN0aW9uSXRlbXMuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ0VvbXVrIHwg7Ja066y1JywgJyQwLjU4JywgJ1NvZnQgYW5kIHNhdm9yeSBmaXNoIGNha2VzJywgZW9tdWspKVxuXG4gIC8vIENyZWF0aW5nIHNuYWNrIHNlY3Rpb25cbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVTZWN0aW9uSGVhZGVyKCdTbmFjaycpKVxuICBjb25zdCBtZW51U25hY2tTZWN0aW9uSXRlbXMgPSBjcmVhdGVTZWN0aW9uQ29udGFpbmVyKClcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51U25hY2tTZWN0aW9uSXRlbXMpXG5cbiAgbWVudVNuYWNrU2VjdGlvbkl0ZW1zLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdIb3R0ZW9rIHwg7Zi465ahJywgJyQzLjUxJywgJ0tvcmVhbiBzdHlsZSBwYW5jYWtlIHdpdGggYnJvd24gc3VnYXIgc3lydXAsIHRvcHBlZCB3aXRoIG51dHMgYW5kIHNlZWRzJywgaG90dGVvaykpXG4gIG1lbnVTbmFja1NlY3Rpb25JdGVtcy5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnQnVuZ2VvcHBhbmcgfCDrtpXslrTrubUnLCAnJDMuNTEnLCAnRmlzaCBzaGFwZWQgcGFzdHJ5IHN0dWZmZWQgd2l0aCBzd2VldCByZWQgYmVhbiBwYXN0ZScsIGJ1bmdlb3BwYW5nKSlcbiAgbWVudVNuYWNrU2VjdGlvbkl0ZW1zLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdUdGVva2Jva2tpIHwg65ah67O27J20JywgJyQzLjUxJywgJ1NwaWN5IHlldCBzd2VldCBhbmQgc2F2b3J5IGZpc2ggY2FrZXMnLCB0dGVva2Jva2tpKSlcblxuICAvLyBDcmVhdGluZyBiZXZlcmFnZXMgc2VjdGlvblxuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVNlY3Rpb25IZWFkZXIoJ0JldmVyYWdlcycpKVxuICBjb25zdCBtZW51QmV2ZXJhZ2VTZWN0aW9uSXRlbXMgPSBjcmVhdGVTZWN0aW9uQ29udGFpbmVyKClcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51QmV2ZXJhZ2VTZWN0aW9uSXRlbXMpXG5cbiAgbWVudUJldmVyYWdlU2VjdGlvbkl0ZW1zLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdTb2p1IHwg7IaM7KO8JywgJyQzLjk4JywgJ0tvcmVhbiB0cmFkaXRpb25hbCBhbGNvaG9saWMgZHJpbmsgbWFkZSBmcm9tIHJpY2UnLCBzb2p1KSlcbiAgbWVudUJldmVyYWdlU2VjdGlvbkl0ZW1zLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdNYWtnZW9sbGkgfCDrp4nqsbjrpqwnLCAnJDkuMjEnLCAnTGlnaHRseSBzcGFya2xpbmcgYWxjb2hvbGljIHdpbmUgdGhhdCB0YXN0ZXMgc2xpZ2h0bHkgc3dlZXQgYW5kIHRhbmd5JywgbWFrZ2VvbGxpKSlcbiAgbWVudUJldmVyYWdlU2VjdGlvbkl0ZW1zLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdIaXRlIHwg7ZWY7J207Yq4JywgJyQxLjI5JywgJ1BhbGUgbGFnZXIgYnJld2VkIHdpdGggcmljZScsIGhpdGUpKVxuXG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQobWVudUNvbnRlbnQpXG5cblxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBMb2dvIGZyb20gJy4vc29qdS5wbmcnXG5pbXBvcnQgZ2VuZXJhdGVIb21lIGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgZ2VuZXJhdGVNZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgZ2VuZXJhdGVMb2NhdGlvbiBmcm9tICcuL2xvY2F0aW9uJztcbi8qIFNLRUxFVE9OICovXG5cbi8vIExPR08vSEVBRElOR1xuXG5jb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcblxuLy8gVGFicyBzZWN0aW9uXG5jb25zdCB0YWJzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG50YWJzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RhYi1jb250YWluZXInKVxuXG5mdW5jdGlvbiBjcmVhdGVUYWJFbGVtZW50KG5hbWUpIHtcbiAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZWxlbWVudC50ZXh0Q29udGVudCA9IG5hbWU7XG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIG5hbWUudG9Mb3dlckNhc2UoKSlcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGFiXCIpXG4gIHJldHVybiBlbGVtZW50XG59XG5cbi8vIEhlYWRlciBcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5oZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWNvbnRlbnQnKVxuY29uc3QgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXG5oZWFkZXJUZXh0LnRleHRDb250ZW50ID0gICftj6zsnqXrp4jssKgnXG5oZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGV4dClcbmNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxubG9nby5zZXRBdHRyaWJ1dGUoJ3NyYycsIExvZ28pXG5sb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKVxuaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pXG5cbi8vIEZvb3RlciBcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpXG5mb290ZXIudGV4dENvbnRlbnQgPSAnYnkgJ1xuXG5jb25zdCBnaXRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG5naXRMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL2dpdGh1Yi5jb20vYmlsZ3V1bi1vY2VhbicpXG5naXRMaW5rLnRleHRDb250ZW50ID0gJ2JpbGd1dW4tb2NlYW4nXG5cbmZvb3Rlci5hcHBlbmRDaGlsZChnaXRMaW5rKVxuXG5cblxuLy8gQWRkaW5nIHRhYiBzZWN0aW9uXG5cbmNvbnN0IHRhYkhvbWUgPSBjcmVhdGVUYWJFbGVtZW50KFwiSG9tZVwiKVxuY29uc3QgdGFiTWVudSA9IGNyZWF0ZVRhYkVsZW1lbnQoXCJNZW51XCIpXG5jb25zdCB0YWJMb2MgPSBjcmVhdGVUYWJFbGVtZW50KFwiTG9jYXRpb25cIilcblxudGFic0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWJIb21lKVxudGFic0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWJNZW51KVxudGFic0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWJMb2MpXG5cbm1haW5Db250YWluZXIucHJlcGVuZCh0YWJzQ29udGFpbmVyKVxubWFpbkNvbnRhaW5lci5wcmVwZW5kKGhlYWRlcilcblxuXG5mdW5jdGlvbiBkZWxldGVQYWdlKCkge1xuICBjb25zdCBkaXNwbGF5ZWRUYWIgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtdGFiJylcbiAgaWYgKGRpc3BsYXllZFRhYiAhPSBudWxsKVxuICAgIGRpc3BsYXllZFRhYi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRpc3BsYXllZFRhYilcblxufVxuXG5mdW5jdGlvbiBhZGRGb290ZXIoKSB7XG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyKVxufVxuXG5sZXQgY3VycmVudF90YWIgPSAnJ1xuXG5mdW5jdGlvbiBzZWxlY3RUYWIodGFiTmFtZSkge1xuICBjb25zb2xlLmxvZyhgU2VsZWN0ZWQgVGFiOiAke3RhYk5hbWUuaWR9YClcbiAgaWYgKGN1cnJlbnRfdGFiID09IHRhYk5hbWUuaWQpXG4gICAgcmV0dXJuXG4gIGN1cnJlbnRfdGFiID0gdGFiTmFtZS5pZFxuICBkZWxldGVQYWdlKClcbiAgLy8gZGVsZXRlUGFnZSgpXG4gIGlmICh0YWJOYW1lLmlkID09ICdob21lJyl7XG4gICAgZ2VuZXJhdGVIb21lKClcbiAgICBhZGRGb290ZXIoKVxuICB9XG5cbiAgZWxzZSBpZiAodGFiTmFtZS5pZCA9PSAnbWVudScpe1xuICAgIGdlbmVyYXRlTWVudSgpXG4gICAgYWRkRm9vdGVyKClcbiAgfVxuICBlbHNlIHtcbiAgICBnZW5lcmF0ZUxvY2F0aW9uKClcbiAgICBhZGRGb290ZXIoKVxuICB9XG59XG5cblxudGFiSG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuICBzZWxlY3RUYWIodGFiSG9tZSlcbn0pXG50YWJNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XG4gIHNlbGVjdFRhYih0YWJNZW51KVxufSlcbnRhYkxvYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuICBzZWxlY3RUYWIodGFiTG9jKVxufSlcblxuLy8gU3RhcnRpbmcgb24gSG9tZSBQYWdlXG5cbnNlbGVjdFRhYih0YWJIb21lKVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=