import React from "react";

export default class CounterDisplay extends React.Component {
  render() {
    const { count } = this.props;
    return <h1>Count: {count}</h1>;
  }
}
