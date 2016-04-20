import React, {Component, PropTypes} from 'react';
import {render} from 'react-dom';

import ContactItem from './ContactItem';

// The ContactList
class ContactList extends Component {
  render() {
    let filterContacts = this.props.contacts.filter(
      (contact) => contact.name.indexOf(this.props.filterText) !== -1
    );

    return(
      <ul>
        {filterContacts.map(
          (contact) => <ContactItem key={contact.email}
                          name={contact.name}
                          email={contact.email} />
        )}
      </ul>
    )
  }
}

ContactList.propTypes={
  contacts: PropTypes.arrayOf(PropTypes.object)
}

module.exports = ContactList;
