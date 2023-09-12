import React from "react";

export default class ClickTracker extends React.Component {
  state = {
    lastClicked: " ",
  };

  handleTracking = (event) => {
    this.setState({ lastClicked: event.target.innerText });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleTracking}>Click1</button>
        <button onClick={this.handleTracking}>Click2</button>
        <button onClick={this.handleTracking}>Click3</button>
        <h1>Last Clicked: {this.state.lastClicked}</h1>
      </div>
    );
  }
}
