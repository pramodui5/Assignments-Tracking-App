import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavLinks = () => {
  return (
    <Nav>
      <Link to="/addUser" style={{ color: '#fff', marginRight: '20px' }}>
        SignUp
      </Link>
      <Link to="/Login" style={{ color: '#fff', marginRight: '20px' }}>
        LogIn
      </Link>
      <Link to="/Login">
        <div>
          <a
            class="d-flex align-items-center hidden-arrow"
            href="#"
            id="navbarAvatar"
            role="button"
            aria-expanded="false"
            style={{ border: '2px solid #fff', borderRadius: '50%' }}
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              class="rounded-circle"
              height="25"
              alt="Profile"
            />
          </a>
        </div>
      </Link>
    </Nav>
  );
};

export default NavLinks;
