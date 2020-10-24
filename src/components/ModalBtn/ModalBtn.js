import React from 'react';
import PropTypes from 'prop-types';
import styles from './ModalBtn.module.css';

const ModalBtn = () => (
  <div className={styles.modalBtnBox}>
    <button className={styles.modalBtn}>Add Income</button>
    <button className={styles.modalBtn}>Add Cost</button>
  </div>
);

// ModalBtn.propTypes = {
//   onAddIncomeBtnClick: PropTypes.func.isRequired,
//   onAddCostBtnClick: PropTypes.func.isRequired,
// };

export default ModalBtn;
