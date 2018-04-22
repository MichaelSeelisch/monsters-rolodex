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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var CREATE_POST = exports.CREATE_POST = 'CREATE_POST';
var EDIT_POST = exports.EDIT_POST = 'EDIT_POST';
var SET_FILTER = exports.SET_FILTER = 'SET_FILTER';

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _actions = __webpack_require__(2);

var _reducers = __webpack_require__(3);

var initialState = [];

var action = (0, _actions.createPost)('dan', 'New post');

var newState = (0, _reducers.postsReducer)(initialState, action);

console.log(newState);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setFilter = exports.editPost = exports.createPost = undefined;

var _actionTypes = __webpack_require__(0);

var createPost = exports.createPost = function createPost(user, text) {
    return {
        type: _actionTypes.CREATE_POST,
        user: user,
        text: text
    };
};

var editPost = exports.editPost = function editPost(id, text) {
    return {
        type: _actionTypes.EDIT_POST,
        id: id,
        text: text
    };
};

var setFilter = exports.setFilter = function setFilter(filter) {
    return {
        type: _actionTypes.SET_FILTER,
        filter: filter
    };
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.postsReducer = postsReducer;

var _actionTypes = __webpack_require__(0);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function postsReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case _actionTypes.CREATE_POST:
            {
                var type = action.type,
                    post = _objectWithoutProperties(action, ['type']);

                return [].concat(_toConsumableArray(state), [post]);
            }

        case _actionTypes.EDIT_POST:
            {
                var _type = action.type,
                    id = action.id,
                    newPost = _objectWithoutProperties(action, ['type', 'id']);

                /*  When the index value matches the id specified in the action, 
                 *  the post object will be overwritten with all other properties 
                 *  from the action. When the index value doesn't match, 
                 *  we simply return the oldPost.
                 */


                return state.map(function (oldPost, index) {
                    return (
                        // We use the spread operator to combine the objects
                        action.id === index ? _extends({}, oldPost, newPost) : oldPost
                    );
                });
            }

        default:
            return state;
    }
};

/***/ })
/******/ ]);