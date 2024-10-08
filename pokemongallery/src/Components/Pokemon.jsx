import React from 'react';

const Pokemon = ({ name, img, types }) => {
  return (
    <div className="pokemon-card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>Types: {types.join(', ')}</p>
    </div>
  );
};

export default Pokemon;
