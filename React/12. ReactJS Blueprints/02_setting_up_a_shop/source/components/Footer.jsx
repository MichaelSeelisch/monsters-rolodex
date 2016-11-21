'user strict';

import React from 'react';

const Footer = React.createClass({
  render() {
    return (
      <footer className='footer text-center'>
        <div className='container'>
          <p className='text-muted'>Copyright 2016 My Webshop. All rights reserved.</p>
        </div>
      </footer>
    );
  }
});

module.exports = Footer;