import React, { Component } from 'react';
import {
    Prompt,
    Route
} from 'react-router-dom';

import UserComponent from './components/UserComponent';
import StocksComponent from './components/StocksComponent';
import FooterComponent from './components/FooterComponent';
import './App.css';

class App extends Component {
    constructor (props) {
        super(props);

        this.state = {
            showPrompt: true
        }
    }

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

                {/* Shows prompt before navigation to next route */}
                <Prompt
                        when={ this.state.showPrompt }
                        message={(location) =>
                            `Are you sure you want to navigate to ${location.pathname}?`
                        }
                />

                <FooterComponent />
            </div>
        );
    }
}

export default App;
