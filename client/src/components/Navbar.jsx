import { NavLink } from "react-router-dom";
import React from "react";
import "../index.css";
const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About Us</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <div className="navbar-right">
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
