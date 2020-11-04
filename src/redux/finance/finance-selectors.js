import { createSelector } from '@reduxjs/toolkit';

const getTotalBalance = state => state.finance.totalBalance;

const getTransactionHistory = state => state.finance.transactionHistory || [];

const getCostTransactions = createSelector([getTransactionHistory], items => {
  return items.filter(({ type }) => type.includes('-'));
});

const getIncomeTransactions = createSelector([getTransactionHistory], items => {
  return items.filter(({ type }) => type.includes('+'));
});

const getTotalCost = createSelector([getCostTransactions], items => {
  return items.reduce((count, item) => count + item.amount, 0);
});

const getTotalIncome = createSelector([getIncomeTransactions], items => {
  return items.reduce((count, item) => count + item.amount, 0);
});

export default {
  getTotalBalance,
  getTransactionHistory,
  getCostTransactions,
  getTotalCost,
  getTotalIncome,
};
