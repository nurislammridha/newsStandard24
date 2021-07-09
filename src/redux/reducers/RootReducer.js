import { combineReducers } from "redux";
import CategoryReducer from "../../admin/modules/category/_redux/categoryReducer/CategoryReducer";

// combine all of the reducers here
const rootReducer = combineReducers({
  categoryInfo: CategoryReducer,
});

export default rootReducer;
