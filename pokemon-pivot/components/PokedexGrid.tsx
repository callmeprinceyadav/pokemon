import React, { useState, useEffect } from "react";
import { usePokemon } from "../hooks/usePokemon";
import PokemonCard from "./PokemonCard";
import { useInView } from "react-intersection-observer";

const PokedexGrid: React.FC = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("id");
  const [filterType, setFilterType] = useState("");
  const limit = 20;

  const { data: pokemonList, error, isLoading } = usePokemon();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  console.log(page);
  console.log(inView);
  useEffect(() => {
    setPage(1);
  }, [searchTerm, sortOption, filterType]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {Array.from({ length: limit }).map((_, index) => (
            <div key={index} className="animate-pulse flex flex-col space-x-4">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-pulse">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-300 rounded"></div>
                <p className="text-center text-gray-300 mb-2"></p>
                <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto mb-4"></div>
                <div className="text-center space-x-2">
                  <span className="inline-block bg-gray-300 rounded px-7 py-1 text-sm font-semibold">
                    &nbsp;
                  </span>
                  <span className="inline-block bg-gray-300 rounded px-7 py-1 text-sm font-semibold">
                    &nbsp;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-xl text-red-500">
        Error loading Pokemon data: {error.message}
      </div>
    );
  }

  const filteredPokemon = pokemonList?.filter(
    (pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterType ? pokemon.types.includes(filterType) : true)
  );

  const sortedPokemon = filteredPokemon?.sort((a, b) => {
    if (sortOption === "name") {
      return a.name.localeCompare(b.name);
    }
    if (sortOption === "id") {
      return a.id - b.id;
    }
    return 0;
  });

  return (
    <div className="mx-auto px-4  max-w-screen-2xl">
      <div className="flex flex-col sm:flex-row sm:justify-between px-4 space-y-4 sm:space-y-0">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border border-yellow-400 rounded-lg w-full sm:w-auto bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-400 custom-placeholder"
        />

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="px-4 py-2 border border-blue-400 rounded-lg w-full sm:w-auto bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Sorting</option>
          <option value="id">Sort by ID</option>
          <option value="name">Sort by Name</option>
          <option value="type">Sort by Type</option>
        </select>
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="px-4 py-2 border border-green-400 rounded-lg w-full sm:w-auto bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <option value="">Filter by Type</option>
          <option value="grass">Grass</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="poison">Poison</option>
          <option value="flying">Flying</option>
          <option value="electric">Electric</option>
          <option value="bug">Bug</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-6 p-4">
        {sortedPokemon &&
          sortedPokemon.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              types={pokemon.types}
              sprite={pokemon.sprite}
            />
            // <ThreeDCardDemo/>
          ))}
      </div>
      <div ref={ref} className="mt-8">
        {isLoading && (
          <div className="text-center text-xl">Loading more...</div>
        )}
      </div>
    </div>
  );
};

export default PokedexGrid;
