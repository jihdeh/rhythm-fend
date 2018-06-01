import React from "react";
import { firstLetter } from "../../utils/helpers";

const nameoverlay = ({ firstName, lastName, profilePhoto }) =>
  profilePhoto ? null : (
    <span className="name--overlay">{`${firstLetter(firstName)}${firstLetter(
      lastName
    )}`}</span>
  );

export default nameoverlay;
