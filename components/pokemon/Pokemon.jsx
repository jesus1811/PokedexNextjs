import PokemonList from "./PokemonList";

const Pokemon = ({ pokemones }) => {
  return (
    <div
      className="w-full min-h-screen flex flex-col 
      justify-center items-center bg-gray-900 gap-4 px-[5%] pt-[65px] pb-4"
    >
      <h1 className="text-white text-5xl m-1">Pokedex</h1>
      <div className="w-full flex justify-center items-center gap-6 flex-wrap">
        {pokemones.map((pokemon, index) => {
          return (
            <PokemonList key={index + 1} pokemon={pokemon} index={index} />
          );
        })}
      </div>
    </div>
  );
};
export default Pokemon;
