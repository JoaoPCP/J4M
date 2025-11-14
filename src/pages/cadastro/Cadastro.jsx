import Botao from "../../components/Botao";
import { useNavigate } from "react-router-dom";

function Cadastro() {
  let navigate = useNavigate();

  return (
    <div className="flex flex-col gap-10 place-content-center w-full min-h-screen">
      <div className="flex flex-col justify-center text-center p-10 gap-10 bg-neutral-800 w-250 rounded-xl m-auto">
        <h2 className="text-6xl font-russoOne text-white">Crie sua conta e comece já!</h2>
        <form className="flex flex-col gap-10 items-center font-russoOne text-white w-full px-40" onSubmit={() => navigate("/")}>
          <label className="flex flex-col items-start gap-3 w-full">
            Email
            <input type="email" placeholder="Digite aqui..." className="w-full bg-black rounded-md p-3 outline-solid outline-white" required />
          </label>
          <label className="flex flex-col items-start gap-3 w-full">
            Nome de Usuário
            <input type="text" placeholder="Digite aqui..." className="w-full bg-black rounded-md p-3 outline-solid outline-white" required />
          </label>
          <label className="flex flex-col items-start gap-3 w-full">
            Senha
            <input type="password" placeholder="Digite aqui..." className="w-full bg-black rounded-md p-3 outline-solid outline-white" required />
          </label>
          <label className="flex flex-col items-start gap-3 w-full">
            Confirmar Senha
            <input type="password" placeholder="Digite aqui..." className="w-full bg-black rounded-md p-3 outline-solid outline-white" required />
          </label>
          <Botao type={"submit"} label={"Let's J4M!!"} cor="rosa" />
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
