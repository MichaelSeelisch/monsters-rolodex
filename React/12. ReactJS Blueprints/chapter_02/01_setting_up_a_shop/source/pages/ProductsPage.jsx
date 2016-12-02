'use strict';

import React from 'react';
import {
  Grid,
  Row,
  Col,
  Button
} from 'react-bootstrap';
import { Link } from 'react-router';

import Offerings from './products/Offerings';

const ProductsPage = React.createClass({
  propTypes: {
    products: React.PropTypes.object
  },

  getDefaultProps() {
    return {
      products: {
        main_offering: [],
        sale_offerings: []
      }
    }
  },

  render() {
    return (
      <Grid>
        <Offerings
          productData={this.props.products.main_offering}
          type={'main'}
          maxProducts={1}
        />
        <Offerings
          productData={this.props.products.sale_offerings}
          type={'ribbon'}
          maxProducts={3}
        />
      </Grid>
    );
  }
});

module.exports = ProductsPage;