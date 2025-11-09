import championCover from "../../assets/CampeoesBase.svg";
import ChampionCard from "./components/ChampionCard";

function Campeoes() {
  const champions = Array.from({ length: 10 }, (_, i) => ({
    cover: championCover,
    likes: 15,
  }));
  console.log(champions);
  return (
    <div className="flex flex-col gap-10">
      <h2 className="font-orbitron text-3xl text-pink">CAMPEÕES</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-4">
        {champions.map((item) => (
          <ChampionCard champion={item} />
        ))}
      </div>
    </div>
  );
}

export default Campeoes;
