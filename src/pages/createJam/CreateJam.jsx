import CustomButton from "../../components/Button";
import CustomInput from "../../components/inputs/CustomInput";
import FileInput from "../../components/inputs/FileInput";
import SelectInput from "../../components/inputs/SelectInput";

const premiacaoOptions = [
  { value: "nenhuma", label: "Nenhuma" },
  { value: "simbolica", label: "Simbolica" },
  { value: "monetaria", label: "Monetária" },
  { value: "outros", label: "Outros" },
];

const fusoHorarioOptions = [
  { value: "gmt-3", label: "GMT-3 (Brasília)" },
  { value: "gmt-0", label: "GMT+0 (Londres)" },
  { value: "gmt+1", label: "GMT+1 (Berlim)" },
  { value: "gmt+9", label: "GMT+9 (Tóquio)" },
];
function CreateJam() {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-orbitron mb-8 text-pink">Criar Nova Jam</h1>
      <div className="grid grid-cols-[65%_1fr] gap-10 text-white">
        {/* Detalhes da Jam */}
        <div className="flex flex-col gap-6">
          <CustomInput label="Nome da Jam" placeholder="Insira o nome da Jam" />
          <CustomInput
            label="Descrição"
            type="textarea"
            height="xl"
            placeholder="Descreava a ideia do projeto brevemente e o que esperam como resultado"
          />
          {/* Premiação e tags */}
          <div className="flex flex-row gap-2 w-full">
            <CustomInput
              label="Tags"
              placeholder="Coloque tags na sua Jam, atraia o público!"
            />
            <SelectInput options={premiacaoOptions} label="Premiação" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {/* Capa */}
          <div className="flex flex-col  gap-3">
            <label className="text-sm uppercase font-russoOne">
              Ilustração de Capa
            </label>
            <div className="flex flex-col items-center gap-4">
              <div className="w-24 h-24 bg-gray-700 rounded-xl flex items-center justify-center text-xs text-gray-300">
                Nenhuma imagem carregada.
              </div>
              <FileInput
                height="sm"
                placeholder={<p className="text-sm">Selecionar Arquivo</p>}
                width="md"
              />
            </div>
          </div>
          {/* Prazo */}
          <div>
            <label className="text-sm uppercase font-russoOne">Prazo</label>
            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-[0.2fr_1fr_0.2fr_1fr] gap-1 font-orbitron text-sm items-center">
                <p>de</p>
                <CustomInput type="date" />
                <p className="text-center">às</p>
                <CustomInput type="time" />
                <p>até</p>
                <CustomInput type="date" />
                <p className="text-center">às</p>
                <CustomInput type="time" />
              </div>
              <SelectInput
                placeholder="Selecione o fuso-horário"
                options={fusoHorarioOptions}
              />
            </div>
          </div>
        </div>
      </div>
      <CustomButton width="md" height="lg" className="mt-6 self-end">
        Criar Jam
      </CustomButton>
    </div>
  );
}
export default CreateJam;
