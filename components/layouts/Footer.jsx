import React from "react";

export const Footer = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center bg-gray-800 py-4 px-5">
      <p className="text-white text-xl text-center">
        ©| Copyright 2022 desarrollado por{" "}
        <a className="font-bold text-2xl" href="https://jesudev.vercel.app/">
          JesuDev
        </a>{" "}
        |
      </p>
    </section>
  );
};
