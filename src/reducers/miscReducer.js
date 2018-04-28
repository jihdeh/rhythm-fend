import { DONATE_SUCCESS } from "../constants/actionTypes";

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case DONATE_SUCCESS:
      return {
        ...state,
        donation: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;