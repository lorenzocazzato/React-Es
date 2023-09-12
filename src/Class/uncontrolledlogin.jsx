import React, { Component } from "react";

export default class UncontrolledLogin extends Component {
  constructor(props) {
    super(props);
    this.usernameInputRef = React.createRef();
    this.passwordInputRef = React.createRef();

    this.state = {
      isDisabled: true,
    };
  }

  handleLogin = () => {
    const username = this.usernameInputRef.current.value;
    const password = this.passwordInputRef.current.value;
  };

  handleReset = () => {
    this.usernameInputRef.current.value = "";
    this.passwordInputRef.current.value = "";

    this.setState({ isDisabled: true });
  };

  handleInputChange = () => {
    const username = this.usernameInputRef.current.value;
    const password = this.passwordInputRef.current.value;
    this.setState({ isDisabled: !username || !password });
  };

  render() {
    return (
      <div>
        <form id="form">
          <label htmlFor="namein">Nome</label>
          <input
            id="namein"
            type="text"
            name="username"
            ref={this.usernameInputRef}
            onChange={this.handleInputChange}
          />

          <label htmlFor="passin">Password</label>
          <input
            id="passin"
            type="password"
            name="password"
            ref={this.passwordInputRef}
            onChange={this.handleInputChange}
          />

          <button
            id="buttsubmit"
            onClick={this.handleLogin}
            disabled={this.state.isDisabled}
          >
            Login
          </button>
          <button onClick={this.handleReset}>Reset</button>
        </form>
      </div>
    );
  }
}
