import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from '../components/Header';
import { Container } from '../components/Base';
import Rota from './Rota';
import Auth from './Auth';

const defaultContext = { auth: false };
export const AppContext = React.createContext(defaultContext);

export default class App extends Component {
  state = defaultContext;

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <Header />
        <Container>
          <Route exact path="/" component={Rota} />
          <Route path="/auth" component={Auth} />
        </Container>
      </AppContext.Provider>
    );
  }
}
