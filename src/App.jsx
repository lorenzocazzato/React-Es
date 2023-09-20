import React from "react";
import { CarDetails } from "./Functions/cardetails";
import { GithubUser } from "./Functions/githubuser";
import { Form } from "./Functions/useForm";
import { useState } from "react";

function App() {
  const [carData, setCarData] = useState({
    model: "Fiat",
    year: "2023",
    color: "Black",
  });
  const handleReset = () => {
    setCarData({
      model: "",
      year: "",
      color: "",
    });
  };

  return (
    <div>
      <CarDetails initialData={carData} />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
