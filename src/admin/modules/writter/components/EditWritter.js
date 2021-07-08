import React from "react";
import Select from "react-select";

const EditWritter = () => {
  const options = [
    { label: "test", value: "test" },
    { label: "test2", value: "test2" },
  ];
  return (
    <>
      <h6 className="text-muted">Update Writter</h6>
      <div className="row">
        <div className="col-sm-2 mt-2">First Name:</div>
        <div className="col-sm-4 mt-2">
          <input className="form-control" placeholder="enter first name" />
        </div>
        <div className="col-sm-2 mt-2">Last Name:</div>
        <div className="col-sm-4 mt-2">
          <input className="form-control" placeholder="enter last name" />
        </div>
        <div className="col-sm-2 mt-2">Phone Number:</div>
        <div className="col-sm-4 mt-2">
          <input className="form-control" placeholder="enter phone number" />
        </div>
        <div className="col-sm-2 mt-2">Email:</div>
        <div className="col-sm-4 mt-2">
          <input className="form-control" placeholder="enter email" />
        </div>
        <div className="col-sm-2 mt-2">Password:</div>
        <div className="col-sm-4 mt-2">
          <input className="form-control" placeholder="enter password" />
        </div>
        <div className="col-sm-2 mt-2">Confirm Password:</div>
        <div className="col-sm-4 mt-2">
          <input
            className="form-control"
            placeholder="enter confirm password"
          />
        </div>
        <div className="col-sm-2 mt-2">Division:</div>
        <div className="col-sm-4 mt-2">
          <Select
            options={options}
            name="city"
            // value={{ label: confirmInput.city }}
            // onChange={(e) => handleChangeText("city", e.value)}
          />
        </div>
        <div className="col-sm-2 mt-2">District:</div>
        <div className="col-sm-4 mt-2">
          <Select
            options={options}
            name="city"
            // value={{ label: confirmInput.city }}
            // onChange={(e) => handleChangeText("city", e.value)}
          />
        </div>
        <div className="col-sm-2 mt-2">Full Address</div>
        <div className="col-sm-10">
          <textarea className="form-control mt-2" cols="7"></textarea>
        </div>
        <div className="col-sm-11"></div>
        <div className="col-sm-1">
          <a className="btn btn-outline-secondary mt-2">UPDATE</a>
        </div>
      </div>
    </>
  );
};

export default EditWritter;
