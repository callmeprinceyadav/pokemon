import React from 'react';

interface PokemonTypeFilterProps {
  availableTypes: string[];
  selectedTypes: string[];
  onTypeSelect: (types: string[]) => void;
}

const PokemonTypeFilter: React.FC<PokemonTypeFilterProps> = ({ availableTypes, selectedTypes, onTypeSelect }) => {
  const toggleType = (type: string) => {
    if (selectedTypes.includes(type)) {
      onTypeSelect(selectedTypes.filter(t => t !== type));
    } else {
      onTypeSelect([...selectedTypes, type]);
    }
  };

  return (
    <div className="mb-4">
      {availableTypes.map(type => (
        <button
          key={type}
          onClick={() => toggleType(type)}
          className={`px-2 py-1 mr-2 rounded ${selectedTypes.includes(type) ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default PokemonTypeFilter;
