import React from "react";
import "../styles/gallery.css";
import Galleryimage from "../components/gallery/galleryimage";
import Video from "../components/gallery/video";

const gallery = () => (
  <div className="gall--cont">
    <div className="sect--one">
      <div className="row pic--cont">
        <Galleryimage
          src="https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-FENTY-Library/default/v1526044799688/about-pages/explore-right.jpg"
          title="Rihanna Navy"
          desc="The most beautiful girl in the world"
        />
        <Galleryimage
          src="https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-FENTY-Library/default/v1526044799688/about-pages/explore-right.jpg"
          title="Rihanna Navy"
          desc="The most beautiful girl in the world"
        />
        <Galleryimage
          src="https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-FENTY-Library/default/v1526044799688/about-pages/explore-right.jpg"
          title="Rihanna Navy"
          desc="The most beautiful girl in the world"
        />
        <Galleryimage
          src="https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-FENTY-Library/default/v1526044799688/about-pages/explore-right.jpg"
          title="Rihanna Navy"
          desc="The most beautiful girl in the world"
        />
      </div>
      <div className="row pic--cont">
        <Galleryimage
          src="https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-FENTY-Library/default/v1526044799688/about-pages/explore-right.jpg"
          title="Rihanna Navy"
          desc="The most beautiful girl in the world"
        />
        <Galleryimage
          src="https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-FENTY-Library/default/v1526044799688/about-pages/explore-right.jpg"
          title="Rihanna Navy"
          desc="The most beautiful girl in the world"
        />
        <Galleryimage
          src="https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-FENTY-Library/default/v1526044799688/about-pages/explore-right.jpg"
          title="Rihanna Navy"
          desc="The most beautiful girl in the world"
        />
        <Galleryimage
          src="https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-FENTY-Library/default/v1526044799688/about-pages/explore-right.jpg"
          title="Rihanna Navy"
          desc="The most beautiful girl in the world"
        />
      </div>
    </div>
    <div className="sect--two ">
      <div>
        <div className="row">
          <Video videoUrl={process.env.REACT_APP_ADVERT} />
          <Video videoUrl={process.env.REACT_APP_ADVERT} />
          <Video videoUrl={process.env.REACT_APP_ADVERT} />
          <Video videoUrl={process.env.REACT_APP_ADVERT} />
        </div>
      </div>
    </div>
  </div>
);

export default gallery;