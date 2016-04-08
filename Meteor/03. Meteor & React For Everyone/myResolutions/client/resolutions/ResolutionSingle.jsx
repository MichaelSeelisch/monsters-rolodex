import React, {Component} from 'react';

// TrackerReact not neccesarry, 'cause no pulling of data into the component
export default class ResolutionsSingle extends Component {
  render() {
    return (
      <li>
        {this.props.resolution.text}
        {this.props.resolution.complete.toString()}
      </li>
    )
  }
}
