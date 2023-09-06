import "./App.css";
import Hello from "./Class/Hello";
import Message from "./Class/Message";
import Welcome from "./Class/Welcome";
import Counter from "./Class/counter";

function App() {
  const jsxExpression = <strong>Lorenzo</strong>;
  return (
    <>
      <Counter incremento={1} iniziale={0} intervallo={1000} />
    </>
  );
}

export default App;
