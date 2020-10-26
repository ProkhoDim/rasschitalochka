import React from 'react';
import styles from './TransferHistoryPcTablet.module.css';
const { tableShadow, table, tableRow, tableTopRow } = styles;

const TransferHistoryPcTablet = ({ dataBase }) => (
  <section className={tableShadow}>
    <table className={table}>
      <thead className={tableTopRow}>
        <tr>
          <th>Date</th>
          <th>Type</th>
          <th>Category</th>
          <th>Comments</th>
          <th>Amount, UAH</th>
          <th>Balance After</th>
        </tr>
      </thead>
      <tbody>
        {dataBase.map(
          ({ date, type, category, comments, amount, balance }, index) => (
            <tr key={index} className={tableRow}>
              <td>{date}</td>
              <td>{type}</td>
              <td>{category}</td>
              <td>{comments}</td>
              <td style={{ color: type === '+' ? '#75c16e' : '#ff6c00' }}>
                {amount}
              </td>
              <td>{balance}</td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  </section>
);

export default TransferHistoryPcTablet;
