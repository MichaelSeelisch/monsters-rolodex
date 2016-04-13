import React, {Component, PropTypes} from 'react';
import {render} from 'react-dom';

class ContactItem extends Component {
  render() {
    return <li>{this.props.name} - {this.props.email}</li>
  }
}

ContactItem.propTypes={
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
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
