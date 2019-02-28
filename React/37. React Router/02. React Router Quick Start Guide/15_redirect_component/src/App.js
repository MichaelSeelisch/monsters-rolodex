import React, { Component } from 'react';
import {
    Route
} from 'react-router-dom';

import HomeComponent from './components/home/Home';
import DashboardComponent from './components/dashboard/Dashboard';
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

                {/* http://localhost:3000/dashboard */}
                <Route
                    path="/dashboard"
                    component={ DashboardComponent }
                />
            </div>
        );
    }
}

export default App;
