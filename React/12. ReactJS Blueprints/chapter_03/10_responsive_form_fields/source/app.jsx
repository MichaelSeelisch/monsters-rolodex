'use strict';

import React from 'react';
import { render } from 'react-dom';

import FormFields from './examples/formfields';

const App = React.createClass({
  render() {
    return (  
      <FormFields />
    );
  }
});

render(
  <App />,
  document.getElementById('container')
);
