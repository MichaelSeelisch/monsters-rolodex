import React, { Component } from 'react';

export class DashboardComponent extends Component {
    render() {
        const { location } = this.props;

        return (
            <div>
                In DashboardComponent <br />
                From : { location.state.from }
            </div>
        )
    }
}

export default DashboardComponent;
