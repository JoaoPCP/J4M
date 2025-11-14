import { Link, useNavigate } from "react-router-dom";
import J4MLogo from "../../assets/logo_j4m.svg";
import Botao from "../../components/Botao";

function Login() {
  let navigate = useNavigate();
  return (
    <div className="flex flex-col gap-10 w-full min-h-screen">
      <div className="flex flex-col justify-center items-center text-center p-10 gap-10 bg-neutral-800 w-250 rounded-4xl m-auto">
        <img className="w-30" src={J4MLogo} />
        <h2 className="text-6xl font-russoOne text-white">Entre na sua conta J4M</h2>
        <form className="flex flex-col gap-10 font-russoOne text-white w-full px-10" onSubmit={() => navigate("/")}>
          <label className="flex flex-col items-start gap-3">
            Email
            <input type="email" placeholder="Digite aqui..." className="bg-black rounded-md p-3 outline-solid outline-white w-full" required />
          </label>
          <label className="flex flex-col items-start gap-3">
            Senha
            <input type="password" placeholder="Digite aqui..." className="bg-black rounded-md p-3 outline-solid outline-white w-full" required />
          </label>
          <a href="#" className="text-pink underline">
            Esqueci minha senha
          </a>
          <Botao type={"submit"} label={"Entrar"} cor="rosa" />
        </form>
        <span className="font-russoOne text-white">
          Novo por aqui?{" "}
          <Link to="/cadastro" className="text-pink underline">
            Crie sua Conta J4M!
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Login;
