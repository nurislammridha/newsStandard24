import * as Types from "../types/Types";
const initialState = {
  adminInput: {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  },
  isLoadButton: false,
};
const AdminReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case Types.GET_PASSWORD_INPUT:
      const adminInput = { ...state.adminInput };
      adminInput[action.payload.name] = action.payload.value;
      return {
        ...state,
        adminInput: adminInput,
      };

    case Types.IS_PASSWORD_CHANNGED:
      return {
        ...state,
        adminInput: initialState.adminInput,
      };
    case Types.IS_LOAD_BUTTON:
      return {
        ...state,
        isLoadButton: action.payload,
      };
    default:
      break;
  }
  return newState;
};
export default AdminReducer;
