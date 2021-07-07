import React from "react";
import {
  BrowserRouter as Router,
  useHistory,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { Route, Switch, Link } from "react-router-dom";
//COmponenest
import "../assets/css/admin.css";
import Main from "../modules/main/components/Main";
import BodyContainer from "../modules/main/views/BodyContainer";
import CategoryContainer from "../modules/category/views/CategoryContainer";
const AdminRoutes = (props) => {
  return (
    <>
      <Router>
        <Main>
          <Switch>
            {/* <Route path={`${path}/page1`} render>
            <Page1 />
          </Route>*/}
            <Route path="/admin/category">
              <CategoryContainer />
            </Route>
            <Route path="/admin">
              <BodyContainer />
            </Route>
          </Switch>
        </Main>
      </Router>
    </>
  );
};
export default AdminRoutes;
