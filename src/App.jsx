import React from "react";
import { GithubUser } from "./Functions/githubuser";
import { Form } from "./Functions/useForm";

function App() {
  return (
    <div>
      <GithubUser username={"lorenzocazzato"} />
    </div>
  );
}

export default App;
