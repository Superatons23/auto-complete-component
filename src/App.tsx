import React, { useEffect, useState } from "react";
import { getAllCountries } from "./api";
import "./App.css";
import AutoComplete from "./components/AutoComplete";
import { ICountry } from "./interfaces/interfaces";

function App() {
  const [countries, setCountries] = useState<ICountry[]>([]);

  useEffect(() => {
    const getCountries = async () => {
      const response = await getAllCountries();
      setCountries(response);
    };
    getCountries();
  }, []);
  return (
    <div className="App">
      <div className="container-auto-complete">
        <h2>Auto-complete component</h2>
        <AutoComplete countries={countries} />
      </div>
    </div>
  );
}

export default App;
