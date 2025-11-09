import { Route, Router, Routes } from "react-router-dom";
import SidebarLayout from "./components/SidebarLayout";
import HomePage from "./pages/homePage/HomePage";

function AppRouter() {
  return (
    <Routes>
      <Route element={<SidebarLayout />}>
        <Route path="/" element={<HomePage/>} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
