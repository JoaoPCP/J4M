import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import SideBar from "./components/SideBar";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="flex">
      <SideBar />
      <App />
    </div>
  </StrictMode>
);
