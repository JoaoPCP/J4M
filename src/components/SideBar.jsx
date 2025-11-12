import j4m_logo from "../assets/logo_j4m.svg";
import home_icon from "../assets/home_icon.svg";
import champions_icon from "../assets/champions_icon.svg";
import library_icon from "../assets/library_icon.svg";
import team_icon from "../assets/team_icon.svg";
import settings_icon from "../assets/settings_icon.svg";
import { Link } from "react-router-dom";

function SideBar({ logged }) {
  return (
    <nav className="w-113 bg-black flex flex-col h-full min-h-screen py-7 sticky top-0">
      <ul className="flex flex-col w-full">
        <Link to="/" className="transition duration-300 hover:scale-105">
          <img className="m-auto p-7" src={j4m_logo} alt="logo j4m" />
        </Link>
        <Link to="/" className="transition duration-300 hover:scale-105">
          <li className="font-orbitron text-gray text-2xl py-2 flex items-center gap-5 px-20">
            <img className="w-10 h-10" src={home_icon} alt="home icon" />
            <p>INÍCIO</p>
          </li>
        </Link>
        <Link to="/campeoes" className="transition duration-300 hover:scale-105">
          <li className="font-orbitron text-gray text-2xl py-2 flex items-center gap-5 px-20">
            <img className="w-10 h-10" src={champions_icon} alt="champions icon" />
            <p>CAMPEÕES</p>
          </li>
        </Link>
        <Link to="/biblioteca" className="transition duration-300 hover:scale-105">
          <li className="font-orbitron text-gray text-2xl py-2 flex items-center gap-5 px-20">
            <img className="w-10 h-10" src={library_icon} alt="library icon" />
            <p>BIBLIOTECA</p>
          </li>
        </Link>
        {logged ? (
          <Link to="/equipe" className="transition duration-300 hover:scale-105">
            <li className="font-orbitron text-gray text-2xl py-2 flex items-center gap-5 px-20">
              <img className="w-10 h-10" src={team_icon} alt="library icon" />
              <p>EQUIPE</p>
            </li>
          </Link>
        ) : (
          <></>
        )}

        {logged ? (
          <li className="font-orbitron text-gray text-2xl py-2 flex flex-col gap-5 px-20 mt-20">
            <Link to="/myjams" className="transition duration-300 hover:scale-105">
              <p>MINHAS JAMS</p>
            </Link>
            <ul className="font-orbitron text-gray text-2xl flex flex-col">
              <li className="py-2">jam1</li>
              <li className="py-2">jam2</li>
              <li className="py-2">jam3</li>
            </ul>
          </li>
        ) : (
          <></>
        )}
      </ul>
      <Link className="mt-auto transition duration-300 hover:scale-105" to="/configuracoes">
        <li className="pl-18 list-none w-full">
          <img src={settings_icon} alt="team icon" />
        </li>
      </Link>
    </nav>
  );
}

export default SideBar;
