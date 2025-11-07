function CardOficialJam({ size, color }) {
  return (
    <div className="flex items-start">
      <div className="flex flex-col items-center">
        <p className="font-russoOne text-pink text-xl -mb-9 z-40 bg-white p-1">NOME JAM</p>
        <img
          className={size === "slim" ? "w-40 h-65 object-cover rounded-2xl" : `w-100 h-95 object-cover rounded-2xl`}
          src="https://i.ytimg.com/vi/d_NA_yTXOOQ/maxresdefault.jpg"
          alt=""
        />
        <p className="font-russoOne text-pink text-xl -mt-9 z-40 bg-white p-1">R$ ????</p>
      </div>
      {<h3 className={`font-orbitron font-bold text-white bg-yellow px-4 py-1 -ml-30.5 mt-13`}>INICIANDO</h3>}
    </div>
  );
}

export default CardOficialJam;
