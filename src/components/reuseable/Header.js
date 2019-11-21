import React, { useState, useEffect } from "react";

import fire from "../../Fire/Fire";

import "./Header.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  let [userLoggedIn, setUserLoggedIn] = useState(null);

  const toggle = () => setIsOpen(!isOpen);

  const signout = () => {
    fire.auth().signOut();
  };

// Getting login info from local storage, so header refreshes on user action
  useEffect(() => {
    setUserLoggedIn(localStorage.getItem("userLoggedIn"));
  });

  return (
    <div className="navbar-container">
      <Navbar light expand="md">
        <NavbarBrand href="/">
          <img
            style={{ width: "75px", height: "50px" }}
            src="/img/logo.jpg"
            alt="log"
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className="mr-auto" />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/services">SERVICES</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">CONTACT US</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">ABOUT US</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/terms">TERMS AND CONDITIONS</NavLink>
            </NavItem>
            {userLoggedIn ? (
              <NavItem>
                <NavLink href="/quotes">QUOTES</NavLink>
              </NavItem>
            ) : (
              <NavItem>
                <NavLink href="/quote">GET QUOTE</NavLink>
              </NavItem>
            )}
            {userLoggedIn ? (
              <NavItem>
                <NavLink href="/" onClick={signout}>
                  SIGN OUT
                </NavLink>
              </NavItem>
            ) : (
              <NavItem>
                <NavLink href="/login">ADMIN LOGIN</NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
