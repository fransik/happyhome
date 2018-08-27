import React from 'react';
import styled from 'styled-components';

import { Container, H3 } from './Base';
import NavBar from './NavBar';

const Wrapper = styled.div`
  background-color: #388e3c;
  color: #fff;
  width: 100%;
`;
const Content = styled(Container.withComponent('header'))`
  height: 56px;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled(H3)`
  margin: 0;
`;

export default props => (
  <Wrapper>
    <Content>
      <Title>HappyHome</Title>
      <NavBar auth={props.auth} />
    </Content>
  </Wrapper>
);
