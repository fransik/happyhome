import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';
import { Container } from './Base';
import Rota from '../containers/Rota';
import Auth from '../containers/Auth';

const App = () => (
  <Fragment>
    <Header auth />
    <Container>
      <Route exact path="/" component={Rota} />
      <Route path="/auth" component={Auth} />
    </Container>
  </Fragment>
);

export default App;
