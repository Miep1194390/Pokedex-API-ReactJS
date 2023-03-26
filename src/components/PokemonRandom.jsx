import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

const PokemonRandom = () => {
  const [pokemon, setPokemon] = useState([null]);
  const [pokemonRaad, setPokemonRaden] = useState('');

  useEffect(() => {

    const RandomNumber = Math.floor(Math.random() * 150) + 1;

    axios.get(`https://pokeapi.co/api/v2/pokemon/${RandomNumber}`)
      .then(response => setPokemon(response.data))
      .catch(err => console.log(err));

  }, []);

  if (pokemonRaad === pokemon.name) {
    alert('Goed geraden!');
    window.location.reload();


  }
  return (
    <div>
      <div className="quizOuterContainer">
        <div className="quizInnerContainer">
          <div>
            <h1 className="font-p2">Who's that Pokemon?</h1>
            {/* <h1 className="font-p">{pokemon.name}</h1> */}
            <img className="pokemonImgRandom" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} />
            <div className="inputOuter">
              <input type="text" id="pokemonRaad" className="nes-input" value={pokemonRaad} onChange={(e) => setPokemonRaden(e.target.value)} />
            </div>
          </div>
        </div>
      </div>
    </div>

  );


};

export default PokemonRandom;
