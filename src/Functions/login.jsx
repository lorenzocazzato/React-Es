import { useState } from "react";
import { useEffect } from "react";

export default function Login() {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setLogin((prevLogin) => ({
      ...prevLogin,
      [name]: value,
    }));
  }

  function handleReset() {
    setLogin({
      username: "",
      password: "",
    });
  }

  function handleLogin() {
    return console.log(login);
  }

  useEffect(() => {
    console.log(login);
  }, [login]);

  return (
    <div>
      <form id="form">
        <label htmlFor="namein">Nome</label>
        <input
          type="text"
          onChange={handleInputChange}
          name="username"
          value={login.username}
        />

        <label htmlFor="passin">Password</label>

        <input
          type="password"
          onChange={handleInputChange}
          name="password"
          value={login.password}
        />
        <button
          id="buttsubmit"
          disabled={!login.username || !login.password}
          onClick={handleLogin}
        >
          Login
        </button>
        <button onClick={handleReset}>Reset</button>
      </form>
    </div>
  );
}
