'use strict';

import React from 'react';
import Reflux from 'reflux';
import { Router, State } from 'react-router';
import {
  Grid,
  Row,
  Col,
  Button
} from 'react-bootstrap';

import ProductInfo from './ProductInfo';

const Item = React.createClass({
  mixins: [
    Router.State
  ],

  render() {
    if(!this.props.products) {
      return null;
    }

    // Find the requested product in our product list
    let products = this.props.products.main_offering.concat(this.props.products.sale_offerings);
    let data = products.filter((item) => {
      return item[Object.keys(item)].SKU === this.props.routeParams.id;
    });

    if(!data.length) {
      return (
        <Grid>
          <Row>
            <Col xs={12}>
              <h1>Product missing!</h1>
              <p>I'm sorry, but the product coukd not be found.</p>
            </Col>
          </Row>
        </Grid>
      )
    }
    else {
      return (
        <Grid>
          <Row>
            <Col xs={12}>
              <ProductInfo productData={data[0]} />
            </Col>
          </Row>
        </Grid>
      )
    };
  }
});

module.exports = Item;