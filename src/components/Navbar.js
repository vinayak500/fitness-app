import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <div className="navbar">
    <Link to="/">
      <img src={Logo} alt="logo" className="navbar-logo" />
    </Link>
    <div className="navbar-links">
      <Link to="/" className="navbar-link-active">Home</Link>
      <Link to="/excercises" >Excercises</Link>
      <Link to="/caloriecal" >Calorie Calculator</Link>
      <Link to="/about" >About Us</Link>
    </div>
  </div>
);

export default Navbar;
