import React, { Component } from 'react';
import UpdateChartBtn from '../UpdateChartBtn';
import styles from './ChartSelection.module.css';

const month = [
  { value: 0, name: 'January' },
  { value: 1, name: 'February' },
  { value: 2, name: 'March' },
  { value: 3, name: 'April' },
  { value: 4, name: 'May' },
  { value: 5, name: 'June' },
  { value: 6, name: 'July' },
  { value: 7, name: 'August' },
  { value: 8, name: 'September' },
  { value: 9, name: 'October' },
  { value: 10, name: 'November' },
  { value: 11, name: 'December' },
];
const year = [
  { value: '2020' },
  { value: '2019' },
  { value: '2018' },
  { value: '2017' },
  { value: '2016' },
];

class ChartSelection extends Component {
  state = {
    month: '',
    year: '',
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  updateDiagram = () => {
    this.props.updateDiagram({ ...this.state });
  };

  render() {
    return (
      <>
        <section className={styles.Section}>
          <select
            name="month"
            className={styles.Select}
            defaultValue="Month"
            onChange={this.handleChange}
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
            onChange={this.handleChange}
          >
            <option>Year</option>
            {year.map(({ value }) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </section>
        <UpdateChartBtn updateDiagram={this.updateDiagram} />
      </>
    );
  }
}

export default ChartSelection;
