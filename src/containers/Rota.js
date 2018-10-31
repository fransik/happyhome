import React, { Component } from 'react';
import update from 'immutability-helper';

import * as rotaService from '../services/rota';
import WeekNav from '../components/WeekNav';
import TaskList from '../components/TaskList';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';

export default class Rota extends Component {
  state = {
    error: false,
    loading: true,
    rotas: [],
    rotaIndex: 0
  };

  async componentDidMount() {
    try {
      const { rotas, rotaIndex } = await rotaService.getUpcoming();
      this.setState({ rotas, rotaIndex, loading: false });
    } catch (e) {
      this.setState({ error: true, loading: false });
    }
  }

  handleNextWeek = () => {
    const index = this.state.rotaIndex + 1;
    if (index < this.state.rotas.length) {
      this.setState({ rotaIndex: index });
    }
  };

  handlePrevWeek = () => {
    const index = this.state.rotaIndex - 1;
    if (index >= 0) {
      this.setState({ rotaIndex: index });
    }
  };

  handleCompleteTask = async id => {
    const { rotas, rotaIndex } = this.state;
    const { tasks } = rotas[rotaIndex];

    try {
      const taskIndex = rotaService.findTaskIndex(id, tasks);
      const completedAt = await rotaService.completeTask(id, tasks[taskIndex]);
      const updatedRotas = update(this.state.rotas, {
        [rotaIndex]: {
          tasks: { [taskIndex]: { completedAt: { $set: completedAt } } }
        }
      });
      this.setState({ rotas: updatedRotas });
    } catch (e) {
      this.setState({ error: true });
    }
  };

  render() {
    const { rotas, rotaIndex } = this.state;
    let week = null;
    let tasks = [];
    let content = <Spinner />;

    if (rotas.length > 0) {
      week = rotas[rotaIndex].startsAt;
      tasks = rotas[rotaIndex].tasks;
    }

    if (!this.state.loading) {
      content = this.state.error ? (
        <ErrorMessage />
      ) : (
        <div>
          <WeekNav
            week={week}
            prev={this.handlePrevWeek}
            next={this.handleNextWeek}
          />
          <TaskList tasks={tasks} completeTask={this.handleCompleteTask} />
        </div>
      );
    }

    return content;
  }
}
