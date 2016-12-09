'use strict';

import React from 'react';
import { 
  Image,
  Thumbnail,
  Button,
  Grid,
  Row,
  Col
} from 'react-bootstrap';

const Images = React.createClass({
  render() {
    return (
      <div>
        <h2> Images </h2>
        <Grid fluid={ true }>

          <Row>
            <Col xs={ 12 } sm={ 4 }>
              <Image src='http://lorempixel.com/140/180/' portrait />
            </Col>
            <Col xs={ 12 } sm={ 4 }>
              <Image src='http://lorempixel.com/140/180/' circle />
            </Col>
            <Col xs={ 12 } sm={ 4 }>
              <Image src='http://lorempixel.com/140/180/' rounded />
            </Col>
          </Row>

          <Row>
            <Col xs={ 12 } sm={ 4 }>
              <Thumbnail src='http://lorempixel.com/140/180/'>
                <h3> Thumbnail label </h3>
                <p> Description </p>
                <p>
                  <Button
                    bsSize='large'
                    bsStyle='danger'>
                    Button
                  </Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={ 12 } sm={ 4 }>
              <Thumbnail src='http://lorempixel.com/140/180/'>
                <h3> Thumbnail label </h3>
                <p> Description </p>
                <p>
                  <Button
                    bsSize='large'
                    bsStyle='warning'>
                    Button
                  </Button>
                </p>
              </Thumbnail>
            </Col>
             <Col xs={ 12 } sm={ 4 }>
              <Thumbnail src='http://lorempixel.com/140/180/'>
                <h3> Thumbnail label </h3>
                <p> Description </p>
                <p>
                  <Button
                    bsSize='large'
                    bsStyle='info'>
                    Button
                  </Button>
                </p>
              </Thumbnail>
            </Col>
          </Row>

        </Grid>
      </div>
    );
  }
});

module.exports = Images;