import React from 'react';
import { Nav } from 'react-bootstrap';

import { useNavigate, Link } from 'react-router-dom';

const NavLinks = () => {
  let navigate = useNavigate();

  return (
    <Nav className="me-auto">
      <Link to="/addUser"> Sign Up </Link>
      <Link to="/Login"> Sign In </Link>
    </Nav>
  );
};

export default NavLinks;
