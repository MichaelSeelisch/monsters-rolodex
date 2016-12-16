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
import Picture from './../components/picture';

let imgSet = [
  {
    media: 'only screen and (min-width: 650px) and (orientation: landscape)',
    src: 'http://lorempixel.com/500/300/'
  },
  {
    media: 'only screen and (min-width: 465px) and (orientation: portrait)',
    src: 'http://lorempixel.com/200/500/'
  },
  {
    media: 'only screen and (min-width: 465px) and (orientation: landscape)',
    src: 'http://lorempixel.com/250/150/'
  }
];

let defaultImage = {
  src: 'http://lorempixel.com/100/100/',
  alt: 'The default image'
};

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

        <Row>
          <Col xs={ 12 }>
            <Picture
              imgSet= { imgSet }
              defaultImage= { defaultImage }
              circle />
          </Col>
        </Row>

        </Grid>
      </div>
    );
  }
});

module.exports = Images;
