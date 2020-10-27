import axios from 'axios';
import { token } from '../auth/auth-operations';
import {
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

const addIncome = userData => async (dispatch, getState) => {
  dispatch(addIncomeRequest());
  try {
    const {
      auth: {
        user: { id },
      },
      finance: { totalBalance },
    } = getState();
    const balanceAfter = Number(totalBalance) + Number(userData.amount);
    const typeBalanceAfter = totalBalance >= 0 ? '+' : '-';
    const sendData = {
      ...userData,
      type: '+',
      typeBalanceAfter,
      balanceAfter,
    };
    const {
      data: {
        finance: { data },
      },
    } = await axios.post(`api/finance/${id}`, sendData);
    dispatch(addIncomeSuccess(data));
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
      finance: { totalBalance },
    } = getState();
    const balanceAfter = Number(totalBalance) - Number(userData.amount);
    const typeBalanceAfter = balanceAfter >= 0 ? '+' : '-';
    const sendData = {
      ...userData,
      type: '-',
      typeBalanceAfter,
      balanceAfter,
    };

    const {
      data: {
        finance: { data },
      },
    } = await axios.post(`api/finance/${id}`, sendData);
    dispatch(addCostSuccess(data));
  } catch (e) {
    dispatch(addCostError(e));
  }
};

export default {
  getFinance,
  addIncome,
  addCost,
};
