import React, { PureComponent } from "react";

class About extends PureComponent {
  componentWillMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-4 about-us-logo">
          <img
            className="about-us-logo__logo"
            src="../../images/logo.png"
            alt=""
          />
        </div>
        <div className="col-md-8 about-us-text">
          <h3>ABOUT RISING STAR GOSPEL AFRICA</h3>
          <p>
            Rising Star Gospel Africa is an integrated organization birthed to
            Discover, Develop, and Promote youths with un-harnessed musical
            abilities. These we do through our different expressions which are:
          </p>
          <p>
            <span className="about-us__programs">The Reality TV Show</span>{" "}
            which is aimed at discovering and building talents in Gospel Music
            across the African Continent.
          </p>
          <p>
            <span className="about-us__programs">
              Rising Star Invasion Concert
            </span>{" "}
            is a Gospel Music Concert which is always headlined by discovered
            and developed talents from Rising Star Gospel Africa Talent Hunt
            Events and associated Gospel Artistes for the purpose of giving
            Christian a new worship experience and giving the new talents a
            platform for the purpose of marketing and gaining experience.
          </p>
          <p>
            <span className="about-us__programs">The Campus Tour</span> is our
            way of reaching out to lives on campuses across Africa with message
            of Jesus through Urban Contemporary Gospel Music and we always cease
            the opportunity to discover new talents with our CampusSings segment
            of the event.
          </p>
          <p>
            <span className="about-us__programs">
              Rising Star Music Conference
            </span>{" "}
            is our educational event, the public expression of Rising Star
            Academy (For contestants in our Talent Hunt) where different topics
            on singing, music recording/production, Performance and music
            business are taught in the most practical way by experienced
            resource persons in the industry.
          </p>
          <p>
            <span className="about-us__programs">Sound It</span> is an online
            singing competition with an aim of leveraging on the simplicity of
            the social media to discover and showcase new talents across Africa
            hence cutting loads of protocols to give these talent easily way to
            be heard across Africa.
          </p>

          <h3>OUR ORGANISATIONAL GOAL</h3>
          <p>
            Our goal is to create a high performance and functional system that
            will meet growing demand for talent promotions across the continent
            and the world at large, thereby ensuring human capacity development
            and empowerment.
          </p>

          <h3>OBJECTIVE</h3>
          <p>
            To discover, develop and engage youths who desire a career in the
            Gospel music through our talent hunt event, Campus Tours and
            Invasion Concerts.
          </p>

          <h3>FOR THE RECORDS</h3>
          <p>
            In the past 4 years, we have done seven (7) events and have had the
            honour of hosting Industry leaders like Uncle Ben of MTN Project
            Fame West Africa, Nikki Laoye, a renounced recording Urban Gospel
            Artiste, Segun Obe, a prolific Vocal Coach and Therapist, and a host
            of others. We have aired our events on National and Continental
            Television stations like HIP TV, Silverbird TV, Trybe TV, Kingdom
            Africa and X2D TV and have also had thousands of mentions on blogs,
            news sites and on the social media.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
