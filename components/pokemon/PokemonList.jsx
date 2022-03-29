import { useRouter } from "next/router";
const PokemonList = ({ pokemon, index }) => {
  const router = useRouter();
  return (
    <article
      className="flex flex-col p-4 justify-center items-center [flex:150px]
     h-[150px] bg-gray-700 rounded cursor-pointer"
      onClick={() => {
        router.push("./pokemon/" + pokemon.name);
      }}
    >
      <h1 className="text-white text-base">
        #{index + 1} {pokemon.name}
      </h1>
      <img
        className="w-full h-full p-2"
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" +
          (index + 1) +
          ".svg"
        }
        alt=""
      />
    </article>
  );
};
export default PokemonList;
