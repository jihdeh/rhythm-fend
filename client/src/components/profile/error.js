import { Redirect } from "react-router-dom";
import React from "react";

const errorpage = ({ error }) => {
  const response = error
    ? error.response
      ? error.response
      : undefined
    : undefined;
  return response ? (
    response.data.message === "user not found" ||
    response.data === "Not Found" ? (
      <Redirect to="/404" />
    ) : null
  ) : null;
};

export default errorpage;
