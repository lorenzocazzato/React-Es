import React from "react";

export default class Age extends React.Component {
  render() {
    const { age } = this.props;

    return <p> {age > 18 ? `Your age is ${age}` : "You are very young!"}</p>;
  }
}
