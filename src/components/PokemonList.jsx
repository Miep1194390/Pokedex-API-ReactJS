import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../App.css";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0');
      setPokemonList(response.data.results);
    };

    fetchPokemonList();
  }, []);

  return (
    <div className='pokemonListOuter'>
    <div className='pokemonList'>
      {pokemonList.map(pokemon => (
        <div key={pokemon.name}>
          <h1 className='pokemonNameList'>{pokemon.name}</h1>
          <img className='pokemonImg' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`} alt={pokemon.name} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default PokemonList;
