import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 1rem;
  margin: 0 auto;
  text-align: center;

  @media (min-width: 576px) {
    max-width: 540px;
  }
`;

export const Devider = styled.hr`
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`;

const headingStyle = css`
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

export const H1 = styled.h1`
  font-size: 2rem;
  ${headingStyle};
`;

export const H2 = styled.h2`
  font-size: 1.75rem;
  ${headingStyle};
`;

export const H3 = styled.h3`
  font-size: 1.25rem;
  ${headingStyle};
`;
