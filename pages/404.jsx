import React from "react";
import { Main } from "../components/layouts";

const Custom404 = () => {
  return (
    <Main>
      <div className="w-full min-h-[calc(100vh-64px)] flex flex-col justify-center items-center bg-gray-900">
        <h1 className="text-3xl text-white"><span className="text-7xl font-bold">404</span> - pagina no encontrada</h1>
        <p className="text-white text-3xl">
           solo se ha generado 200 pokemones de forma estatica
        </p>
      </div>
    </Main>
  );
};

export default Custom404;
