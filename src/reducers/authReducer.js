import { LOGIN_SUCCESS, LOG_OUT } from "../constants/actionTypes";

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        userInfo: action.payload
      };

    case LOG_OUT:
      return {
        ...state,
        userInfo: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
