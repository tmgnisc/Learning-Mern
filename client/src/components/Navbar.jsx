// NavBar.js
import React from 'react';
import './index.css'
const NavBar = () => {
  return (
    <div className="navbar">
      <a href="#home" className="active">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <div className="dropdown">
        <button className="dropbtn">
          Dropdown 
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a href="#link1">Link 1</a>
          <a href="#link2">Link 2</a>
          <a href="#link3">Link 3</a>
        </div>
      </div> 
    </div>
  );
};

export default NavBar;
