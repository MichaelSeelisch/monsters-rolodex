import React, { Component } from 'react';

class GitHubComponent extends Component {
    render() {
        const { match: { params } } = this.props;
        console.log(this.props);

        return (
            <div>
                In GitHubComponent <br />
                GitHub ID - { params.githubID } <br />
                Twitter ID - { params.twitterID } <br />
                Gitlab ID - { params.gitlabID }
            </div>
        )
    }
}

export default GitHubComponent;
