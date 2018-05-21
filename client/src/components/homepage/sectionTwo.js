import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

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
              <div className="col-lg-4 col-sm-12 col-md-4 second-section__text">
                <h3>COMPETITION TERMS</h3>
                <p>
                  There's a registration cost N1000 (For contestants in Nigeria)
                  and the equivalent (for contestants in other African
                  countries).
                  <br />
                  1. Record 1 minute video of you singing a gospel song of your
                  choice (Sing well, give it your best).<br />
                  2. Post on your Facebook, Twitter or Instagram with the
                  hashtags (#SoundIt2 #RisingStarGospelAfrica) and tag
                  @RisingStarG (for Instagram and twitter) or Rising Star Gospel
                  Africa on Facebook.<br />
                  3. Post the video also on your YouTube Channel and copy the
                  Url (Link).<br />
                  <br />
                </p>
              </div>
              <div
                className="col-lg-4 col-sm-12 col-md-4"
                style={{ paddingTop: "20px" }}
              >
                <iframe
                  width="100%"
                  height="300"
                  src="https://www.youtube.com/embed/0HRI1IDvZ3U"
                  frameBorder="0"
                  title="soundit display video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
              <div className="col-lg-4 col-sm-12 col-md-4 second-section__text">
                <h3>AFTER COMPETITION TERMS</h3>
                <p>
                  1. Log on to{" "}
                  <Link style={{ color: "rgb(254, 99, 15)" }} to="/register">
                    www.soundit.africa/register
                  </Link>{" "}
                  to register.<br />
                  2. At the completion of your registration, a Thank you SMS
                  will be sent to your phone number containing more information<br />
                  3. Invite your friends to follow us on Facebook, Twitter and
                  Instagram.
                  <br />
                  N/B: Good visuals and audio is an added advantage.
                  <br />
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
