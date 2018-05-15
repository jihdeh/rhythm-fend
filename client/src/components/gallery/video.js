import React from "react";

const Video = ({ videoUrl, click }) =>
  videoUrl.map((val, key) => (
    <div className="col-sm-3">
      <iframe
        width="100%"
        height="300px"
        src={val}
        title="Contestant video 2"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
      <span onClick={click} data-video={val} className="click--trigger" />
    </div>
  ));

export default Video;
