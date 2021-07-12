import * as Types from "../types/Types";
const initialState = {
  writterInput: {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    division: "",
    district: "",
    password: "",
    confirmPassword: "",
    address: "",
  },
  isButtonLoader: false,
  isWritterInserted: false,
  isWritterUpdate: false,
  isWritterDeleted: false,
  isWritterLoader: false,
  writterList: null,
};
const WritterReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case Types.GET_WRITTER_INPUT:
      const writterInput = { ...state.writterInput };
      writterInput[action.payload.name] = action.payload.value;
      return {
        ...state,
        writterInput: writterInput,
      };

    case Types.IS_WRITTER_INSERTED:
      return {
        ...state,
        isWritterInserted: action.payload,
        writterInput: initialState.writterInput,
      };
    case Types.IS_BUTTON_LOADER:
      return {
        ...state,
        isButtonLoader: action.payload,
      };
    case Types.IS_WRITTER_UPDATE:
      return {
        ...state,
        isWritterUpdate: action.payload,
      };
    case Types.IS_WRITTER_DELETED:
      return {
        ...state,
        isWritterDeleted: action.payload,
      };
    case Types.IS_WRITTER_LOADER:
      return {
        ...state,
        isWritterLoader: action.payload,
      };
    case Types.WRITTER_LIST:
      return {
        ...state,
        writterList: action.payload,
      };
    case Types.SET_WRITTER_DATA:
      let writterUpdate = action.payload;
      return {
        ...state,
        writterInput: writterUpdate,
      };
    default:
      break;
  }
  return newState;
};
export default WritterReducer;
