import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: this.props.iniziale };

    setInterval(() => {
      this.setState((primoState) => {
        return { count: primoState.count + this.props.incremento };
      });
    }, this.props.intervallo);
  }

  render() {
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
      </div>
    );
  }
}
