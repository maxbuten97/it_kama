import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
          <div className='header__logo'>
        <img
          className="logo"
          src={require('./../../img/logo.png')}
          alt="logo"
        />
        </div>
      </header>
    );
};

export default Header;