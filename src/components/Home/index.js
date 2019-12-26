import React from 'react';

import Header from '../Header'
import Search from '../Search'
import Menu from '../Menu'
import List from '../List'

import './styles.css'

const Home = () => {
  return (
    <div className="main">
      <Header />
      <Search />
      <Menu />
      <List />
    </div>
  );
};

export default Home;
