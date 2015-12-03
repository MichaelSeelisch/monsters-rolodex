import React from 'react';
import { Link }  from 'react-router';
import ContactList from './ContactList';

export default React.createClass({
  returnSomething(something) {
    //this is only for testing purposes. Check /test/components/App-test.js
    return something;
  },
  render() {
    var body = (
      <ContactList />
    );
    
    if(this.props.children) {
      body = this.props.children;
    }

    return (
      <div>
        <header>
          <h1>Contact List</h1>
          <Link to="/about">About</Link>
        </header>
        <main>
          {body}
        </main>
      </div>
    )
  }
});
