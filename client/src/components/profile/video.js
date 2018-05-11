import React from "react";

const Video = ({ videoUrl }) => (
  <div className="video--sq common-margin">
    <div className="video--cont">
      <iframe
        width="100%"
        height="100%"
        src={videoUrl}
        title="Contestant video 2"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  </div>
);

export default Video;
