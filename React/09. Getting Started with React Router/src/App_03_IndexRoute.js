import React from 'react';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';

const Outer = (props) => <div><h1>Our Site</h1><Links />{ props.children }</div>;
const About = () => <div><h1>About</h1><Links /></div>;
const Contact = () => <div><h1>Contact</h1><Links /></div>;

const Links = () =>
  <nav>
    <Link activeStyle={{ color: 'green'}} to="/">Home</Link>
    <Link activeStyle={{ color: 'green'}} to="/about">About</Link>
    <Link activeClassName='active' to="/contact">Contact</Link>
  </nav>

class App extends React.Component {
  render() {
    return (
      <Router history={ browserHistory }>
        <Route path="/" component={ Outer }>
          <IndexRoute component={ About }></IndexRoute>
          <Route path="contact" component={ Contact }></Route>
        </Route>
      </Router>
    );
  }
}

export default App;
