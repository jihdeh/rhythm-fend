import { DONATE_SUCCESS, STATUS_STREAM } from "../constants/actionTypes";

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case DONATE_SUCCESS:
      return {
        ...state,
        donation: action.payload
      };
    case STATUS_STREAM:
      return {
        ...state,
        openStatus: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
