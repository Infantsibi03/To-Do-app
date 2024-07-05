import React from "react";
import ReactDom from "react-dom";
import store from "./Redux/store.js";
import App from "./App";
import { Provider } from "react-redux";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
