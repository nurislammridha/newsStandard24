import * as Types from "../types/Types";
import Axios from "axios";
import { showToast } from "src/utils/ToastHelper";
import moment from "moment";
import axios from "axios";

export const GetCategoryInput = (name, value, e) => (dispatch) => {
  const formData = {
    name: name,
    value: value,
  };
  dispatch({ type: Types.GET_CATEGORY_INPUT, payload: formData });

  if (name === "categoryImg") {
    let reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      formData.name = "imagePreviewUrl";
      formData.value = reader.result;
      dispatch({ type: Types.GET_CATEGORY_INPUT, payload: formData });
    };
    reader.readAsDataURL(file);
  }
};

export const SubmitCategoryInput = (data) => (dispatch) => {
  if (data.categoryName.length === 0) {
    showToast("error", "Category name shouldn`t be empty");
    return 0;
  } else if (data.categoryImg.length === 0) {
    showToast("error", "Please select category image");
    return 0;
  } else if (data.categoryImg.size > 153600) {
    showToast("error", "Image size shouldn`t be more than 150 KB");
    return 0;
  }

  const formData = new FormData();
  const url = `${process.env.REACT_APP_BAZAR}store/category/create`;
  dispatch({ type: Types.IS_LOAD_CATEGORY, payload: true });
  try {
    Axios.post(url, data)
      .then((res) => {
        console.log(`res`, res);
        if (res.data.status) {
          const urlImg = `${process.env.REACT_APP_BAZAR}store/category/${res.data.categoryID}/upload`;
          formData.append("category-image", data.categoryImg);
          Axios.put(urlImg, formData)
            .then((resImg) => {
              console.log(`resImg`, resImg);
              if (resImg.data.status) {
                showToast("success", resImg.data.message);
                dispatch({ type: Types.IS_SUCCESS_CATEGORY, payload: true });
                dispatch({ type: Types.IS_LOAD_CATEGORY, payload: false });
              } else {
                showToast("error", resImg.data.message);
                dispatch({ type: Types.IS_LOAD_CATEGORY, payload: false });
              }
            })
            .catch((err) => {
              dispatch({ type: Types.IS_LOAD_CATEGORY, payload: false });
              const message = JSON.parse(err.request.response).message;
              showToast("error", message);
            });
        } else {
          showToast("error", res.data.message);
        }
      })
      .catch((err) => {
        dispatch({ type: Types.IS_LOAD_CATEGORY, payload: false });
        const message = JSON.parse(err.request.response).message;
        showToast("error", message);
      });
  } catch (error) {
    showToast("error", "Something went wrong");
  }
  dispatch({ type: Types.IS_LOAD_CATEGORY, payload: true });
};

export const GetCategoryInfo = (pageNo) => (dispatch) => {
  const url = `${process.env.REACT_APP_BAZAR}store/category/list?page=${pageNo}&size=1000`;
  dispatch({ type: Types.IS_LOAD_CATEGORY_LIST, payload: true });
  try {
    Axios.get(url).then((res) => {
      if (res.data.status) {
        dispatch({
          type: Types.GET_CATEGORY_LIST,
          payload: res.data.categorys,
        });
        dispatch({ type: Types.IS_LOAD_CATEGORY_LIST, payload: false });
      }
    });
  } catch (error) {
    dispatch({ type: Types.IS_LOAD_CATEGORY_LIST, payload: false });
  }
  dispatch({ type: Types.IS_LOAD_CATEGORY_LIST, payload: true });
};

export const CategoryDelete = (id) => (dispatch) => {
  const url = `${process.env.REACT_APP_BAZAR}store/category/${id}/delete`;

  try {
    Axios.delete(url).then((res) => {
      if (res.data.status) {
        dispatch({ type: Types.IS_CATEGORY_DELETED, payload: true });
      }
    });
  } catch (error) {}
};
export const SetFalseCategoryDelete = () => (dispatch) => {
  dispatch({ type: Types.IS_CATEGORY_DELETED, payload: false });
};

export const SetCategoryUpdatedData = (data) => (dispatch) => {
  dispatch({ type: Types.SET_CATEGORY_UPDATED, payload: data });
};

export const UpdateCategory = (data) => (dispatch) => {
  console.log(`data`, data);
  if (data.categoryName.length === 0) {
    showToast("error", "Category name shouldn`t be empty");
    return 0;
  } else if (
    data.categoryImg.length === undefined &&
    data.categoryImg.size > 153600
  ) {
    showToast("error", "Image size shouldn`t be more than 150 KB");
    return 0;
  }
  const formData = new FormData();
  const url = `${process.env.REACT_APP_BAZAR}store/category/edit`;
  dispatch({ type: Types.IS_LOAD_CATEGORY, payload: true });
  try {
    Axios.put(url, data)
      .then((res) => {
        console.log(`res`, res);
        if (res.data.status) {
          if (data.categoryImg.length === 0) {
            dispatch({ type: Types.IS_SUCCESS_CATEGORY, payload: true });
            dispatch({ type: Types.IS_LOAD_CATEGORY, payload: false });
          } else {
            const urlImg = `${process.env.REACT_APP_BAZAR}store/category/${data.categoryID}/upload`;
            formData.append("category-image", data.categoryImg);
            Axios.put(urlImg, formData)
              .then((resImg) => {
                if (resImg.data.status) {
                  showToast("success", resImg.data.message);
                  dispatch({ type: Types.IS_SUCCESS_CATEGORY, payload: true });
                  dispatch({ type: Types.IS_LOAD_CATEGORY, payload: false });
                } else {
                  showToast("error", resImg.data.message);
                  dispatch({ type: Types.IS_LOAD_CATEGORY, payload: false });
                }
              })
              .catch((err) => {
                dispatch({ type: Types.IS_LOAD_CATEGORY, payload: false });
                const message = JSON.parse(err.request.response).message;
                showToast("error", message);
              });
          }
        } else {
          showToast("error", res.data.message);
          dispatch({ type: Types.IS_LOAD_CATEGORY, payload: false });
        }
      })
      .catch((err) => {
        dispatch({ type: Types.IS_LOAD_CATEGORY, payload: false });
        const message = JSON.parse(err.request.response).message;
        showToast("error", message);
      });
  } catch (error) {
    showToast("error", "Something went wrong");
  }
  dispatch({ type: Types.IS_LOAD_CATEGORY, payload: true });
};
export const SetFalseCategorySuccess = () => (dispatch) => {
  dispatch({ type: Types.IS_SUCCESS_CATEGORY, payload: false });
};
