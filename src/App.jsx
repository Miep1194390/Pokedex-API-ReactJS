import { useState } from "react";
import "./App.css";
import Fetcher from "./components/Fetcher";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Fetcher></Fetcher>
    </div>
  );
};

export default App;
