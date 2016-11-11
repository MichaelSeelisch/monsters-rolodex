import React, { Component } from 'react';

class CheckboxWithLabel extends Component {

  constructor() {
    super(...arguments);
    this.state = {
      isChecked: false
    };
    this._onChange = this._onChange.bind(this);
  }

  _onChange() {
    this.setState({
      isChecked: !this.state.isChecked
    });
  }

  render() {
    return(
      <label>
        <input
          type='checkbox'
          checked={this.state.isChecked}
          onChange={this._onChange} />
        {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
      </label>
    );
  }
}

module.exports = CheckboxWithLabel;
