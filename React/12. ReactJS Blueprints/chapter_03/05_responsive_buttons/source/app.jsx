'use strict';

import React from 'react';
import { render } from 'react-dom';

import Buttons from './examples/buttons.jsx';

const App = React.createClass({
  render() {
    return (  
      <Buttons />
    );
  }
});

render(
  <App />,
  document.getElementById('container')
);
