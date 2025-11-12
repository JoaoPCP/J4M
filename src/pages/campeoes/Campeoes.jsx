import championCover from "../../assets/CampeoesBase.svg";
import ChampionCard from "./components/ChampionCard";

function Campeoes() {
  const champions = Array.from({ length: 10 }, () => ({
    cover: championCover,
    likes: 15,
  }));
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-row items-center justify-between">
        <h2 className="font-orbitron text-3xl text-pink">CAMPEÕES</h2>
        <input className="bg-black placeholder:text-gray-400 border-gray-400 border-2 focus:outline-white text-white font-russoOne rounded-4xl h-14 pl-6" placeholder="Pesquisar..."/>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-4">
        {champions.map((item, i) => (
          <ChampionCard champion={item} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Campeoes;
