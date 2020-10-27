import axios from 'axios';
import { token } from '../auth/auth-operations';
import {
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError,
  getFinanceSuccess,
  getFinanceError,
  getFinanceRequest,
  addCostRequest,
  addCostSuccess,
  addCostError,
  addIncomeRequest,
  addIncomeSuccess,
  addIncomeError,
} from './finance-action';

token.set(
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOTEzY2FkOTA0MzI0MGM5NjIyODYzNiIsImVtYWlsIjoiZGRkMkBtYWlsLmNvbSIsIm5hbWUiOiJkZGQyIiwiY3JlYXRlZEF0IjoiMjAyMC0xMC0yMlQwODowMjo1My43NDJaIiwiaWF0IjoxNjAzMzUzNzk1fQ.UslEsfvuqMvIK92cGTXy7zjMQqxEERJIrkvuetFhH44',
);

const getFinance = id => async dispatch => {
  try {
    dispatch(getFinanceRequest());
    const {
      data: {
        finance: { totalBalance, data },
      },
    } = await axios.get(`/finance/${id}`);
    dispatch(getFinanceSuccess({ totalBalance, data }));
  } catch (error) {
    dispatch(getFinanceError(error));
  }
};

const addTransaction = (id, transaction) => async dispatch => {
  try {
    dispatch(addTransactionRequest());
    const { data } = await axios.post(`/finance/${id}`, transaction);
    dispatch(addTransactionSuccess(data));
  } catch (error) {
    dispatch(addTransactionError(error));
  }
};

const addIncome = userData => async (dispatch, getState) => {
  dispatch(addIncomeRequest());
  try {
    const {
      auth: {
        user: { id },
      },
    } = getState();
    const response = await axios.get(`api/finance/${id}`);
    console.log(response);
    const totalBalance =
      Number(response.data.finance.totalBalance) + Number(userData.amount);
    const typeBalanceAfter = totalBalance >= 0 ? '+' : '-';
    const data = {
      ...userData,
      type: '+',
      typeBalanceAfter,
      balanceAfter: totalBalance,
    };

    await axios.post(`api/finance/${id}`, data);
    dispatch(addIncomeSuccess(data));
    console.log(data);
  } catch (e) {
    dispatch(addIncomeError(e));
  }
};

const addCost = userData => async (dispatch, getState) => {
  dispatch(addCostRequest());
  try {
    const {
      auth: {
        user: { id },
      },
    } = getState();
    const response = await axios.get(`api/finance/${id}`);
    const totalBalance =
      Number(response.data.finance.totalBalance) - Number(userData.amount);
    const typeBalanceAfter = totalBalance >= 0 ? '+' : '-';
    const data = {
      ...userData,
      type: '-',
      typeBalanceAfter,
      balanceAfter: totalBalance,
    };

    await axios.post(`api/finance/${id}`, data);
    dispatch(addCostSuccess(data));
    console.log(data);
  } catch (e) {
    dispatch(addCostError(e));
  }
};

export default {
  getFinance,
  addTransaction,
  addIncome,
  addCost,
};
