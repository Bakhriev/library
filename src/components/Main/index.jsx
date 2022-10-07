import "./Main.scss";
import Sidebar from "../Sidebar";
import { Routes, Route } from "react-router-dom";
import Cotton from "./Cotton";
import Lab1 from "./Lab1";

function Main() {
  return (
    <main className="main">
      <div className="bar">
        <Sidebar />
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Cotton />} />
          <Route path="/lab-1" element={<Lab1 />} />
          <Route path="/lab-2" element={""} />
        </Routes>
      </div>
    </main>
  );
}

export default Main;
