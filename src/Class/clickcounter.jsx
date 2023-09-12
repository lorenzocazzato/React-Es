import React from "react";

export default class ClickCounter extends React.Component {
  state = {
    counter: 0,
  };

  handleCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleCounter}>+1</button>
      </div>
    );
  }
}
