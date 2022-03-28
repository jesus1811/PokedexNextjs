import React from "react";

export const PokemonDetalleProgress = ({ stat }) => {
  return (
    <div className="w-full flex justify-between items-center flex-wrap">
      <div className="flex justify-center items-center gap-2 w-full">
        <div className="flex flex-col w-full justify-center items-start">
          <p className="text-white text-base">{stat.stat.name}</p>
          <progress min="0" max="160" value={stat.base_stat} className="h-5" />
        </div>

        <span className="text-green-500">{stat.base_stat + "/160"}</span>
      </div>
    </div>
  );
};
