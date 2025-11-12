function Cadastro() {
  return (
    <div className="flex flex-col gap-10 place-content-center">
        <div className="flex flex-col justify-center text-center p-10 gap-10 bg-neutral-800 w-250 rounded-xl">
            <h2 className="text-4xl font-russoOne text-white">Crie sua conta e comece já!</h2>
            <form className="flex flex-col gap-10 align-center font-russoOne text-white">
                <label for="mail"><b>Email</b></label>
                <input type="email" placeholder="Digite aqui..."className="bg-black rounded-md p-3 outline-solid outline-white" name="mail" required/>
                <label for="name"><b>Nome de Usuário</b></label>
                <input type="text" placeholder="Digite aqui..."className="bg-black rounded-md p-3 outline-solid outline-white" name="name" required/>
                <label for="psw"><b>Senha</b></label>
                <input type="password" placeholder="Digite aqui..." className="bg-black rounded-md p-3 outline-solid outline-white" name="psw" required/>
                <label for="pswconf"><b>Confirmar Senha</b></label>
                <input type="password" placeholder="Digite aqui..." className="bg-black rounded-md p-3 outline-solid outline-white" name="pswconf" required/>
                <button type="submit" className="cursor-pointer uppercase bg-linear-to-t from-pink-700 to-pink drop-shadow-sm drop-shadow-white w-60 p-4 rounded-3xl" >Let's J4M!!</button>
            </form>
        </div>
    </div>
  );
}

export default Cadastro;