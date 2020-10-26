import React, { Component, createRef } from 'react';
import * as EmailValidator from 'email-validator';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';

import s from './Registration.module.css';

const initialState = {
  user: {
    name: '',
    email: '',
    password: '',
  },
  isValidEmail: '',
  isEqualPassword: '',
};

class Registration extends Component {
  state = initialState;
  confirmPassword = createRef();

  onChangeHandler = ({ currentTarget: { name, value } }) => {
    this.setState({ user: { [name]: value } });
  };

  onBlurEmailHandler = e => {
    if (EmailValidator.validate(this.state.user.email) === true) {
      this.setState({ isValidEmail: true });
    } else {
      this.setState({ isValidEmail: false });
    }
  };

  onChangeConfrimPassHandler = e => {
    if (this.confirmPassword.current.value === this.state.user.password) {
      this.setState({ isEqualPassword: true });
    } else {
      this.setState({ isEqualPassword: false });
    }
  };

  onSubmitHandler = e => {
    const { onRegister } = this.props;
    e.preventDefault();
    if (
      this.state.isValidEmail === true &&
      this.state.isEqualPassword === true
    ) {
      onRegister(this.state.user);
      this.setState(initialState);
      this.confirmPassword.current.value = '';
    }
  };

  render() {
    const { name, email, password } = this.state.user;
    const isBtnNotDisable =
      this.state.isValidEmail && this.state.isEqualPassword;
    return (
      <div className={s.registerBlock}>
        <div className={s.logo}></div>
        <span className={s.projectName}>Raschitalochka</span>
        <form
          className={s.registerForm}
          onSubmit={this.onSubmitHandler}
          autoComplete="off"
        >
          <label>
            <input
              className={s.emailInput}
              type="email"
              name="email"
              value={email}
              autocomplete="off"
              placeholder="E-mail as Login"
              onChange={this.onChangeHandler}
              onBlur={this.onBlurEmailHandler}
            />
          </label>
          {this.state.isValidEmail === false && (
            <div className={s.warningText}>
              <span>Please enter valid email address!</span>
            </div>
          )}
          <label>
            <input
              className={s.passwordInput}
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={this.onChangeHandler}
            />
          </label>
          <label>
            <input
              className={s.passwordInput}
              type="password"
              name="password confirmation"
              placeholder="Password Confirmation"
              onChange={this.onChangeConfrimPassHandler}
              ref={this.confirmPassword}
            />
          </label>
          {this.state.isEqualPassword === false && (
            <div className={s.warningText}>
              <span>Password doesn't match!</span>
            </div>
          )}
          <div className={s.passwordProgressLine}></div>
          <label>
            <input
              className={s.nameInput}
              type="name"
              name="name"
              value={name}
              placeholder="Your Name"
              onChange={this.onChangeHandler}
            />
          </label>
          <button
            className={s.btnRegister}
            type="submit"
            disabled={!isBtnNotDisable}
          >
            Register
          </button>
        </form>
        <NavLink className={s.loginLink} exact to="/login">
          Login
        </NavLink>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onRegister: data => dispatch(authOperations.register(data)),
});

export default connect(null, mapDispatchToProps)(Registration);
