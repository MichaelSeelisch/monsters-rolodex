import React, { Component } from 'react';
import {
    Route,
    BrowserRouter as Router
} from 'react-router-dom';

import ROUTES from './Routes';
import './App.css';


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    Inside Stocks, try /stocks/stats or /stocks/news or /stocks/trending
                    {
                        ROUTES.map((route, index) => {
                            return (
                                <Route
                                    key={ index }
                                    exact
                                    path={ `${ route.path }` }
                                    component={ route.component }
                                />
                            )
                        })
                    }
                </div>
            </Router>
        );
    }
}

export default App;
