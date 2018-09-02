import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  &,
  &::after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(56, 142, 60, 0.2);
  border-right: 1.1em solid rgba(56, 142, 60, 0.2);
  border-bottom: 1.1em solid rgba(56, 142, 60, 0.2);
  border-left: 1.1em solid #388e3c;
  transform: translateZ(0);
  animation: ${rotate360} 1.1s infinite linear;
`;

export default Spinner;
