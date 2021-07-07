import React from "react";
import { useHistory } from "react-router-dom";

const Sidebar = () => {
  const history = useHistory();
  return (
    <>
      <div className="sidebar-heading border-bottom bg-light">
        NewsStandard24
      </div>
      <div className="list-group list-group-flush sidebar-pointer">
        <a
          className="list-group-item list-group-item-action list-group-item-light p-3"
          href="#!"
        >
          Dashboard
        </a>
        <a
          className="list-group-item list-group-item-action list-group-item-light p-3"
          href="#!"
        >
          Admin
        </a>
        <a
          className="list-group-item list-group-item-action list-group-item-light p-3"
          href="#!"
        >
          Writter
        </a>
        <a
          className="list-group-item list-group-item-action list-group-item-light p-3"
          onClick={() => history.push("/admin/category")}
        >
          Category
        </a>
        <a
          className="list-group-item list-group-item-action list-group-item-light p-3"
          href="#!"
        >
          News
        </a>
      </div>
    </>
  );
};

export default Sidebar;
