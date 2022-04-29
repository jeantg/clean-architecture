import React from "react";
import ReactDOM from "react-dom";
import { Routes } from "./Routes";
import "assets/global.css";
import "tailwindcss/tailwind.css";
ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);
