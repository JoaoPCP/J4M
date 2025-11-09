import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import j4m_logo from "../assets/logo_j4m.svg";
import home_icon from "../assets/home_icon.svg";
import champions_icon from "../assets/champions_icon.svg";
import library_icon from "../assets/library_icon.svg";
import team_icon from "../assets/team_icon.svg";
import settings_icon from "../assets/settings_icon.svg";

function SideBar() {
  const arr = [1, 2, 3, 4];

  console.log(arr);
  return (
    <Sidebar width="450px" backgroundColor="#121212">
      <div className="p-10 h-full">
        <img className="m-auto p-5" src={j4m_logo} alt="logo j4m" />
        <Menu>
          <div>
            <MenuItem icon={<img src={home_icon} alt="home icon" />} className="font-orbitron text-gray text-2xl py-2">
              INÍCIO
            </MenuItem>
            <MenuItem icon={<img src={champions_icon} alt="champions icon" />} className="font-orbitron text-gray text-2xl py-2">
              CAMPEÕES
            </MenuItem>
            <MenuItem icon={<img src={library_icon} alt="library icon" />} className="font-orbitron text-gray text-2xl py-2">
              BIBLIOTECA
            </MenuItem>
            <MenuItem icon={<img src={team_icon} alt="team icon" />} className="font-orbitron text-gray text-2xl py-2">
              EQUIPE
            </MenuItem>
          </div>

          <SubMenu className="font-orbitron text-gray text-2xl mt-15" label="MINHAS JAMS">
            <MenuItem>jam1</MenuItem>
            <MenuItem>jam2</MenuItem>
            <MenuItem>jam3</MenuItem>
          </SubMenu>
        </Menu>
        <MenuItem className="mt-auto" icon={<img src={settings_icon} alt="team icon" />} />
      </div>
    </Sidebar>
  );
}

export default SideBar;
