import React from "react";
import {
  BrowserRouter as Router,
  useHistory,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { Route, Switch, Link } from "react-router-dom";
//COmponenest
import "../assets/css/writter.css";
import Main from "../modules/main/components/Main";
import BodyContainer from "../modules/main/views/BodyContainer";
import NewsContainer from "../modules/news/views/NewsContainer";
import AddNewsContainer from "../modules/news/views/AddNewsContainer";
import EditNewsContainer from "../modules/news/views/EditNewsContainer";
import ProfileContainer from "../modules/profile/views/ProfileContainer";
const AdminRoutes = (props) => {
  return (
    <>
      <Router>
        <Main>
          <Switch>
            <Route path="/writter/profile">
              <ProfileContainer />
            </Route>
            <Route path="/writter/edit_profile">
              <NewsContainer />
            </Route>
            <Route path="/writter/change_password">
              <NewsContainer />
            </Route>
            <Route path="/writter/news">
              <NewsContainer />
            </Route>
            <Route path="/writter/add_news">
              <AddNewsContainer />
            </Route>
            <Route path="/writter/edit_news/:id">
              <EditNewsContainer />
            </Route>
            <Route path="/writter">
              <BodyContainer />
            </Route>
          </Switch>
        </Main>
      </Router>
    </>
  );
};
export default AdminRoutes;
