import React, { useState } from 'react';
import classes from './Sidebar.module.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  return (
    <>
      <div className={classes.containerFluid}>
        <nav className={classes.sideNav}>
          <div className={classes.sidebarLeft}>
            <div className={classes.btnHamburger} onClick={ToggleSidebar}>
              <i className={classes.bars} />
              <i className={classes.bars} />
              <i className={classes.bars} />
            </div>
          </div>
        </nav>
        <div className={`${classes.sidebar} ${isOpen == true ? classes.active : ''}`}>
          <div className={classes.sidebarHeader}>
            <h4 className={classes.sidebarHeading}>Sde Navigation Links</h4>
            <div className={classes.btnHamburger} onClick={ToggleSidebar}>
              <i className={classes.bars} />
              <i className={classes.bars} />
              <i className={classes.bars} />
            </div>
          </div>
          <div className={classes.sidebarBody}>
            <Link to="/taskDetails">Assignment List</Link>
            <Link to="/userDetails">User List</Link>
            <Link to="">To do</Link>
            <Link to="">My link</Link>
            <Link to="">My link</Link>
          </div>
        </div>

        <div
          className={`${classes.sidebarOverlay} ${isOpen == true ? classes.active : ''}`}
          onClick={ToggleSidebar}
        ></div>
      </div>
    </>
  );
};

export default Sidebar;
