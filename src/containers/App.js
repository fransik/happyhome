import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { checkAuth } from '../services/auth';
import PrivateRoute from '../hoc/PrivateRoute';
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
    auth: checkAuth(),
    toggleAuth: this.toggleAuth
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <Header />
        <Container>
          <Switch>
            <Route path="/auth" component={Auth} />
            <PrivateRoute path="/logout" component={Logout} />
            <PrivateRoute exact path="/" component={Rota} />
          </Switch>
        </Container>
      </AppContext.Provider>
    );
  }
}
