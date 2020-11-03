import React from 'react';
import { useDispatch } from 'react-redux';
import { income } from '../../constants/CategoryValues';
import * as routes from '../../constants/routes';
import { financeOperation } from '../../redux/finance';
import AddTransaction from '../AddTransaction';
import styles from './AddTransactionMobile.module.css';

const IncomeMobile = props => {
  const dispatch = useDispatch();

  const handleSubmit = userData =>
    dispatch(financeOperation.addIncome(userData));

  const handleGoBack = () => {
    const { state } = props.location;

    if (state && state.from) {
      return props.history.push(state.from);
    }

    props.history.push(routes.HOME);
  };

  return (
    <div className={styles.mobile_wrapper}>
      <div className={styles.mobile_header}>
        <button
          className={styles.mobile_button}
          onClick={handleGoBack}
        ></button>
        <h2 className={styles.mobile_heading}>Add Income</h2>
      </div>
      <AddTransaction
        radioButtonData={income}
        onSubmit={handleSubmit}
        onCloseModal={handleGoBack}
      />
    </div>
  );
};

export default IncomeMobile;
