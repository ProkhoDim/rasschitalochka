import React from 'react';

import styles from './RadioButton.module.css';

const RadioButton = ({ value, onChange }) => {
  return (
    <label className={styles.label}>
      <input
        type="radio"
        className={styles.radio_button}
        name="category"
        value={value}
        onChange={onChange}
        required
      />
      {value}
    </label>
  );
};

export default RadioButton;
