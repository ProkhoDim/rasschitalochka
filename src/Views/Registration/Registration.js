import React, { Component, createRef } from 'react';
import * as EmailValidator from 'email-validator';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';

import s from './Registration.module.css';
import icon from '../../assets/svg/logo.svg';
import routes from '../../routes';
import { Media } from '../../common';

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
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        [name]: value,
      },
    }));
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
    e.preventDefault();
    const { onRegister } = this.props;
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
      <div className={s.pageWrap}>
        <Media device="desktop">
          <div className={s.leftSide}>
            <div className={s.appNameContainer}>
              <svg className={s.icon}>
                <use href={`${icon}#logo`}></use>
              </svg>
              <span className={s.projectName}>Raschitalochka</span>
            </div>
            <h2 className={s.losung}>
              <span>Create your own</span>
              <span>categories of costs</span>
            </h2>
          </div>
        </Media>
        <div className={s.registerWrap}>
          <div className={s.registerBlock}>
            <div className={s.container}>
              <Media device="mobile">
                <div className={s.logo}></div>
                <span className={s.projectName}>Raschitalochka</span>
              </Media>

              <Media device="fromTablet">
                <h2 className={s.title}>Registration</h2>
              </Media>
              <form
                className={s.registerForm}
                onSubmit={this.onSubmitHandler}
                autoComplete="off"
              >
                <label>
                  <input
                    className={s.input + ' ' + s.emailInput}
                    type="email"
                    name="email"
                    value={email}
                    autoComplete="off"
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
                    className={s.input + ' ' + s.passwordInput}
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Password"
                    onChange={this.onChangeHandler}
                  />
                </label>
                <label>
                  <input
                    className={s.input + ' ' + s.passwordInput}
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
                    className={s.input + ' ' + s.nameInput}
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
              <NavLink className={s.loginLink} exact to={routes.LOGIN}>
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onRegister: data => dispatch(authOperations.register(data)),
});

export default connect(null, mapDispatchToProps)(Registration);
