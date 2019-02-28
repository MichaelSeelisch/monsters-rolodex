import React, { Component } from 'react';
import  { Redirect } from 'react-router-dom';

export class UserComponent extends Component {
    state = {
        isUserLoggedIn: false
    }

    componentWillMount() {
        const isUserLoggedIn = localStorage.getItem('isUserLoggedIn');

        this.setState({
            isUserLoggedIn
        });
    }

    logout = (event) => {
        localStorage.removeItem('isUserLoggedIn');
        this.setState({
            isUserLoggedIn: false
        });
    }

    render() {
        const { location } = this.props;

        if (!this.state.isUserLoggedIn) {
            return (
                <Redirect to="/login" />
            );
        }

        return (
            <div>
                Username: { location && location.state ? location.state.userName : ''} <br />
                From: {location && location.state ? location.state.from : ''}
                <br />
                <button
                    onClick={ this.logout }>
                    LOGOUT
                </button>
            </div>
        )
    }
}

export default UserComponent;
