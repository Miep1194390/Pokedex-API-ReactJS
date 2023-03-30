import React, { useState, useEffect } from "react";
import "../App.css";
import Fetcher from "./Fetcher";
import Searchbar from "./Searchbar";
import PokemonList from "./PokemonList";
import PokemonRandom from "./PokemonRandom";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import GitHub from "./GitHub";
import Layout from "./Layout";

const Main = () => {
  return (
    <div className="mainContainer">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="GitHub" element={<GitHub />} />
          </Route>
        </Routes>
      </BrowserRouter>
      

      <div className="Spacer"></div>
      <div className="Spacer"></div>
      <div className="Spacer"></div>
      <Fetcher></Fetcher>
      <div>
        <div className="Spacer"></div>
        <div className="Spacer"></div>
        <Searchbar></Searchbar>
      </div>
      <PokemonRandom></PokemonRandom>
    </div>
  );
};

export default Main;
