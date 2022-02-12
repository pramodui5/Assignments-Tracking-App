import React from 'react';
import { Nav } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';

const NavLinks = () => {
  let navigate = useNavigate();

  return (
    <Nav className="me-auto">
      <Nav.Link navigate="/SignUp"> Sign Up </Nav.Link>
      <Nav.Link navigate="/Login"> Sign In </Nav.Link>
    </Nav>
  );
};

export default NavLinks;
