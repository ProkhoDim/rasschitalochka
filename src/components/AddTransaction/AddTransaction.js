import React, { Component } from 'react';

import { RadioButton } from '../../common';

import styles from './AddTransaction.module.css';

class AddTransaction extends Component {
  state = {
    comments: '',
    category: '',
    amount: '',
    date: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    if (name === 'date') {
      this.setState({ date: e.target.valueAsNumber });
    } else {
      this.setState({ [name]: value });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.props.onCloseModal();
  };

  render() {
    const { radioButtonData } = this.props;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <div className={styles.heading_wrapper}>
          <div className={styles.amount_wrapper}>
            <input
              className={styles.amount}
              type="number"
              name="amount"
              min="0"
              max="99999"
              step="0.01"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className={styles.date_wrapper}>
            <input
              className={styles.date}
              name="date"
              type="date"
              ref={this.dateRef}
              required
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className={styles.categories_wrapper}>
          <h2 className={styles.categories_title}>Categories</h2>
          {radioButtonData.map(value => (
            <RadioButton
              value={value}
              key={value}
              onChange={this.handleChange}
            />
          ))}
        </div>
        <div className={styles.comments_wrapper}>
          <h2 className={styles.comments_heading}>Comments</h2>
          <textarea
            className={styles.comments}
            type="text"
            name="comments"
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className={styles.button}>
          Add
        </button>
      </form>
    );
  }
}

export default AddTransaction;
