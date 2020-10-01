import React, { useEffect, useState } from "react";
import "./App.css";
import Child from "./Child";

const App = () => {
  const [value, setValue] = useState("");
  const getTitle = (title) => {
    console.log("Title", title);
    setValue(title);
  };
  return (
    <div className="App">
      <Child getTitle={getTitle} />
      <h1>{value}</h1>
    </div>
  );
};

export default App;
