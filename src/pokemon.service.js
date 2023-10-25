const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

export const getPokemonByName = (pokemonName) =>
  fetch(`${API_URL}${pokemonName}`)
    .then((res) => res.json())
    .catch((e) => console.log(e));
