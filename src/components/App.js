import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';
import { Container } from './Base';
import Rota from '../containers/Rota';

export default () => (
  <Fragment>
    <Header auth />
    <Container>
      <Route exact path="/" component={Rota} />
    </Container>
  </Fragment>
);
