import React from "react";
import Age from "./age";

export default class Welcome extends React.Component {
  render() {
    const { nome } = this.props;

    return (
      <p>
        Welcome {nome}, <Age age={25} />
      </p>
    );
  }
}
