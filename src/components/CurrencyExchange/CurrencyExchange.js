import React from 'react';
import styles from './CurrencyExchange.module.css';

const CurrencyExchange = ({ data }) => {
  const getRoundedNumber = val => {
    return Number(val).toFixed(2);
  };
  return (
    <div className={styles.CurrencyExchange}>
      <table className={styles.CurrencyExchange__table}>
        <thead>
          <tr className={styles.CurrencyExchange__headerRow}>
            <td>Currency</td>
            <td>Sale</td>
            <td>Purchase</td>
          </tr>
        </thead>
        <tbody>
          {data.map(el => (
            <tr key={el.ccy} className={styles.CurrencyExchange__bodyRow}>
              <td>{el.ccy}</td>
              <td>{getRoundedNumber(el.buy)}</td>
              <td>{getRoundedNumber(el.sale)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrencyExchange;
