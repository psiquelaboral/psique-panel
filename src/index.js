//libraries
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
//comonents
import AppRouter from "./router/AppRouter";
import { store } from "./store/store";

//css
import "../src/css/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  </Provider>
);
