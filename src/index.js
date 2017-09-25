import React from "react";
import mirror from "mirrorx";
import { render } from "mirrorx";
import { reducer as formReducer } from "redux-form";

import "./modules";
import "./responsive";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import Routes from "./routes";

mirror.defaults({
  reducers: {
    form: formReducer
  }
});

render(<Routes />, document.getElementById("root"));
registerServiceWorker();
