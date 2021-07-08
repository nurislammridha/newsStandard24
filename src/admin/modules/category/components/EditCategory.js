import React from "react";

const EditCategory = () => {
  return (
    <>
      <h4 className="text-muted">Update Category</h4>
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
              <a className="btn btn-outline-secondary">Update</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditCategory;
