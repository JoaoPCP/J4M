import { Route, Router, Routes } from "react-router-dom";
import SidebarLayout from "./components/SidebarLayout";
import HomePage from "./pages/homePage/HomePage";
import Campeoes from "./pages/campeoes/Campeoes";
import UploadJam from "./pages/uploadJam/UploadJam";

function AppRouter() {
  return (
    <Routes>
      <Route element={<SidebarLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/campeoes" element={<Campeoes />} />
        <Route path="/upload-jam" element={<UploadJam />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
