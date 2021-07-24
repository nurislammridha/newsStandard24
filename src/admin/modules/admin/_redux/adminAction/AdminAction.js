import * as Types from "../types/Types";
import axios from "axios";
import { showToast } from "../../../../../utils/ToastHelper";

export const GetPasswordInput = (name, value, e) => (dispatch) => {
  const formData = {
    name: name,
    value: value,
  };
  dispatch({ type: Types.GET_PASSWORD_INPUT, payload: formData });
};

export const SubmitPasswordInput = (data) => (dispatch) => {
  if (data.oldPassword.length === 0) {
    showToast("error", "Old password shouldn`t be empty");
    return 0;
  } else if (data.oldPassword.length < 6) {
    showToast("error", "Old password should be at least 6 charecter");
    return 0;
  } else if (data.newPassword.length === 0) {
    showToast("error", "New password shouldn`t be empty");
    return 0;
  } else if (data.newPassword.length < 6) {
    showToast("error", "New Password should be at least 6 charecter");
    return 0;
  } else if (data.confirmPassword.length === 0) {
    showToast("error", "Confirm password shouldn`t be empty");
    return 0;
  } else if (data.confirmPassword.length < 6) {
    showToast("error", "Confirm Password should be at least 6 charecter");
    return 0;
  } else if (data.newPassword !== data.confirmPassword) {
    showToast("error", "Password not matched2");
    return 0;
  }
  const email = localStorage.getItem("email");
  data.email = email;
  const url = `${process.env.REACT_APP_NEWS}admin/change_password`;
  dispatch({ type: Types.IS_LOAD_BUTTON, payload: true });
  try {
    axios
      .post(url, data)
      .then((res) => {
        console.log(`res`, res);
        if (res.data.status) {
          showToast("success", res.data.message);
          dispatch({ type: Types.IS_LOAD_BUTTON, payload: false });
          dispatch({ type: Types.IS_PASSWORD_CHANNGED, payload: true });
        } else {
          showToast("error", res.data.message);
        }
      })
      .catch((err) => {
        dispatch({ type: Types.IS_LOAD_BUTTON, payload: false });
        const message = JSON.parse(err.request.response).message;
        showToast("error", message);
      });
  } catch (error) {
    showToast("error", "Something went wrong");
  }
  dispatch({ type: Types.IS_LOAD_BUTTON, payload: true });
};
