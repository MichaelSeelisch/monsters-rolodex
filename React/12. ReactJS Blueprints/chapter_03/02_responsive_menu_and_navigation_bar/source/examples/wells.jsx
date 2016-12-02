'use strict';

import React from 'react';
import { Well } from 'react-bootstrap';

const Wells = React.createClass({
  render() {
    return (
      <Well bsSize='large'>
        Hi, I'm a large well.'
      </Well>
    );
  }
});

module.exports = Wells;