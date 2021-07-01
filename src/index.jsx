import React from "react";
import ReactDOM from "react-dom";
import { Main } from "views/Main";

import "styles/main.scss";

const main = document.querySelector("#app");

if (main) {
  ReactDOM.render(
    <React.StrictMode>
      <Main />
    </React.StrictMode>,
    main
  );
} else {
  console.log("[App]: Não foi possível inicializar o app.");
}

// Define hot reload
module.hot.accept();
