
const GenerationFilter = ({onSelectGeneration, isOpen, toggleDropdown}) => {
 
  const generations = [
    {
      id:1,
      name:"Generation 1"
    },
    {
      id:2,
      name:"Generation 2"
    },
    {
      id:3,
      name:"Generation 3"
    },
    {
      id:4,
      name:"Generation 4"
    }
    ,{
      id:5,
      name:"Generation 5"
    }
    ,
    {
      id:6,
      name:"Generation 6"
    }
    ,
    {
      id:7,
      name:"Generation 7"
    },
    {
      id:8,
      name:"Generation 8"
    },
    {
      id:9,
      name:"Generation 9"
    }
  ];

  return (
    <section className="relative inline-block">
      <button
        onClick={toggleDropdown}
        className={`bg-[#b6522e] text-white text-lg px-8 py-2 rounded-t-lg shadow-md hover:bg-[#ed7f57] focus:outline-none w-64 ${isOpen ? "rounded-t-lg" : "rounded-lg"}`}
      >
        Generations
        <svg
          className="w-5 h-5 inline ml-2 -mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <section
          className="absolute left-0 w-64 bg-white divide-y divide-gray-100 rounded-b-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10 dark:bg-gray-700"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <ul className="p-1 py-2 text-sm text-gray-700 dark:text-gray-200 grid grid-cols-2">
            {generations.map((generation) => (
              <li key={generation.id} className="flex justify-center w-full">
                <button
                  onClick={()=>{onSelectGeneration(generation.id)}}
                  className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full text-left"
                  role="menuitem"
                >
                  {generation.name}
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}
    </section>
  );
};

export default GenerationFilter;
