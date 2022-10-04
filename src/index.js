import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./reset.scss";
import "./index.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
