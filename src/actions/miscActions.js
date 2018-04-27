// DONATE_SUCCESS
import axios from "axios";
import jwt from "jsonwebtoken";
import { DONATE_SUCCESS } from "../constants/actionTypes";
// import { displayError } from "./errorActions";

export const donate = donation => dispatch => {
  try {
    dispatch({
      type: DONATE_SUCCESS,
      payload: true
    });
  } catch (e) {
    dispatch({
      type: DONATE_SUCCESS,
      payload: false
    });
  }
};
