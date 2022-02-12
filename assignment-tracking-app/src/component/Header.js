import React, { useState } from 'react';
import NavBar from '../packages/NavBar';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [showBasic, setShowBasic] = useState(false);
  return (
    <>
      <NavBar>
        <NavLink />
      </NavBar>
    </>
  );
};

export default Header;
