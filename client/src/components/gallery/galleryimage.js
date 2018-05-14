import React from "react";

const galleryimage = ({ src, title, desc, click }) => (
  <div className="col-sm-3" onClick={click} data-img={src}>
    <img className="gall-pic" src={src} alt="gallery image" />
    <span className="overlay--image">
      <span className="image--title">{title}</span>
      <span className="image--description">{desc}</span>
    </span>
  </div>
);

export default galleryimage;
