import React, { Component } from 'react';
import {
    Route
} from 'react-router-dom';

import HomeComponent from './components/home/Home';
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
                    path="/dashboard"
                    render={({ match }) => {
                        console.log(match);
                        return (
                            <div> Inside Dashboard route </div>
                        );
                    }}
                />

                {/* http://localhost:3000/kjhsdkjzsd87f632 */}
                <Route
                    path="/sidenav"
                    children={({ match }) => {
                        console.log(match)
                        return (
                            <div>Sidenav!</div>
                        );
                    }}
                />
            </div>
        );
    }
}

export default App;
