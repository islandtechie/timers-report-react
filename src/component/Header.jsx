import React from 'react';
import logo from './assets/images/toastmasters-logo.jpg';

const Header = () => {
  return (
    <div style={{ backgroundColor: 'red', textAlign: 'center' }}>
        <img
            src={logo}
            width="125"
            className="d-inline-block align-top"
            alt="Toastmaster's International Logo"
        />
    </div>
  )
};

export default Header;
