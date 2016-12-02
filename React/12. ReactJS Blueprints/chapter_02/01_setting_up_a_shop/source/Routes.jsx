'use strict';

import React from 'react';
import {
  Router,
  Route,
  browserHistory
} from 'react-router';

import Layout from './Layout';
import ProductsPage from './pages/ProductsPage';
import HomePage from './pages/HomePage';
import CompanyPage from './pages/CompanyPage';
import Item from './pages//products/Item';
import CheckoutPage from './pages/CheckoutPage';
import ReceiptPage from './pages/ReceiptPage';

const Routes = (
  <Router history={browserHistory}>
    <Route component={Layout}>
      <Route name='home' path='/' component={HomePage} />
      <Route name='company' path='/company' component={CompanyPage} />
      <Route name='products' path='/products' component={ProductsPage} />
      <Route name='item' path='/item/:id' component={Item} />
      <Route name='checkout' path='/checkout' component={CheckoutPage} />
      <Route name='receipt' path='/receipt' component={ReceiptPage} />
    </Route>
  </Router>
);

module.exports = Routes;