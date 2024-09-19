import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const PokemonDetails = () => {
  const { id } = useParams();
  console.log("id", id);
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPokemonInfo = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        console.log(response);
        setPokemon(response.data);
      } catch (error) {
        navigate("/error", {
          state: {
            message: error.message || "Something went wrong",
            status: 500,
          },
        });
      } finally {
        setIsLoading(false);
      }
    };
    fetchPokemonInfo();
  }, [id, navigate]);

  return (
    <>
      {isLoading && (
        <h1 className="font-medium text-center text-4xl my-20 text-white">
          Data is Loading...
        </h1>
      )}
      {!isLoading && pokemon && (
        <section className="w-3/4 md:w-1/2 lg:w-2/6 shadow-xl flex flex-col  mt-20 rounded-lg mx-auto bg-white items-center p-4 gap-6 font-serif capitalize ">
          <img
            className="w-24 md:w-40 xl:w-50"
            src={pokemon.sprites.other.dream_world.front_default}
            alt={pokemon.name}
          />
          <h1 className="text-lg md:text-3xl font-bold text-center p-2 border shadow-sm">
            {pokemon.name}
          </h1>
          <section className="flex gap-4 p-2 border-b-2 md:text-2xl ">
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
          </section>
          <section className=" font-medium border p-4 flex flex-col gap-2 text-center md:text-2xl">
            <h2 className="font-bold   ">Pokemon Abilities</h2>
            <ul className="grid grid-cols-1 p-2">
              {pokemon.abilities &&
                pokemon.abilities.map((ability, index) => (
                  <li
                    key={index}
                    className="italic font-medium text-lg my-2 border-b-2"
                  >
                    {ability.ability.name}
                  </li>
                ))}
            </ul>
          </section>

          <Link
            to="/"
            className="w-1/2 border rounded p-2 bg-[#f9c762] text-xl text-center"
          >
            Back
          </Link>
        </section>
      )}
    </>
  );
};

export default PokemonDetails;
