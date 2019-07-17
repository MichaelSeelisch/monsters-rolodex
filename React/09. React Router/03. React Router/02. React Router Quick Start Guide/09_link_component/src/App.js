import React, { Component } from 'react';
import {
    Route,
    Link
} from 'react-router-dom';

import HomeComponent from './components/HomeComponent';
import DashboardComponent from './components/DashboardComponent';
import './App.css';


class App extends Component {
    refCallback(node) {
        console.log('refCallback for', node);

        node.onmouseover = () => {
            node.focus();
        }
    }

    render() {
        return (
            <div className="container">
                <nav>
                    <Link
                        to="/"
                        innerRef={ this.refCallback }>
                        Home
                    </Link>
                    <br />
                    <Link
                        to="/dashboard"
                        replace
                        innerRef={ this.refCallback }>
                        Dashboard
                    </Link>
                    <br />
                    <Link
                        to={{
                            pathname: '/user',
                            search: '?id=1',
                            hash: '#hash',
                            state: { isAdmin: true }
                        }}>
                        User
                    </Link>
                </nav>
                <Route
                    path="/"
                    component={ HomeComponent }
                    exact
                />
                <Route
                    path="/dashboard"
                    component={ DashboardComponent }
                />
                <Route
                    path="/user"
                    render={({ location }) => {
                        const { pathname, search, hash, state } = location;

                        return (
                            <div>
                                Inside User route
                                <h5>Pathname: { pathname }</h5>
                                <h5>Search: { search }</h5>
                                <h5>Hash: { hash }</h5>
                                <h5>State: {'{'}
                                    { Object.keys(state).map((element, index) => {
                                        return (
                                            <span key={index}>
                                                {element}: {
                                                    state[element].toString()
                                                }
                                            </span>
                                        )
                                    })}
                                    {'}'}
                                </h5>
                            </div>
                        );
                    }}
                />
            </div>
        );
    }
}

export default App;
