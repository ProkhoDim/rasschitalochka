import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  getFinanceRequest,
  getFinanceSuccess,
  addTransactionRequest,
  addTransactionSuccess,
  getError,
} from './finance-action';
import { authActions } from '../auth';

const totalBalance = createReducer(0, {
  [getFinanceSuccess]: (_, { payload }) => payload.totalBalance,
  [addTransactionSuccess]: (_, { payload }) => payload.balance,
  [authActions.logoutSuccess]: () => 0,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload.balance,
});

const transactionHistory = createReducer([], {
  [getFinanceSuccess]: (_, { payload }) => [...payload.data],
  [addTransactionSuccess]: (_, { payload }) => [...payload.data],
  [authActions.logoutSuccess]: () => [],
  [authActions.getCurrentUserSuccess]: (_, { payload }) => [...payload.data],
});

const setError = (_, { payload }) => payload.message;

const error = createReducer(null, {
  [getError]: setError,
});

const isLoading = createReducer(false, {
  [getFinanceRequest]: () => true,
  [addTransactionRequest]: () => true,
  [getFinanceSuccess]: () => false,
  [addTransactionSuccess]: () => false,
  [getError]: () => false,
});

export default combineReducers({
  totalBalance,
  transactionHistory,
  isLoading,
  error,
});
