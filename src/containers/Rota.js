import React, { Component } from 'react';

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
      const rotas = await rotaService.getUpcoming();
      this.setState({ rotas, loading: false });
    } catch (e) {
      this.setState({ error: true, loading: false });
    }
  }

  render() {
    const { rotas } = this.state;
    let tasks = [];
    let content = <Spinner />;

    if (rotas.length > 0) {
      tasks = rotas[this.state.rotaIndex].tasks;
    }

    if (!this.state.loading) {
      content = this.state.error ? (
        <ErrorMessage />
      ) : (
        <div>
          <WeekNav week="26" />
          <TaskList tasks={tasks} />
        </div>
      );
    }

    return content;
  }
}
