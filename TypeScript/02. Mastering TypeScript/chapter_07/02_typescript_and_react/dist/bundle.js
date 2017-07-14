/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(2);
var ReactApp_1 = __webpack_require__(3);
var ClickableItemArray = [
    { id: 1, displayName: "firstItem" },
    { id: 2, displayName: "secondItem" },
    { id: 3, displayName: "thirdItem" },
];
ReactDOM.render(React.createElement(ReactApp_1.ArrayView, { items: ClickableItemArray, title: "Select an option:" }), document.getElementById("example"));


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ClickableItem = (function () {
    function ClickableItem() {
    }
    return ClickableItem;
}());
exports.ClickableItem = ClickableItem;
var ClickItemView = (function (_super) {
    __extends(ClickItemView, _super);
    function ClickItemView() {
        var _this = _super.call(this) || this;
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }
    ClickItemView.prototype.handleClick = function () {
        alert("handleClick() { id : " + this.props.id + " displayName : " + this.props.displayName + " }");
    };
    ClickItemView.prototype.render = function () {
        return (React.createElement("li", null,
            React.createElement("button", { onClick: this.handleClick }, this.props.displayName)));
    };
    return ClickItemView;
}(React.Component));
exports.ClickItemView = ClickItemView;
;
var ArrayView = (function (_super) {
    __extends(ArrayView, _super);
    function ArrayView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArrayView.prototype.render = function () {
        var buttonNodes = this.props.items.map(function (item) {
            return (React.createElement(ClickItemView, __assign({}, item, { key: item.id })));
        });
        return React.createElement("div", null,
            React.createElement("h1", null, this.props.title),
            React.createElement("ul", null, buttonNodes));
    };
    return ArrayView;
}(React.Component));
exports.ArrayView = ArrayView;
;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map