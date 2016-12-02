'use strict';

import React from 'react';
import {
  Grid,
  Row,
  Col,
  Panel,
  Table
} from 'react-bootstrap';
import { Router, Navigation } from 'react-router';

import CartActions from '../actions/CartActions';

const ReceiptPage = React.createClass({
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

  mixins: [
    Navigation
  ],

  componentDidMount() {
    if(!this.props.cart.length) {
      this.props.history.pushState('/');
    }
  },

  componentWillUnmount() {
    CartActions.ClearCart();
  },

  render() {
    let total = 0;
    
    this.props.cart.forEach((data) => {
      total += parseFloat(data[Object.keys(data)].price.replace('$', ''));
    });

    let orderData = this.props.cart.map((data, idx) => {
      return <OrderElement productData={data} key={idx} />
    });

    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <h3 className='text-center'>Invoice for your purchase</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} pullLeft>
            <Panel header={'Billing details'}>
              {this.props.customer.address.name}<br/>
              {this.props.customer.address.address}<br/>
              {this.props.customer.address.zipCode}<br/>
              {this.props.customer.address.city}
            </Panel>
          </Col>
          <Col xs={12} md={12} pullLeft>
            <Panel header={'Order summary'}>
              <Table>               
                <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Item Price</th>
                </tr>
                </thead>
                {orderData}
                <tbody>
                  <tr>
                    <td>
                      <strong>Total</strong>
                    </td>
                    <td>
                      ${total}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
});

const OrderElement = React.createClass({
  render() {
    const title = Object.keys(this.props.productData);

    if(title) {
      return (
        <tbody>
          <tr>
            <td>{title}</td>
            <td>{this.props.productData[title].price}</td>
          </tr>
        </tbody>
      );
    }
    else {
      return null;
    }
  }
});

module.exports = ReceiptPage;