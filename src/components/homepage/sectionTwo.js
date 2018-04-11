import React, { PureComponent } from "react";

class SectionTwo extends PureComponent {
  render() {
    return (
      <span>
        <div className="section second-section">
          <div className="container">
            <div className="row">
              <h2 className="display-3 text-center sa-header">
                MORE ON SOUND IT AFRICA
              </h2>
            </div>
          </div>
        </div>

        <div className="section second-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 col-sm-12 col-md-4">
                <h3>ONGOING COMPETITION</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <div className="col-lg-4 col-sm-12 col-md-4">
                <iframe
                  width="100%"
                  height="300"
                  src="https://www.youtube.com/embed/tiy1MeXzhfA"
                  frameBorder="0"
                  title="soundit display video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
              <div className="col-lg-4 col-sm-12 col-md-4">
                <h3>HOW TO BECOME A CONTESTANT</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </span>
    );
  }
}

export default SectionTwo;
