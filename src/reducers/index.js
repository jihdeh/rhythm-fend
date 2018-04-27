import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import miscReducer from "./miscReducer";

export default combineReducers({
  user: usersReducer,
  auth: authReducer,
  error: errorReducer,
  misc: miscReducer
});
