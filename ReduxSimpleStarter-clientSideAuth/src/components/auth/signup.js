import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import * as actions from './../../actions';

class Signup extends Component {
  render() {
    console.log('@@ this.props:', this.props);
    // handleSubmit come form redux-form
    const {
      handleSubmit,
      fields: { email, password, passwordConfirm }
    } = this.props;

    return (
      <form>
        <fieldset className="form-group">
          <label>Email:</label>
          <input className="form-control" {...email} />
          {/* cool condition */}
          {email.touched &&
            email.error && <div className="error">{email.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input className="form-control" {...password} type="password" />
          {/* cool condition */}
          {password.touched &&
            password.error && <div className="error">{password.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Confirm Password:</label>
          <input
            className="form-control"
            {...passwordConfirm}
            type="password"
          />
          {/* cool condition */}
          {passwordConfirm.touched &&
            passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}
        </fieldset>
        <button className="btn btn-primary" type="submit">
          Sign up!
        </button>
      </form>
    );
  }
}

function validate(formProps) {
  console.log('@@formProps', formProps);
  const errors = {};

  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }

  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation';
  }

  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match';
  }

  return errors;
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate: validate
})(Signup);
