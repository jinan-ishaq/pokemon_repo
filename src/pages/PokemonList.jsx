import axios from "axios";
import { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";
import GenerationFilter from "../components/GenerationFilter";
import { useNavigate } from "react-router-dom";

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [generation, setGeneration] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/generation/${generation}`
        );
        console.log("response", response);
        setPokemon(response.data.pokemon_species);

      } catch (error) {
        navigate('/error', { state: { message: error.message || 'Something went wrong', status: 500 } });
      }
      finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [generation, navigate]);

  const onSelectGeneration = (id) => {
    setGeneration(id);
    setIsOpen(false);
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <main className="text-center font-serif text-white p-8 w-full mx-auto space-y-8	">
      <h1 className="font-bold text-3xl drop-shadow-lg my-6 md:text-4xl">
        All Available Pokemon
      </h1>
      <GenerationFilter
        onSelectGeneration={onSelectGeneration}
        isOpen={isOpen}
        toggleDropdown={toggleDropdown}
      />
      {isLoading && <h1 className="text-xl font-medium">Data is Loading...</h1>}
      {!isLoading && pokemon.length === 0 && <p>There is no Data</p>}
      {!isLoading && pokemon.length > 1 && <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 md:gap-8 md:w-[90%] mx-auto">
        {pokemon.map((pokemon) => (
          <li key={pokemon.name}>
            <PokemonCard name={pokemon.name} />
          </li>
        ))}
      </ul>}
    </main>
  );
};

export default PokemonList;
