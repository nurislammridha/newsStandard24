import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetPasswordInput,
  SubmitPasswordInput,
} from "../_redux/adminAction/AdminAction";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const adminInput = useSelector((state) => state.adminInfo.adminInput);
  const handleChangeInput = (name, value) => {
    dispatch(GetPasswordInput(name, value));
  };
  const handleSubmit = (data) => {
    dispatch(SubmitPasswordInput(data));
  };
  return (
    <>
      <h6 className="text-muted">Change Admin Password</h6>
      <div className="row mt-3">
        <div className="col-sm-5">
          <div className="row">
            <div className="col-sm-12">
              <input
                className="form-control"
                name="oldPassword"
                value={adminInput.oldPassword}
                placeholder="Enter Old Password"
                onChange={(e) =>
                  handleChangeInput("oldPassword", e.target.value)
                }
              />
            </div>
            <div className="col-sm-12 mt-2">
              <input
                className="form-control"
                name="newPassword"
                value={adminInput.newPassword}
                placeholder="Enter New Password"
                onChange={(e) =>
                  handleChangeInput("newPassword", e.target.value)
                }
              />
            </div>
            <div className="col-sm-12 mt-2">
              <input
                className="form-control"
                name="confirmPassword"
                value={adminInput.confirmPassword}
                placeholder="ConfirmPassword"
                onChange={(e) =>
                  handleChangeInput("confirmPassword", e.target.value)
                }
              />
            </div>
            <div className="col-sm-9"> </div>
            <div className="col-sm-3 mt-2">
              <a
                className="btn btn-outline-secondary"
                onClick={() => handleSubmit(adminInput)}
              >
                Submit
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
