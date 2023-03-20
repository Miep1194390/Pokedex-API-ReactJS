import React, { useState } from 'react';
import axios from 'axios';
import "../App.css";


const Searchbar = () => {
  const [query, setQuery] = useState('');
  const [pokemons, setPokemons] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchPokemon();
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const searchPokemon = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`);
      setPokemons(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='pokemonListOuter'>
      <form onSubmit={handleSubmit}>
        <div className="nes-field">
          <label className="name_field">Pokemon Naam Of Nummer</label>
          <input type="text" id="name_field" className="nes-input" value={query} onChange={handleChange} />
        </div>
        <div className="buttonOuter">
          <button className='nes-btn' type="submit">Zoeken</button>
        </div>
      </form >
      {pokemons && pokemons.sprites && (
        <div>
          <div className='searchbarResultaat'>
            <div className="searchbarResultaatLeft">
              <h1 className='font'>{pokemons.name} </h1>
              <br />
              <h1 className='font'>Nummer: {pokemons.id}</h1>
              <br />
              <h1 className='font'>Lengte: {pokemons.height}</h1>
              <br />
              <h1 className='font'>Gewicht: {pokemons.weight}</h1>
              <br />
              <h1 className='font'>Abilities:</h1>
              {pokemons.abilities.map((ability) => (
                <li className='font' key={ability.ability.name}>{ability.ability.name}</li>
              ))}
            </div>
            <div className="searchbarResultaatRight">
              <img className='searchbarResultaatFoto' src={pokemons.sprites.front_default} alt={pokemons.name} />
            </div>
          </div>
        </div>

      )}
    </div >
  );
}

export default Searchbar;

