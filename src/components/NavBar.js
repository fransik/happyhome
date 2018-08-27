import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

export default props => {
  const { auth } = props;
  return (
    <Nav>
      <NavItem to={auth ? '/' : '/auth'} exact>
        {auth ? 'Home' : 'Login'}
      </NavItem>
      {auth && <NavItem to="/logout">Logout</NavItem>}
    </Nav>
  );
};
