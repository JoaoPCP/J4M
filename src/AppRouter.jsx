import { Route, Router, Routes } from "react-router-dom";
import SidebarLayout from "./components/SidebarLayout";
import HomePage from "./pages/homePage/HomePage";
import Campeoes from "./pages/campeoes/Campeoes";

function AppRouter() {
  return (
    <Routes>
      <Route element={<SidebarLayout />}>
        <Route path="/" element={<HomePage/>} />
        <Route path="/campeoes" element={<Campeoes/>}/>
      </Route>
    </Routes>
  );
}

export default AppRouter;
