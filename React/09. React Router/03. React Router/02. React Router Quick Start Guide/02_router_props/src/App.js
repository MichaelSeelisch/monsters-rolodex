import React, { Component } from 'react';
import {
    Route
} from 'react-router-dom';

import HomeComponent from './components/home/Home';
import DashboardComponent from './components/dashboard/Dashboard';
import StocklistComponent from './components/stocklist/Stocklist';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="container">

                {/* http://localhost:3000/ */}
                <Route
                    exact
                    path="/"
                    component={ HomeComponent }
                />

                {/* http://localhost:3000/dashboard */}
                <Route
                    strict
                    sensitive
                    path="/dashboard"
                    component={ DashboardComponent }
                />

                {/* http://localhost:3000/DASHBOARD */}
                <Route
                    sensitive
                    path="/DASHBOARD"
                    component={ StocklistComponent }
                />
            </div>
        );
    }
}

export default App;
