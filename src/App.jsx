import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Counter } from "./Functions/counter";
import { ShowGitUser } from "./Functions/showgituser";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>|<Link to="/counter">Counter</Link>|
        <Link to="users/lorenzocazzato">Vai al nome</Link>
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route
            path="/"
            element={<Link to="users/lorenzocazzato">GitUser</Link>}
          />

          <Route path="users/:username" element={<ShowGitUser />} />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
