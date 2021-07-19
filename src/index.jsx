import React from "react";
import ReactDOM from "react-dom";
import { Main } from "views/Main";
import "styles/main.scss";

const main = document.createElement("div");
main.id = "#app";

document.body.appendChild(main);

ReactDOM.render(
  <React.StrictMode>
    <Main/>
  </React.StrictMode>,
  main
);
