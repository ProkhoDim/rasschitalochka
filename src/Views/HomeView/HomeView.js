import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Media, Notification } from '../../common';
import {
  CurrencyExchange,
  ModalBtn,
  TotalBalance,
  TransferMobile,
  TransferPcTablet,
} from '../../components';
import { financeOperation } from '../../redux/finance';

export default function HomeView() {
  const dispatch = useDispatch();
  const { transactionHistory } = useSelector(state => state.finance) || [];

  useEffect(() => {
    if (!transactionHistory) {
      dispatch(financeOperation.getFinance());
    }
  }, [transactionHistory, dispatch]);

  const { token } = useSelector(state => state.auth);

  useEffect(() => {
    if (token) {
      Notification('success', 'You were successfully logged in!', 2000);
    }
  }, [token]);

  return (
    <>
      <div className="main_container main_container__table">
        <Media children={<TotalBalance />} device="mobile" />

        <ModalBtn />
        <Media device="mobile">
          <TransferMobile />
        </Media>
        <Media device="fromTablet">
          <TransferPcTablet />
        </Media>
      </div>
      <Media children={<CurrencyExchange />} device="onlyTablet" />
      <ToastContainer />
    </>
  );
}
