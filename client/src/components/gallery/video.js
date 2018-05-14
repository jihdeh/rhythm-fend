import React from "react";

const Video = ({ videoUrl, click }) => (
  <div className="col-sm-3">
    <iframe
      width="100%"
      height="300px"
      src={videoUrl}
      title="Contestant video 2"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
    />
    <span onClick={click} data-video={videoUrl} className="click--trigger" />
  </div>
);

export default Video;
