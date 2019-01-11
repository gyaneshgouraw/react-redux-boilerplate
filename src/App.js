import React, { Component } from "react";
import Container from "./module1/Container";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Container />
      </div>
    );
  }
}
