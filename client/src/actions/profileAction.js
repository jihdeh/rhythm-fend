import axios from "axios";
import {
  GET_PROFILE_PENDING,
  GET_PROFILE_FULFILLED,
  GET_PROFILE_REJECTED,
  UPDATE_PROFILE
} from "../constants/actionTypes";
import { displayError } from "./errorActions";

export const getProfilePending = () => async dispatch => {
  await dispatch({ type: GET_PROFILE_PENDING });
};

export const getProfile = username => async dispatch => {
  try {
    const url = `${process.env.REACT_APP_BASE_URL}/user/${username}`;
    const res = await axios.get(url);
    const moldResponse = Object.assign(
      {},
      { profileUrl: `${process.env.REACT_APP_PROFILE_URL}${username}` },
      res.data
    );
    await dispatch({
      type: GET_PROFILE_FULFILLED,
      payload: moldResponse
    });
  } catch (err) {
    await dispatch({ type: GET_PROFILE_REJECTED, payload: err });
  }
};

export const updateProfile = (profile, { username }) => async dispatch => {
  try {
    if (profile.profilePhoto) {
      updateImage(username, profile.profilePhoto);
    }
    profile.profilePhoto = null;
    const url = `${process.env.REACT_APP_BASE_URL}/auth/${username}`;
    await axios.put(url, profile);
    await dispatch({
      type: UPDATE_PROFILE,
      payload: true
    });
    getProfile(username)(dispatch);
  } catch (error) {
    const { data: { message } } = error.response;
    displayError(message.message)(dispatch);
  }
};

export const updateImage = async (username, image) => {
  try {
    const form = new FormData();
    form.append("image", image);
    form.append("username", username);
    const options = {
      method: "PUT",
      data: form,
      url: `${process.env.REACT_APP_BASE_URL}/uploadProfileImage`
    };

    const upload = await axios(options);
    console.log(upload);
  } catch (error) {
    console.log(error);
  }
};

export const resetUpdateProfile = () => async dispatch => {
  dispatch({
    type: UPDATE_PROFILE,
    payload: false
  });
};
