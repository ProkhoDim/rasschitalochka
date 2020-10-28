import { createSelector } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const getTotalBalance = state => state.finance.totalBalance;

const getTransactionHistory = state => state.finance.transactionHistory;

const getCostTransactions = createSelector([getTransactionHistory], items => {
  return items.filter(({ type }) => type.includes('-'));
});

const getIncomeTransactions = createSelector([getTransactionHistory], items => {
  return items.filter(({ type }) => type.includes('+'));
});

const getUniqueCategory = createSelector([getCostTransactions], items => {
  return Array.from(new Set(items.flatMap(item => item.category).sort()));
});

const getAmountsCategory = createSelector(
  [getUniqueCategory, getCostTransactions],
  (categories, transactions) => {
    return categories.map(category => {
      return transactions
        .filter(transaction => transaction.category.includes(category))
        .map(category => category.amount)
        .reduce((count, amount) => count + amount, 0);
    });
  },
);

const getDataTransactionsForRender = createSelector(
  [getUniqueCategory, getAmountsCategory],
  (categories, amount) => {
    const colors = [
      '#ecb22a',
      '#e28b20',
      '#d25925',
      '#67b7d0',
      '#5593d7',
      '#3e6ba8',
      '#9cc254',
      '#73ad57',
      '#507c3a',
    ];
    return categories.map((category, index) =>
      amount[index]
        ? { id: uuidv4(), category, amount: amount[index], fill: colors[index] }
        : { category },
    );
  },
);

const getTotalCost = createSelector([getCostTransactions], items => {
  return items.reduce((count, item) => count + item.amount, 0);
});

const getTotalIncome = createSelector([getIncomeTransactions], items => {
  return items.reduce((count, item) => count + item.amount, 0);
});

export default {
  getTotalBalance,
  getTransactionHistory,
  getDataTransactionsForRender,
  getTotalCost,
  getTotalIncome,
};
