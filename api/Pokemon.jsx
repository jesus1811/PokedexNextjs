import axios from "axios";

export const getPokemon = () => {
  const response = axios.get("https://pokeapi.co/api/v2/pokemon?limit=200");
  return response;
};
export const getPokemonId = (id) => {
  const response = axios.get("https://pokeapi.co/api/v2/pokemon/" + id);
  return response;
};
