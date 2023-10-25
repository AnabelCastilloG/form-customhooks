import React, { useState, useEffect } from 'react';

import Searcher from './components/Searcher';
import Pokemon from './components/Pokemon';

import { useFetch } from './hooks/useFetch';

import './style.css';
// import { getPokemonByName } from './services/pokemon.service.js';

const App = () => {
  const {loading, data:pokemon, fetchByName} = useFetch();
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (inputValue.length > 0) {
      fetchByName(inputValue);
    }
  }, [inputValue]);

  // const findPokemon = () => inputValue.length > 0 && fetchByName(inputValue);

  return (
    <div>
      <Pokemon loading={loading} pokemon={pokemon} />
      {/* 
      <Searcher inputValue={inputValue} setInputValue={setInputValue} />
      <div>
        <button onClick={findPokemon}>Encontrar pokemon</button>
      </div> */}
    </div>
  );
};

export default App;
