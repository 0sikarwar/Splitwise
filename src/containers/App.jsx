import React, { Component } from "react";
import { connect } from "react-redux";

import { test } from "./action";
class App extends Component {
  handle = () => {
    this.props.test("sdfggfdsdf");
  };
  render() {
    return (
      <p className="abc" onClick={this.handle}>
        This is y new react app
      </p>
    );
  }
}

export default connect(null, {
  test
})(App);
