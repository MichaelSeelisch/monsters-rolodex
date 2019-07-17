import React, { Component } from 'react';
import {
    Route
} from 'react-router-dom';

import HomeComponent from './components/home/Home';
import CategoryComponent from './components/category/Category';
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

                {/* Scenario 1: http://localhost:3000/category */}
                {/* Scenario 2: http://localhost:3000/category/pcitures */}
                {/* Scenario 3: http://localhost:3000/category/books */}
                {/* Scenario 3: http://localhost:3000/category/books/popular */}
                <Route
                    path="/category"
                    component={ CategoryComponent }
                />
            </div>
        );
    }
}

export default App;
