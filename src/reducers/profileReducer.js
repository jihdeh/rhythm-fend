import {
  GET_PROFILE_PENDING,
  GET_PROFILE_FULFILLED,
  GET_PROFILE_REJECTED
} from "../constants/actionTypes";

const initialstate = {
  fetching: false,
  contestant: {},
  error: null
};

export default function profileReducer(state = initialstate, action) {
  switch (action.type) {
    case GET_PROFILE_PENDING:
      return {
        ...state,
        fetching: true,
        contestant: {},
        error: null
      };
    case GET_PROFILE_FULFILLED:
      return {
        ...state,
        fetching: false,
        contestant: action.payload,
        error: null
      };
    case GET_PROFILE_REJECTED:
      return {
        ...state,
        fetching: false,
        error: action.payload,
        contestant: {}
      };
    default:
      return state;
  }
}
