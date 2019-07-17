import React, { Component } from 'react';
import {
    Route,
    Link
} from 'react-router-dom';

import HomeComponent from './components/Home';
import LoginComponent from './components/Login';
import UserComponent from './components/User';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="container">

                {/* http://localhost:3000/home */}
                <Route
                    path="/home"
                    component={ HomeComponent }
                />

                {/* http://localhost:3000/login */}
                <Route
                    path="/login"
                    component={ LoginComponent }
                />

                {/* http://localhost:3000/user */}
                <Route
                    path="/user"
                    component={ UserComponent }
                />

                <Link
                    to="/user">
                    User
                </Link>
            </div>
        );
    }
}

export default App;
