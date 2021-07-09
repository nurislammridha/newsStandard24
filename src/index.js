import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import { Provider } from "react-redux";
import Store from "./redux/store/Store";
// import store from './store'
//Import Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import axios.js so that it can inject token in every request
require("./services/axios");
//Toaster
//FOnt Awesome
ReactDOM.render(
  <Provider store={Store()}>
    <App /> <ToastContainer />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
