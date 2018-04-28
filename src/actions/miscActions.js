// DONATE_SUCCESS
import axios from "axios";
import { DONATE_SUCCESS } from "../constants/actionTypes";
// import { displayError } from "./errorActions";

export const donate = donation => async dispatch => {
  axios
    .post(
      `${process.env.REACT_APP_BASE_URL}/donate/${donation.paymentReference}`,
      donation
    )
    .then(({ data }) => {
      dispatch({
        type: DONATE_SUCCESS,
        payload: data
      });
    })
    .catch(error => {
      const { data } = error.response;
      console.log(data, error.response, error.name);
      // displayError(data.msg)(dispatch);
    });
};
