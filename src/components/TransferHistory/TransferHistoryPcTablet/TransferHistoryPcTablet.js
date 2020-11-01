import React from 'react';
import { connect } from 'react-redux';
import { financeSelectors } from '../../../redux/finance';
import styles from './TransferHistoryPcTablet.module.css';
const { tableShadow, table, tableRow, tableTopRow, th, td } = styles;

const TransferHistoryPcTablet = ({ dataBase }) => (
  <section className={tableShadow}>
    <table className={table}>
      <thead className={tableTopRow}>
        <tr>
          <th className={th}>Date</th>
          <th className={th}>Type</th>
          <th className={th}>Category</th>
          <th className={th}>Comments</th>
          <th className={th}>Amount, UAH</th>
          <th className={th}>Balance After</th>
        </tr>
      </thead>
      <tbody>
        {dataBase.map(
          ({ date, type, category, comments, amount, balanceAfter }, index) => (
            <tr key={index} className={tableRow}>
              <td className={td}>{new Date(date).toLocaleDateString()}</td>
              <td className={td}>{type}</td>
              <td className={td}>{category}</td>
              <td className={td}>{comments}</td>
              <td
                className={td}
                style={{ color: type === '+' ? '#75c16e' : '#ff6c00' }}
              >
                {amount}
              </td>
              <td className={td}>{balanceAfter}</td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  </section>
);

const mapStateToProps = state => ({
  dataBase: financeSelectors.getTransactionHistory(state),
});

export default connect(mapStateToProps)(TransferHistoryPcTablet);
