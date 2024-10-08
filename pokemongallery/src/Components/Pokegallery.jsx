import React from 'react';
import Pokemon from './Pokemon';

const Pokegallery = () => {
  const pokemons = [
    { name: "Pikachu", img: "https://img.pokemondb.net/artwork/pikachu.jpg", types: ["Electric"] },
    { name: "Charmander", img: "https://img.pokemondb.net/artwork/charmander.jpg", types: ["Fire"] },
    { name: "Bulbasaur", img: "https://img.pokemondb.net/artwork/bulbasaur.jpg", types: ["Grass", "Poison"] },
    { name: "Squirtle", img: "https://img.pokemondb.net/artwork/squirtle.jpg", types: ["Water"] },
    { name: "Jigglypuff", img: "https://img.pokemondb.net/artwork/jigglypuff.jpg", types: ["Fairy", "Normal"] },
    { name: "Eevee", img: "https://img.pokemondb.net/artwork/eevee.jpg", types: ["Normal"] },
    { name: "Gengar", img: "https://img.pokemondb.net/artwork/gengar.jpg", types: ["Ghost", "Poison"] },
    { name: "Snorlax", img: "https://img.pokemondb.net/artwork/snorlax.jpg", types: ["Normal"] },
    { name: "Mewtwo", img: "https://img.pokemondb.net/artwork/mewtwo.jpg", types: ["Psychic"] },
    { name: "Charizard", img: "https://img.pokemondb.net/artwork/charizard.jpg", types: ["Fire", "Flying"] },
    { name: "Lucario", img: "https://img.pokemondb.net/artwork/lucario.jpg", types: ["Fighting", "Steel"] },
    { name: "Lapras", img: "https://img.pokemondb.net/artwork/lapras.jpg", types: ["Water", "Ice"] }
  ];

  return (
    <div className="pokegallery">
      {pokemons.map((pokemon, index) => (
        <Pokemon key={index} name={pokemon.name} img={pokemon.img} types={pokemon.types} />
      ))}
    </div>
  );
};

export default Pokegallery;
