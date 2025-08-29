import React from 'react';
import { NavLink } from 'react-router-dom';
// import Products from './../Pages/Products';
// import Home from './../Pages/Home';
// import Profile from './../Pages/Profile';
// import About from './../Pages/About';
// import Error from './../Pages/Error';

const Menu = () => {
  return (
    <div>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/profile">Profile</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/error">Error</NavLink></li>
      </ul>
    </div>
  );
};

export default Menu;