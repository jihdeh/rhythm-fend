import {
  VOTE_PENDING,
  VOTE_FULFILLED,
  VOTE_REJECTED
} from "../constants/actionTypes";
import axios from "axios";

const vote = ({
  reference,
  username,
  voteCount,
  success,
  failed
}) => async dispatch => {
  try {
    dispatch({
      type: VOTE_PENDING
    });

    const url = `${
      process.env.REACT_APP_BASE_URL
    }/vote/${reference}?username=${username}&voteCount=${voteCount}`;

    const response = await axios.post(url);

    await dispatch({
      type: VOTE_FULFILLED,
      payload: response
    });

    success(username, voteCount);
  } catch (e) {
    await dispatch({
      type: VOTE_REJECTED,
      payload: e
    });
    e.response ? failed(e.response.data.message) : failed(e);
  }
};

export default vote;
