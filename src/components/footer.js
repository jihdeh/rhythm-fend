import React from "react";
import "../styles/footer.css";

const Footer = () => (
  <footer id="contact">
    <div className="wrapper">
      <div className="footer">
        <div className="footer__navs">
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-md-1 col-lg-offset-1 footer__navs_logo_container">
                <img src="/images/logo.png" alt="Logo SoundIT" />
              </div>
              <div className="col-lg-3 col-lg-offset-0 col-md-3 col-md-offset-1 footer__navs_links">
                <h4 className="footer__navs_column_title">Contact us</h4>
                <nav className="footer__nav">
                  <ul>
                    <li className="footer__navs_link">
                      <a href="mailto:contact@soundit.africa.com">
                        contact@soundit.africa
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-2 col-md-2 footer__navs_links">
                <h4 className="footer__navs_column_title">Follow us</h4>
                <nav className="footer__nav">
                  <ul>
                    <li className="footer__navs_link">
                      <div className="footer__navs_link_social_icon footer__navs_link_social_icon-instagram" />
                      <a href="https://www.instagram.com/rsg/">Instagram</a>
                    </li>
                    <li className="footer__navs_link">
                      <div className="footer__navs_link_social_icon footer__navs_link_social_icon-facebook" />
                      <a href="https://www.facebook.com/RisingStarGospel">
                        Facebook
                      </a>
                    </li>
                    {/*<li className="footer__navs_link">
                      <div className="footer__navs_link_social_icon footer__navs_link_social_icon-snapchat" />
                      <a href="https://www.snapchat.com/add/reechcom">
                        Snapchat
                      </a>
                    </li> */}
                    <li className="footer__navs_link">
                      <div className="footer__navs_link_social_icon footer__navs_link_social_icon-twitter" />
                      <a href="https://twitter.com/rsg">Twitter</a>
                    </li>
                    <li className="footer__navs_link">
                      <div className="footer__navs_link_social_icon footer__navs_link_social_icon-youtube" />
                      <a href="https://www.youtube.com/channel/UC4DXXuFtnz1eQ_WLhtBOGsg">
                        YouTube
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-5 col-md-5 footer__navs_links footer__navs_column_links-resources">
                <h4 className="footer__navs_column_title">Resources</h4>
                <nav className="footer__nav">
                  <ul>
                    <li>
                      <a href="../en/terms">Terms and Conditions of Use</a>
                    </li>
                    <li>
                      <a href="../en/privacy">Privacy policy</a>
                    </li>
                    <li>
                      <a href="../en/legal">Legal notices</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__address_line">
          <div className="container-background">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <p>
                    <span>&copy; Rising Star Gospel.</span>
                    <span className="footer__address_line_separator">|</span>
                    <span>82 rue d'Hauteville 75010 Lagos</span>
                    <span className="footer__address_line_separator">|</span>
                    <span>+234 (80) 6979 0405</span>
                    <span className="footer__address_line_separator">|</span>
                    <a href="mailto:contact@soundit.africa">
                      contact@soundit.africa
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
