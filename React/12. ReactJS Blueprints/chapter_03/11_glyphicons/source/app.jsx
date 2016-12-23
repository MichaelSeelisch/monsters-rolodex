'use strict';

import React from 'react';
import { render } from 'react-dom';

import Glyphicon from './examples/glyphicons';

const App = React.createClass({
  render() {
    return (  
      <Glyphicon />
    );
  }
});

render(
  <App />,
  document.getElementById('container')
);
