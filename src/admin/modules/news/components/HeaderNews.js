import React from "react";
import { useHistory } from "react-router-dom";

const HeaderNews = () => {
  const history = useHistory();
  return (
    <>
      <div className="row">
        <div className="col-sm-2">
          <h5>News List</h5>
        </div>
        <div className="col-sm-8"></div>
        <div className="col-sm-2">
          <a
            className="btn btn-outline-primary"
            onClick={() => history.push("/admin/add_news")}
          >
            Create News
          </a>
        </div>
      </div>
    </>
  );
};

export default HeaderNews;
