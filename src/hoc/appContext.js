import React from 'react';

import { AppContext } from '../containers/App';

const withAppContext = Component => props => (
  <AppContext.Consumer>
    {context => (
      <Component
        {...props}
        auth={context.auth}
        toggleAuth={context.toggleAuth}
      />
    )}
  </AppContext.Consumer>
);

export default withAppContext;
