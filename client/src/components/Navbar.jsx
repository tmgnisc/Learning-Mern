import { NavLink } from "react-router-dom";
import React from 'react';
import '../index.css'
const NavBar = () => {
  return (
    <div className="navbar">
    <a href="/">Home</a>
    <a href="/about">About Us</a>
    <a href="/contact">Contact</a>
    <div className="navbar-right">
      <a href="/login">Login</a>
      <a href="/register">Register</a>
    </div>
  </div>
);
};


export default NavBar;
