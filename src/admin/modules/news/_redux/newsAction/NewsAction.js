import * as Types from "../types/Types";
import Axios from "axios";
import { showToast } from "../../../../../utils/ToastHelper";
import axios from "axios";

export const GetNewsInput = (name, value, e) => (dispatch) => {
  const formData = {
    name: name,
    value: value,
  };
  dispatch({ type: Types.GET_NEWS_INPUT, payload: formData });

  if (name === "thumbnailImage" || name === "featureImage") {
    let reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      formData.name = `${name}Preview`;
      formData.value = reader.result;
      dispatch({ type: Types.GET_NEWS_INPUT, payload: formData });
    };
    reader.readAsDataURL(file);
  }
};

export const SubmitNewsInput = (data) => (dispatch) => {
  if (data.newsTitle.length === 0) {
    showToast("error", "Title shouldn`t be empty");
    return 0;
  } else if (data.categoryName.length === 0) {
    showToast("error", "Please select a category");
    return 0;
  } else if (data.writterName.length === 0) {
    showToast("error", "Plesae select a writter name");
    return 0;
  } else if (data.reletedNews.length === 0) {
    showToast("error", "Please select releted news");
    return 0;
  } else if (data.thumbnailImage.length === 0) {
    showToast("error", "Please select a thumnai iamge");
    return 0;
  } else if (data.thumbnailImage.size > 153600) {
    showToast("error", "Image size shouldn`t be more than 150 KB");
    return 0;
  } else if (data.featureImage.length === 0) {
    showToast("error", "Please select a feature image");
    return 0;
  } else if (data.featureImage.size > 153600) {
    showToast("error", "Image size shouldn`t be more than 150 KB");
    return 0;
  } else if (data.fullDescription.length === 0) {
    showToast("error", "Full description shouldn`t be empty");
    return 0;
  }

  const formData = new FormData();
  formData.append("thumbnail_img", data.thumbnailImage);
  formData.append("feature_img", data.featureImage);
  const url = `${process.env.REACT_APP_BAZAR}news`;
  dispatch({ type: Types.IS_LOAD_NEWS, payload: true });
  try {
    Axios.post(url, data)
      .then(async (res) => {
        if (res.data.status) {
          const urlThumb = `${process.env.REACT_APP_BAZAR}newsImg/thumbnail/${res.data._id}`;
          const urlFeature = `${process.env.REACT_APP_BAZAR}newsImg/feature/${res.data._id}`;

          await Axios.put(urlThumb, formData).then((resImg) => {
            if (resImg.data.status) {
              // showToast("success", resImg.data.message);
              // dispatch({ type: Types.IS_SUCCESS_CATEGORY, payload: true });
              // dispatch({ type: Types.IS_LOAD_CATEGORY, payload: false });
            }
          });
          await Axios.put(urlFeature, formData).then((resImg) => {
            if (resImg.data.status) {
              showToast("success", resImg.data.message);
              dispatch({ type: Types.IS_SUCCESS_NEWS, payload: true });
              dispatch({ type: Types.IS_LOAD_NEWS, payload: false });
            }
          });
        } else {
          showToast("error", res.data.message);
        }
      })
      .catch((err) => {
        dispatch({ type: Types.IS_LOAD_NEWS, payload: false });
        const message = JSON.parse(err.request.response).message;
        showToast("error", message);
      });
  } catch (error) {
    showToast("error", "Something went wrong");
  }
  dispatch({ type: Types.IS_LOAD_NEWS, payload: true });
};

