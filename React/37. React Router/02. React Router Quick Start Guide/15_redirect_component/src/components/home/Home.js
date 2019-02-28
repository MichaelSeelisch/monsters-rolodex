import React, { Component } from 'react';
import  { Redirect } from 'react-router-dom';

export class HomeComponent extends Component {
    render() {
        const { match } = this.props;

        return (
            <div>
                <Redirect
                    to={{
                        pathname: '/dashboard',
                        search: '?q=1',
                        hash: '#hash',
                        state: { from: match.url }
                  }}
                />

                Inside Home route
            </div>
        )
    }
}

export default HomeComponent;
