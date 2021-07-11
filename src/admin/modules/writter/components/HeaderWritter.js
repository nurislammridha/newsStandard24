import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { EmptyWritterField } from "../_redux/writterAction/WritterAction";

const HeaderWritter = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleCreate = () => {
    history.push("/admin/add_writter");
    dispatch(EmptyWritterField());
  };
  return (
    <>
      <div className="row">
        <div className="col-sm-2">
          <h5>Writer List</h5>
        </div>
        <div className="col-sm-8"></div>
        <div className="col-sm-2">
          <a className="btn btn-outline-primary" onClick={() => handleCreate()}>
            Create Writter
          </a>
        </div>
      </div>
    </>
  );
};

export default HeaderWritter;
