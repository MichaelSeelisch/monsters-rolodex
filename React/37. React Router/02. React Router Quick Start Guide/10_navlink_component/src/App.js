import React, { Component } from 'react';
import {
    NavLink
} from 'react-router-dom';

import './App.css';

class App extends Component {
    refCallback(node) {
        console.log('refCallback for', node);

        node.onmouseover = () => {
            node.focus();
        }
    }

    render() {
        return (
            <div className='container'>
                <nav>
                    <NavLink
                        exact
                        to='/'>
                        Home
                    </NavLink>
                    <br />
                    <NavLink
                        strict
                        to='/dashboard/'
                        activeClassName='selectedLink'>
                        Dashboard
                    </NavLink>
                    <br />
                    <NavLink
                        to='/user'
                        activeStyle={{
                            background: 'red',
                            color: 'white'
                        }}>
                        User
                    </NavLink>
                    <br />

                    {/* no active styles: http://localhost:3000/client */}
                    {/* active styles: http://localhost:3000/client?id=1#hash */}
                    <NavLink
                        to={{
                            pathname: '/client',
                            search: '?id=1',
                            hash: '#hash',
                            state: { isAdmin: true }
                        }}
                        activeStyle={{
                            background: 'yellow',
                            color: 'black'
                        }}
                        isActive={(match, location) => {
                            if (!match) {
                                return false;
                            }
                            const searchParams = new URLSearchParams(location.search);
                            return match.isExact && searchParams.has('id');
                        }}>
                        Client
                    </NavLink>
                    <br />

                    <NavLink
                        to='/customer'
                        activeStyle={{
                            background: 'red',
                            color: 'white'
                        }}
                        location={{
                            search: '?id=2',
                        }}
                        isActive={(match, location) => {
                            if (!match) {
                                return false;
                            }
                            const searchParams = new URLSearchParams(location.search);
                            return match.isExact && searchParams.has('id');
                        }}>
                        Customer
                    </NavLink>
                </nav>
            </div>
        );
    }
}

export default App;
