import React from 'react';

import logo from './logo.jpg';

import './styles.css';

const Header = () => {
  return (
    <header>
      <img src={logo} className="logo" alt="logo" />
      <title>PM App</title>
    </header>
  );
};

export default Header;
