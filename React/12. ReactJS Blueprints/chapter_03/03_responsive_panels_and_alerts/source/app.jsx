'use strict';

import React from 'react';
import { render } from 'react-dom';

import Panels from './examples/panels.jsx';
import Alerts from './examples/alerts.jsx';

const App = React.createClass({
  render() {
    return (
      <div>
        <Panels />
        <Alerts />
      </div>      
    );
  }
});

render(
  <App />,
  document.getElementById('container')
);
