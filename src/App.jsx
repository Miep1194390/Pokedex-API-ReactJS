import { useState } from "react";
import "./App.css";
import Fetcher from "./components/Fetcher";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Main></Main>
      <Fetcher></Fetcher>
    </div>
  );
};

export default App;
