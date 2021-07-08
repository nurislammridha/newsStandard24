import React from "react";
import { useHistory } from "react-router-dom";

const HeaderWritter = () => {
  const history = useHistory();
  return (
    <>
      <div className="row">
        <div className="col-sm-2">
          <h5>Writer List</h5>
        </div>
        <div className="col-sm-8"></div>
        <div className="col-sm-2">
          <a
            className="btn btn-outline-primary"
            onClick={() => history.push("/admin/add_writter")}
          >
            Create Writter
          </a>
        </div>
      </div>
    </>
  );
};

export default HeaderWritter;
