import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  getFinanceRequest,
  getFinanceSuccess,
  addTransactionRequest,
  addTransactionSuccess,
  setTotalBalance,
  addCostRequest,
  addCostSuccess,
  addIncomeRequest,
  addIncomeSuccess,
  getError,
  changeFilter,
} from './finance-action';
import { authActions } from '../auth';

const totalBalance = createReducer(0, {
  [getFinanceSuccess]: (_, { payload }) => payload.totalBalance,
  [setTotalBalance]: (_, { payload }) => payload,
  [addIncomeSuccess]: (_, { payload }) => payload.balance,
  [addCostSuccess]: (_, { payload }) => payload.balance,
  [authActions.logoutSuccess]: () => 0,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload.balance,
});

const transactionHistory = createReducer([], {
  [getFinanceSuccess]: (_, { payload }) => [...payload.data],
  [addIncomeSuccess]: (_, { payload }) => [...payload.data],
  [addCostSuccess]: (_, { payload }) => [...payload.data],
  [authActions.logoutSuccess]: () => [],
  [authActions.getCurrentUserSuccess]: (_, { payload }) => [...payload.data],
});

const setError = (_, { payload }) => payload.message;

const error = createReducer(null, {
  [getError]: setError,
});

const isLoading = createReducer(false, {
  [addCostRequest]: () => true,
  [addIncomeRequest]: () => true,
  [getFinanceRequest]: () => true,
  [addTransactionRequest]: () => true,
  [getFinanceSuccess]: () => false,
  [addTransactionSuccess]: () => false,
  [getError]: () => false,
  [addIncomeSuccess]: () => false,
  [addCostSuccess]: () => false,
});

const filter = createReducer([], {
  [changeFilter]: (state, { payload }) =>
    Object.assign({ ...state }, { ...payload }),
});

export default combineReducers({
  totalBalance,
  transactionHistory,
  isLoading,
  error,
  filter,
});
