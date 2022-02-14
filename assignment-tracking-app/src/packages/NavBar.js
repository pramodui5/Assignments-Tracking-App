import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import NavLinks from './NavLinks';

const NavBar = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Assignment Tracker</Navbar.Brand>
          <NavLinks />
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
