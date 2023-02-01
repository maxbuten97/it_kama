import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
const Navbar = () => {

  const actived = (navData) => {
   return navData.isActive ? classes.active : classes.item
  }

  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink
          className={actived}
          to="/profile"
        >
          Profile
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          className={actived}
          to="/dialogs"
        >
          Messages
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          className={actived}
          to="/news"
        >
          News
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          className={actived}
          to="/music"
        >
          Music
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          className={actived}
          to="/settings"
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
