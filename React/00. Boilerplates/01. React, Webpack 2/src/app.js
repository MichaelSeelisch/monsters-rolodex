import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <h1 style={styles.headline}>Boilerplate: React, Webpack 2</h1>
    );
  }
};

export default App;

const styles = {
  headline: {
    fontFamily: 'Verdana',
    color: '#FF0000'
  }
};