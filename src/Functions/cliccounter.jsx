import { useState, useEffect } from "react";

export default function ClickCounter() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter((counter) => counter + 1);
  }

  return (
    <div>
      <h3>{counter}</h3>
      <button onClick={handleClick}>+1</button>
    </div>
  );
}
