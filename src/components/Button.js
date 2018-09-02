import styled from 'styled-components';

const Button = styled.button.attrs({
  type: props => props.type || 'button'
})`
  color: #fff;
  background-color: ${props => (props.disabled ? '#9e9e9e' : '#00c853')};
  padding: ${props => (props.large ? '0.5rem 1.5rem' : '0.375rem 0.75rem')};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  outline: none;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  &:hover {
    background-color: ${props => (props.disabled ? '#bdbdbd' : '#00e676')};
  }
`;

export default Button;
