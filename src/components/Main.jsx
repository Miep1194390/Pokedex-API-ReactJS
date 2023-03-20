import React, { useState, useEffect } from "react";
import "../App.css";
import Fetcher from "./Fetcher";
import Searchbar from "./Searchbar";
import PokemonList from "./PokemonList";

const Main = () => {
  return (
    <div className="mainContainer">
      <div className="Spacer">
        <header className="headerOuter">
          <span className="fontfooter">@Miep1194390 - &copy;2023</span>
        </header>
      </div>
      <div className="Spacer"></div>
      <div className="Spacer"></div>
      <div className="mainOuterContainer">
        <div className="mainInnerContainer">
          <Fetcher></Fetcher>
        </div>
      </div>
      <div>
        <div className="Spacer"></div>
        <div className="Spacer"></div>
        <Searchbar></Searchbar>
        <div className="Spacer"></div>
      </div>
    </div>
  );
};

export default Main;
