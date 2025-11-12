import championCover from "../../assets/CampeoesBase.svg";
import ChampionCard from "./components/ChampionCard";
import CustomInput from "../../components/Input";

function Campeoes() {
  const champions = Array.from({ length: 10 }, () => ({
    cover: championCover,
    likes: 15,
  }));
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-row items-center justify-between">
        <h2 className="font-orbitron text-3xl text-pink">CAMPEÕES</h2>
        <CustomInput placeholder="Pesquisa..." height="md" rounded="full" width = "md"/>
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
