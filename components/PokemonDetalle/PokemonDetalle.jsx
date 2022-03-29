import PokemonDetalleProgress from "./PokemonDetalleProgress";

const PokemonDetalle = ({ pokemonUrlImage, types, name, stats }) => {
  return (
    <div
      className="w-full min-h-[calc(100vh-64px)] flex  justify-center
     items-center bg-gray-900 px-[5%] pt-[65px] gap-20 flex-wrap"
    >
      <div
        className="w-[420px] min-h-[488px]  flex flex-col justify-around items-center
       bg-gray-700 p-4  rounded-md"
      >
        <img src={pokemonUrlImage} alt="pokemon" className="w-full" />
      </div>
      <div
        className="w-[420px] min-h-[488px] flex flex-col justify-center items-center 
      bg-gray-700 p-4 rounded-md"
      >
        <h1
          className="text-white font-bold text-4xl w-full flex
         justify-center items-center"
        >
          {name}
        </h1>
        <div className="w-full flex flex-col justify-center items-center gap-3 p-4 ">
          {stats.map((stat, index) => {
            return <PokemonDetalleProgress key={index + 1} stat={stat} />;
          })}
        </div>
        <div className="w-full flex  flex-col justify-center items-end gap-2 px-4">
          <h2 className="text-xl text-white font-bold">Types:</h2>
          <div className="flex gap-3 justify-center items-center">
            {types.map((type, index) => {
              return (
                <p key={index + 1} className="text-white text-base">
                  {type.type.name}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetalle;
