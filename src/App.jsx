import React from "react";
import ClickCounter from "./Functions/cliccounter";

import Login from "./Functions/login";

const handleCounterChange = (counter) => {
  console.log("Counter is now :", counter);
};
function App() {
  return (
    <div>
      <ClickCounter onCounterChange={handleCounterChange} />
    </div>
  );
}

export default App;
