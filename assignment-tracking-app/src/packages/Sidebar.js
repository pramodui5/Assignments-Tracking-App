import React from 'react';
import { NavLink } from 'react-bootstrap';
import NavLinks from './NavLinks';
import Styled from 'styled-components';

const SideNav = Styled.aside`
background-color: #616161;
height: 100vh;
`;

const Sidebar = () => {
  return (
    <SideNav>
      <NavLinks />
    </SideNav>
  );
};

export default Sidebar;
