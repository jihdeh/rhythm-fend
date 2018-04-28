import axios from "axios";
import ajax from "../utils/ajax";
import {GET_PROFILE_PENDING, GET_PROFILE_FULFILLED, GET_PROFILE_REJECTED} from "../constants/actionTypes";

export const getprofilepending = () => async dispatch => {
  await dispatch({type: GET_PROFILE_PENDING});
};

export const getprofile = uniqueCode => async dispatch => {
  try {
    const url = `${process.env.REACT_APP_BASE_URL}/user/${uniqueCode}`;
    const res = await axios.get(url);
    const response = res.response.data;

    await dispatch({
      type: GET_PROFILE_FULFILLED,
      payload: {
        profilePicture: response.data.profilePicture,
        country: response.data.country,
        state: response.data.state,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        bio: response.data.bio,
        profileUrl: `${process.env.REACT_APP_PROFILE_URL}${uniqueCode}`,
        videoUrl: response.data.contestantVideo,
        uniqueCode
      }
    });
  } catch (err) {
    await dispatch({type: GET_PROFILE_REJECTED, payload: err});
  }
};
