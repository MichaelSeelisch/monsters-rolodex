import React, { Component } from 'react';
import {
    BrowserRouter,
    Link,
    Prompt,
    Route
} from 'react-router-dom';

import ConfirmationDialog from './components/DialogBox';
import './App.css';

class App extends Component {
    state = {
        showConfirmationDialog: false,
        message: '',
        callback: null
    }

    userConfirmationFunc = (message, callback) => {
        this.setState({
            showConfirmationDialog: true,
            message: message,
            callback: callback
        });
    }

    handleClose(status) {
        this.state.callback(status);
        this.setState({
            showConfirmationDialog: false,
            message: '',
            callback: null
        })
    }

    render() {
        return (
            <BrowserRouter
                basename="/admin"
                keyLength={10}
                getUserConfirmation={ this.userConfirmationFunc }>

                <div className="container">
                    <nav>
                        <Link to="/">Home</Link>&nbsp;|&nbsp;
                        <Link to="/dashboard">Dashboard</Link>&nbsp;|&nbsp;
                        <Link to="/user">User</Link>
                    </nav>

                    <Route
                        path="/"
                        render={ () => <div> Inside Home </div> }
                        exact
                    />

                    <Route
                        path="/dashboard"
                        render={({ location }) =>
                        <div> In Dashboard, Location Key: {location.key} </div>
                        }
                    />

                    <Route
                        path="/user"
                        render={({ location }) =>
                        <div>
                            In User, Location Key: {location.key}
                            <Prompt message="This is shown in a confirmation modal" />
                        </div>
                        }
                    />

                    <ConfirmationDialog
                        isOpen={this.state.showConfirmationDialog}
                        message={this.state.message}
                        handleClose={this.handleClose.bind(this)}
                    />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
