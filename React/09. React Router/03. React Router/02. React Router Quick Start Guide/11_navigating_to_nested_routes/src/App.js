import React, { Component } from 'react';
import {
    Link,
    NavLink
} from 'react-router-dom';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className='container'>
                <nav>
                    <Link
                        to={`${match.url}/pictures`}>
                        Pictures
                    </Link>
                    <br />
                    <NavLink
                        to={`${match.url}/books`}
                        activeStyle={{
                            background: 'orange'
                        }}>
                        Books
                    </NavLink>
                </nav>
            </div>
        );
    }
}

export default App;
