import React, { useState } from 'react';

import fire from '../Fire/Fire';

import './Header.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

export default function Header({ userLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const signout = () => {
    fire.auth().signOut();
  };

  return (
    <div className='navbar-container'>
      <Navbar light expand='md'>
        <NavbarBrand href='/'>
          <img
            style={{ width: '75px', height: '50px' }}
            src='/img/logo.jpg'
            alt='log'
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink href='/services'>SERVICES</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/contact'>CONTACT US</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/about'>ABOUT US</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/terms'>TERMS AND CONDITIONS</NavLink>
            </NavItem>
            {userLoggedIn ? (
              <NavItem>
                <NavLink href='/' onClick={signout}>
                  SIGN OUT
                </NavLink>
              </NavItem>
            ) : (
              <NavItem>
                <NavLink href='/login'>LOGIN</NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
