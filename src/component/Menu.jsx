import React from 'react';
import { Link } from 'react-router-dom';
// import Products from './../Pages/Products';
// import Home from './../Pages/Home';
// import Profile from './../Pages/Profile';
// import About from './../Pages/About';
// import Error from './../Pages/Error';

const Menu = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/error">Error</Link></li>
      </ul>
    </div>
  );
};

export default Menu;