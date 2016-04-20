import React, {Component, PropTypes} from 'react';
import {render} from 'react-dom';

import SearchBar from './SearchBar';
import ContactList from './ContactList';

// Main component. Renders a SearchBar and a Contact-List
class ContactsApp extends Component {
  constructor() {
    super();
    this.state={
      filterText:''
    };
  }
  handleUserInput(searchTerm) {
    this.setState({filterText: searchTerm})
  }
  render() {
    return(
      <div>
        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)} />
        <ContactList contacts={this.props.contacts} filterText={this.state.filterText} />
      </div>
    )
  }
}

ContactsApp.propTypes={
  contacts: PropTypes.arrayOf(PropTypes.object)
}

let contacts = [
  {
    name: "Cassio Zen",
    email: "cassiozen@gmail.com"
  },
  {
    name: "Dan Abramov",
    email: "gaeron@somewhere.com"
  },
  {
    name: "Pete Hunt",
    email: "floydophone@somewhere.com"
  },
  {
    name: "Paul O’Shannessy",
    email: "zpao@somewhere.com"
  },
  {
    name: "Ryan Florence",
    email: "rpflorence@somewhere.com"
  },
  {
    name: "Sebastian Markbage",
    email: "sebmarkbage@here.com"
  }
]

render(
  <ContactsApp contacts={contacts} />,
  document.getElementById('root')
);
