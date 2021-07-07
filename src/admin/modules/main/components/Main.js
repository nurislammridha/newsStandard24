import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const Main = (props) => {
  return (
    <>
      <div className="admin-body">
        <div className="d-flex" id="wrapper">
          <div
            className="border-end bg-white left-sidebar"
            id="sidebar-wrapper"
          >
            <Sidebar />
          </div>

          <div id="page-content-wrapper" className="right-sidebar">
            <div className="nav-stricky  border-bottom">
              <Header />
            </div>
            <div className="container-fluid main-body">{props.children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
