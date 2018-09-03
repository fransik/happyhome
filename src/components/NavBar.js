import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { AppContext } from '../containers/App';

const Nav = styled.nav`
  display: flex;
  height: 100%;
`;

const NavItem = styled(NavLink)`
  color: #ddd;
  padding: 16px 10px;
  text-decoration: none;
  &.active,
  &:hover {
    color: #fff;
    border-bottom: 4px solid #00c853;
  }
`;

const NavBar = () => (
  <AppContext.Consumer>
    {({ auth }) => (
      <Nav>
        <NavItem to={auth ? '/' : '/auth'} exact>
          {auth ? 'Home' : 'Login'}
        </NavItem>
        {auth && <NavItem to="/logout">Logout</NavItem>}
      </Nav>
    )}
  </AppContext.Consumer>
);

export default NavBar;
