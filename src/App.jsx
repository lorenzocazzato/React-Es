import React from "react";
import TodoList from "./Class/list";

function App() {
  return (
    <div>
      <TodoList
        render={(items, handleRemove) => (
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                {item}
                <button onClick={() => handleRemove(index)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      />
    </div>
  );
}

export default App;
