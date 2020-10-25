/**
 * NPM imports
 */
import React, { Component } from "react";
import { connect } from "react-redux";

/**
 * Container class starts
 */
class Container extends Component {
  constructor(props) {
    super();
    this.btnsubmit = this.btnsubmit.bind(this);
  }

  componentWillMount = () => {};

  /**
   *
   */
  btnsubmit = (groupObj) => {
    const data = "Module2";
    this.props.dispatch({
      type: "SET_VAL",
      data,
    });
  };

  render() {
    return (
      <div>
        <br />
        <h2>Module2</h2>
        <button onClick={this.btnsubmit}> Click Handler </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    module1: state,
  };
};

export default connect(
  mapStateToProps,
  null
)(Container);
