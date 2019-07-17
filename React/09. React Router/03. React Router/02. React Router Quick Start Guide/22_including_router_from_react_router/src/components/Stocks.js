import React, { Component } from 'react';
import {
    Redirect
} from 'react-router-dom';

export class StocksComponent extends Component {
    state = {
        isUserLoggedIn: false
    }

    componentWillMount() {
        const isUserLoggedIn = localStorage.getItem('isUserLoggedIn');

        this.setState({
            isUserLoggedIn
        });
    }

    render() {
        const {match } = this.props;

        if (!this.state.isUserLoggedIn) {
            return (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { callbackURL: match.url }
                    }}
                />
            )
        }

        return (
            <div>
                In StocksComponent
            </div>
        )
    }
}

export default StocksComponent;
