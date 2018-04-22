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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/PenguinController.js":
/*!**********************************!*\
  !*** ./src/PenguinController.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PenguinController; });\nclass PenguinController {\n\n  constructor(penguinView, penguinModel) {\n    this.penguinView = penguinView;\n    this.penguinModel = penguinModel;\n\n    this.penguinView.onClickGetPenguin = this.onClickGetPenguin.bind(this);\n  }\n\n  onClickGetPenguin(event) {\n    let target = event.currentTarget;\n    let index = parseInt(target.dataset.penguinIndex, 10);\n\n    this.penguinModel.getPenguin(index, this.showPenguin.bind(this));\n  }\n\n  showPenguin(penguinModelData) {\n    let penguinViewModel = {\n      name: penguinModelData.name,\n      imageUrl: penguinModelData.imageUrl,\n      size: penguinModelData.size,\n      favoriteFood: penguinModelData.favoriteFood\n    };\n\n    penguinViewModel.previousIndex = penguinModelData.index - 1;\n    penguinViewModel.nextIndex = penguinModelData.index + 1;\n\n    if (penguinModelData.index === 0) {\n      penguinViewModel.previousIndex = penguinModelData.count - 1;\n    }\n\n    if (penguinModelData.index === penguinModelData.count - 1) {\n      penguinViewModel.nextIndex = 0;\n    }\n\n    this.penguinView.render(penguinViewModel);\n  }\n};\n\n//# sourceURL=webpack:///./src/PenguinController.js?");

/***/ }),

/***/ "./src/PenguinModel.js":
/*!*****************************!*\
  !*** ./src/PenguinModel.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PenguinModel; });\nclass PenguinModel {\n\n  constructor() {\n    this.XMLHttpRequest = XMLHttpRequest;\n  }\n\n  getPenguin(index, fn) {\n    let oReq = new this.XMLHttpRequest();\n\n    oReq.onload = function onLoad(e) {\n      let ajaxResponse = JSON.parse(e.currentTarget.responseText);\n      let penguin = ajaxResponse[index];\n\n      penguin.index = index;\n      penguin.count = ajaxResponse.length;\n\n      fn(penguin);\n    };\n\n    oReq.open('GET', 'https://codepen.io/beautifulcoder/pen/vmOOLr.js', true);\n    oReq.send();\n  }\n};\n\n//# sourceURL=webpack:///./src/PenguinModel.js?");

/***/ }),

/***/ "./src/PenguinView.js":
/*!****************************!*\
  !*** ./src/PenguinView.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PenguinView; });\nclass PenguinView {\n\n  constructor(element) {\n    this.element = element;\n    this.onClickGetPenguin = null;\n  }\n\n  render(viewModel) {\n    this.element.innerHTML = '<h3>' + viewModel.name + '</h3>' + '<img class=\"penguin-image\" src=\"' + viewModel.imageUrl + '\" alt=\"' + viewModel.name + '\" />' + '<p><b>Size:</b> ' + viewModel.size + '</p>' + '<p><b>Favorite food:</b> ' + viewModel.favoriteFood + '</p>' + '<a id=\"previousPenguin\" class=\"previous button\" href=\"javascript:void(0);\"' + ' data-penguin-index=\"' + viewModel.previousIndex + '\">Previous</a> ' + '<a id=\"nextPenguin\" class=\"next button\" href=\"javascript:void(0);\"' + ' data-penguin-index=\"' + viewModel.nextIndex + '\">Next</a>';\n\n    this.previousIndex = viewModel.previousIndex;\n    this.nextIndex = viewModel.nextIndex;\n\n    let previousPenguin = this.element.querySelector('#previousPenguin');\n    previousPenguin.addEventListener('click', this.onClickGetPenguin);\n\n    let nextPenguin = this.element.querySelector('#nextPenguin');\n    nextPenguin.addEventListener('click', this.onClickGetPenguin);\n    nextPenguin.focus();\n  }\n};\n\n//# sourceURL=webpack:///./src/PenguinView.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _PenguinController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PenguinController */ \"./src/PenguinController.js\");\n/* harmony import */ var _PenguinModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PenguinModel */ \"./src/PenguinModel.js\");\n/* harmony import */ var _PenguinView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PenguinView */ \"./src/PenguinView.js\");\n\n\n\n\nlet penguinModel = new _PenguinModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\nlet targetElement = document.getElementById('listOfPenguins');\nlet penguinView = new _PenguinView__WEBPACK_IMPORTED_MODULE_2__[\"default\"](targetElement);\n\nlet controller = new _PenguinController__WEBPACK_IMPORTED_MODULE_0__[\"default\"](penguinView, penguinModel);\ncontroller.onClickGetPenguin({ currentTarget: { dataset: { penguinIndex: 0 } } });\n\nconsole.log('App Started!');\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });