import { combineReducers } from "redux";
import AdminReducer from "../../admin/modules/admin/_redux/adminReducer/AdminReducer";
import CategoryReducer from "../../admin/modules/category/_redux/categoryReducer/CategoryReducer";
import WritterReducer from "../../admin/modules/writter/_redux/writterReducer/WritterReducer";
import NewsReducer from "../../admin/modules/news/_redux/newsReducer/NewsReducer";
import LoginReducer from "../../admin/modules/login/_redux/loginReducer/LoginReducer";
import LoginReducer2 from "../../writter/modules/login/_redux/loginReducer/LoginReducer";

// combine all of the reducers here
const rootReducer = combineReducers({
  categoryInfo: CategoryReducer,
  writterInfo: WritterReducer,
  adminInfo: AdminReducer,
  newsInfo: NewsReducer,
  loginInfo: LoginReducer,
  //writter
  writterLoginInfo: LoginReducer2,
});

export default rootReducer;
