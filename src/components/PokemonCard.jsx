import { Link } from "react-router-dom";


const PokemonCard = ({name}) => {
  return (
    <section className="w-full shadow-xl flex flex-col gap-4 p-4 my-4 rounded-lg hover:scale-95 duration-300 justify-items-center bg-[#ffd37c]">
    <h2 className="text-xl font-bold text-center text-black capitalize  ">Pokemon: {name}</h2>
    <Link to={`/pokemon/${name}`} className='bg-[#31302e] w-[150px] rounded-md font-medium py-3 text-white mx-auto'>View Details</Link>
  </section>
  );
};

export default PokemonCard;