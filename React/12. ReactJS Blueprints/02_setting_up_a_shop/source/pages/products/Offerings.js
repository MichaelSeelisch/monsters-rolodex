'use strict';

import React from 'react';
import { Row } from 'react-bootstrap';


import MainOffering from './MainOffering';
import RibbonOffering from './RibbonOffering';

const Offerings = React.createClass({
  propTypes: {
    type: React.PropTypes.oneOf(['main', 'ribbon']),
    maxProducts: React.PropTypes.number,
    productData: React.PropTypes.array
  },

  getDefaultProps() {
    return {
      type: 'main',
      maxProducts: 3
    }
  },

  render() {
    let productData = this.props.productData.filter((data, idx) => {
      return idx < this.props.maxProducts;
    });

    let data = productData.map((data, idx) => {
      if(this.props.type === 'main') {
        return <MainOffering
                {...this.props}
                key={idx}
                productData={data} />
      }
      else if(this.props.type == 'ribbon') {
        return <RibbonOffering
                {...this.props}
                key={idx}
                productData={data} />
      }
    });

    return <Row>{data}</Row>
  }
});

module.exports = Offerings;