import React, {Component, PropTypes} from 'react';
import {render} from 'react-dom';

class ContactList extends Component {
  render() {
    return(
      <ul>
        {this.props.contacts.map(
          (contact) => <ContactItem
                          key={contact.email}
                          name={contact.name}
                          email={contact.email}
                        />
        )}
      </ul>
    )
  }
}

ContactList.propTypes={
  contacts: PropTypes.arrayOf(PropTypes.object)
}
