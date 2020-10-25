import React from 'react';
import styles from './Legend.module.css';
const data = [
  { id: 1, category: 'Main Expenses', amount: 8700, fill: '#ecb22a' },
  { id: 2, category: 'Food', amount: 3800, fill: '#e28b20' },
  { id: 3, category: 'Car', amount: 1500, fill: '#d25925' },
  { id: 4, category: 'Self Care', amount: 800, fill: '#67b7d0' },
  { id: 5, category: 'Ghild Care', amount: 2208, fill: '#5593d7' },
  { id: 6, category: 'House Products', amount: 300, fill: '#3e6ba8' },
  { id: 7, category: 'Education', amount: 3400, fill: '#9cc254' },
  { id: 8, category: 'Entertainment', amount: 1230, fill: '#73ad57' },
  { id: 9, category: 'Othe Expenses', amount: 610, fill: '#507c3a' },
];
const Legend = () => (
  <table className={styles.Table}>
    <thead className={styles.Thead}>
      <tr>
        <th>Categories</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody className={styles.Tbody}>
      {data.map(({ id, category, amount, fill }) => (
        <tr key={id}>
          <td className={styles.Category}>
            <div
              style={{
                backgroundColor: fill,
              }}
              className={styles.ColorScale}
            ></div>
            {category}
          </td>
          <td className={styles.Amount}>{amount}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Legend;
