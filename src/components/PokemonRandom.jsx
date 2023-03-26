import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

const PokemonRandom = () => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {

        const RandomNumber = Math.floor(Math.random() * 150) + 1;

        axios.get(`https://pokeapi.co/api/v2/pokemon/${RandomNumber}`)
            .then(res => setPokemon(response.data))
            .catch(err => console.log(werktniet));
            
    }, []);


  return (
    <div>
      <div className="quizOuterContainer">
        <div className="quizInnerContainer">
            <div>
              <h1 className="font-p">Who's that Pokemon?</h1>
              <input type="text" id="name_field" className="nes-input" />
            </div>
        </div>
      </div>
    </div>
    );

};

export default PokemonRandom;
