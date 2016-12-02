'use strcit';

import React from 'react';
import {
  Grid,
  Row,
  Col,
  Button
} from 'react-bootstrap';

//import CartActions from '../actions/Cart';

const ProductInfo = React.createClass({
  propTypes: {
    productData: React.PropTypes.object
  },

  render() {
    const title = Object.keys(this.props.productData);

    if(this.props.productData[title]) {
      return (
        <Col xs={12}>
          <Col md={3} sm={4} xs={12}>
            <p>
              <img src={this.props.productData[title].image.replace('{size}', '200x150')} />
            </p>
          </Col>
          <Col md={9} sm={8} xs={12}>
            <h4>{title}</h4>
            <p>
              {this.props.productData[title].description}
            </p>
            <p>
              {this.props.productData[title].price}
              {' '}
              ({this.props.productData[title].savings})
            </p>
            <p>
              <Button
                bsSize='large'>
                Add to cart
              </Button>
            </p>
          </Col>
        </Col>
      )
    }
    else {
      return null;
    };
  }
});

module.exports = ProductInfo;