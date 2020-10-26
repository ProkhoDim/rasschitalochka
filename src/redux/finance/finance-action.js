const { createAction } = require('@reduxjs/toolkit');

export const setTotalBalance = createAction('finance/setTotalBalance');

export const getFinanceRequest = createAction('finance/getFinanceRequest');
export const getFinanceSuccess = createAction('finance/getFinanceSuccess');
export const getFinanceError = createAction('finance/getFinanceError');

export const addTransactionRequest = createAction(
  'finance/addTransactionRequest',
);
export const addTransactionSuccess = createAction(
  'finance/addTransactionSuccess',
);
export const addTransactionError = createAction('finance/addTransactionError');
