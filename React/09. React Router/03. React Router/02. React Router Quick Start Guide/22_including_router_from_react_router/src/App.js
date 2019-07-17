import React, { Component } from 'react';
import {
    Route
} from 'react-router-dom';

import HomeComponent from './components/Home';
import LoginComponent from './components/Login';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="container">
                {/* http://localhost:3000/home */}
                <Route
                    path="/home"
                    component={HomeComponent}
                />

                {/* http://localhost:3000/login */}
                <Route
                    path="/login"
                    component={LoginComponent}
                />
            </div>
        );
    }
}

export default App;
