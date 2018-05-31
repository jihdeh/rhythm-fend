import React, { PureComponent } from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import get from "lodash/get";
import "../styles/mobileMenu.css";

class MobileMenu extends PureComponent {
  render() {
    const { openStatus } = this.props;
    return (
      <div className="header__top">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">
                <picture>
                  <source
                    srcSet="/images/logo.webp?v=0.0.2"
                    type="image/webp"
                  />
                  <img
                    className="collapse-sa-logo"
                    data-src="/images/logo.png?v=0.0.2"
                    src="/images/logo.png?v=0.0.2"
                    alt="soundit logo"
                  />
                </picture>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="/">
                Home
              </NavItem>
              <NavItem eventKey={1} href="/about">
                About
              </NavItem>
              <NavItem eventKey={1} href="/gallery">
                Gallery
              </NavItem>
              <NavItem eventKey={1} href="/donate">
                Donate
              </NavItem>
              <NavItem eventKey={1} href="/search">
                Vote
              </NavItem>
              {openStatus ? (
                get(openStatus, "registrationOpen") ? (
                  <NavItem eventKey={2} href="/account">
                    Login/Register
                  </NavItem>
                ) : null
              ) : null}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = ({ misc }) => ({
  openStatus: misc.openStatus
});

export default connect(mapStateToProps)(MobileMenu);
