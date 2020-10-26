import React from 'react';
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
          ({ date, type, category, comments, amount, balance }, index) => (
            <tr key={index} className={tableRow}>
              <td className={td}>{date}</td>
              <td className={td}>{type}</td>
              <td className={td}>{category}</td>
              <td className={td}>{comments}</td>
              <td
                className={td}
                style={{ color: type === '+' ? '#75c16e' : '#ff6c00' }}
              >
                {amount}
              </td>
              <td className={td}>{balance}</td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  </section>
);

export default TransferHistoryPcTablet;
