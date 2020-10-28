import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  getFinanceRequest,
  getFinanceSuccess,
  getFinanceError,
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError,
  setTotalBalance,
  addCostRequest,
  addCostSuccess,
  addCostError,
  addIncomeRequest,
  addIncomeSuccess,
  addIncomeError,
} from './finance-action';

const totalBalance = createReducer(0, {
  [getFinanceSuccess]: (_, { payload }) => payload.totalBalance,
  [setTotalBalance]: (_, { payload }) => payload,
  [addIncomeSuccess]: (_, { payload }) => payload.balance,
  [addCostSuccess]: (_, { payload }) => payload.balance,
});

const transactionHistory = createReducer([], {
  [getFinanceSuccess]: (_, { payload }) => [...payload.data],
  [addIncomeSuccess]: (_, { payload }) => [...payload.data],
  [addCostSuccess]: (_, { payload }) => [...payload.data],
});

const setError = (_, { payload }) => payload.message;

const error = createReducer(null, {
  [getFinanceError]: setError,
  [addTransactionError]: setError,
  [addIncomeError]: setError,
  [addCostError]: setError,
});

const isLoading = createReducer(false, {
  [getFinanceRequest]: () => true,
  [addTransactionRequest]: () => true,
  [getFinanceSuccess]: () => false,
  [addTransactionSuccess]: () => false,
  [getFinanceError]: () => false,
  [addTransactionError]: () => false,
  [addCostRequest]: () => true,
  [addIncomeRequest]: () => true,
  [addIncomeSuccess]: () => false,
  [addCostSuccess]: () => false,
});

export default combineReducers({
  totalBalance,
  transactionHistory,
  isLoading,
  error,
});
