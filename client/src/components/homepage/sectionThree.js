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
              src="/images/partners/1.png"
              alt="partners"
            />
          </div>
          <div>
            <img
              className="clients-section__logo"
              src="/images/partners/2.png"
              alt="partners"
            />
          </div>
          <div>
            <img
              className="clients-section__logo"
              src="/images/partners/3.png"
              alt="partners"
            />
          </div>
          <div>
            <img
              className="clients-section__logo"
              src="/images/partners/4.png"
              alt="partners"
            />
          </div>
          <div>
            <img
              className="clients-section__logo"
              src="/images/partners/5.png"
              alt="partners"
            />
          </div>
          <div>
            <img
              className="clients-section__logo"
              src="/images/partners/6.png"
              alt=""
            />
          </div>
        </section>
      </div>
    );
  }
}

export default SectionThree;
