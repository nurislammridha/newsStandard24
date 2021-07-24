import * as Types from "../types/Types";
const initialState = {
  loginInput: {
    email: "",
    password: "",
  },
  isButtonLoader: false,
  isLoggedIn: false,
};
const LoginReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case Types.GET_LOGIN_INPUT:
      const loginInput = { ...state.loginInput };
      loginInput[action.payload.name] = action.payload.value;
      return {
        ...state,
        loginInput: loginInput,
      };
    case Types.IS_BUTTON_LOADER:
      return {
        ...state,
        isButtonLoader: action.payload,
      };
    case Types.IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.payload,
      };

    default:
      break;
  }
  return newState;
};
export default LoginReducer;
