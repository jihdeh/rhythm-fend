import { Redirect } from "react-router-dom";
import React from "react";

const errorpage = ({ error }) => {
  const response = error
    ? error.response
      ? error.response
      : undefined
    : undefined;
  console.log(response);
  return response ? (
    response.data.message === "user not found" ? (
      <Redirect to="/error" />
    ) : null
  ) : null;
};

export default errorpage;
