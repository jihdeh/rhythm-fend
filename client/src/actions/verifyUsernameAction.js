import axios from "axios";
import {
  VERIFY_USERNAME_PENDING,
  VERIFY_USERNAME_FULFILLED,
  VERIFY_USERNAME_REJECTED
} from "../constants/actionTypes";

export const verifyUsername = username => async dispatch => {
  await dispatch({
    type: VERIFY_USERNAME_PENDING
  });
  try {
    const url = `${process.env.REACT_APP_BASE_URL}/user/${username}`;
    await axios.get(url);
    await dispatch({
      type: VERIFY_USERNAME_FULFILLED,
      payload: true
    });
  } catch (e) {
    await dispatch({
      type: VERIFY_USERNAME_REJECTED,
      payload: false
    });
  }
};
