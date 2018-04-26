import {
  IS_AUTHENTICATED,
  LOG_OUT,
  CREATE_ACCOUNT_SUCCESS
} from "../constants/actionTypes";

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case IS_AUTHENTICATED:
      return {
        ...state,
        userInfo: action.payload
      };

    case LOG_OUT:
      return {
        ...state,
        userInfo: action.payload
      };

    case CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        createAccountStatus: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
