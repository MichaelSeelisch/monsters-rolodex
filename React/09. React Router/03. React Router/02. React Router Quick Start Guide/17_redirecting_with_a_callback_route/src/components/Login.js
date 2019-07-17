import React, { Component } from 'react';
import {
    Redirect
} from 'react-router-dom';

export class LoginComponent extends Component {
    state = {
        isUserLoggedIn: false
    }

    componentWillMount() {
        const isUserLoggedIn = localStorage.getItem('isUserLoggedIn');

        this.setState({
            isUserLoggedIn
        });
    }

    login = (event) => {
        localStorage.setItem('isUserLoggedIn', true);
    }

    render() {
        const { location: { state } } = this.props;

        if (this.state.isUserLoggedIn) {
            return (
                <Redirect
                    to={{
                        pathname: (state && state.callbackURL) || '/user',
                        state: {
                            from: this.props.match.url,
                            userName: this.state.userName
                        }
                    }}
                />
            )
        } else {
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
}

export default LoginComponent;
