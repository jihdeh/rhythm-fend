import {
  VERIFY_USERNAME_PENDING,
  VERIFY_USERNAME_FULFILLED,
  VERIFY_USERNAME_REJECTED
} from "../constants/actionTypes";

const initialstate = {
  fetching: false,
  taken: false
};

export default function verifyUsernameReducer(state = initialstate, action) {
  switch (action.type) {
    case VERIFY_USERNAME_PENDING:
      return {
        ...state,
        fetching: true
      };
    case VERIFY_USERNAME_FULFILLED:
      return {
        ...state,
        fetching: false,
        taken: action.payload
      };
    case VERIFY_USERNAME_REJECTED:
      return {
        ...state,
        fetching: false,
        taken: action.payload
      };
    default:
      return {
        ...state
      };
  }
}
