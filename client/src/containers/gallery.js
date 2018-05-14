import React, { Component } from "react";
import "../styles/gallery.css";
import Galleryimage from "../components/gallery/galleryimage";
import Video from "../components/gallery/video";

class gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      image: false,
      url: null
    };
  }
  onShowImage = e => {
    const url = e.currentTarget.dataset.img;
    this.setState({
      image: true,
      show: true,
      url
    });
  };
  onShowVideo = e => {
    const url = e.currentTarget.dataset.video;
    this.setState({
      image: false,
      show: true,
      url
    });
  };
  onClose = e => {
    this.setState({ show: false });
  };
  render() {
    const { show, image, url } = this.state;
    return (
      <div className="gall--cont">
        <div className="sect--one">
          <div className="row pic--cont">
            <Galleryimage
              src="https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-FENTY-Library/default/v1526044799688/about-pages/explore-right.jpg"
              title="Rihanna Navy"
              desc="The most beautiful girl in the world"
              click={this.onShowImage}
            />
            <Galleryimage
              src="https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-FENTY-Library/default/v1526044799688/about-pages/explore-right.jpg"
              title="Rihanna Navy"
              desc="The most beautiful girl in the world"
              click={this.onShowImage}
            />
            <Galleryimage
              src="https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-FENTY-Library/default/v1526044799688/about-pages/explore-right.jpg"
              title="Rihanna Navy"
              desc="The most beautiful girl in the world"
              click={this.onShowImage}
            />
            <Galleryimage
              src="https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-FENTY-Library/default/v1526044799688/about-pages/explore-right.jpg"
              title="Rihanna Navy"
              desc="The most beautiful girl in the world"
              click={this.onShowImage}
            />
          </div>
          <div className="row pic--cont">
            <Galleryimage
              src="https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-FENTY-Library/default/v1526044799688/about-pages/explore-right.jpg"
              title="Rihanna Navy"
              desc="The most beautiful girl in the world"
              click={this.onShowImage}
            />
            <Galleryimage
              src="https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-FENTY-Library/default/v1526044799688/about-pages/explore-right.jpg"
              title="Rihanna Navy"
              desc="The most beautiful girl in the world"
              click={this.onShowImage}
            />
            <Galleryimage
              src="https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-FENTY-Library/default/v1526044799688/about-pages/explore-right.jpg"
              title="Rihanna Navy"
              desc="The most beautiful girl in the world"
              click={this.onShowImage}
            />
            <Galleryimage
              src="https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-FENTY-Library/default/v1526044799688/about-pages/explore-right.jpg"
              title="Rihanna Navy"
              desc="The most beautiful girl in the world"
              click={this.onShowImage}
            />
          </div>
        </div>
        <div className="sect--two ">
          <div>
            <div className="row">
              <Video
                videoUrl={process.env.REACT_APP_ADVERT}
                click={this.onShowVideo}
              />
              <Video videoUrl={process.env.REACT_APP_ADVERT} />
              <Video videoUrl={process.env.REACT_APP_ADVERT} />
              <Video videoUrl={process.env.REACT_APP_ADVERT} />
            </div>
          </div>
        </div>
        {show ? (
          <div className="popup--enlarge" onClick={this.onClose}>
            <div className="image-holder">
              {image ? (
                <img
                  className="gall-pic"
                  src={url}
                  alt="gallery image"
                  onClick={e => e.stopPropagation()}
                />
              ) : (
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
              )}
            </div>
            }
          </div>
        ) : null}
      </div>
    );
  }
}

export default gallery;
