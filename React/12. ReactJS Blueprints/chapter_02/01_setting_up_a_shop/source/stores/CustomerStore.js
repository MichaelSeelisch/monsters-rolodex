'use strict';

import Reflux from 'reflux';

import CustomerActions from '../actions/CustomerActions';

let _customer = {
  customer: [],
  validAddress: false
};

const CustomerStore = Reflux.createStore({
  init() {
    this.listenTo(CustomerActions.SaveAddress, this.onSaveAddress);
  },

  onSaveAddress(address) {
    _customer = address;
    this.emit();
  },

  emit() {
    /*
     * This function causes an error, so it's commented out:
     * PublisherMethods.js:44 Uncaught TypeError: callback.apply is not a function(…)
     */
    // this.trigger(_customer);
  }
});

module.exports = CustomerStore;