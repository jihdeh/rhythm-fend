import React from "react";
import { SimpleShareButtons } from "react-simple-share";

export const sharebutton = () => (
  <span className="sharebuttons">
    <SimpleShareButtons
      color="#FFFFFF"
      size="30px"
      whitelist={["Facebook", "Twitter"]}
    />
  </span>
);

export default sharebutton;
