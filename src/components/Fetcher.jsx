import React, { useState, useEffect } from "react";
import "../App.css";

function Fetcher() {
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonImages, setPokemonImages] = useState({});
  const [currentPokemonIndex, setCurrentPokemonIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0");
      const data = await response.json();
      const pokemonData = await Promise.all(data.results.map(async pokemon => {
        const response = await fetch(pokemon.url);
        return response.json();
      }));
      setPokemonData(pokemonData);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchImages() {
      const images = {};
      for (const pokemon of pokemonData) {
        images[pokemon.name] = pokemon.sprites.front_default;
      }
      setPokemonImages(images);
    }
    if (pokemonData.length > 0) {
      fetchImages();
    }
  }, [pokemonData]);

  useEffect(() => {
    const intervalletje = setInterval(() => {
      setCurrentPokemonIndex((currentPokemonIndex + 1) % pokemonData.length);
    }, 3000);
    return () => clearInterval(intervalletje);
  }, [currentPokemonIndex, pokemonData.length]);

  return (
    <div>
      {pokemonData.length > 0 && (
        <div>
          <div className="pokemonNameOuter"><h1 className="pokemonName">{pokemonData[currentPokemonIndex].name}</h1></div>
          <div className="fetcherImgOuter">
            <img
              className="fetcherImg"
              src={pokemonImages[pokemonData[currentPokemonIndex].name]}
              alt={pokemonData[currentPokemonIndex].name}
            />
          </div>
          <div className="pokemonNummerOuter">
            <p className="pokemonNummer">Nmmr: {pokemonData[currentPokemonIndex].id}</p>
          </div>
          <div className="pokemonNummerOuter">
            <p className="pokemonNummer">Type: {pokemonData[currentPokemonIndex].types.map(type => type.type.name).join(", ")}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Fetcher;