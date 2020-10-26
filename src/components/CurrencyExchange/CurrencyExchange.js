import React, { Component } from 'react';
import getCurrencyExchangeCourse from '../../services/bankAPI';
import styles from './CurrencyExchange.module.css';

class CurrencyExchange extends Component {
  state = {
    dataFromPB: [],
  };

  async componentDidMount() {
    const data = await getCurrencyExchangeCourse();
    this.setState({ dataFromPB: data });
  }
  getRoundedNumber = val => {
    return Number(val).toFixed(2);
  };
  render() {
    const { dataFromPB } = this.state;

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
            {dataFromPB.map(el => (
              <tr key={el.ccy} className={styles.CurrencyExchange__bodyRow}>
                <td>{el.ccy}</td>
                <td>{this.getRoundedNumber(el.buy)}</td>
                <td>{this.getRoundedNumber(el.sale)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CurrencyExchange;
