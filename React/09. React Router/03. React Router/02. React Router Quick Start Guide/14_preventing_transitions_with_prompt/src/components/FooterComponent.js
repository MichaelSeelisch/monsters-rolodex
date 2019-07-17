import React, { Component } from 'react';
import {
    Link,
    Route,
    withRouter
} from 'react-router-dom'

class FooterComponent extends Component {
    render() {
        return (
            <footer>
                In Footer
                <div>
                    <button
                        onClick={() =>
                        this.props.history.push('/user')}>
                        User
                    </button>
                    <button
                        onClick={() =>
                         this.props.history.push('/stocks')}>
                        Stocks
                    </button>

                    <br />

                    <Link to='subroute'>User</Link>

                    <br />

                    <Route
                        path='/subroute'
                        render={() => {
                            return <span>Inside Footer Subroute</span>
                        }} />
                </div>
            </footer>
        )
    }
}

export default withRouter(FooterComponent);
