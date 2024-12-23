import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

export const fetchPokemon = async () => {
  const response = await api.get('/pokemon?limit=151');
  return response.data.results;
};

export const fetchPokemonTypes = async () => {
  const response = await api.get('/type');
  return response.data.results;
};
