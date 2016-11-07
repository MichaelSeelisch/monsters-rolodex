import React, { Component, PropTypes } from 'react';

class Digit extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    // Don’t trigger a re-render unless the digit value has changed
    return nextProps.value !== this.props.value;
  }

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
