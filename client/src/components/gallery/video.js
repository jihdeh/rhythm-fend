import React from "react";

const Video = ({ videoUrl }) => (
  <div className="col-sm-3">
    <iframe
      width="100%"
      height="auto"
      src={videoUrl}
      title="Contestant video 2"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
    />
  </div>
);

export default Video;
