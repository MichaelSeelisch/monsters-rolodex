'use strict';

import React from 'react';
import {
  Router,
  Route,
  browserHistory
} from 'react-router';

import Layout from './Layout';
import Products from './pages/Products';
import Home from './pages/Home';
import Company from './pages/Company';
import Item from './pages/Item';
import Checkout from './pages/Products';
import Receipt from './pages/Receipt';

const Routes = (
  <Router history={browserHistory}>
    <Route component={Layout}>
      <Route name='home' path='/' component={Home} />
      <Route name='company' path='/company' component={Company} />
      <Route name='products' path='/products' component={Products} />
      <Route name='item' path='/item/:id' component={Item} />
      <Route name='checkout' path='/checkout' component={Checkout} />
      <Route name='receipt' path='/receipt' component={Receipt} />
    </Route>
  </Router>
);

module.exports = Routes;