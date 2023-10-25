import React, { useState, useEffect } from 'react';
import { getPokemonByName } from '../services/pokemon.service.js';

export const usePokeFetch = () => {
  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState(null);

  const fetchPokemon = (pokemonName) => {
    if (pokemonName.length >= 1) {
      setLoading(true);
      getPokemonByName(pokemonName).then((response) => {
        setPokemon(response);
        setLoading(false);
      });
    }
  };

  return { loading, pokemon, fetchPokemon };
};
