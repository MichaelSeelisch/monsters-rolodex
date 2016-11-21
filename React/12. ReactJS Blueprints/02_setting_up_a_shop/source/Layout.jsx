'use strict';

import React from 'react';

import Menu from './components/Menu';
import Footer from './components/Footer';

const Layout = React.createClass({
  render() {
    return (
      <div>
        <Menu />

        { React.cloneElement(this.props.children, this.state) }

        <Footer />  
      </div>
    );
  }
});

module.exports = Layout;