import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { EmptyCategoryField } from "../_redux/categoryAction/CategoryAction";

const HeaderCategory = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleCreate = () => {
    history.push("/admin/add_category");
    dispatch(EmptyCategoryField());
  };
  return (
    <>
      <div className="row">
        <div className="col-sm-2">
          <h5>Category List</h5>
        </div>
        <div className="col-sm-8"></div>
        <div className="col-sm-2">
          <a className="btn btn-outline-primary" onClick={() => handleCreate()}>
            Create Category
          </a>
        </div>
      </div>
    </>
  );
};

export default HeaderCategory;
