import React, { Component } from 'react';

import WeekNav from '../components/WeekNav';
import TaskList from '../components/TaskList';

export default class Rota extends Component {
  render() {
    return (
      <div>
        <WeekNav week="26" />
        <TaskList />
      </div>
    );
  }
}
