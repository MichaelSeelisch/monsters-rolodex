import React, {Component} from 'react';

// TrackerReact not neccesarry, 'cause no pulling of data into the component
export default class ResolutionsForm extends Component {
  addResolution(event) {
    // Prevent page from refreshing
    event.preventDefault();
    // trim = remove breaks
    var text = this.refs.resolution.value.trim();

    if(text) {
      Meteor.call('addResolution', text, (error, data) => {
        if(error) {
          Bert.alert('Please login before submitting', 'danger', 'fixed-top', 'fa-frown-o');
        }
        else {
          this.refs.resolution.value = '';
        }
      });
    }
    else {
      Bert.alert('Please enter a string before submitting', 'danger', 'fixed-top', 'fa-frown-o');
    }
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
