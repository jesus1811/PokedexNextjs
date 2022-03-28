import axios from "axios";

export const getPokemon = () => {
  const data = axios.get("https://pokeapi.co/api/v2/pokemon?limit=400");
  return data;
};
export const getPokemonId = (id) => {
  const data = axios.get("https://pokeapi.co/api/v2/pokemon/" + id);
  return data;
};
