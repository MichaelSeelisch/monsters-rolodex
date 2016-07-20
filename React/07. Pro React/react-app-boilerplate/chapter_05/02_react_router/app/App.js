import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import About from './About';
import Home from './Home';
import Repos from './Repos';
import RepoDetails from './RepoDetails';

class App extends Component {

  render() {
    return (
      <div>
        <header>App</header>
        <menu>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/repos">Repos</Link></li>
          </ul>
        </menu>
        { this.props.children }
      </div>
    );
  }
};

render((
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Home } />
      <Route path="/about" component={ About } />
      <Route path="/repos" component={ Repos }>
        { /* Add the route, nested where we want the UI to nest */ }
        <Route path="details/:repo_name" component={ RepoDetails } />
      </Route>
    </Route>
  </Router>
), document.getElementById('root'));
