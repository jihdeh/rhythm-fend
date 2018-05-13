import React from "react";
import Spinner from "react-activity/lib/Spinner";
import "react-activity/lib/Spinner/Spinner.css";

const activityI = ({ verifyusername, username }) => (
  <span className="activityI">
    {verifyusername.fetching ? (
      <Spinner color="#ffffff" />
    ) : verifyusername.taken ? (
      <span className="danger">
        <i className="fas fa-times" />
      </span>
    ) : !verifyusername.taken && username ? (
      <span className="success">
        <i className="fas fa-check" />
      </span>
    ) : null}
  </span>
);

export default activityI;
