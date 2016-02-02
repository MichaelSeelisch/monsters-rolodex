import React from 'react';
import ContactsList from './ContactsList';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Contacts List</h1>
                <ContactsList />
            </div>
        )
    }
}

React.render(<App />, document.getElementById('app'));