import React, { PureComponent } from 'react';

class SectionThree extends PureComponent {
  render() {
    return (
      <div className="clients" id="partners">
        <div className="clients-text">
          <h5>OUR TRUSTED PARTNERS</h5>
        </div>
        <section className="clients-section">
          <div>
            <img
              className="clients-section__logo"
              src="/images/partners/A.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="clients-section__logo"
              src="/images/partners/B.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="clients-section__logo"
              src="/images/partners/C.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="clients-section__logo"
              src="https://www.artmakerz.net/wp-content/uploads/2016/11/cannapy-one-colour.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="clients-section__logo"
              src="https://www.artmakerz.net/wp-content/uploads/2016/11/spydernet-logo-one-colour.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="clients-section__logo"
              src="https://www.artmakerz.net/wp-content/uploads/2016/11/devtech-one-logo.png"
              alt=""
            />
          </div>
        </section>
      </div>
    );
  }
}

export default SectionThree;
