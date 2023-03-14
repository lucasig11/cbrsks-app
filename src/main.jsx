import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

window.Buffer = window.Buffer || require("buffer").Buffer;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
