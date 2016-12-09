'use strict';

import React from 'react';
import { render } from 'react-dom';

import Navigation from './examples/navbar.jsx';
import Wells from './examples/wells.jsx';

const App = React.createClass({
  render() {
    return (
      <div>
        <Navigation />
        <Wells />
      </div>      
    );
  }
});

render(
  <App />,
  document.getElementById('container')
);
