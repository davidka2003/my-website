import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

import "./index.scss";
import { Provider } from "react-redux";
import { store } from "@store/store";
// import UserWalletProvider from "@hooks/UserWalletProvider";
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <Router>
    {/* <UserWalletProvider> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </UserWalletProvider> */}
  </Router>
);
