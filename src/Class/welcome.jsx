import React from "react";
import Age from "./age";

export default class Welcome extends React.Component {
  render() {
    const { name } = this.props;

    return (
      <p>
        Welcome {name}, <Age age={25} />
      </p>
    );
  }
}
