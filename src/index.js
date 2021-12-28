import React from "react";
import ReactDOM from "react-dom";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import "./Globals/Global.scss";
import "./Globals/Themes.scss";

ReactDOM.render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  