'use strict';

import React from 'react';
import {
  Carousel,
  CarouselItem
} from 'react-bootstrap';

const Carousels = React.createClass({
  getInitialState() {
    return {
      index: 0,
      direction: null
    };
  },

  handleSelect(selectedIndex, selectedDirection) {
    this.setState({
      index: selectedIndex,
      direction: selectedDirection.direction
    });
  },

  render() {
    return(
      <div>
        <h2>Uncontrolled Carousel</h2>
        <Carousel>

          <CarouselItem>
            <img
              width='100%'
              height={ 150 }
              alt='600x150'
              src='http://lorempixel.com/600/150/' />
              <div className='carousel-caption'>
                <h3> Slide label 1 </h3>
                <p> Lorem ipsum dolor sit amet </p>
              </div>
          </CarouselItem>

          <CarouselItem>
            <img
              width='100%'
              height={ 150 }
              alt='600x150'
              src='http://lorempixel.com/600/150/' />
              <div className='carousel-caption'>
                <h3> Slide label 2 </h3>
                <p> Nulla vitae elit libero, a pharetra augue. </p>
              </div>
          </CarouselItem>
        </Carousel>

        {/*
            By default, the carousel uses the left and right arrow icons from the included Glyphicon set.
            You can specify your own arrows using the nextIcon and prevIcon attributes.
        */}
        <h2>Controlled Carousel</h2>
        <Carousel
          activeIndex={ this.state.index }
          direction={ this.state.direction }
          onSelect={ this.handleSelect }>

            <CarouselItem>
              <img
                width='100%'
                height={ 150 }
                alt='600x150'
                src='http://lorempixel.com/600/150/' />
                <div className='carousel-caption'>
                  <h3> Slide label 1 </h3>
                  <p> Lorem ipsum dolor sit amet </p>
                </div>
            </CarouselItem>

            <CarouselItem>
              <img
                width='100%'
                height={ 150 }
                alt='600x150'
                src='http://lorempixel.com/600/150/' />
                <div className='carousel-caption'>
                  <h3> Slide label 2 </h3>
                  <p> Nulla vitae elit libero, a pharetra augue. </p>
                </div>
            </CarouselItem>
          </Carousel>
      </div>
    );
  }
});

module.exports = Carousels;