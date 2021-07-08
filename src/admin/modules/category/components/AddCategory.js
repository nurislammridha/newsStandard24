import React from "react";

const AddCategory = () => {
  return (
    <>
      <h4 className="text-muted">Create A New Category</h4>
      <div className="row mt-3">
        <div className="col-sm-5">
          <div className="row">
            <div className="col-sm-12">
              <input
                className="form-control"
                name=""
                value=""
                placeholder="Enter Category"
              />
            </div>
            <div className="col-sm-9"> </div>
            <div className="col-sm-2 mt-4">
              <a className="btn btn-outline-secondary">Submit</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCategory;
