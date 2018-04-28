import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";

export default combineReducers({
  user: usersReducer,
  auth: authReducer,
  error: errorReducer,
  profile: profileReducer
});
