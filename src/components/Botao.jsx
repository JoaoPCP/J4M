export default function Botao({label, type="button", cor="roxo"}){
    var colorcode;
    switch(cor){
        
        case "rosa":
            colorcode = "from-[#CF0C94] to-[#FF007F]";
            break;
        case "roxo":
        default:
            colorcode = "from-[#6017C6] to-[#8E2DE2]";
            break;
    }
    return (
    <button type={type} className={`
    cursor-pointer hover:outline-3
    uppercase drop-shadow-sm drop-shadow-white
    w-60 p-4 rounded-2xl
    bg-linear-to-t ${colorcode}
    `}>
        {label}
        </button>);
}