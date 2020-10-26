import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  getFinanceRequest,
  getFinanceSuccess,
  getFinanceError,
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError,
  setTotalBalance,
} from './finance-action';

const totalBalance = createReducer(0, {
  [getFinanceSuccess]: (_, { payload }) => payload.totalBalance,
  [setTotalBalance]: (_, { payload }) => payload,
});

const transactionHistory = createReducer([], {
  [getFinanceSuccess]: (_, { payload }) => [...payload.data],
  [addTransactionSuccess]: (state, { payload }) => [...state, payload],
});

const setError = (_, { payload }) => payload.message;

const error = createReducer(null, {
  [getFinanceError]: setError,
  [addTransactionError]: setError,
});

const isLoading = createReducer(false, {
  [getFinanceRequest]: () => true,
  [addTransactionRequest]: () => true,
  [getFinanceSuccess]: () => false,
  [addTransactionSuccess]: () => false,
  [getFinanceError]: () => false,
  [addTransactionError]: () => false,
});

export default combineReducers({
  totalBalance,
  transactionHistory,
  isLoading,
  error,
});
