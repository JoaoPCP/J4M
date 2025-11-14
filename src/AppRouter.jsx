import { Route, Router, Routes } from "react-router-dom";
import SidebarLayout from "./components/SidebarLayout";
import HomePage from "./pages/homePage/HomePage";
import Campeoes from "./pages/campeoes/Campeoes";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import UploadJam from "./pages/uploadJam/UploadJam";
import CreateJam from "./pages/createJam/CreateJam";
import Equipe from "./pages/equipe/Equipe";

function AppRouter() {
  return (
    <Routes>
      <Route element={<SidebarLayout logged />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/campeoes" element={<Campeoes />} />
        <Route path="/upload-jam" element={<UploadJam />} />
        <Route path="/create-jam" element={<CreateJam />} />
        <Route path="/equipe" element={<Equipe />} />
      </Route>
      <Route element={<SidebarLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
