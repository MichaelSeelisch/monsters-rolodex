import React, { Component } from 'react';

export class LoginComponent extends Component {
    login = (event) => {
        localStorage.setItem('isUserLoggedIn', true);
    }

    render() {
        return (
            <div>
                In LoginComponent<br />
                <button
                    onClick={ this.login }>
                    LOGIN
                </button>
            </div>
        )
    }
}

export default LoginComponent;
