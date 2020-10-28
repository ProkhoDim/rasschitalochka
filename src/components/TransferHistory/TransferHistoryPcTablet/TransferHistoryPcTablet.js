import React from 'react';
import { toISOString } from '../addons/formatFixer';
import styles from './TransferHistoryPcTablet.module.css';
const { tableShadow, table, tableRow, tableTopRow, th, td, alert } = styles;

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
          ({ id, date, type, category, comments, amount, balanceAfter }) => (
            <tr key={id} className={tableRow}>
              <td className={td}>{toISOString(date)}</td>
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
    {!dataBase.length && <h2 className={alert}>No new transactions yet</h2>}
  </section>
);

export default TransferHistoryPcTablet;
