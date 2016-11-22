'use strict';

import React from 'react';
import Reflux from 'reflux';

import Menu from './components/Menu';
import Footer from './components/Footer';
import Actions from './actions/Products';
import ProductStore from './stores/Products';
import CartStore from './stores/Cart';

const Layout = React.createClass({
  mixins: [
    Reflux.listenTo(ProductStore, 'onFetchProducts'),
    Reflux.listenTo(CartStore, 'onCartUpdated')
  ],

  componentDidMount() {
    Actions.FetchProducts();
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