import * as Types from "../types/Types";
const initialState = {
  categoryInput: {
    categoryName: "",
    categoryImg: "",
    imagePreviewUrl: "",
    categoryID: "",
  },
  isLoadCategory: false,
  categoryList: null,
  isLoadCategoryList: false,
  isCategoryDeleted: false,
  isSuccessCategory: false,
};
const CategoryReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case Types.GET_CATEGORY_INPUT:
      const categoryInput = { ...state.categoryInput };
      categoryInput[action.payload.name] = action.payload.value;
      return {
        ...state,
        categoryInput: categoryInput,
      };

    case Types.IS_SUCCESS_CATEGORY:
      return {
        ...state,
        isSuccessCategory: action.payload,
        categoryInput: initialState.categoryInput,
      };
    case Types.IS_LOAD_CATEGORY:
      return {
        ...state,
        isLoadCategory: action.payload,
      };
    case Types.GET_CATEGORY_LIST:
      return {
        ...state,
        categoryList: action.payload,
      };
    case Types.IS_LOAD_CATEGORY_LIST:
      return {
        ...state,
        isLoadCategoryList: action.payload,
      };
    case Types.IS_CATEGORY_DELETED:
      return {
        ...state,
        isCategoryDeleted: action.payload,
      };
    case Types.SET_CATEGORY_UPDATED:
      const categorySetInput = { ...state.categoryInput };
      categorySetInput.categoryName = action.payload.categoryName;
      categorySetInput.imagePreviewUrl = action.payload.categoryImage;
      categorySetInput.categoryID = action.payload.categoryID;
      return {
        ...state,
        categoryInput: categorySetInput,
      };

    default:
      break;
  }
  return newState;
};
export default CategoryReducer;
