import React from 'react';
import './Navbar.css';
const Nav = () => {
    return (
        <nav className="nav">
        <div className='nav__link'>
          <a href="/Profile">Profile</a>
        </div > 
        <div className='nav__link'>
          <a href="/Messages">Messages</a>
        </div>
        <div className='nav__link'>
          <a href="/News">News</a>
        </div>
        <div className='nav__link'>
          <a href="/Music">Music</a>
        </div>
        <div className='nav__link'>
          <a href="/Settings">Settings</a>
        </div>
      </nav>
    );
};

export default Nav;