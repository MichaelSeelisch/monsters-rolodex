import React, { Component, PropTypes } from 'react';

class Digit extends Component {

  render() {
    let digitStyle = {
      background: '#eeeeee',
      display: 'inline-block',
      fonstSize: 20,
      margin: 5,
      padding: 10
    };

    let displayValue;

    if (this.props.value < 10) {
      displayValue = '0' + this.props.value;
    }
    else {
      displayValue = this.props.value;
    }

    return(
      <div style={digitStyle}>
        {displayValue}
      </div>
    );
  }
}

Digit.PropTypes = {
  value: PropTypes.number.isRequired
}

export default Digit;
