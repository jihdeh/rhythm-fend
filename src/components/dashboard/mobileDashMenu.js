import React, { Component } from "react";

class MobileDashMenu extends Component {
  voterMobileMenu() {
    return (
      <ul className="drawer-menu">
        <li>
          <a href="#">VOTE</a>
        </li>
        <li>
          <a href="#">TRENDING</a>
        </li>
        <li>
          <a href="#">CONNECT</a>
        </li>
        <li>
          <a href="#">MOST LIKED</a>
        </li>
        <li>
          <a href="#">LOGOUT</a>
        </li>
      </ul>
    );
  }

  contestantMobileMenu() {
    return (
      <ul className="drawer-menu">
        <li>
          <a href="#">TRENDING</a>
        </li>
        <li>
          <a href="#">SHARE</a>
        </li>
        <li>
          <a href="#">LOGOUT</a>
        </li>
      </ul>
    );
  }

  render() {
    const { isContestant } = this.props;
    return (
      <span>
        {isContestant ? this.contestantMobileMenu() : this.voterMobileMenu()}
      </span>
    );
  }
}

export default MobileDashMenu;
