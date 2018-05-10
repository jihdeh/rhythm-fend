import axios from "axios";
import {
  GET_PROFILE_PENDING,
  GET_PROFILE_FULFILLED,
  GET_PROFILE_REJECTED
} from "../constants/actionTypes";

export const getprofilepending = () => async dispatch => {
  await dispatch({ type: GET_PROFILE_PENDING });
};

export const getprofile = username => async dispatch => {
  try {
    const url = `${process.env.REACT_APP_BASE_URL}/user/${username}`;
    const res = await axios.get(url);
    const moldResponse = Object.assign(
      {},
      { profileUrl: `${process.env.REACT_APP_PROFILE_URL}${username}` },
      res.data.data
    );

    await dispatch({
      type: GET_PROFILE_FULFILLED,
      payload: moldResponse
    });
  } catch (err) {
    await dispatch({ type: GET_PROFILE_REJECTED, payload: err });
  }
};
