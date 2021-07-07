import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { Children } from "react";
const Main = (props) => {
  return (
    <>
      <div className="admin-width">
        <div className="left-sidebar">
          <Sidebar />
        </div>
        <div clasName="right-sidebar">
          <div className="admin-header">
            <Header />
          </div>
          <div className="admin-body">{props.children}</div>
          <div className="admin-footer">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
