import { NavLink } from "react-router-dom";
import React from 'react';
import '../index.css'
const NavBar = () => {
  return (
    <div className="navbar">
    <NavLink href="/">Home</NavLink>
    <NavLink href="/about">About Us</NavLink>
    <NavLink href="/contact">Contact</NavLink>
    <div className="navbar-right">
      <NavLink href="/login">Login</NavLink>
      <NavLink href="/register">Register</NavLink>
    </div>
  </div>
);
};


export default NavBar;
