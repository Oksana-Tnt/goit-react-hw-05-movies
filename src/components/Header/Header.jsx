import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar bg-dark mb-3 navbar-expand-lg">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-success">Movies</span>

        <div className="collapse navbar-collapse" id="navbarNavAllMarkup">
          <div className="navbar-nav">
            <NavLink
              className="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover nav-link text-white"
              aria-current="page"
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              className="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover nav-link text-white"
              aria-current="page"
              to="/movies"
            >
              Movies
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
