import "./App.css";
import Login from "./Class/login";

function App() {
  const handleLogin = (login) => {
    console.log(login);
  };

  return (
    <>
      <Login onLogin={handleLogin} />
    </>
  );
}

export default App;
