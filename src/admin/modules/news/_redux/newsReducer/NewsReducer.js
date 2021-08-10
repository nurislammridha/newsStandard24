import * as Types from "../types/Types";
import htmlToDraft from "html-to-draftjs";
import { EditorState, ContentState } from "draft-js";
import { ImageUrl } from "../newsAction/NewsAction";
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
    reletedNews: [],
    isPublish: false,
  },
  isButtonLoader: false,
  isNewsInserted: false,
  isNewsUpdate: false,
  isNewsDeleted: false,
  isNewsLoader: false,
  newsList: null,
  isLoadNews: false,
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
    case Types.IS_SUCCESS_NEWS:
      const newsInput2 = initialState.newsInput;
      return {
        ...state,
        newsInput: newsInput2,
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
      console.log(`action.payload`, action.payload);
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
    case Types.SET_NEWS_DATA:
      console.log(`action.payload`, action.payload);

      let newsUpdate = { ...state.newsInput };
      newsUpdate.newsTitle = action.payload.newsId.newsTitle;
      newsUpdate.categoryId = action.payload.newsId.categoryId;
      newsUpdate.categoryName = action.payload.newsId.categoryName;
      // newsUpdate.fullDescription = action.payload.newsId.fullDescription;
      newsUpdate.writterId = action.payload.newsId.writterId;
      newsUpdate.writterName = action.payload.newsId.writterName;
      newsUpdate.reletedNews = action.payload.newsId.reletedNews;
      newsUpdate.featureImagePreview = ImageUrl(action.payload.featureImg);
      newsUpdate.thumbnailImagePreview = ImageUrl(action.payload.thumbnailImg);
      newsUpdate.fullDescription = MyhtmlToDraft(
        action.payload.newsId.fullDescription
      );
      console.log(`newsUpdate`, newsUpdate);
      return {
        ...state,
        newsInput: newsUpdate,
      };
    case Types.IS_LOAD_NEWS:
      return {
        ...state,
        isLoadNews: action.payload,
      };
    default:
      break;
  }
  return newState;
};
export default NewsReducer;
export const MyhtmlToDraft = (data) => {
  const blocksFromHtml = htmlToDraft(data);
  const { contentBlocks, entityMap } = blocksFromHtml;
  const contentState = ContentState.createFromBlockArray(
    contentBlocks,
    entityMap
  );
  const editorState = EditorState.createWithContent(contentState);
  return editorState;
};
