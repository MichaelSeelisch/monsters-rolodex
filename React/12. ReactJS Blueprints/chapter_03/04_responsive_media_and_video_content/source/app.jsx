'use strict';

import React from 'react';
import { render } from 'react-dom';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';

import Media from './components/media.jsx';

const App = React.createClass({
  render() {
    return (  
      <Grid fluid={ true }>
        <Row>
          <Col xs={ 12 } md={ 6 }>
            <Media
              type='image/svg+xml'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Black-crowned_Night_Heron_RWD7.jpg/2560px-Black-crowned_Night_Heron_RWD7.jpg' />
          </Col>
          <Col xs={ 12 } md={ 6 }>
            <Media
              src='//www.youtube.com/embed/x7cQ3mrcKaY'
              /*
              allowFullScreen={true}
              wideScreen={true}
              width={500}
              height={400}
              */ />
          </Col>
        </Row>
      </Grid>
    );
  }
});

render(
  <App />,
  document.getElementById('container')
);
