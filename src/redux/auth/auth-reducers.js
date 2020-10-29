import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './auth-actions';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: () => initialUserState,
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
  [authActions.logoutSuccess]: () => initialUserState,
  [authActions.getCurrentUserError]: () => initialUserState,
});

const token = createReducer(null, {
  [authActions.registerSuccess]: () => null,
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
  [authActions.logoutSuccess]: () => null,
  [authActions.getCurrentUserError]: () => null,
});

const setError = (_, { payload }) => payload.message;

const error = createReducer(null, {
  [authActions.registerError]: setError,
  [authActions.loginError]: setError,
  [authActions.logoutError]: setError,
  [authActions.getCurrentUserError]: setError,
});

const isAuthenticated = createReducer(false, {
  [authActions.registerSuccess]: () => false,
  [authActions.loginSuccess]: () => true,
  [authActions.getCurrentUserSuccess]: () => true,
  [authActions.registerError]: () => false,
  [authActions.loginError]: () => false,
  [authActions.getCurrentUserError]: () => false,
  [authActions.logoutSuccess]: () => false,
});

const isLoading = createReducer(false, {
  [authActions.getCurrentUserRequest]: () => true,
  [authActions.loginRequest]: () => true,
  [authActions.registerRequest]: () => true,
  [authActions.registerSuccess]: () => false,
  [authActions.loginSuccess]: () => false,
  [authActions.getCurrentUserSuccess]: () => false,
  [authActions.registerError]: () => false,
  [authActions.loginError]: () => false,
  [authActions.getCurrentUserError]: () => false,
  [authActions.logoutSuccess]: () => false,
});

export default combineReducers({
  user,
  isAuthenticated,
  token,
  error,
  isLoading,
});
