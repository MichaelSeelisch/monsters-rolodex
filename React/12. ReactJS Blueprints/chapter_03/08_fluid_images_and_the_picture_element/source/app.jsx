'use strict';

import React from 'react';
import { render } from 'react-dom';

import Images from './examples/images.jsx';

const App = React.createClass({
  render() {
    return (  
      <Images />
    );
  }
});

render(
  <App />,
  document.getElementById('container')
);
