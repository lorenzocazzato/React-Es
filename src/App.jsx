import "./App.css";
import Hello from "./Class/Hello";
import Message from "./Class/Message";
import Welcome from "./Class/Welcome";

function App() {
  const jsxExpression = <strong>Lorenzo</strong>;
  return (
    <>
      <Welcome name={jsxExpression} age={25} />
    </>
  );
}

export default App;
