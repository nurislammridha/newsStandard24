import * as Types from "../types/Types";
const initialState = {
  categoryInput: {
    categoryName: "",
  },
  isButtonLoader: false,
  isCategoryInserted: false,
  isCategoryUpdate: false,
  isCategoryDeleted: false,
  isCategoryLoader: false,
  categoryList: null,
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

    case Types.IS_CATEGORY_INSERTED:
      return {
        ...state,
        isCategoryInserted: action.payload,
        categoryInput: initialState.categoryInput,
      };
    case Types.IS_BUTTON_LOADER:
      return {
        ...state,
        isButtonLoader: action.payload,
      };
    case Types.IS_CATEGORY_UPDATE:
      return {
        ...state,
        isCategoryUpdate: action.payload,
      };
    case Types.IS_CATEGORY_DELETED:
      return {
        ...state,
        isCategoryDeleted: action.payload,
      };
    case Types.IS_CATEGORY_LOADER:
      return {
        ...state,
        isCategoryLoader: action.payload,
      };
    case Types.CATEGORY_LIST:
      return {
        ...state,
        categoryList: action.payload,
      };
    case Types.SET_CATEGORY_DATA:
      let categoryUpdate = action.payload;
      return {
        ...state,
        categoryInput: categoryUpdate,
      };
    default:
      break;
  }
  return newState;
};
export default CategoryReducer;
