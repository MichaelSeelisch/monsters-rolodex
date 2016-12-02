'use strict';

import React from 'react';
import {
  Grid,
  Button,
  Table,
  Well
} from 'react-bootstrap';

import CartActions from '../actions/CartActions';

const Cart = React.createClass({
  propTypes: {
    cart: React.PropTypes.array
  },

  render() {
    let total = 0;
    this.props.cart.forEach((data) => {
      total += parseFloat(data[Object.keys(data)].price.replace('$', ''));
    });

    let tableData = this.props.cart.map((data, idx) => {
      return <CartElement productData={data} key={idx} />
    });

    if(!tableData.length) {
      tableData = (
        <tr>
          <td colSpan='3'>Your cart is empty</td>
        </tr>
      );
    }

    return <Table striped condensed>
      <thead>
        <tr>
          <th width='40%'>Name</th>
          <th width='30%'>Price</th>
          <th width='30%'></th>
        </tr>
      </thead>
      <tbody>
        {tableData}
        <tr className='summary' border>
          <td><strong>Order total:</strong></td>
          <td><strong>${total}</strong></td>
          <td>
            {tableData.length ? <Button bsSize='xsmall' bsStyle='danger' onClick={CartActions.ClearCart}>Clear Cart</Button> : null }</td>  
        </tr>
      </tbody>
    </Table>;
  }
});

const CartElement = React.createClass({
  render() {
    const title = Object.keys(this.props.productData);

    return title ?
      (<tr>
        <td>
          {title}
        </td>
        <td>
          {this.props.productData[title].price}
        </td>
        <td>
          <Button bsSize="xsmall" bsStyle="danger" onClick={CartActions.RemoveFromCart.bind(null, this.props.productData)}>Remove</Button>
        </td>
            </tr>
        ) : null;
    }
});

module.exports = Cart;