import React from 'react';

import s from './AddCost.module.css';

const RadioButton = ({ value, onChange }) => {
  return (
    <label className={s.label}>
      <input
        type="radio"
        className={s.radio_button}
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
