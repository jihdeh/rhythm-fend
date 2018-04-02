import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { Nav, NavbarCollapse, NavbarToggle, Navbar, NavbarBrand, NavbarHeader, NavItem, NavDropdown, MenuItem, } from 'react-bootstrap';
import "../styles/header.css";

export default class MobileMenu extends Component {
    render(){
        return (
          <div className="header__top">
            <Navbar collapseOnSelect>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="#brand"></a>
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
        )
    }
}