import React from "react";
import ClickCounter from "./Functions/cliccounter";
import { Counter } from "./Functions/counter";
import { GithubUser } from "./Functions/githubuser";
import { GithubUserList } from "./Functions/githubuserlist";

import Login from "./Functions/login";

const handleCounterChange = (counter) => {
  console.log("Counter is now :", counter);
};
function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
