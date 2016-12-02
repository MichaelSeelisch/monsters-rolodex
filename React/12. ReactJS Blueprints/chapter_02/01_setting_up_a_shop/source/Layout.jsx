'use strict';

import React from 'react';
import Reflux from 'reflux';

import Menu from './components/Menu';
import Footer from './components/Footer';

import ProductActions from './actions/ProductActions';

import ProductStore from './stores/ProductStore';
import CartStore from './stores/CartStore';
import CustomerStore from './stores/CustomerStore';

const Layout = React.createClass({
  mixins: [
    Reflux.listenTo(ProductStore, 'onFetchProducts'),
    Reflux.listenTo(CartStore, 'onCartUpdated'),
    Reflux.listenTo(CustomerStore, 'onCustomerUpdated')
  ],

  componentDidMount() {
    ProductActions.FetchProducts();
  },

  onFetchProducts(data) {
    this.setState({
      products: data.products
    });
  },

  onCartUpdated(data) {
    this.setState({
      cart: data.cart
    })
  },

  render() {
    return (
      <div>
        <Menu {...this.state} />

        { React.cloneElement(this.props.children, this.state) }

        <Footer />  
      </div>
    );
  }
});

module.exports = Layout;