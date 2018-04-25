import React, { Component } from "react";
import AdsLong from "./ads-long";

const Splitads = ({}) => (
  <div className="ads--two row common-margin">
    <div className="row">
      <div className="col-sm-6">
        <div className="no-padding">
          <AdsLong />
        </div>
      </div>
      <div className="col-sm-6">
        <div className="no-padding">
          <AdsLong />
        </div>
      </div>
    </div>
  </div>
);

export default Splitads;
