"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const NavBar_1 = require("./NavBar");
const LoginPanel_1 = require("./LoginPanel");
class App extends React.Component {
    render() {
        return React.createElement("div", null,
            React.createElement(LoginPanel_1.default, null),
            React.createElement(NavBar_1.default, null));
    }
}
exports.App = App;
ReactDOM.render(React.createElement(App, null), document.getElementById('app_anchor'));
