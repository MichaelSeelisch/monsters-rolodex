import React, {Component} from 'react';

// TrackerReact not neccesarry, 'cause no pulling of data into the component
export default class ResolutionsSingle extends Component {
  toggleChecked() {
    Meteor.call('toggleResolution', this.props.resolution);
  }

  deleteResolution() {
    Meteor.call('deleteResolution', this.props.resolution);
  }

  render() {
    const resolutionClass = this.props.resolution.complete ? 'checked' : '';
    const status = this.props.resolution.complete ? <span className='completed'>Completed</span> : '';

    return (
      <li className={resolutionClass}>
        <input
          type='checkbox'
          readOnly={true}
          checked={this.props.resolution.complete}
          onClick={this.toggleChecked.bind(this)}
        />
        {this.props.resolution.text}
        {/* this.props.resolution.complete.toString() */}
        {status}
        <button
          className='btn-cancel'
          onClick={this.deleteResolution.bind(this)}
        >&times;
        </button>
      </li>
    )
  }
}
