import React from "react";

const lorem =
  "Descrição da equipe Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor ";

function Equipe() {
  return (
    <div className="flex flex-col gap-15 items-center w-full">
      <h1 className="font-orbitron text-pink text-4xl self-start">EQUIPE</h1>
      <div className="flex items-center justify-evenly w-full">
        <img className="w-40 h-40 rounded-full bg-white border-6 border-pink" src="" alt="" />
        <img className="w-40 h-40 rounded-full bg-white border-6 border-pink" src="" alt="" />
        <img className="w-40 h-40 rounded-full bg-white border-6 border-pink" src="" alt="" />
        <img className="w-40 h-40 rounded-full bg-white border-6 border-pink" src="" alt="" />
        <img className="w-40 h-40 rounded-full bg-white border-6 border-pink" src="" alt="" />
      </div>
      <h2 className="font-russoOne text-white text-2xl">NOME DA EQUIPE</h2>
      <p className="font-inter text-white text-center max-w-1/2 text-2xl">{lorem}</p>
      <h3 className="font-russoOne text-white text-2xl">INFORMAÇÕES DE CONTATO</h3>
      <div className="flex flex-col  items-center font-inter text-white text-xl">
        <p>equipeLorenipsun@gmail.com</p>
        <p>tel - 4002-8922</p>
      </div>
    </div>
  );
}

export default Equipe;
