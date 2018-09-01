import React from 'react';
import styled from 'styled-components';

import { H3 } from './Base';
import Button from './Button';

const Wrapper = styled.div`
  text-align: left;
  background-color: #fff;
  border: 1px solid #388e3c;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
`;

const Header = styled.div`
  background-color: ${props => (props.completed ? '#00c853' : null)};
  color: ${props => (props.completed ? '#fff' : null)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1.25rem;
  border-bottom: 1px solid #388e3c;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
`;

const DoneButton = styled(Button)`
  background-color: ${props => (props.completed ? '#f57f17' : null)};
  color: ${props => (props.completed ? '#fff' : null)};
  padding: 1rem;
  border-radius: 0;
  border-top-right-radius: 0.25rem;

  &:hover {
    background-color: ${props => (props.completed ? '#f9a825' : null)};
  }
`;

const Title = styled(H3)`
  margin: 0;
`;

const Description = styled.p`
  margin: 0;
  padding: 1.25rem;
`;

const TaskItem = props => (
  <Wrapper>
    <Header completed={props.completed}>
      <Title>{props.name}</Title>
      <DoneButton onClick={props.completeTask} completed={props.completed}>
        {props.completed ? 'UNDO' : 'DONE'}
      </DoneButton>
    </Header>
    <Description>{props.description}</Description>
  </Wrapper>
);

export default TaskItem;
