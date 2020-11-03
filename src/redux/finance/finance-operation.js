import axios from 'axios';
import {
  addTransactionRequest,
  addTransactionSuccess,
  getFinanceSuccess,
  getFinanceRequest,
  getError,
} from './finance-action';
import * as transactionTypes from '../../constants/transactionTypes';

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

const addTransaction = userData => async (dispatch, getState) => {
  dispatch(addTransactionRequest());
  try {
    const {
      auth: {
        user: { id },
      },
      finance: { totalBalance },
    } = getState();
    let balanceAfter, type;
    if (userData.type === transactionTypes.addIncome) {
      balanceAfter = Number(totalBalance) + Number(userData.amount);
      type = '+';
    }
    if (userData.type === transactionTypes.addCost) {
      type = '-';
      balanceAfter = Number(totalBalance) - Number(userData.amount);
    }
    const typeBalanceAfter = totalBalance >= 0 ? '+' : '-';
    const sendData = {
      ...userData,
      type,
      typeBalanceAfter,
      balanceAfter,
    };
    const {
      data: {
        finance: { totalBalance: balance, data },
      },
    } = await axios.post(`api/finance/${id}`, sendData);
    dispatch(addTransactionSuccess({ balance, data }));
  } catch (e) {
    dispatch(getError(e));
  }
};

export default {
  addTransaction,
  getFinance,
};
