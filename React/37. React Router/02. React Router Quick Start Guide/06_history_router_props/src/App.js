import React, { Component } from 'react';
import {
    Route
} from 'react-router-dom';

import HomeComponent from './components/home/Home';
import GitHubComponent from './components/github/Github';
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

                {/* http://localhost:3000/github/mseelisch/mjackson/prince */}
                {/* reuqired params: :githubID/:twitterID */}
                {/* optional params: :gitlabID */}
                {/* (\d+): regexp for numbers only */}
                {/* (\w+): regexp for chars only */}
                <Route
                    path="/github/:githubID(\d+)/:twitterID(\w+)/:gitlabID?"
                    component={ GitHubComponent }
                />
            </div>
        );
    }
}

export default App;
