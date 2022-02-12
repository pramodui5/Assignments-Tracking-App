import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import NavLinks from './NavLinks';

import styled from 'styled-components';

const NavbarContainer = styled.div`
  font-size: 2rem;
`;

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
