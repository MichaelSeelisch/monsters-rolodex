import React, { Component, PropTypes } from 'react';

import ContactList from './ContactList';
import SearchBar from './SearchBar';

class ContactsApp extends Component {

  constructor() {
    super(...arguments);
    this.state = {
      contacts: this.props.initialData || [],
      filterText: ''
    }

    this._handleUserInput = this._handleUserInput.bind(this);
  }

  _handleUserInput(searchTerm) {
    this.setState({
      filterText: searchTerm
    })
  }

  render() {
    return(
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onUserInput={this._handleUserInput} />

        <ContactList
          contacts={this.state.contacts}
          filterText={this.state.filterText} />
      </div>
    )
  }
}

ContactsApp.PropTypes = {
  initialData: PropTypes.any
}

export default ContactsApp;
