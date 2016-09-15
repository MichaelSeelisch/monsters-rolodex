import React, { Component } from 'react';

class FocusText extends Component {
  handleClick() {
    // Explicity focus the text input using the raw DOM API
    this.refs.myTextInput.focus();
  }

  render() {
    // The 'ref' attribute adds a reference to the component
    // to 'this.refs' when the component is mounted
    return(
      <div>
        <input type='text' ref='myTextInput' />
        <input
          type='button'
          value='Focus the text input'
          onClick={this.handleClick.bind(this)}
        />
      </div>
    );
  }
}
