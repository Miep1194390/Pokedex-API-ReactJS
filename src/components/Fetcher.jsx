import React, { useState, useEffect } from "react";

function Fetcher() {
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonImages, setPokemonImages] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const data = await response.json();
      setPokemonData(data.results);
    }
    fetchData();
  }, []);

  async function fetchPokemonData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    async function fetchImages() {
      const images = {};
      for (const pokemon of pokemonData) {
        const data = await fetchPokemonData(pokemon.url);
        images[pokemon.name] = data.sprites.front_default;
      }
      setPokemonImages(images);
    }
    if (pokemonData.length > 0) {
      fetchImages();
    }
  }, [pokemonData]);

  return (
    <div>
      <ul>
        {pokemonData.map((pokemon) => (
          <li key={pokemon.name}>
            {pokemon.name}
            {pokemonImages[pokemon.name] && (
              <img src={pokemonImages[pokemon.name]} alt={pokemon.name} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Fetcher;
