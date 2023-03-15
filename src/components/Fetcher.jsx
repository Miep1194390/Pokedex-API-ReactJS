import React, { useState, useEffect } from "react";
import "../App.css";

function Fetcher() {
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonImages, setPokemonImages] = useState({});
  const [currentPokemonIndex, setCurrentPokemonIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const data = await response.json();
      setPokemonData(data.results);
    }
    fetchData();
  }, []);

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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPokemonIndex((currentPokemonIndex + 1) % pokemonData.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentPokemonIndex, pokemonData.length]);

  async function fetchPokemonData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  return (
    <div>
      {pokemonData.length > 0 && (
        <div>
          <h1>{pokemonData[currentPokemonIndex].name}</h1>
          {pokemonImages[pokemonData[currentPokemonIndex].name] && (
            <img src={pokemonImages[pokemonData[currentPokemonIndex].name]} alt={pokemonData[currentPokemonIndex].name} />
          )}
        </div>
      )}
    </div>
  );
}

export default Fetcher;