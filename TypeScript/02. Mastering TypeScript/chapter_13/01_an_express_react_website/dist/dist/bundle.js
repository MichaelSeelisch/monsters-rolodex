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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/LoginPanel.tsx":
/*!****************************!*\
  !*** ./app/LoginPanel.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
// Must export a props class 
class LoginPanelProps {
}
exports.LoginPanelProps = LoginPanelProps;
class LoginPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        };
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        return React.createElement("div", { id: "sideNav", className: "login_sidenav" },
            React.createElement("form", { onSubmit: this.handleSubmit },
                React.createElement("div", { className: "container" },
                    React.createElement("a", { href: "#", className: "closebtn" }, "\u00D7"),
                    React.createElement("div", { className: "row" }, "Please Login :"),
                    React.createElement("div", { className: "row" },
                        React.createElement("input", { className: "sidenav-input", type: "text", placeholder: "Username", value: this.props.userName, onChange: this.handleUserNameChange })),
                    React.createElement("div", { className: "row" },
                        React.createElement("input", { className: "sidenav-input", type: "password", placeholder: "Password", value: this.props.password, onChange: this.handlePasswordChange })),
                    React.createElement("div", { className: "row" },
                        React.createElement("input", { type: "submit", value: "Login", className: "btn btn-primary btn-lg" })))));
    }
    handleUserNameChange(event) {
        this.setState({
            userName: event.target.value
        });
        console.log(`username change: ${event.target.value}`);
    }
    handlePasswordChange(event) {
        this.setState({
            password: event.target.value
        });
        console.log(`password change: ${event.target.value}`);
    }
    handleSubmit(event) {
        event.preventDefault();
        fetch('/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                userName: this.state.userName,
                password: this.state.password
            })
        }).
            then((response) => {
            console.log(`response : ${response.status}`);
        })
            .catch((err) => {
            console.log(`err: ${err}`);
        });
    }
}
exports.default = LoginPanel;


/***/ }),

/***/ "./app/NavBar.tsx":
/*!************************!*\
  !*** ./app/NavBar.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
class MenuItem {
}
exports.MenuItem = MenuItem;
class NavBarProps {
}
exports.NavBarProps = NavBarProps;
class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: []
        };
        fetch('/menuitems')
            .then((response) => {
            return response.json();
        })
            .then((json) => {
            this.setState({ menuItems: json.menuItems });
        })
            .catch((err) => {
            console.log(`err : ${err}`);
        });
    }
    render() {
        return React.createElement("div", null,
            React.createElement("nav", { className: "navbar navbar-default navbar-fixed-top navbar-inverse" },
                React.createElement("div", { className: "container-fluid" },
                    React.createElement("a", { className: "navbar-brand" }, "Home"),
                    React.createElement("ul", { className: "nav navbar-nav" }, this.state.menuItems.map((item, i) => {
                        return (React.createElement("li", { key: i, className: "nav-item nav-link active" },
                            React.createElement("a", { href: "#" }, item.ButtonName)));
                    }, this)))));
    }
}
exports.default = NavBar;
;


/***/ }),

/***/ "./app/index.tsx":
/*!***********************!*\
  !*** ./app/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
const NavBar_1 = __webpack_require__(/*! ./NavBar */ "./app/NavBar.tsx");
const LoginPanel_1 = __webpack_require__(/*! ./LoginPanel */ "./app/LoginPanel.tsx");
class App extends React.Component {
    render() {
        return React.createElement("div", null,
            React.createElement(LoginPanel_1.default, null),
            React.createElement(NavBar_1.default, null));
    }
}
exports.App = App;
ReactDOM.render(React.createElement(App, null), document.getElementById('app_anchor'));


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map