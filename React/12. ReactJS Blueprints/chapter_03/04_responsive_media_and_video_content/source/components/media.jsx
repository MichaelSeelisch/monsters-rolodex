'use strict';

import React from 'react';
import ClassNames from 'classnames';

const Media = React.createClass({
  propTypes: {
    wideScreen: React.PropTypes.bool,
    type: React. PropTypes.string,
    src: React.PropTypes.string.isRequired,
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    allowFullScreen: React.PropTypes.bool
  },

  getDefaultProps() {
    return {
      wideScreen: false,
      type: 'video',
      src: '',
      width: 0,
      height: 0,      
      allowFullScreen: false      
    }
  },

  render() {
    let responsiveStyle = ClassNames({
      'embed-responsive': true,
      'embed-responsive-16by9': this.props.wideScreen,
      'embed-responsive-4by3': !this.props.wideScreen
    });

    let divStyle, iframeStyle;
    divStyle = this.props.height ? { paddingBottom: this.props.height } : null;
    iframeStyle = this.props.height ? { height: this.props.height, width: this.props.width } : null;

    if (this.props.src) {
      if (this.props.type === 'video') {
        return (
          <div
            className={ responsiveStyle }
            style= { divStyle }>
            <iframe
              className='embed-responsive-item'
              src={ this.props.src }
              style={ iframeStyle }
              allowFullScreen= { this.props.allowFullScreen } />
          </div>
        );
      }
      else {
        return (
          <div
            className={ responsiveStyle }
            style={ divStyle }>
            <embed
              frameBorder='0'
              src={ this.props.src }
              style={ iframeStyle }
              allowFullScreen={ this.props.allowFullScreen } />
          </div>
        );
      }
    }
    else {
      return null;
    }
  }
});

module.exports = Media;