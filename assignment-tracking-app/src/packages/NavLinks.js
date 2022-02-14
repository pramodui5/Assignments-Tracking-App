import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavLinks = () => {
  return (
    <Nav>
      <Link to="/addUser" style={{ color: '#fff', marginRight: '20px' }}>
        SignUp
      </Link>
      <Link to="/Login" style={{ color: '#fff' }}>
        LogIn
      </Link>
    </Nav>
  );
};

export default NavLinks;
