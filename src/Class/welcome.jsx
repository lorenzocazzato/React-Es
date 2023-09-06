import React from "react";

export default class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Your Age is:</p>
        <p>{this.props.age}</p>
      </div>
    );
  }
}
