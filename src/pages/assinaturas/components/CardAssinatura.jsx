import CustomButton from "../../../components/Button";

function CardAssinatura(props){
    const {
        vip = false,
        anuidade = false,
        preco = "0,00",
        economize = false,
        children,
        registrada = false
    } = props;

    return(
        <div className={
            `rounded-4xl h-150 w-90 flex flex-col justify-between items-center p-8 text-white
            ${vip ? "bg-linear-to-br from-neutral-800 to-black hover:from-black hover:to-neutral-800 transition"
            : "bg-neutral-800"}`}>
            <div className="flex flex-col gap-5 items-center">
                <div>
                    <h3 className={`text-3xl font-russoOne font-medium ${vip ? "text-pink" : ""}`}>
                        {vip ? "Plano VIP" : "Plano Gratuito"}
                    </h3>
                    <p className={`font-medium font-russoOne text-center ${vip ? "" : "invisible"}`}>{anuidade ? "(pagamento anual)" : "(mensalidade)"}</p>
                </div>
                <div className="font-orbitron text-center">
                    <h4 className="text-4xl">R${preco}<span className="text-base"> / {anuidade ? "ano" : "mês"}</span></h4>
                    <p className={`text-green text-lg ${economize ? "" : "invisible"}`}>Economize R$160,00!</p>
                </div>
                <p className="font-montserrat text-xl">{children}</p>
            </div>
            {registrada ?
                <p className="font-bold text-lg font-montserrat text-center">
                    Sua conta está atualmente registrada neste plano. 
                </p>
                :
                <CustomButton>Inscrever-se neste plano</CustomButton>
            }
        </div>
    );
}
export default CardAssinatura;