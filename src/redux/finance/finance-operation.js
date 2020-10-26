import axios from 'axios';
import { token } from '../auth/auth-operations';
import {
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError,
  getFinanceSuccess,
  getFinanceError,
  getFinanceRequest,
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

export default {
  getFinance,
  addTransaction,
};
