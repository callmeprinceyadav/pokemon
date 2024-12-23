// utils/types.ts

export interface Pokemon {
    id: number;
    name: string;
    types: string[];
    sprite: string;
  }
  
  export interface PokemonApiResponse {
    results: Array<{
      name: string;
      url: string;
    }>;
  }
  