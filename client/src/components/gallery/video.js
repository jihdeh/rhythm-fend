import React from "react";

const Video = ({ videoUrl, click }) =>
  videoUrl.map((val, key) => (
    <div key={key} className="col-sm-3 col-md-6 col-lg-6">
      <iframe
        width="100%"
        height="300px"
        src={val}
        title="Gallery Videos"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
      <span onClick={click} data-video={val} className="click--trigger" />
      <hr />
    </div>
  ));

export default Video;
