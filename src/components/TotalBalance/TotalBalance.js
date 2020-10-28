import React from 'react';
import PropTypes from 'prop-types';
import styles from './TotalBalance.module.css';

const TotalBalance = ({ balance }) => (
  <div className={styles.totalBalanceBox}>
    <p className={styles.titleParagraph}>Total Balance, </p>
    <span className={styles.currencyParagraph}> UAH </span>
    <p className={styles.balanceParagraph}> {balance} </p>
  </div>
);

TotalBalance.propTypes = {
  balance: PropTypes.number.isRequired,
};

export default TotalBalance;
