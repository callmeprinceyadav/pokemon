import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Pokemon, PokemonApiResponse } from '../utils/types';

const fetchPokemon = async (): Promise<Pokemon[]> => {
  const response = await axios.get<PokemonApiResponse>('https://pokeapi.co/api/v2/pokemon?limit=151');
  const pokemonList = response.data.results;

  const pokemonWithTypes = await Promise.all(
    pokemonList.map(async (pokemon, index) => {
      const pokemonDetails = await axios.get(pokemon.url);
      console.log("pokemonDetails", pokemonDetails);
      return {
        id: index + 1,
        name: pokemon.name,
        types: pokemonDetails.data.types.map((typeInfo: any) => typeInfo.type.name),
        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
      };
    })
  );

  return pokemonWithTypes;
};

export const usePokemon = () => {
  return useQuery<Pokemon[], Error>({
    queryKey: ['pokemon'],
    queryFn: fetchPokemon
  });
};
