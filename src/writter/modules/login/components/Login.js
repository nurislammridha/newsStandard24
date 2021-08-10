import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import logo from "../../../assets/images/headerIcon.png";
import {
  FalseIsLoggedIn,
  GetLoginInput,
  SubmitLoginInput,
} from "../_redux/loginAction/LoginAction";
const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const loginInput = useSelector((state) => state.writterLoginInfo.loginInput);
  const isButtonLoader = useSelector(
    (state) => state.writterLoginInfo.isButtonLoader
  );
  const isLoggedIn = useSelector((state) => state.writterLoginInfo.isLoggedIn);
  const handleChangeInput = (name, value) => {
    dispatch(GetLoginInput(name, value));
  };
  const handleSubmit = (data) => {
    dispatch(SubmitLoginInput(data));
  };
  useEffect(() => {
    if (isLoggedIn) {
      history.push("/writter");
      dispatch(FalseIsLoggedIn());
    }
  }, [isLoggedIn]);
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") || "false";
    if (isLoggedIn === "true") {
      history.push("/admin");
    }
  }, []);
  return (
    <>
      <div className="login-body">
        <div>
          <Card style={{ width: "44rem" }}>
            <Card.Body>
              <Card.Text>
                <div className="row">
                  <div className="col-sm-6">
                    <h2 className="text-center text-muted">Writter Login</h2>

                    <div className="input-group mb-2 mt-5">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="fa fa-envelope-o" />
                        </div>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="inlineFormInputGroup"
                        placeholder="Enter Email"
                        name="email"
                        value={loginInput.email}
                        onChange={(e) =>
                          handleChangeInput("email", e.target.value)
                        }
                      />
                    </div>
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="fa fa-lock" />
                        </div>
                      </div>
                      <input
                        type="password"
                        className="form-control"
                        id="inlineFormInputGroup"
                        placeholder="Enter Password"
                        name="password"
                        value={loginInput.password}
                        onChange={(e) =>
                          handleChangeInput("password", e.target.value)
                        }
                        onKeyPress={(event) => {
                          if (event.key === "Enter") {
                            handleSubmit(loginInput);
                          }
                        }}
                      />
                    </div>
                    <div>
                      {!isButtonLoader && (
                        <a
                          className="btn btn-secondary float-right mb-3"
                          onClick={() => handleSubmit(loginInput)}
                        >
                          Login
                        </a>
                      )}
                      {isButtonLoader && (
                        <a className="btn btn-secondary float-right mb-3">
                          <span
                            class="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                          ></span>
                        </a>
                      )}
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
