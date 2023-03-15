import React, { useState, useEffect } from "react";
import "../App.css";
import Fetcher from "./Fetcher";

const Main = () => {
  return <div className="mainContainer">
    <div className="mainInnerContainer"><Fetcher></Fetcher></div>
  </div>;
};

export default Main;
