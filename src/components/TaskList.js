import React, { Fragment } from 'react';

import { H2, Devider } from './Base';
import TaskItem from './TaskItem';

const TaskList = props => {
  const todo = [];
  const done = [];

  props.tasks.map(task => {
    const item = (
      <TaskItem
        key={task.id}
        name={task.details.name}
        description={task.details.description}
        completed={task.completedAt}
        completeTask={() => props.completeTask(task.id)}
      />
    );

    if (task.completedAt) {
      return done.push(item);
    }

    return todo.push(item);
  });

  return (
    <div>
      {todo.length <= 0 ? (
        <H2>You finished all your tasks this week!</H2>
      ) : (
        <Fragment>
          <H2>Tasks this week</H2>
          <Devider />
          {todo}
        </Fragment>
      )}
      {done.length > 0 && (
        <Fragment>
          <Devider />
          {done}
        </Fragment>
      )}
    </div>
  );
};

export default TaskList;
