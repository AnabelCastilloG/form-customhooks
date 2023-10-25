import React from 'react';

const Pokemon = ({ loading, pokemon }) =>
  loading ? (
    <p>Cargando...</p>
  ) : (
    <div>
      <img src={pokemon?.sprites.other.dream_world.front_default} />
    </div>
  );

export default Pokemon;
