import React from "react";
import { useHistory } from "react-router-dom";

const HeaderCategory = () => {
  const history = useHistory();
  return (
    <>
      <div className="row">
        <div className="col-sm-2">
          <h5>Category List</h5>
        </div>
        <div className="col-sm-8"></div>
        <div className="col-sm-2">
          <a
            className="btn btn-outline-primary"
            onClick={() => history.push("/admin/add_category")}
          >
            Create Category
          </a>
        </div>
      </div>
    </>
  );
};

export default HeaderCategory;
