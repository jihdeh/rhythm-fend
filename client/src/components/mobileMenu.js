import React, { Component } from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/mobileMenu.css";

export default class MobileMenu extends Component {
  render() {
    return (
      <div className="header__top">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">
                <img
                  alt="soundit logo"
                  className="collapse-sa-logo"
                  src="/images/logo.png"
                />
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
              <NavItem eventKey={1} href="/donate">
                Donate
              </NavItem>
              <NavItem eventKey={1} href="/search">
                Vote
              </NavItem>
              <NavItem eventKey={2} href="/account">
                Account
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
