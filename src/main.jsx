import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import "./index.scss";
import globalStore from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={globalStore}>
    <App />
  </Provider>
);
