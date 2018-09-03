import React from 'react';
import styled from 'styled-components';

import { H1 } from '../components/Base';
import Button from '../components/Button';
import Input from '../components/Input';

const Form = styled.form`
  margin: 1rem auto;
  max-width: 300px;
`;

const Login = props => (
  <div>
    <H1>Welcome, please log in</H1>
    <Form onSubmit={props.handleLogin}>
      {props.error && <p>{props.error}</p>}
      {props.elements.map(el => (
        <Input
          key={el.id}
          elType={el.config.elType}
          elProps={el.config.elProps}
          valid={el.config.valid}
          touched={el.config.touched}
          changed={event => props.handleInput(event, el.id)}
        />
      ))}
      <Button large type="submit" disabled={!props.formIsValid}>
        Log in
      </Button>
    </Form>
  </div>
);

export default Login;
