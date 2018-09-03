export default {
  email: {
    elType: 'input',
    elProps: {
      type: 'email',
      placeholder: 'mail@example.com'
    },
    rules: {
      required: true,
      isEmail: true
    },
    value: '',
    valid: false,
    touched: false
  },
  password: {
    elType: 'input',
    elProps: {
      type: 'password',
      placeholder: 'your password'
    },
    rules: {
      required: true,
      minLength: 6
    },
    value: '',
    valid: false,
    touched: false
  }
};
