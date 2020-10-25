import React, { Component } from "react";
import Container from "./module1/Container";
import Container2 from "./module2/Container";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>App Home</h1>
        <Container />
        <Container2 />
      </div>
    );
  }
}
