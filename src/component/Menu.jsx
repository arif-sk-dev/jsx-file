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
        <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/">Home</NavLink></li>
        <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/products/202/Soap">Products</NavLink></li>
        <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/profile/arif713/hossain-453">Profile</NavLink></li>
        <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/about">About</NavLink></li>
        <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/error">Error</NavLink></li>
      </ul>
    </div>
  );
};

export default Menu;