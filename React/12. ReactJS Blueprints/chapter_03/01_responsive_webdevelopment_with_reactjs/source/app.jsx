'use strict';

import React from 'react';
import { render } from 'react-dom';

import GridExample from './examples/grid.jsx';

const App = React.createClass({
  render() {
    return(
      <div>
        <GridExample />
      </div>      
    );
  }
});

render(
  <App />,
  document.getElementById('container')
);
