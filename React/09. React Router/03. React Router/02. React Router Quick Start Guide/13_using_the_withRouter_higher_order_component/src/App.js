import React, { Component } from 'react';
import {
    Link,
    Route
} from 'react-router-dom';

import UserComponent from './components/UserComponent';
import StocksComponent from './components/StocksComponent';
import FooterComponent from './components/FooterComponent';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className='container'>
                <Route
                    path="/user"
                    component={ UserComponent }
                />
                <Route
                    path="/stocks"
                    component={ StocksComponent }
                />

                {/* Rendered without "Route", so browserhistory not available normally */}
                <FooterComponent />
            </div>
        );
    }
}

export default App;
