import { createSelector } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';

const getTotalBalance = state => state.finance.totalBalance;

const getTransactionHistory = state => state.finance.transactionHistory;

// const getCostTransactions = createSelector([getTransactionHistory], items => {
//   return items.filter(({ type }) => type.includes('-'));
// });

const getFilter = state => state.finance.filter;

const validFilterData = createSelector([getFilter], data => {
  if (data.hasOwnProperty('month') && data.hasOwnProperty('year')) {
    if (Number.isNaN(data.month)) return false;
    if (Number.isNaN(data.year)) return false;
    return true;
  }
  return false;
});

const getInterval = createSelector([getFilter], data => {
  const start = dayjs(`${data.year}-${data.month}-1`).unix();
  const end = dayjs(
    `${data.year}-${data.month}-${dayjs(start).daysInMonth()}`,
  ).unix();

  return { start, end };
});

const getCostTransactions = createSelector(
  [getTransactionHistory, validFilterData, getInterval],
  (items, valid, interval) => {
    const data = items.filter(({ type }) => type.includes('-'));
    if (!valid) return data;
    const filteredData = data.filter(
      ({ createdAt }) =>
        dayjs(createdAt).unix() >= interval.start &&
        dayjs(createdAt).unix() <= interval.end,
    );
    return filteredData.length > 0 ? filteredData : data;
  },
);

const getIncomeTransactions = createSelector(
  [getTransactionHistory, validFilterData, getInterval],
  (items, valid, interval) => {
    const data = items.filter(({ type }) => type.includes('+'));
    if (!valid) return data;
    const filteredData = data.filter(
      ({ createdAt }) =>
        dayjs(createdAt).unix() >= interval.start &&
        dayjs(createdAt).unix() <= interval.end,
    );
    return filteredData.length > 0 ? filteredData : data;
  },
);

const getTotalCost = createSelector([getCostTransactions], items => {
  return items.reduce((count, item) => count + item.amount, 0);
});

const getTotalIncome = createSelector([getIncomeTransactions], items => {
  return items.reduce((count, item) => count + item.amount, 0);
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
    return categories
      .map((category, index) =>
        amount[index]
          ? {
              id: uuidv4(),
              category,
              amount: amount[index],
              fill: colors[index],
            }
          : { category },
      )
      .sort((a, b) => {
        return b.amount > a.amount ? 1 : -1;
      });
  },
);

export default {
  getTotalBalance,
  getTransactionHistory,
  getCostTransactions,
  getTotalCost,
  getTotalIncome,
  getDataTransactionsForRender,
};
