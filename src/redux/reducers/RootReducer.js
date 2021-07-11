import { combineReducers } from "redux";
import AdminReducer from "../../admin/modules/admin/_redux/adminReducer/AdminReducer";
import CategoryReducer from "../../admin/modules/category/_redux/categoryReducer/CategoryReducer";
import WritterReducer from "../../admin/modules/writter/_redux/writterReducer/WritterReducer";

// combine all of the reducers here
const rootReducer = combineReducers({
  categoryInfo: CategoryReducer,
  writterInfo: WritterReducer,
  adminInfo: AdminReducer,
});

export default rootReducer;
