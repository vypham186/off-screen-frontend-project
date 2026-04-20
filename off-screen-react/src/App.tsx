import Header from "./components/Header/Header";


import React from 'react';
import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <nav className="navbar">
      <div className="logo">LOGO</div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="#">Explore Hobbies</a></li>
        <li><a href="#">Resources</a></li>
        <li><a href="#">Community</a></li>
        <li><a href="#">About</a></li>
      </ul>

      <div className="auth-buttons">
        <button className="login-btn">Log In</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
}

export default Header;