'use strict';

import React from 'react';
import {
  Router,
  Route,
  browserHistory
} from 'react-router';

import Layout from './Layout.jsx';

const Routes = (
  <Router history={browserHistory}>
    <Route handler={Layout} path='/' />
  </Router>
);

module.exports = Routes;