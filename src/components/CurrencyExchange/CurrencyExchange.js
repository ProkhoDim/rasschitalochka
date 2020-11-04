import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { bankDataOperations, bankDataSelectors } from '../../redux/bankData';
import { authSelectors } from '../../redux/auth';

import Loader from 'react-loader-spinner';
import styles from './CurrencyExchange.module.css';

const CurrencyExchange = () => {
  const dispatch = useDispatch();
  const dataFromBank = useSelector(bankDataSelectors.getFilteredData);
  const isLoading = useSelector(bankDataSelectors.isLoading);
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  useEffect(() => {
    if (dataFromBank || !isAuthenticated) {
      return;
    }
    dispatch(bankDataOperations.getBankData());
  }, [dispatch, dataFromBank, isAuthenticated]);

  return (
    <section className={styles.CurrencyExchange__container}>
      <div className={styles.CurrencyExchange}>
        {isLoading ? (
          <Loader type="ThreeDots" color="#6d6d6d" height={80} width={80} />
        ) : dataFromBank ? (
          <table className={styles.CurrencyExchange__table}>
            <thead>
              <tr className={styles.CurrencyExchange__headerRow}>
                <td>Currency</td>
                <td>Sale</td>
                <td>Purchase</td>
              </tr>
            </thead>
            <tbody>
              {dataFromBank.map(el => (
                <tr key={el.ccy} className={styles.CurrencyExchange__bodyRow}>
                  <td>{el.ccy}</td>
                  <td>{el.buy}</td>
                  <td>{el.sale}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className={styles.CurrencyExchange__errorMessage}>
            <p>
              <span>Sorry...</span>
              At the moment the exchange rate is not available
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CurrencyExchange;
