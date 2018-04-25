"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
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
