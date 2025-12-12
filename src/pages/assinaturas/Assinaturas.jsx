import { useNavigate } from "react-router-dom";
import J4MLogo from "../../assets/logo_j4m.svg";
import CardAssinatura from "./components/CardAssinatura";

function Assinaturas(){
    let navigate = useNavigate();
    return(
        <div className="flex flex-col gap-10 w-full min-h-screen items-center">
            <h2 className="font-orbitron text-3xl text-pink">Planos J4M Disponíveis</h2>
            <img className="w-30" src={J4MLogo} />
            <div className="flex gap-10">
                <CardAssinatura registrada={true}>
                    Crie e participe de GameJams ao redor do mundo em um hub centralizado,
                    sem gastar um centavo.
                </CardAssinatura>
                <CardAssinatura vip={true} preco="80,00">
                    No plano VIP, você ganha a oportunidade de participar das Jams Oficiais,
                    proporcionando maiores prêmios e oportunidades de trabalho.
                </CardAssinatura>
                <CardAssinatura vip={true} anuidade={true} economize={true} preco="800,00">
                    Todos os benefícios de um ano no plano VIP com dois meses gratuitos.
                </CardAssinatura>
            </div>
        </div>
    );
}

export default Assinaturas;