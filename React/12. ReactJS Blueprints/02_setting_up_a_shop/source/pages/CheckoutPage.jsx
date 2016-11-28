'use strict';

import React from 'react';
import {
  Grid,
  Button,
  Table,
  Well
 } from 'react-bootstrap';
 import { LinkContainer } from 'react-router-bootstrap';

 import CartActions from '../actions/CartActions';
 import CustomerData from '../components/CustomerData';
 import Cart from '../components/Cart';

const CheckoutPage = React.createClass({
  propTypes: {
    cart: React.PropTypes.array,
    customer: React.PropTypes.object
  },

  getDefaultProps() {
    return {
      cart: [],
      customer: {
        address: {},
        validAddress: false
      }
    }
  },

  render() {
   let CheckoutEnabled = (this.props.customer.validAddress && this.props.cart.length > 0);

   return (
     <Grid>
      <Well bsSize='small'>
        <p>Please confirm your order and checkout your cart</p>
      </Well>

      <Cart {...this.props} />

      <CustomerData {...this.props} />
      
      <LinkContainer to='/receipt'>
        <Button
          disabled={CheckoutEnabled}
          bsStyle={CheckoutEnabled ? 'success' : 'default'}>
          Proceed to checkout
        </Button>
      </LinkContainer>
     </Grid>
   );
  }
});



module.exports = CheckoutPage;