import React from "react";
import mirror from "mirrorx";
import { render, Router } from "mirrorx";
import { reducer as formReducer } from "redux-form";

import "./modules";
import "./responsive";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import LanguageProvider from "./containers/LanguageProvider";
import Routes from "./routes";

mirror.defaults({
  reducers: {
    form: formReducer
  }
});

render(
  <Router>
    <LanguageProvider>
      <Routes />
    </LanguageProvider>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
