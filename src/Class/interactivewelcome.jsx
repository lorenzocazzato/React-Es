import React from "react";
import Welcome from "./welcome";

export default class InteractiveWelcome extends React.Component {
  state = {
    nome: " ",
  };

  handleInput = (event) => {
    this.setState({ nome: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.nome}
          onChange={this.handleInput}
        />
        <Welcome nome={this.state.nome} />
      </div>
    );
  }
}
