import React from 'react';
import styled from 'styled-components';

import { Container, Devider, A } from './Base';

const Wrapper = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 42px;
  line-height: 41px;
  font-size: 12px;
`;

const Content = styled(Container)`
  padding: 0;
`;

const FDevider = styled(Devider)`
  margin: 0 1rem;
`;

const Footer = () => (
  <Wrapper>
    <Content>
      <FDevider />
      <span role="img" aria-label="footer">
        <A
          href="https://github.com/fransik/happyhome"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contribute
        </A>{' '}
        to HappyHome! ❤
      </span>
    </Content>
  </Wrapper>
);

export default Footer;
