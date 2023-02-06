import React from "react";
import { NavLink } from "react-router-dom";
import MyFriends from "./Friends/MyFriends";
import classes from "./Navbar.module.css";
const Navbar = (props) => {

  const friends = props.state.friends; 
  const actived = (navData) => {
    return navData.isActive ? classes.active : classes.item;
  };

  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink className={actived} to="/profile">
          Profile
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink className={actived} to="/dialogs">
          Messages
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink className={actived} to="/news">
          News
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink className={actived} to="/music">
          Music
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink className={actived} to="/settings">
          Settings
        </NavLink>
      </div>
      <MyFriends friends={friends}/>

    </nav>
  );
};

export default Navbar;
