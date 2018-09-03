import React, { Component } from 'react';
import update from 'immutability-helper';

import {
  getFormElements,
  getFormValues,
  inputIsValid,
  formIsValid
} from '../utils/form';
import loginForm from '../schemas/loginForm';
import * as authService from '../services/auth';
import Login from '../components/Login';
import Spinner from '../components/Spinner';

export default class Auth extends Component {
  state = {
    error: false,
    loading: false,
    formIsValid: false,
    loginForm
  };

  handleInput = (event, id) => {
    const { value } = event.target;
    const { rules } = this.state.loginForm[id];
    const updatedLoginForm = update(this.state.loginForm, {
      [id]: {
        value: { $set: value },
        touched: { $set: true },
        valid: { $set: inputIsValid(value, rules) }
      }
    });

    this.setState({
      loginForm: updatedLoginForm,
      formIsValid: formIsValid(updatedLoginForm)
    });
  };

  handleLogin = async event => {
    event.preventDefault();

    if (this.state.formIsValid) {
      const formData = getFormValues(this.state.loginForm);

      try {
        this.setState({ loading: true });
        await authService.loginWithEmail(formData.email, formData.password);
        this.props.history.push('/');
      } catch (e) {
        let errorMsg =
          'Something went wrong, please check your internet connection and try again.';
        if (e.response.status === 401) {
          errorMsg = 'Invalid login credentials, please try again.';
        }
        this.setState({ error: errorMsg, loading: false });
      }
    }
  };

  render() {
    const elements = getFormElements(this.state.loginForm);
    return this.state.loading ? (
      <Spinner />
    ) : (
      <Login
        elements={elements}
        error={this.state.error}
        formIsValid={this.state.formIsValid}
        handleInput={this.handleInput}
        handleLogin={this.handleLogin}
      />
    );
  }
}
