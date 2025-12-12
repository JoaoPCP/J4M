import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import mockedDB from "./../../utils/mockedDB";

function JamDetails() {
  const { jamPath } = useParams();
  const [selectedJam, setSelectedJam] = useState({
    title: "",
    coverImg: "",
    description: "",
    startData: "",
    endData: "",
    subscriptionsStartData: "",
    subscriptionsEndData: "",
    status: "",
    subscriptions: 0,
    teamCount: 0,
    teams: [],
    creatorInfo: {},
  });

  useEffect(() => {
    // Garante que se o mockedDB não tiver o jamPath, não quebre a página
    if (mockedDB && mockedDB[jamPath]) {
        const jam = mockedDB[jamPath];
        setSelectedJam(jam);
    }
  }, [jamPath]);

  const statusMap = { "open": "Inscrições Abertas", "onGoing": "Em execução", "closed": "Encerrado" };

  return (
    <div className="flex flex-col w-full">
      <section className="flex flex-col md:flex-row mb-8">
        <div className="text-white space-y-6 flex-1 pr-8">
          <h1 className="text-4xl font-bold text-pink-500 uppercase tracking-wider">{selectedJam.title}</h1>
          <p className="text-gray-300 font-russoOne break-all text-lg ">
            {selectedJam.description}
          </p>
        </div>
        <div className="md:w-1/3 w-full">
            {/* Adicionei object-cover e rounded para melhor acabamento visual */}
            <img src={selectedJam.coverImg} className="w-full h-auto rounded-lg shadow-lg object-cover" alt="Capa da Jam" />
        </div>
      </section>

      <section className="border-2 border-white bg-black/30 backdrop-blur-sm p-4 mt-4">
        <ul className="flex flex-row items-center justify-between w-full gap-4 text-sm">
            
            <li className="flex flex-col">
                <span className="text-xs text-gray-400 uppercase font-semibold tracking-wide mb-1">Status Atual</span>
                <span className="text-white font-bold text-lg">{statusMap[selectedJam.status] || "Indefinido"}</span>
            </li>

            <li className="hidden md:block h-8 w-px bg-gray-600/50"></li>

            <li className="flex flex-col">
                <span className="text-xs text-gray-400 uppercase font-semibold tracking-wide mb-1">Período de Inscrições</span>
                <span className="text-gray-200">
                    {selectedJam.subscriptionsStartData} <span className="text-gray-500 mx-1">até</span> {selectedJam.subscriptionsEndData}
                </span>
            </li>

            <li className="hidden md:block h-8 w-px bg-gray-600/50"></li>

            <li className="flex flex-col text-right md:text-left">
                <span className="text-xs text-gray-400 uppercase font-semibold tracking-wide mb-1">Período do Evento</span>
                <span className="text-gray-200">
                    {selectedJam.startData} <span className="text-gray-500 mx-1">até</span> {selectedJam.endData}
                </span>
            </li>

        </ul>
      </section>
    </div>
  );
}

export default JamDetails;