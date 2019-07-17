import React, { PureComponent } from 'react';

export default class Item extends PureComponent {
    constructor (props) {
        super (props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onClick(this.props.item);
    }

    render() {
        return (
            <li onClick={this.handleClick}>{this.props.item}</li>
        )
    }
}
