'use strict';

import React from 'react';
import { render } from 'react-dom';

import Carousels from './examples/carousels.jsx';

const App = React.createClass({
  render() {
    return (  
      <Carousels />
    );
  }
});

render(
  <App />,
  document.getElementById('container')
);
