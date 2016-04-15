import React, {Component, PropTypes} from 'react';
import {render} from 'react-dom';

// The ContactItem
class ContactItem extends Component {
  render() {
    return <li>{this.props.name} - {this.props.email}</li>
  }
}

ContactItem.propTypes={
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
}

module.exports = ContactItem;
