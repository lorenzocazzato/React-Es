import React from "react";
import ClickCounter from "./Functions/cliccounter";
import { Counter } from "./Functions/counter";
import { GithubUser } from "./Functions/githubuser";

import Login from "./Functions/login";

const handleCounterChange = (counter) => {
  console.log("Counter is now :", counter);
};
function App() {
  return (
    <div>
      <GithubUser username="lorenzocazzato" />
    </div>
  );
}

export default App;
