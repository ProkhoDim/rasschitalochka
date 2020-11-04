import React, { useState } from 'react';

import { RadioButton } from '../../common';

import styles from './AddTransaction.module.css';

const AddTransaction = ({ onSubmit, onCloseModal, radioButtonData, type }) => {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState(null);
  const [date, setDate] = useState(null);
  const [comment, setComment] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ category, amount, date, comment, type });
    onCloseModal();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.heading_wrapper}>
        <div className={styles.amount_wrapper}>
          <input
            className={styles.amount}
            type="number"
            name="amount"
            min="0"
            max="99999"
            step="0.01"
            onChange={({ target: { value } }) => setAmount(value)}
            required
          />
        </div>
        <div className={styles.date_wrapper}>
          <input
            className={styles.date}
            name="date"
            type="date"
            required
            onChange={({ target }) => setDate(target.valueAsNumber)}
          />
        </div>
      </div>
      <div className={styles.categories_wrapper}>
        <h2 className={styles.categories_title}>Categories</h2>
        {radioButtonData.map(value => (
          <RadioButton
            value={value}
            key={value}
            onChange={({ target: { value } }) => setCategory(value)}
          />
        ))}
      </div>
      <div className={styles.comments_wrapper}>
        <h2 className={styles.comments_heading}>Comments</h2>
        <textarea
          className={styles.comments}
          type="text"
          name="comments"
          onChange={({ target: { value } }) => setComment(value)}
        />
      </div>
      <button type="submit" className={styles.button}>
        Add
      </button>
    </form>
  );
};

export default AddTransaction;
