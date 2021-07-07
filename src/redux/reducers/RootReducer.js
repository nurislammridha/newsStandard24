import { combineReducers } from "redux";
import DashboardReducer from "src/views/dashboard/_redux/dashboardReducer/DashboardReducer";
import LoginReducer from "src/views/pages/_redux/reducer/LoginReducer";
import ParcelReducer from "src/views/parcel/_redux/parcelReducer/ParcelReducer";
import PaymentReducer from "src/views/payments/_redux/paymentReducer/PaymentReducer";
import ProfileReducer from "src/views/profile/_redux/reducer/ProfileReducer";

// combine all of the reducers here
const rootReducer = combineReducers({
  parcelInfo: ParcelReducer,
  loginInfo: LoginReducer,
  profileInfo: ProfileReducer,
  dashboardInfo: DashboardReducer,
  paymentInfo: PaymentReducer,
});

export default rootReducer;
