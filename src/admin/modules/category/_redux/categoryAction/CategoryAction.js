import * as Types from "../types/Types";
import Axios from "axios";
import { showToast } from "../../../../../utils/ToastHelper";
import axios from "axios";

export const GetCategoryInput = (name, value, e) => (dispatch) => {
  const formData = {
    name: name,
    value: value,
  };
  dispatch({ type: Types.GET_CATEGORY_INPUT, payload: formData });
};

export const SubmitCategoryInput = (data) => (dispatch) => {
  if (data.categoryName.length === 0) {
    showToast("error", "Category name shouldn`t be empty");
    return 0;
  }

  const url = `${process.env.REACT_APP_NEWS}category`;
  dispatch({ type: Types.IS_BUTTON_LOADER, payload: true });
  try {
    Axios.post(url, data)
      .then((res) => {
        console.log(`res`, res);
        if (res.data.status) {
          dispatch({ type: Types.IS_BUTTON_LOADER, payload: false });
          dispatch({ type: Types.IS_CATEGORY_INSERTED, payload: true });
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
export const UpdateCategoryInput = (data, id) => (dispatch) => {
  if (data.categoryName.length === 0) {
    showToast("error", "Category name shouldn`t be empty");
    return 0;
  }

  const url = `${process.env.REACT_APP_NEWS}category/${id}`;
  dispatch({ type: Types.IS_BUTTON_LOADER, payload: true });
  try {
    Axios.put(url, data)
      .then((res) => {
        console.log(`res`, res);
        if (res.data.status) {
          dispatch({ type: Types.IS_BUTTON_LOADER, payload: false });
          dispatch({ type: Types.IS_CATEGORY_UPDATE, payload: true });
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
export const FalseCategoryUpdate = () => (dispatch) => {
  dispatch({ type: Types.IS_CATEGORY_UPDATE, payload: false });
};
export const EmptyCategoryField = () => (dispatch) => {
  dispatch({ type: Types.IS_CATEGORY_INSERTED, payload: true });
};

export const GetCategoryList = () => (dispatch) => {
  const url = `${process.env.REACT_APP_NEWS}category`;
  dispatch({ type: Types.IS_CATEGORY_LOADER, payload: true });
  axios.get(url).then((res) => {
    if (res.data.staus) {
      dispatch({ type: Types.IS_CATEGORY_LOADER, payload: false });
      dispatch({ type: Types.CATEGORY_LIST, payload: res.data.category });
    }
  });
};
export const SetCategoryUpdate = (data) => (dispatch) => {
  dispatch({ type: Types.SET_CATEGORY_DATA, payload: data });
};
export const CategoryDelete = (id) => (dispatch) => {
  const url = `${process.env.REACT_APP_NEWS}category/${id}`;
  try {
    axios.delete(url).then((res) => {
      if (res.data.staus) {
        dispatch({ type: Types.IS_CATEGORY_DELETED, payload: true });
      }
    });
  } catch (error) {
    showToast("error", "Something went wrong");
  }
};
export const FalseCategoryDeleted = (data) => (dispatch) => {
  dispatch({ type: Types.IS_CATEGORY_DELETED, payload: false });
};
