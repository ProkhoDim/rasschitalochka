import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Media } from '../../common';
import {
  CurrencyExchange,
  ModalBtn,
  TotalBalance,
  TransferMobile,
  TransferPcTablet,
} from '../../components';
// import { financeOperation, financeSelectors } from '../../redux/finance';

export default function HomeView() {
  // const dispatch = useDispatch();
  // const transactionHistory = useSelector(
  //   financeSelectors.getTransactionHistory,
  // );
  // const transactionHistoryExist = transactionHistory.length > 0;

  // useEffect(() => {
  //   if (!transactionHistoryExist) {
  //     dispatch(financeOperation.getFinance());
  //   }
  // }, [transactionHistoryExist, dispatch]);

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
