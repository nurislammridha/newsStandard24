import React from "react";
// import "./assets/css/main.css";
//Route

import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import AdminRoutes from "./admin/routes/AdminRoutes";
//compo
import Hello from "./website/Hello";
import LoginContainer from "./admin/modules/login/views/LoginContainer";
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/web">
            <Hello />
          </Route>
          <Route exact path="/admin/login">
            <LoginContainer />
          </Route>
          <Route path="/admin">
            <AdminRoutes />
          </Route>
          <Route exact path="/">
            <Hello />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
