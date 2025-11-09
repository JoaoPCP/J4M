import Community from "./components/Community";
import Oficials from "./components/Oficials";

function HomePage(){
    return(
        <div className="flex flex-col pb-5">
            <Oficials/>
            <Community/>
        </div>
    )
}
export default HomePage