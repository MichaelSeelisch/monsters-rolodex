'use strict';

import React from 'react';
import { render } from 'react-dom';

import FontAwesome from './components/fontawesome';

const App = React.createClass({

  render() {
    return (
      <div>
        <a href="#" style={{color:'#eee'}}><FontAwesome icon="google-plus"/></a>
        <a href="#" style={{paddingLeft:15,color:'#eee'}}><FontAwesome icon="facebook"/></a>
        <a href="#" style={{paddingLeft:15,color:'#eee'}}><FontAwesome icon="twitter"/></a>
        <a href="#" style={{paddingLeft:15,color:'#eee'}}><FontAwesome icon="github"/></a>
        <a href="#" style={{paddingLeft:15,color:'#eee'}}><FontAwesome icon="pinterest"/></a>
      </div>
    );
  }
});

render(
  <App />,
  document.getElementById('container')
);
