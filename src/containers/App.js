import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from '../components/Header';
import { Container } from '../components/Base';
import Logout from '../components/Logout';
import Rota from './Rota';
import Auth from './Auth';

const defaultContext = { auth: false, toggleAuth: () => {} };
export const AppContext = React.createContext(defaultContext);

export default class App extends Component {
  toggleAuth = () => {
    this.setState(prevState => ({ auth: !prevState.auth }));
  };

  state = {
    ...defaultContext,
    toggleAuth: this.toggleAuth
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <Header />
        <Container>
          <Route exact path="/" component={Rota} />
          <Route path="/auth" component={Auth} />
          <Route path="/logout" component={Logout} />
        </Container>
      </AppContext.Provider>
    );
  }
}
