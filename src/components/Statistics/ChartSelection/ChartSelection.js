import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from '../../../redux/finance/finance-action';
import styles from './ChartSelection.module.css';

const month = [
  { value: 1, name: 'January' },
  { value: 2, name: 'February' },
  { value: 3, name: 'March' },
  { value: 4, name: 'April' },
  { value: 5, name: 'May' },
  { value: 6, name: 'June' },
  { value: 7, name: 'July' },
  { value: 8, name: 'August' },
  { value: 9, name: 'September' },
  { value: 10, name: 'October' },
  { value: 11, name: 'November' },
  { value: 12, name: 'December' },
];
const year = [
  { value: '2020' },
  { value: '2019' },
  { value: '2018' },
  { value: '2017' },
  { value: '2016' },
];

const ChartSelection = ({ onChange }) => (
  <>
    <section className={styles.Section}>
      <select
        name="month"
        className={styles.Select}
        defaultValue="Month"
        onChange={onChange}
      >
        <option>Month</option>
        {month.map(({ value, name }) => (
          <option key={value} value={value}>
            {name}
          </option>
        ))}
      </select>
      <select
        name="year"
        className={styles.Select}
        defaultValue="Year"
        onChange={onChange}
      >
        <option>Year</option>
        {year.map(({ value }) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </section>
  </>
);

ChartSelection.propTypes = {
  onChange: T.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onChange: event =>
    dispatch(
      changeFilter({ [event.currentTarget.name]: +event.currentTarget.value }),
    ),
});
export default connect(null, mapDispatchToProps)(ChartSelection);
