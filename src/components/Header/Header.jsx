import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  color: red;

  &.active {
    color: green;
  }
`;

const Header = () => {
  return (

      <nav className="navbar bg-dark mb-3 navbar-expand-lg">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 text-success">Movies</span>

          <div className="collapse navbar-collapse" id="navbarNavAllMarkup">
            <div className="navbar-nav">
              <StyledLink
                className="nav-link text-white"
                aria-current="page"
                to="/"
              >
                Home
              </StyledLink>

              <StyledLink
                className="nav-link text-white"
                aria-current="page"
                to="/movies"
              >
                Movies
              </StyledLink>
            </div>
          </div>
        </div>
      </nav>
    
  );
};

export default Header;