export const UpdateNewsInput = (data, id) => (dispatch) => {
  if (data.newsTitle.length === 0) {
    showToast("error", "Title shouldn`t be empty");
    return 0;
  } else if (data.categoryName.length === 0) {
    showToast("error", "Please select a category");
    return 0;
  } else if (data.writterName.length === 0) {
    showToast("error", "Plesae select a writter name");
    return 0;
  } else if (data.reletedNews.length === 0) {
    showToast("error", "Please select releted news");
    return 0;
  } else if (
    data.thumbnailImage.length === undefined &&
    data.thumbnailImage.size > 153600
  ) {
    showToast("error", "Thumbnai mage size shouldn`t be more than 150 KB");
    return 0;
  } else if (
    data.featureImage.length === undefined &&
    data.featureImage.size > 153600
  ) {
    showToast("error", "feature image size shouldn`t be more than 150 KB");
    return 0;
  } else if (data.fullDescription.length === 0) {
    showToast("error", "Full description shouldn`t be empty");
    return 0;
  }
  const formData = new FormData();
  formData.append("thumbnail_img", data.thumbnailImage);
  formData.append("feature_img", data.featureImage);
  const url = `${process.env.REACT_APP_NEWS}category/${id}`;
  dispatch({ type: Types.IS_LOAD_NEWS, payload: true });
  try {
    Axios.put(url, data)
      .then(async (res) => {
        if (res.data.status) {
          const urlThumb = `${process.env.REACT_APP_BAZAR}newsImg/thumbnail/${res.data._id}`;
          const urlFeature = `${process.env.REACT_APP_BAZAR}newsImg/feature/${res.data._id}`;

          if (data.thumbnailImage.length === undefined) {
            Axios.put(urlThumb, formData).then((resImg) => {
              if (resImg.data.status) {
                // showToast("success", resImg.data.message);
                // dispatch({ type: Types.IS_SUCCESS_CATEGORY, payload: true });
                // dispatch({ type: Types.IS_LOAD_CATEGORY, payload: false });
              }
            });
          }
          if (data.featureImage.length === undefined) {
            Axios.put(urlFeature, formData).then((resImg) => {
              if (resImg.data.status) {
                showToast("success", resImg.data.message);
                dispatch({ type: Types.IS_NEWS_UPDATE, payload: true });
                dispatch({ type: Types.IS_LOAD_NEWS, payload: false });
              }
            });
          }
          if (
            data.featureImage.length === 0 &&
            data.thumbnailImage.length === 0
          ) {
            dispatch({ type: Types.IS_LOAD_NEWS, payload: false });
            dispatch({ type: Types.IS_NEWS_UPDATE, payload: true });
          }
        } else {
          showToast("error", res.data.message);
        }
      })
      .catch((err) => {
        dispatch({ type: Types.IS_LOAD_NEWS, payload: false });
        const message = JSON.parse(err.request.response).message;
        showToast("error", message);
      });
  } catch (error) {
    showToast("error", "Something went wrong");
  }
  dispatch({ type: Types.IS_LOAD_NEWS, payload: true });
};
export const FalseNewsUpdate = () => (dispatch) => {
  dispatch({ type: Types.IS_NEWS_UPDATE, payload: false });
};
export const EmptyNewsField = () => (dispatch) => {
  dispatch({ type: Types.IS_NEWS_INSERTED, payload: true });
};

export const GetNewsList = () => (dispatch) => {
  const url = `${process.env.REACT_APP_NEWS}newsImg`;
  dispatch({ type: Types.IS_NEWS_LOADER, payload: true });
  axios.get(url).then((res) => {
    if (res.data.status) {
      dispatch({ type: Types.IS_NEWS_LOADER, payload: false });
      dispatch({ type: Types.NEWS_LIST, payload: res.data.result });
    }
  });
};
export const SetNewsUpdate = (data) => (dispatch) => {
  dispatch({ type: Types.SET_NEWS_DATA, payload: data });
};
export const NewsDelete = (id) => (dispatch) => {
  const url = `${process.env.REACT_APP_NEWS}news/${id}`;
  try {
    axios.delete(url).then((res) => {
      if (res.data.staus) {
        dispatch({ type: Types.IS_NEWS_DELETED, payload: true });
      }
    });
  } catch (error) {
    showToast("error", "Something went wrong");
  }
};
export const FalseNewsDeleted = (data) => (dispatch) => {
  dispatch({ type: Types.IS_NEWS_DELETED, payload: false });
};
