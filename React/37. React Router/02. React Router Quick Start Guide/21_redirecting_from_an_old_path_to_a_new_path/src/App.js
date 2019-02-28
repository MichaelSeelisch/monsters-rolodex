import React, { Component } from 'react';
import {
    Redirect,
    Route,
    Switch
} from 'react-router-dom';

import LoginComponent from './components/Login';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="container">

                <Switch>
                    {/* http://localhost:3000/login */}
                    <Route
                        path="/login"
                        component={LoginComponent}
                    />

                    {/* http://localhost:3000/user */}
                    <Route
                        path="/user"
                        render={({ match }) =>
                            <div> Route with path {match.url}</div>
                        }
                    />

                    <Redirect
                        from="/home"
                        to="/login"
                    />

                    {/* http://localhost:3000/abc */}
                    <Redirect to="/home" />
                </Switch>
            </div>
        );
    }
}

export default App;
