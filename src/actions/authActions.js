// import axios from "axios";
import {
  LOGIN_SUCCESS,
  CREATE_ACCOUNT_SUCCESS,
  REQUEST_RESET_SUCCESS,
  CHANGE_PASSWORD_SUCCESS,
  LOG_OUT
} from "../constants/actionTypes";
// import { BASE_URL } from "../constants/config";
// import { displayError } from "./errorActions";

export const login = ({ email, password }) => dispatch => {
  console.log(process.env);
  dispatch({
    type: LOGIN_SUCCESS,
    payload: {
      firstName: "John",
      lastName: "Doe",
      type: "voter",
      token: "a97audhia793iqhdj.uas87xujas9uijasknkas97uajs"
    }
  });
  // axios
  //   .post(`${BASE_URL}/auth/login`, { email, password })
  //   .then(({ data }) => {
  //     dispatch({
  //       type: LOGIN_SUCCESS,
  //       payload: data
  //     });
  //   })
  //   .catch(error => {
  //     const { data } = error.response;
  //     displayError(data.msg)(dispatch);
  //   });
};

export const createAccount = accountDetails => async dispatch => {
  // axios
  //   .post(`${BASE_URL}/users`, accountDetails)
  //   .then(async ({ data }) => {
  //     await dispatch({
  //       type: CREATE_ACCOUNT_SUCCESS,
  //       payload: data
  //     });
  //   })
  //   .then(async () => {
  //     await login(accountDetails)(dispatch);
  //   })
  //   .catch(error => {
  //     const { data } = error.response;
  //     displayError(data.msg)(dispatch);
  //   });
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

export const logout = dispatch => {
  dispatch({
    type: LOG_OUT,
    payload: null
  });
};
