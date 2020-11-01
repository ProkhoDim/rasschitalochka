import { createAction } from '@reduxjs/toolkit';

const registerRequest = createAction('auth/registerRequest');
const registerSuccess = createAction('auth/registerSuccess');
const registerError = createAction('auth/registerError');

const loginRequest = createAction('auth/loginRequest');
const loginSuccess = createAction('auth/loginSuccess');
const loginError = createAction('auth/loginError');

const logoutRequest = createAction('auth/logoutRequest');
const logoutSuccess = createAction('auth/logoutSuccess');
const logoutError = createAction('auth/logoutError');

const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
const getCurrentUserSuccess = createAction('auth/getCurrentUserSuccess');
const getCurrentUserError = createAction('auth/getCurrentUserError');

const addCostRequest = createAction('auth/addCostRequest');
const addCostSuccess = createAction('auth/addCostSuccess');
const addCostError = createAction('auth/addCostError');

const addIncomeRequest = createAction('auth/addIncomeRequest');
const addIncomeSuccess = createAction('auth/addIncomeSuccess');
const addIncomeError = createAction('auth/addIncomeError');

export default {
  logoutRequest,
  logoutSuccess,
  logoutError,

  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,

  registerRequest,
  registerSuccess,
  registerError,

  loginRequest,
  loginSuccess,
  loginError,

  addIncomeRequest,
  addIncomeSuccess,
  addIncomeError,

  addCostRequest,
  addCostSuccess,
  addCostError,
};
