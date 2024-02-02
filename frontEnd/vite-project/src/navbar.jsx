import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>Anime Info </h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
};

export default NavBar;
