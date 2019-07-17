import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import PropTypes from 'prop-types';

class App extends Component {
    static async getInitialProps() {
        const url = 'https://api.github.com/users/gaearon/gists';
        const response = await fetch(url);
        const gists = await response.json();

        return { gists };
    }

    render() {
        return (
            <ul>
                { this.props.gists.map(gist => (
                    <li key={ gist.id }>{ gist.description }</li>
                ))}
            </ul>
        )
    }
}

App.propTypes = {
    gists: PropTypes.array
}

export default App;