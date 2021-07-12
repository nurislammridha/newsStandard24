import React from "react";

const PasswordChangeWritter = () => {
  return (
    <>
      <h6 className="text-muted">Change Admin Password</h6>
      <div className="row mt-3">
        <div className="col-sm-5">
          <div className="row">
            <div className="col-sm-12">
              <input
                className="form-control"
                name=""
                value=""
                placeholder="Enter Old Password"
              />
            </div>
            <div className="col-sm-12 mt-2">
              <input
                className="form-control"
                name=""
                value=""
                placeholder="Enter New Password"
              />
            </div>
            <div className="col-sm-12 mt-2">
              <input
                className="form-control"
                name=""
                value=""
                placeholder="Re-enter Password"
              />
            </div>
            <div className="col-sm-9"> </div>
            <div className="col-sm-3 mt-2">
              <a className="btn btn-outline-secondary">Submit</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordChangeWritter;
