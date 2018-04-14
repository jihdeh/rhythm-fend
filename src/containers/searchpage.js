import React, { Component } from 'react';
import '../styles/searchpage.css';
import "../styles/dashboard.css";
import MobileDashBoardMenu from "../components/dashboard/mobileDashMenu";
import ContestantSearchView from "../components/searchpage/contestantSearchView";
import VoterSearchView from "../components/searchpage/voterSearchView";

class Search extends Component {
  state = {
    isContestant: false
  };
  render() {
    const { isContestant } = this.state;
    return(
        <div className="content">
        <div className="row dashboard-menu">
          <div className="col-sm-2 dashboard-menu__left">
            <p onClick={() => this.props.history.push("/")}>SoundIT Africa</p>
            <div className="mobile-search">
              <form className="mobile-form">
                <input
                  className="mobile-input"
                  type="search"
                  name="search"
                  placeholder="Search for contestant"
                />
                <i className="fas fa-search mobile-search-icon" />
              </form>
            </div>
          </div>
          <div className="col-sm-10 dashboard-menu__right">
            <div className="menu-icon">
              <input type="checkbox" id="drawer-toggle" name="drawer-toggle" />
              <label htmlFor="drawer-toggle" id="drawer-toggle-label" />
              <nav id="drawer">
                <MobileDashBoardMenu isContestant={isContestant} />
              </nav>
            </div>
            <div className="profile-right">
              <i className="far fa-envelope profile-right__icon" />
              <i className="far fa-bell profile-right__icon" />
              <i className="far fa-flag profile-right__icon" />
              <div className="profile-right__owner">
                <img
                  className="profile-right__image"
                  src="../../images/nobody.jpg"
                  alt=""
                />
                <p>Doe</p>
              </div>
            </div>
          </div>
        </div>
        {!this.state.isContestant ? <VoterSearchView /> : <ContestantSearchView />}
      </div>
    );
  }
}

export default Search