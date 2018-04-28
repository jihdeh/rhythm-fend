import axios from "axios";
import jwt from "jsonwebtoken";
import {
  IS_AUTHENTICATED,
  CREATE_ACCOUNT_SUCCESS,
  REQUEST_RESET_SUCCESS,
  CHANGE_PASSWORD_SUCCESS,
  LOG_OUT
} from "../constants/actionTypes";
// import { displayError } from "./errorActions";

export const login = ({ email, password }) => dispatch => {
  axios
    .post(`${process.env.REACT_APP_BASE_URL}/auth/signin`, { email, password })
    .then(({ data }) => {
      localStorage.setItem("token", data.data);
      const decodeToken = jwt.verify(
        data.data,
        process.env.REACT_APP_AUTH_SECRET
      );
      dispatch({
        type: IS_AUTHENTICATED,
        payload: decodeToken
      });
    })
    .catch(error => {
      const { data } = error.response;
      console.log(data, error.response, error.name);
      // displayError(data.msg)(dispatch);
    });
};

export const createAccount = accountDetails => async dispatch => {
  axios
    .post(
      `${process.env.REACT_APP_BASE_URL}/auth/signup/${
        accountDetails.paymentReference
      }`,
      accountDetails
    )
    .then(async ({ data }) => {
      console.log(data);
      await dispatch({
        type: CREATE_ACCOUNT_SUCCESS,
        payload: data
      });
    })
    .then(async () => {
      await login(accountDetails)(dispatch);
    })
    .catch(error => {
      const { data } = error;
      console.log(data.message);
      // displayError(data.msg)(dispatch);
    });
};

export const requestReset = email => dispatch => {
  // axios
  //   .post(`${BASE_URL}/auth/request-reset`, { email })
  //   .then(({ data }) => {
  //     dispatch({
  //       type: REQUEST_RESET_SUCCESS,
  //       payload: data
  //     });
  //   })
  //   .catch(error => {
  //     const { data } = error.response;
  //     displayError(data.msg)(dispatch);
  //   });
};

export const reset = details => dispatch => {
  // axios
  //   .post(`${BASE_URL}/auth/reset`, details)
  //   .then(({ data }) => {
  //     dispatch({
  //       type: CHANGE_PASSWORD_SUCCESS,
  //       payload: data
  //     });
  //   })
  //   .catch(error => {
  //     const { data } = error.response;
  //     displayError(data.msg)(dispatch);
  //   });
};

export const fetchLocalUser = () => dispatch => {
  try {
    const fetchLocalToken = localStorage.getItem("token");
    const decodeToken = jwt.verify(
      fetchLocalToken,
      process.env.REACT_APP_AUTH_SECRET
    );
    dispatch({
      type: IS_AUTHENTICATED,
      payload: decodeToken
    });
  } catch (err) {
    //send back to login
    logout()(dispatch);
  }
};

export const logout = () => dispatch => {
  localStorage.clear();
  dispatch({
    type: LOG_OUT,
    payload: null
  });
};
