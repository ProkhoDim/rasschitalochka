import React from 'react';
import styles from './Total.module.css';

const Total = () => (
  <ul className={styles.List}>
    <li>
      <span className={styles.Name}>Total Costs:</span>
      <span className={(styles.Value, styles.Costs)}>22 549.24</span>
    </li>
    <li>
      <span className={styles.Name}>Total Income:</span>
      <span className={(styles.Value, styles.Income)}>27 350.00</span>
    </li>
  </ul>
);

export default Total;
