import { NavLink } from "react-router-dom";
import React from "react";
import "../index.css";
import { useAuth } from "../store/auth";
const NavBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About Us</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <div className="navbar-right">
        {isLoggedIn ? (
          <NavLink to="/logout">LogOut</NavLink>
        ) : (
          <>
       
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
