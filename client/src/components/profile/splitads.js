import React from "react";
import AdsLong from "./ads-long";

const Splitads = () => (
  <div className="ads--two row common-margin">
    <div className="row">
      <div className="col-sm-6">
        <div className="no-padding-left">
          <AdsLong />
        </div>
      </div>
      <div className="col-sm-6">
        <div className="no-padding-right">
          <AdsLong />
        </div>
      </div>
    </div>
  </div>
);

export default Splitads;
