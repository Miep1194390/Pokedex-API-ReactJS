import React, { useState, useEffect } from "react";
import "../App.css";
import Fetcher from "./Fetcher";
import Searchbar from "./Searchbar";

const Main = () => {
  return (
    <div className="mainContainer">
      <Searchbar></Searchbar>
      <div className="mainOuterContainer">
        <div className="mainInnerContainer">
          <Fetcher></Fetcher>
        </div>
      </div>
    </div>
  );
};

export default Main;
