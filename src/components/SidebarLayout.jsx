import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

function SidebarLayout() {
  return (
    <div className="flex">
      <SideBar />
      <div className="p-10 w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default SidebarLayout;
