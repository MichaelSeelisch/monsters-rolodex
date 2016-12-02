'use strict';

import Reflux from 'reflux';
import Request from 'superagent';

import ProductActions from '../actions/ProductActions';

const ProductStore = Reflux.createStore({
  init() {
    this.listenTo(ProductActions.FetchProducts, this.onFetchProducts);
  },

  onFetchProducts() {
    Request
      .get('/products.json')
      .end((err, res) => {
        this.trigger(JSON.parse(res.text));
      });
  }
});

module.exports = ProductStore;
