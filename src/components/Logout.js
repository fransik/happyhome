import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';

import { logout } from '../services/auth';
import withAppContext from '../hoc/appContext';

class Logout extends PureComponent {
  componentWillMount() {
    logout(this.props.toggleAuth);
  }

  render() {
    return <Redirect to="/auth" />;
  }
}

export default withAppContext(Logout);
