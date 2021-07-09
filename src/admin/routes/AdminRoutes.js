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
import AddCategoryContainer from "../modules/category/views/AddCategoryContainer";
import EditCategoryContainer from "../modules/category/views/EditCategoryContainer";
import ChangePasswordContainer from "../modules/admin/views/ChanegePasswordContainer";
import WritterContainer from "../modules/writter/views/WritterContainer";
import AddWritterContainer from "../modules/writter/views/AddWritterContainer";
import EditWritterContainer from "../modules/writter/views/EditWritterContainer";
import PasswordChangeWritterContainer from "../modules/writter/views/PasswordChangeWritterContainer";
import NewsContainer from "../modules/news/views/NewsContainer";
import AddNewsContainer from "../modules/news/views/AddNewsContainer";
import EditNewsContainer from "../modules/news/views/EditNewsContainer";
const AdminRoutes = (props) => {
  return (
    <>
      <Router>
        <Main>
          <Switch>
            <Route path="/admin/category">
              <CategoryContainer />
            </Route>
            <Route path="/admin/add_category">
              <AddCategoryContainer />
            </Route>
            <Route path="/admin/edit_category/:id">
              <EditCategoryContainer />
            </Route>
            <Route path="/admin/change_password">
              <ChangePasswordContainer />
            </Route>
            <Route path="/admin/writter">
              <WritterContainer />
            </Route>
            <Route path="/admin/add_writter">
              <AddWritterContainer />
            </Route>
            <Route path="/admin/edit_writter/:id">
              <EditWritterContainer />
            </Route>
            <Route path="/admin/writter_password_change">
              <PasswordChangeWritterContainer />
            </Route>
            <Route path="/admin/news">
              <NewsContainer />
            </Route>
            <Route path="/admin/add_news">
              <AddNewsContainer />
            </Route>
            <Route path="/admin/edit_news/:id">
              <EditNewsContainer />
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
