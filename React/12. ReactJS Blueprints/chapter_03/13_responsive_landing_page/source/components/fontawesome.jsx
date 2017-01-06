'use strict';

import React from 'react';

const FontAwesome = React.createClass({
  propTypes: {
    icon: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      icon: ''
    }
  },

  render() {
    if (this.props.icon) {
      return (
        <i className={ 'fa fa-' + this.props.icon } />
      );
    }
    else {
      return null;
    }
  }
 });

 module.exports = FontAwesome;