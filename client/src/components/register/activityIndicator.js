import React from "react";
import Spinner from "react-activity/lib/Spinner";
import "react-activity/lib/Spinner/Spinner.css";

const activityI = ({ verifyUsername, username }) => (
  <span className="activityI">
    {verifyUsername.fetching ? (
      <Spinner color="#ffffff" />
    ) : verifyUsername.taken && username ? (
      <span className="danger">
        <i className="fas fa-times" />
      </span>
    ) : !verifyUsername.taken && username ? (
      <span className="success">
        <i className="fas fa-check" />
      </span>
    ) : null}
  </span>
);

export default activityI;
