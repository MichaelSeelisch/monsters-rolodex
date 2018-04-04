"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
class App extends React.Component {
    render() {
        return React.createElement("div", null, "Hello");
    }
}
exports.App = App;
ReactDOM.render(React.createElement(App, null), document.getElementById('app_anchor'));
