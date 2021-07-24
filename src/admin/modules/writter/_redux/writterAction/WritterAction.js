import * as Types from "../types/Types";
import Axios from "axios";
import { showToast } from "../../../../../utils/ToastHelper";
import axios from "axios";

export const GetWritterInput = (name, value, e) => (dispatch) => {
  const formData = {
    name: name,
    value: value,
  };
  dispatch({ type: Types.GET_WRITTER_INPUT, payload: formData });
};

export const SubmitWritterInput = (data) => (dispatch) => {
  if (data.firstName.length === 0) {
    showToast("error", "First name shouldn`t be empty");
    return 0;
  } else if (data.lastName.length === 0) {
    showToast("error", "Last name shouldn`t be empty");
    return 0;
  } else if (data.phoneNumber.length === 0) {
    showToast("error", "Phone number shouldn`t be empty");
    return 0;
  } else if (
    (data.phoneNumber.length > 0 &&
      data.phoneNumber.substring(0, 2) !== "01") ||
    data.phoneNumber.length !== 11
  ) {
    showToast("error", "Phone number is invalid !");
  } else if (data.email.length === 0) {
    showToast("error", "Email shouldn`t be empty");
    return 0;
  } else if (
    data.email.length > 0 &&
    data.email.substr(data.email.length - 10, data.email.length - 1) !==
      "@gmail.com"
  ) {
    showToast("error", "Invalid Email");
    return 0;
  } else if (data.password.length === 0) {
    showToast("error", "Password should n`t be empty");
    return 0;
  } else if (data.password.length < 6) {
    showToast("error", "Password should be at least 6 character");
    return 0;
  } else if (data.confirmPassword.length === 0) {
    showToast("error", "Confirm password should n`t be empty");
    return 0;
  } else if (data.confirmPassword.length < 6) {
    showToast("error", "Confirm Password should be at least 6 character");
    return 0;
  } else if (data.password !== data.confirmPassword) {
    showToast("error", "Password and confirm password not matched");
    return 0;
  } else if (data.division.length === 0) {
    showToast("error", "Please select division");
    return 0;
  } else if (data.district.length === 0) {
    showToast("error", "Please select district");
    return 0;
  } else if (data.address.length === 0) {
    showToast("error", "Address should n`t be empty");
    return 0;
  }

  const url = `${process.env.REACT_APP_NEWS}writter`;
  dispatch({ type: Types.IS_BUTTON_LOADER, payload: true });
  try {
    Axios.post(url, data)
      .then((res) => {
        console.log(`res`, res);
        if (res.data.status) {
          dispatch({ type: Types.IS_BUTTON_LOADER, payload: false });
          dispatch({ type: Types.IS_WRITTER_INSERTED, payload: true });
          showToast("success", res.data.message);
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
    showToast("error", "Something went wrong");
  }
  dispatch({ type: Types.IS_BUTTON_LOADER, payload: true });
};
export const UpdateWritterInput = (data, id) => (dispatch) => {
  if (data.firstName.length === 0) {
    showToast("error", "First name shouldn`t be empty");
    return 0;
  } else if (data.lastName.length === 0) {
    showToast("error", "Last name shouldn`t be empty");
    return 0;
  } else if (data.phoneNumber.length === 0) {
    showToast("error", "Phone number shouldn`t be empty");
    return 0;
  } else if (
    (data.phoneNumber.length > 0 &&
      data.phoneNumber.substring(0, 2) !== "01") ||
    data.phoneNumber.length !== 11
  ) {
    showToast("error", "Phone number is invalid !");
  } else if (data.email.length === 0) {
    showToast("error", "Email shouldn`t be empty");
    return 0;
  } else if (
    data.email.length > 0 &&
    data.email.substr(data.email.length - 10, data.email.length - 1) !==
      "@gmail.com"
  ) {
    showToast("error", "Invalid Email");
    return 0;
  } else if (data.division.length === 0) {
    showToast("error", "Please select division");
    return 0;
  } else if (data.district.length === 0) {
    showToast("error", "Please select district");
    return 0;
  } else if (data && data.address.length === 0) {
    showToast("error", "Address should n`t be empty");
    return 0;
  }

  const url = `${process.env.REACT_APP_NEWS}writter/${id}`;
  dispatch({ type: Types.IS_BUTTON_LOADER, payload: true });
  try {
    Axios.put(url, data)
      .then((res) => {
        console.log(`res`, res);
        if (res.data.status) {
          dispatch({ type: Types.IS_BUTTON_LOADER, payload: false });
          dispatch({ type: Types.IS_WRITTER_UPDATE, payload: true });
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
    showToast("error", "Something went wrong");
  }
  dispatch({ type: Types.IS_BUTTON_LOADER, payload: true });
};
export const FalseWritterUpdate = () => (dispatch) => {
  dispatch({ type: Types.IS_WRITTER_UPDATE, payload: false });
};
export const EmptyWritterField = () => (dispatch) => {
  dispatch({ type: Types.IS_WRITTER_INSERTED, payload: true });
};

export const GetWritterList = () => (dispatch) => {
  const url = `${process.env.REACT_APP_NEWS}writter`;
  dispatch({ type: Types.IS_WRITTER_LOADER, payload: true });
  axios.get(url).then((res) => {
    if (res.data.status) {
      dispatch({ type: Types.IS_WRITTER_LOADER, payload: false });
      dispatch({ type: Types.WRITTER_LIST, payload: res.data.result });
    }
  });
};
export const SetWritterUpdate = (data) => (dispatch) => {
  dispatch({ type: Types.SET_WRITTER_DATA, payload: data });
};
export const WritterDelete = (id) => (dispatch) => {
  const url = `${process.env.REACT_APP_NEWS}writter/${id}`;
  try {
    axios.delete(url).then((res) => {
      if (res.data.status) {
        dispatch({ type: Types.IS_WRITTER_DELETED, payload: true });
        showToast("success", res.data.message);
      }
    });
  } catch (error) {
    showToast("error", "Something went wrong");
  }
};
export const FalseWritterDeleted = (data) => (dispatch) => {
  dispatch({ type: Types.IS_WRITTER_DELETED, payload: false });
};
