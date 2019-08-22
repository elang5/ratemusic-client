import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { library } from "@fortawesome/fontawesome-svg-core";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import store from "./store";

import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";

library.add(farStar, fasStar);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
