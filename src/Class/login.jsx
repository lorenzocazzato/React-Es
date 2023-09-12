import React from "react";

export default class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleLogin = () => {
    const { username, password } = this.state;
    this.props.onLogin({ username, password });
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
            onChange={this.handleInputChange}
          />

          <label htmlFor="passin">Password</label>
          <input
            id="passin"
            type="password"
            name="password"
            onChange={this.handleInputChange}
          />
          <button
            id="buttsubmit"
            disabled={!this.state.username || !this.state.password}
            onClick={this.handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}
