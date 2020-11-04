import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  getError,
  clearError,
  registerRequest,
  registerSuccess,
  loginRequest,
  loginSuccess,
  logoutSuccess,
  getCurrentUserRequest,
  getCurrentUserSuccess,
} from './auth-actions';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [registerSuccess]: () => initialUserState,
  [loginSuccess]: (_, { payload }) => payload.user,
  [logoutSuccess]: () => initialUserState,
});

const token = createReducer(null, {
  [registerSuccess]: () => null,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});

const setError = (_, { payload }) => payload.message;

const error = createReducer(null, {
  [getError]: setError,
  [clearError]: () => null,
});

const isAuthenticated = createReducer(false, {
  [registerSuccess]: () => false,
  [loginSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  [logoutSuccess]: () => false,
});

const isLoading = createReducer(false, {
  [registerRequest]: () => true,
  [registerSuccess]: () => false,
  [loginRequest]: () => true,
  [loginSuccess]: () => false,
  [logoutSuccess]: () => false,
  [getCurrentUserRequest]: () => true,
  [getCurrentUserSuccess]: () => false,
  [getError]: () => false,
});

export default combineReducers({
  user,
  isAuthenticated,
  token,
  error,
  isLoading,
});
