import React, { Component } from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";

export default class MobileMenu extends Component {
  render() {
    return (
      <div className="header__top">
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand" />
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                About
              </NavItem>
              <NavItem eventKey={2} href="#">
                Contact
              </NavItem>
              <NavItem eventKey={3} href="#">
                Partners
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
