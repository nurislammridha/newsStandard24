import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Select from "react-select";
import {
  FalseWritterUpdate,
  GetWritterInput,
  UpdateWritterInput,
} from "../_redux/writterAction/WritterAction";
import {
  DistrictListByDivision,
  DivisionList,
} from "../../../../services/Options";
const EditWritter = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const writterInput = useSelector((state) => state.writterInfo.writterInput);
  const isButtonLoader = useSelector(
    (state) => state.writterInfo.isButtonLoader
  );
  const isWritterUpdate = useSelector(
    (state) => state.writterInfo.isWritterUpdate
  );
  const handleChangeInput = (name, value) => {
    dispatch(GetWritterInput(name, value));
  };
  const handleSubmit = (data) => {
    dispatch(UpdateWritterInput(data, id));
  };
  useEffect(() => {
    if (isWritterUpdate) {
      history.push("/admin/writter");
      dispatch(FalseWritterUpdate());
    }
  }, [isWritterUpdate]);
  const divisionOption = DivisionList();
  const districtOption = DistrictListByDivision(writterInput.division);
  return (
    <>
      <h6 className="text-muted">Update Writter</h6>
      <div className="row">
        <div className="col-sm-2 mt-2">First Name:</div>
        <div className="col-sm-4 mt-2">
          <input
            className="form-control"
            placeholder="enter first name"
            type="text"
            name="firstName"
            value={writterInput.firstName}
            onChange={(e) => handleChangeInput("firstName", e.target.value)}
          />
        </div>
        <div className="col-sm-2 mt-2">Last Name:</div>
        <div className="col-sm-4 mt-2">
          <input
            className="form-control"
            placeholder="enter last name"
            type="text"
            name="lastName"
            value={writterInput.lastName}
            onChange={(e) => handleChangeInput("lastName", e.target.value)}
          />
        </div>
        <div className="col-sm-2 mt-2">Phone Number:</div>
        <div className="col-sm-4 mt-2">
          <input
            className="form-control"
            placeholder="enter phone number"
            type="text"
            name="phoneNumber"
            value={writterInput.phoneNumber}
            onChange={(e) => handleChangeInput("phoneNumber", e.target.value)}
          />
        </div>
        <div className="col-sm-2 mt-2">Email:</div>
        <div className="col-sm-4 mt-2">
          <input
            className="form-control"
            placeholder="enter email"
            type="text"
            name="email"
            value={writterInput.email}
            onChange={(e) => handleChangeInput("email", e.target.value)}
            disabled
          />
        </div>
        {/* <div className="col-sm-2 mt-2">Password:</div>
        <div className="col-sm-4 mt-2">
          <input
            className="form-control"
            placeholder="enter password"
            type="password"
            name="password"
            value={writterInput.password}
            onChange={(e) => handleChangeInput("password", e.target.value)}
          />
        </div>
        <div className="col-sm-2 mt-2">Confirm Password:</div>
        <div className="col-sm-4 mt-2">
          <input
            className="form-control"
            placeholder="enter confirm password"
            type="password"
            name="confirmPassword"
            value={writterInput.confirmPassword}
            onChange={(e) =>
              handleChangeInput("confirmPassword", e.target.value)
            }
          />
        </div> */}
        <div className="col-sm-2 mt-2">Division:</div>
        <div className="col-sm-4 mt-2">
          <Select
            options={divisionOption}
            name="division"
            value={{ label: writterInput.division }}
            onChange={(e) => handleChangeInput("division", e.value)}
          />
        </div>
        <div className="col-sm-2 mt-2">District:</div>
        <div className="col-sm-4 mt-2">
          <Select
            options={districtOption}
            name="district"
            value={{ label: writterInput.district }}
            onChange={(e) => handleChangeInput("district", e.value)}
          />
        </div>
        <div className="col-sm-2 mt-2">Full Address</div>
        <div className="col-sm-10">
          <textarea
            className="form-control mt-2"
            cols="7"
            name="address"
            value={writterInput.address}
            onChange={(e) => handleChangeInput("address", e.target.value)}
          ></textarea>
        </div>
        <div className="col-sm-11"></div>
        <div className="col-sm-1">
          {!isButtonLoader && (
            <a
              className="btn btn-outline-secondary mt-2"
              onClick={() => handleSubmit(writterInput)}
            >
              UPDATE
            </a>
          )}
          {isButtonLoader && (
            <a className="btn btn-outline-secondary mt-2">
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              UPDATING
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default EditWritter;
