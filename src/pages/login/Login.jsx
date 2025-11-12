import { Link } from "react-router-dom";
import J4MLogo from "../../assets/logo_j4m.svg";


function Login() {
  return (
    <div className="flex flex-col gap-10 place-content-center">
        <div className="flex flex-col justify-center text-center p-10 gap-10 bg-neutral-800 w-250 rounded-xl">
            <img src={J4MLogo} style={{"width":50}} />
            <h2 className="text-4xl font-russoOne text-white">Entre na sua conta J4M</h2>
            <form className="flex flex-col gap-10 font-russoOne text-white">
                <label for="mail"><b>Email</b></label>
                <input type="email" placeholder="Digite aqui..."className="bg-black rounded-md p-3 outline-solid outline-white" name="mail" required/>
                <label for="psw"><b>Senha</b></label>
                <input type="password" placeholder="Digite aqui..." className="bg-black rounded-md p-3 outline-solid outline-white" name="psw" required/>
                <a href="#" className="text-pink underline">Esqueci minha senha</a>
                <button type="submit" className="cursor-pointer uppercase bg-linear-to-t from-pink-700 to-pink drop-shadow-sm drop-shadow-white w-60 p-4 rounded-3xl">Entrar</button>
            </form>
            <span className="font-russoOne text-white">Novo por aqui? <Link to="/cadastro" className="text-pink underline">Crie sua Conta J4M!</Link></span>
        </div>
    </div>
  );
}

export default Login;