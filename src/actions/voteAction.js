import {
  VOTE_PENDING,
  VOTE_FULFILLED,
  VOTE_REJECTED
} from "../constants/actionTypes";
import axios from "axios";

const vote = ({ reference, uniqueCode, voteCount }) => dispatch => {
  try {
    dispatch({
      type: VOTE_PENDING
    });
    const url = `${
      process.env.REACT_APP_BASE_URL
    }/vote/${reference}?uniqueCode=${uniqueCode}&voteCount=${voteCount}`;

    const response = axios.post(url);
    dispatch({
      type: VOTE_FULFILLED,
      payload: response
    });
  } catch (e) {
    dispatch({
      type: VOTE_REJECTED,
      payload: e
    });
  }
};

export default vote;
