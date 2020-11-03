import axios from 'axios';
import {
  getFinanceSuccess,
  getFinanceRequest,
  addCostRequest,
  addCostSuccess,
  addIncomeRequest,
  addIncomeSuccess,
  getError,
} from './finance-action';

const getFinance = () => async (dispatch, getState) => {
  try {
    const {
      auth: {
        user: { id },
      },
    } = getState();
    dispatch(getFinanceRequest());
    const {
      data: {
        finance: { totalBalance, data },
      },
    } = await axios.get(`api/finance/${id}`);
    dispatch(getFinanceSuccess({ totalBalance, data }));
  } catch (error) {
    dispatch(getError(error));
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
        finance: { totalBalance: balance, data },
      },
    } = await axios.post(`api/finance/${id}`, sendData);
    dispatch(addIncomeSuccess({ balance, data }));
  } catch (e) {
    dispatch(getError(e));
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
        finance: { totalBalance: balance, data },
      },
    } = await axios.post(`api/finance/${id}`, sendData);
    dispatch(addCostSuccess({ balance, data }));
  } catch (e) {
    dispatch(getError(e));
  }
};

export default {
  getFinance,
  addIncome,
  addCost,
};
