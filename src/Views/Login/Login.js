import React, { Component } from 'react';
import * as EmailValidator from 'email-validator';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authOperations, authSelectors } from '../../redux/auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as routes from '../../constants/routes';

import phone from '../../assets/images/phone-mock-up.png';
import s from './Login.module.css';
import { Media, Notification } from '../../common';
import Loader from 'react-loader-spinner';

const initialState = {
  user: {
    email: '',
    password: '',
  },
  isValidEmail: '',
};

class Login extends Component {
  state = initialState;

  componentWillUnmount() {
    this.setState(initialState);
  }

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

  onSubmitHandler = async e => {
    const { onLogin } = this.props;
    e.preventDefault();
    const { email, password } = this.state.user;
    await onLogin({
      email: email.toLowerCase(),
      password,
    });
    const { error } = this.props;
    if (error) return Notification('error', error, 2000);
    return;
  };

  render() {
    const { email, password } = this.state.user;
    const { isLoading } = this.props;
    const isBtnNotDisabled = this.state.isValidEmail && password.length > 4;
    return (
      <div className={s.main__container}>
        {isLoading && (
          <div style={{ position: 'absolute', top: 30, right: 30 }}>
            <Loader
              type="ThreeDots"
              color="#6d6d6d"
              height={'2rem'}
              width={60}
            />
          </div>
        )}
        <Media device="desktop">
          <div className={s.desktopImage__container}>
            <img
              src={phone}
              alt="mobile phone"
              className={s.desktopImage__phone}
            />
          </div>
        </Media>
        <div className={s.loginBlock__container}>
          <div className={s.loginBlock}>
            <div className={s.logo}></div>
            <span className={s.projectName}>Raschitalochka</span>
            <form
              className={s.loginForm}
              onSubmit={this.onSubmitHandler}
              autoComplete="off"
            >
              <label>
                <input
                  className={s.emailInput}
                  type="email"
                  name="email"
                  placeholder="E-mail as Login"
                  autoComplete="off"
                  value={email}
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
                  autoComplete="off"
                  placeholder="Password"
                  onChange={this.onChangeHandler}
                />
              </label>
              <button
                className={s.btnLogin}
                type="submit"
                disabled={!isBtnNotDisabled}
              >
                Enter
              </button>
            </form>
            <NavLink className={s.regLink} exact to={routes.REGISTER}>
              Register
            </NavLink>
          </div>
        </div>

        <p className={s.appDescription}>
          <span>Manage your budget</span> <span>with finance app</span>
        </p>
        <ToastContainer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: authSelectors.getIsLoading(state),
  error: authSelectors.getError(state),
});

const mapDispatchToProps = dispatch => ({
  onLogin: data => dispatch(authOperations.login(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
