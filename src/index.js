import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./Redux/Store";
import storeToolkit from "./ReduxToolkit/app/store";
import storeToolkit2 from "./ReduxToolkit2/store";

import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={storeToolkit2}>
    <App />
  </Provider>
);
