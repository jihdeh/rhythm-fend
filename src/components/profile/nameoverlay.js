import React from "react";
import { firstLetter } from "../../utils/helpers";

const nameoverlay = ({ firstName, lastName, profilePicture }) =>
  profilePicture ? null : (
    <span className="name--overlay">{`${firstLetter(firstName)}${firstLetter(
      lastName
    )}`}</span>
  );

export default nameoverlay;
