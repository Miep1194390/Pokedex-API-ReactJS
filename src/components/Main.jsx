import React, { useState, useEffect } from "react";
import "../App.css";
import Fetcher from "./Fetcher";
import Searchbar from "./Searchbar";
import PokemonList from "./PokemonList";
import PokemonRandom from "./PokemonRandom";

const Main = () => {
  return (
    <div className="mainContainer">
      <header className="headerOuter">
        <span className="fontfooter">@Miep1194390 - &copy;2023</span>
      </header>
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
