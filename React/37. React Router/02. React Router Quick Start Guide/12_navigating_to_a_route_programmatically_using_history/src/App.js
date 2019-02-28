import React, { Component } from 'react';
import {
    Link,
    Route
} from 'react-router-dom';

import DashboardComponent from './components/DashboardComponent';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className='container'>
                <nav>
                    <Link
                        exact
                        to="/dashboard">
                        Dashboard
                    </Link>
                </nav>

                <Route
                    path="/dashboard"
                    component={ DashboardComponent }
                />
            </div>
        );
    }
}

export default App;
