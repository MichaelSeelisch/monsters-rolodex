import React, {Component} from 'react';

// TrackerReact not neccesarry, 'cause no pulling of data into the component
export default class ResolutionsForm extends Component {
  addResolution(event) {
    // Prevent page from refreshing
    event.preventDefault();
    // trim = remove breaks
    var text = this.refs.resolution.value.trim();

    Meteor.call('addResolution', text, () => {
      this.refs.resolution.value = '';
    });
  }

  render() {
    return (
      <form className='new-resolution' onSubmit={this.addResolution.bind(this)}>
        <input
          type='text'
          ref='resolution'
          placeholder='Finish React Meteor Series'
        />
      </form>
    )
  }
}
