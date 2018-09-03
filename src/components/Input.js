import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.375rem 0.75rem;
  outline: none;
  border: 1px solid;
  border-radius: 0.25rem;
  border-color: ${props =>
    props.touched && !props.valid ? '#f44336' : '#ced4da'};
`;

const StyledText = StyledInput.withComponent('textarea');

const Input = props => {
  let inputElement = null;

  switch (props.elType) {
    case 'textarea':
      inputElement = (
        <StyledText
          {...props.elProps}
          valid={props.valid}
          touched={props.touched}
          onChange={props.changed}
        />
      );
      break;
    default:
      inputElement = (
        <StyledInput
          {...props.elProps}
          valid={props.valid}
          touched={props.touched}
          onChange={props.changed}
        />
      );
  }

  return inputElement;
};

export default Input;
