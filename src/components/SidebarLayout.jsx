import SideBar from "./SideBar"
import { Outlet } from "react-router-dom"
function SidebarLayout(){
    return (
        <div className="flex flex-row">
            {/* <SideBar/> ainda em desenvolvimento */}
            <div className="pt-21 px-26 w-full">
                <Outlet/>
            </div>
            
        </div>
    )
}

export default SidebarLayout