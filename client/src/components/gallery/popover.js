import React from "react";

const popover = ({ onClose, url, image, show }) =>
  show ? (
    <div className="popup--enlarge" onClick={onClose}>
      <div className="image-holder">
        <iframe
          width="100%"
          height="500px"
          src={url}
          title="Contestant video 2"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          onClick={e => e.stopPropagation()}
        />
      </div>
    </div>
  ) : null;

export default popover;
