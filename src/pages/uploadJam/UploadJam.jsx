import { useState } from "react";

function UploadJam() {
  const jamData = {
    title: "Jam de teste 8BIT 2025",
  };

  const [formData, setFormData] = useState({
    input1: "",
    input2: "",
    input3: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const jsonData = {
      input1: formData.input1,
      input2: formData.input2,
      input3: formData.input3,
      fileName: formData.file ? formData.file.name : null,
    };
    console.log(jsonData);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-10">
      <h2 className="flex font-orbitron text-3xl w-full justify-center items-center text-pink">
        {jamData.title}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 items-center justify-center w-full max-w-[80%]"
      >
        <div className="flex flex-col w-full items-center justify-center gap-5">
          <label htmlFor="input1" className="font-medium text-white mb-1">
            LINK PITCH (MAX 3MIN)
          </label>
          <input
            id="input1"
            type="text"
            name="input1"
            placeholder="Digite o link do pitch do seu jogo"
            value={formData.input1}
            onChange={handleChange}
            className="border bg-black border-gray-400 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-pink"
          />
        </div>

        <div className="flex flex-col gap-5 w-full items-center justify-center">
          <label htmlFor="input2" className="font-medium text-white mb-1">
            LINK GITHUB
          </label>
          <input
            id="input2"
            type="text"
            name="input2"
            placeholder="Link do repositório do seu jogo"
            value={formData.input2}
            onChange={handleChange}
            className="border bg-black border-gray-400 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-pink"
          />
        </div>

        <div className="flex flex-col w-full gap-5 items-center justify-center">
          <label htmlFor="input3" className="font-medium text-white mb-1">
            DESCRIÇÃO DO GAME
          </label>
          <input
            id="input3"
            type="text"
            name="input3"
            placeholder="Escreva uma breve descrição sobre seu jogo"
            value={formData.input3}
            onChange={handleChange}
            className="border bg-black border-gray-400 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-pink"
          />
        </div>

        <div className="flex flex-col max-w-[500px] w-full">
          <label htmlFor="file" className="font-medium text-white mb-1">
            SLIDES APRESENTAÇÃO
          </label>
          <input
            id="file"
            type="file"
            name="file"
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded-lg p-2 bg-white"
          />
        </div>

        <button
          type="submit"
          className="bg-pink text-white px-6 py-2 rounded-lg hover:opacity-90 transition"
        >
          Enviar Projeto
        </button>
      </form>
    </div>
  );
}

export default UploadJam;
