import React, { Component } from 'react';
import {
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

                    {/* http://localhost:3000/abc */}
                    <Route
                        path='*'
                        render={({ location }) =>
                            <div> 404 - {location.pathname} not found</div>
                        }
                    />
                </Switch>
            </div>
        );
    }
}

export default App;
