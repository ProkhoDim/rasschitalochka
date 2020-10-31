import React, { Component } from 'react';
import getCurrencyExchangeRate from '../../services/bankAPI';

import Loader from 'react-loader-spinner';

import styles from './CurrencyExchange.module.css';

class CurrencyExchange extends Component {
  state = {
    dataFromPB: null,
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const data = await getCurrencyExchangeRate();
    this.setState({ dataFromPB: data, isLoading: false });
  }
  getRoundedNumber = val => {
    return Number(val).toFixed(2);
  };
  render() {
    const { dataFromPB, isLoading } = this.state;

    return (
      <section className={styles.CurrencyExchange__container}>
        <div className={styles.CurrencyExchange}>
          {isLoading ? (
            <Loader type="ThreeDots" color="#6d6d6d" height={80} width={80} />
          ) : dataFromPB ? (
            <table className={styles.CurrencyExchange__table}>
              <thead>
                <tr className={styles.CurrencyExchange__headerRow}>
                  <td>Currency</td>
                  <td>Sale</td>
                  <td>Purchase</td>
                </tr>
              </thead>
              <tbody>
                {dataFromPB.map(el => (
                  <tr key={el.ccy} className={styles.CurrencyExchange__bodyRow}>
                    <td>{el.ccy}</td>
                    <td>{this.getRoundedNumber(el.buy)}</td>
                    <td>{this.getRoundedNumber(el.sale)}</td>
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
  }
}

export default CurrencyExchange;
