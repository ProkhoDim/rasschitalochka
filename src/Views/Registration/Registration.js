import React, { Component, createRef } from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';
import * as EmailValidator from 'email-validator';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { authOperations, authSelectors } from '../../redux/auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import s from './Registration.module.css';
import icon from '../../assets/icons/logo.svg';
import * as routes from '../../constants/routes';
import { Media, Notification } from '../../common';

const initialState = {
  user: {
    name: '',
    email: '',
    password: '',
  },
  isValidEmail: '',
  isEqualPassword: '',
  isPasswordStrong: false,
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

  onSubmitHandler = async e => {
    e.preventDefault();
    const { email, password } = this.state.user;
    const { onRegister, onLogin } = this.props;
    if (
      this.state.isValidEmail === true &&
      this.state.isEqualPassword === true
    ) {
      const response = await onRegister(this.state.user);
      if (response) {
        onLogin({ email, password });
        return Notification('success', 'Registration successful!', 2000);
      }

      const { error } = this.props;
      if (error) return Notification('error', error, 2000);
      this.setState(initialState);
      this.confirmPassword.current.value = '';
    }
  };

  CheckStrenthPass = score => {
    if (score > 0) {
      this.setState({ isPasswordStrong: true });
    } else this.setState({ isPasswordStrong: false });
  };

  render() {
    const { name, email, password } = this.state.user;
    const { isValidEmail, isEqualPassword, isPasswordStrong } = this.state;
    const isBtnNotDisable =
      isValidEmail && isEqualPassword && name && isPasswordStrong;
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
                    onBlur={this.onChangeConfrimPassHandler}
                  />
                </label>
                <label>
                  <input
                    className={s.input + ' ' + s.passwordInput}
                    type="password"
                    name="password confirmation"
                    placeholder="Password Confirmation"
                    onChange={this.onChangeConfrimPassHandler}
                    onBlur={this.onChangeConfrimPassHandler}
                    ref={this.confirmPassword}
                  />
                </label>
                {this.state.isEqualPassword === false && (
                  <div className={s.warningText}>
                    <span>Password doesn't match!</span>
                  </div>
                )}
                <PasswordStrengthBar
                  password={password}
                  minLength="5"
                  onChangeScore={score => this.CheckStrenthPass(score)}
                />
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
        <ToastContainer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: authSelectors.getError(state),
});

const mapDispatchToProps = dispatch => ({
  onRegister: data => dispatch(authOperations.register(data)),
  onLogin: data => dispatch(authOperations.login(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
