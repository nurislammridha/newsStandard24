import React from "react";
import { Card, Button } from "react-bootstrap";
import logo from "../../../assets/images/headerIcon.png";
import Select from "react-select";
const Login = () => {
  return (
    <>
      <div className="login-body">
        <div>
          <Card style={{ width: "44rem" }}>
            <Card.Body>
              <Card.Text>
                <div className="row">
                  <div className="col-sm-6">
                    <h2 className="text-center text-muted">Login</h2>
                    <select className="form-control mb-2">
                      <option>Select Your Role</option>
                      <option>Admin</option>
                      <option>Writter</option>
                    </select>
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text">@</div>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="inlineFormInputGroup"
                        placeholder="Username"
                      />
                    </div>
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text">@</div>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="inlineFormInputGroup"
                        placeholder="Username"
                      />
                    </div>
                    <div>
                      <a className="btn btn-secondary float-right">Submit</a>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="login-body pl-3">
                      <img width="300" src={logo} />
                    </div>
                  </div>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Login;
