import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

function SidebarLayout({ logged }) {
  return (
    <div className="flex">
      <SideBar logged={logged} />
      <div className="p-10 w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default SidebarLayout;
