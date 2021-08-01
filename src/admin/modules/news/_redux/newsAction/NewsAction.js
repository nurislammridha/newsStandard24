import * as Types from "../types/Types";
import Axios from "axios";
import { showToast } from "../../../../../utils/ToastHelper";
import axios from "axios";
import draftToHtml from "draftjs-to-html";
import { convertToRaw } from "draft-js";

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
  }
  // else if (data.reletedNews.length === 0) {
  //   showToast("error", "Please select releted news");
  //   return 0;
  // }
  else if (data.thumbnailImage.length === 0) {
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
  const txt = data.fullDescription;
  const blocks = convertToRaw(txt.getCurrentContent()).blocks;
  const value = blocks
    .map((block) => (!block.text.trim() && "\n") || block.text)
    .join("\n");
  data.shortDescription = value.substring(0, 10);
  data.fullDescription = draftToHtml(
    convertToRaw(data.fullDescription.getCurrentContent())
  );

  const formData = new FormData();
  formData.append("thumbnail_img", data.thumbnailImage);
  formData.append("feature_img", data.featureImage);
  const url = `${process.env.REACT_APP_NEWS}news`;
  // dispatch({ type: Types.IS_LOAD_NEWS, payload: true });
  try {
    Axios.post(url, data)
      .then(async (res) => {
        if (res.data.status) {
          // const urlThumb = `${process.env.REACT_APP_BAZAR}newsImg/thumbnail/${res.data.result._id}`;
          const urlFeature = `${process.env.REACT_APP_NEWS}newsImg/${res.data.result._id}`;

          // await Axios.put(urlThumb, formData).then((resImg) => {
          //   if (resImg.data.status) {
          //     // showToast("success", resImg.data.message);
          //     // dispatch({ type: Types.IS_SUCCESS_CATEGORY, payload: true });
          //     // dispatch({ type: Types.IS_LOAD_CATEGORY, payload: false });
          //   }
          // });
          await Axios.post(urlFeature, formData).then((resImg) => {
            if (resImg.data.status) {
              showToast("success", resImg.data.message);
              dispatch({ type: Types.IS_SUCCESS_NEWS, payload: true });
              // dispatch({ type: Types.IS_LOAD_NEWS, payload: false });
            }
          });
        } else {
          showToast("error", res.data.message);
        }
      })
      .catch((err) => {
        // dispatch({ type: Types.IS_LOAD_NEWS, payload: false });
        const message = JSON.parse(err.request.response).message;
        showToast("error", message);
      });
  } catch (error) {
    showToast("error", "Something went wrong");
  }
  // dispatch({ type: Types.IS_LOAD_NEWS, payload: true });
};

export const UpdateNewsInput = (data, id) => async (dispatch) => {
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
    showToast("error", "Feature image size shouldn`t be more than 150 KB");
    return 0;
  } else if (data.fullDescription.length === 0) {
    showToast("error", "Full description shouldn`t be empty");
    return 0;
  }
  const txt = data.fullDescription;
  const blocks = convertToRaw(txt.getCurrentContent()).blocks;
  const value = blocks
    .map((block) => (!block.text.trim() && "\n") || block.text)
    .join("\n");
  data.shortDescription = value.substring(0, 10);
  data.fullDescription = draftToHtml(
    convertToRaw(data.fullDescription.getCurrentContent())
  );

  const formData = new FormData();
  formData.append("thumbnail_img", data.thumbnailImage);
  formData.append("feature_img", data.featureImage);
  const url = `${process.env.REACT_APP_NEWS}news/${id}`;
  // dispatch({ type: Types.IS_LOAD_NEWS, payload: true });
  // let isDataUpdate = false;
  // let isUpdate = false;
  try {
    await Axios.put(url, data).then(async (res) => {
      if (res.data.status) {
        const urlThumb = `${process.env.REACT_APP_NEWS}newsImg/thumbnail/${res.data._id}`;
        const urlFeature = `${process.env.REACT_APP_NEWS}newsImg/feature/${res.data._id}`;

        if (data.thumbnailImage.length === undefined) {
          await Axios.put(urlThumb, formData).then((resImg) => {
            if (resImg.data.status) {
              showToast("success", resImg.data.message);
              dispatch({ type: Types.IS_NEWS_UPDATE, payload: true });
              // dispatch({ type: Types.IS_LOAD_NEWS, payload: false });
            }
          });
        }
        if (data.featureImage.length === undefined) {
          await Axios.put(urlFeature, formData).then((resImg) => {
            if (resImg.data.status) {
              showToast("success", resImg.data.message);
              dispatch({ type: Types.IS_NEWS_UPDATE, payload: true });
              // dispatch({ type: Types.IS_LOAD_NEWS, payload: false });
            }
          });
        }
        if (
          data.featureImage.length === 0 &&
          data.thumbnailImage.length === 0
        ) {
          showToast("success", "Updated successfully");
          dispatch({ type: Types.IS_NEWS_UPDATE, payload: true });
        }
      } else {
        showToast("error", res.data.message);
      }
    });
    // .catch((err) => {
    //   const message = JSON.parse(err.request.response).message;
    //   showToast("error", message);
    // });
  } catch (error) {
    showToast("error", "Something went wrong");
  }
  // dispatch({ type: Types.IS_LOAD_NEWS, payload: true });
};
export const FalseNewsUpdate = () => (dispatch) => {
  dispatch({ type: Types.IS_NEWS_UPDATE, payload: false });
};
export const EmptyNewsField = () => (dispatch) => {
  dispatch({ type: Types.IS_NEWS_INSERTED, payload: true });
};

export const GetNewsList = () => (dispatch) => {
  const url = `${process.env.REACT_APP_NEWS}news`;
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
export const NewsDelete = (imgId, dataId) => (dispatch) => {
  const urlNews = `${process.env.REACT_APP_NEWS}news/${dataId}`;
  const urlImg = `${process.env.REACT_APP_NEWS}newsImg/${imgId}`;
  try {
    axios.delete(urlImg).then((res) => {
      if (res.data.status) {
        axios.delete(urlNews).then((res2) => {
          if (res2.data.status) {
            showToast("error", "Deleted successfully");
            dispatch({ type: Types.IS_NEWS_DELETED, payload: true });
          }
        });
      }
    });
  } catch (error) {
    showToast("error", "Something went wrong");
  }
};
export const FalseNewsDeleted = (data) => (dispatch) => {
  dispatch({ type: Types.IS_NEWS_DELETED, payload: false });
};

export const CategoryOption = (data) => {
  const arr = [];
  if (data) {
    data.forEach((item) => {
      const obj = {
        label: item.categoryName,
        value: item._id,
      };
      arr.push(obj);
    });
  }
  return arr;
};
export const WritterOption = (data) => {
  const arr = [];
  if (data) {
    data.forEach((item) => {
      const obj = {
        label: item.firstName + " " + item.lastName,
        value: item._id,
      };
      arr.push(obj);
    });
  }
  return arr;
};
export const NewsOption = (data) => {
  const arr = [];
  if (data) {
    data.forEach((item) => {
      const obj = {
        label: item.newsId.newsTitle,
        value: item._id,
      };
      arr.push(obj);
    });
  }
  return arr;
};
export const ImageUrl = (data) => {
  let url = null;
  if (data) {
    const path = data;
    const rem = path.substring(3);
    url = `http://localhost:5000/${rem}`;
  }
  console.log(`url`, url);
  return url;
};
