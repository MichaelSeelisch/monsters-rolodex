"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
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
