'use strict';

import React from 'react';
import { render } from 'react-dom';

import ProgressBars from './examples/progressbars.jsx';

const App = React.createClass({
  render() {
    return (  
      <ProgressBars />
    );
  }
});

render(
  <App />,
  document.getElementById('container')
);
