import jamCover from "../../assets/CampeoesBase.svg";
import CustomInput from "../../components/inputs/CustomInput";
import JamCard from "../../components/JamCard";
import ExpandButton from "../../components/ExpansiveButton";
import CustomButton from "../../components/Button";
import { useNavigate } from "react-router-dom";
import TagChoice from "../../components/TagChoice";

const jams = Array.from({ length: 10 }, () => ({
  cover: jamCover,
  path: "jam-teste"
}));

const tagsMock = [
  { value: "participando", text: "Participando" },
  { value: "criadas", text: "Criadas por mim" },
];

function MinhasJams() {
  const navigate = useNavigate();

  return (
    <main className=" flex flex-col">
      <div className="flex flex-row items-center justify-between mb-10 ">
        <h2 className="pageTitle">Minhas jams</h2>
        <CustomInput
          placeholder="Pesquisa..."
          height="md"
          rounded="full"
          width="md"
        />
      </div>
      <div className="flex gap-2 mb-5">
        <TagChoice options={tagsMock} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-4">
        {jams.map((item, i) => (
          <JamCard jam={item} key={i} />
        ))}
      </div>
      <ExpandButton
        onClick={() => navigate("/create-jam")}
        className="self-end"
      >
        Criar nova Jam
      </ExpandButton>
    </main>
  );
}
export default MinhasJams;
