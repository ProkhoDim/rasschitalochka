import React from 'react';
import styles from './ChartSelection.module.css';

const month = [
  { value: '01', name: 'January' },
  { value: '02', name: 'February' },
  { value: '03', name: 'March' },
  { value: '04', name: 'April' },
  { value: '05', name: 'May' },
  { value: '06', name: 'June' },
  { value: '07', name: 'July' },
  { value: '08', name: 'August' },
  { value: '09', name: 'September' },
  { value: '10', name: 'October' },
  { value: '11', name: 'November' },
  { value: '12', name: 'December' },
];
const year = [
  { name: '2016' },
  { name: '2017' },
  { name: '2018' },
  { name: '2019' },
  { name: '2020' },
];

const ChartSelection = () => (
  <section className={styles.Section}>
    <select name="month" className={styles.Select} defaultValue="Month">
      <option disabled>Month</option>
      {month.map(({ value, name }) => (
        <option key={value + name} value={value}>
          {name}
        </option>
      ))}
    </select>
    <select name="year" className={styles.Select} defaultValue="Year">
      <option disabled>Year</option>
      {year.map(({ name }) => (
        <option key={name} value={name}>
          {name}
        </option>
      ))}
    </select>
  </section>
);

export default ChartSelection;
