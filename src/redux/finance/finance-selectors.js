const getTotalBalance = state => state.finance.totalBalance;

const getTransactionHistory = state => state.finance.transactionHistory;

export default {
  getTotalBalance,
  getTransactionHistory,
};
