import * as Types from "../types/Types";
const initialState = {
  newsInput: {
    newsTitle: "",
    categoryId: "",
    categoryName: "",
    shortDescription: "",
    fullDescription: "",
    createdAt: new Date(),
    writterId: "",
    writterName: "",
    thumbnailImage: "",
    thumbnailImagePreview: "",
    featureImage: "",
    featureImagePreview: "",
    reletedNews: "",
    isPublish: false,
  },
  isButtonLoader: false,
  isNewsInserted: false,
  isNewsUpdate: false,
  isNewsDeleted: false,
  isNewsLoader: false,
  newsList: null,
};
const NewsReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case Types.GET_NEWS_INPUT:
      const newsInput = { ...state.newsInput };
      newsInput[action.payload.name] = action.payload.value;
      return {
        ...state,
        newsInput: newsInput,
      };

    case Types.IS_NEWS_INSERTED:
      return {
        ...state,
        isNewsInserted: action.payload,
        newsInput: initialState.newsInput,
      };
    case Types.IS_BUTTON_LOADER:
      return {
        ...state,
        isNewsLoader: action.payload,
      };
    case Types.IS_NEWS_UPDATE:
      return {
        ...state,
        isNewsUpdate: action.payload,
      };
    case Types.IS_NEWS_DELETED:
      return {
        ...state,
        isNewsDeleted: action.payload,
      };
    case Types.IS_NEWS_LOADER:
      return {
        ...state,
        isNewsLoader: action.payload,
      };
    case Types.NEWS_LIST:
      return {
        ...state,
        newsList: action.payload,
      };
    case Types.SET_CATEGORY_DATA:
      let newsUpdate = action.payload;
      return {
        ...state,
        newsInput: newsUpdate,
      };
    default:
      break;
  }
  return newState;
};
export default NewsReducer;
