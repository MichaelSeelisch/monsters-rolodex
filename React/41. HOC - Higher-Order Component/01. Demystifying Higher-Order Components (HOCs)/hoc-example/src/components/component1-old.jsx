import React, { Component } from "react";

class Component1 extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "black" };
  }

  changeColor = () => {
    this.setState({ color: "pink" });
  };

  restoreColor = () => {
    this.setState({ color: "black" });
  };

  render() {
    var { color } = this.state;
    return (
      <h1
        style={{ color }}
        onMouseEnter={this.changeColor}
        onMouseLeave={this.restoreColor}
      >
        Component 1
      </h1>
    );
  }
}

export default Component1;