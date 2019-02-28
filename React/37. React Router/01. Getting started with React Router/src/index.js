import React from 'react';
import ReactDOM from 'react-dom';
import {
    Route,
    Link,
    NavLink,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';

import './index.css';
import App from './App';
import Users from './componets/Users';
import Contact from './componets/Contact';
import Notfound from './componets/404';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <NavLink exact activeClassName="active" to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/users">
                        Users
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/contact">
                        Contact
                    </NavLink>
                </li>
            </ul>
            <Switch>
                <Route exact path="/" component={ App } />
                <Route path="/users/:id" component={ Users } />
                <Route path="/contact" component={ Contact } />
                <Route component={ Notfound } />
            </Switch>
        </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
