import React, { Component } from 'react';
import SectionTwo from '../components/homepage/sectionTwo';
import MobileHome from '../components/homepage/mobileHome';
import SectionThree from '../components/homepage/sectionThree';
import SectionFour from '../components/homepage/sectionFour';
import SectionFive from '../components/homepage/sectionFive';
import Footer from '../components/footer';
import Slider from '../components/homepage/slider';

class LandingPage extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Slider />
        <MobileHome />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionTwo />

        <Footer />
      </div>
    );
  }
}

export default LandingPage;
