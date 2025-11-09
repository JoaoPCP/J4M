import SideBar from "./SideBar"
import { Outlet } from "react-router-dom"
function SidebarLayout(){
    return (
        <div className="flex flex-row">
            {/* <SideBar/> ainda em desenvolvimento */}
            <Outlet/>
        </div>
    )
}

export default SidebarLayout