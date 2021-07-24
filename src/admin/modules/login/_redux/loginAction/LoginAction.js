import * as Types from "../types/Types";
import axios from "axios";
import { showToast } from "../../../../../utils/ToastHelper";

export const GetLoginInput = (name, value) => (dispatch) => {
  const formData = {
    name: name,
    value: value,
  };
  dispatch({ type: Types.GET_LOGIN_INPUT, payload: formData });
};
export const SubmitLoginInput = (data) => async (dispatch) => {
  if (data.email.length === 0) {
    showToast("error", "Email should not be empty");
    return 0;
  } else if (
    data.email.substr(data.email.length - 10, data.email.length - 1) !==
    "@gmail.com"
  ) {
    showToast("error", "Invalid Email");
    return 0;
  } else if (data.password.length === 0) {
    showToast("error", "Password should not be empty");
    return 0;
  } else if (data.password.length < 6) {
    showToast("error", "Password should be at least 6 character");
  }
  const url = `${process.env.REACT_APP_NEWS}admin/login`;
  dispatch({ type: Types.IS_BUTTON_LOADER, payload: true });
  try {
    await axios
      .post(url, data)
      .then((res) => {
        if (res.data.status) {
          showToast("success", res.data.message);
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("email", data.email);
          dispatch({ type: Types.IS_LOGGED_IN, payload: true });
          dispatch({ type: Types.IS_BUTTON_LOADER, payload: false });
        } else {
          showToast("error", res.data.message);
        }
      })
      .catch((err) => {
        dispatch({ type: Types.IS_BUTTON_LOADER, payload: false });
        const message = JSON.parse(err.request.response).message;
        showToast("error", message);
      });
  } catch (error) {
    dispatch({ type: Types.IS_BUTTON_LOADER, payload: false });
    showToast("error", "Something went wrong!");
  }
};
export const FalseIsLoggedIn = () => (dispatch) => {
  dispatch({ type: Types.IS_LOGGED_IN, payload: false });
};
