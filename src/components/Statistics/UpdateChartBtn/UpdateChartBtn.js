import React from 'react';
import styles from './UpdateChartBtn.module.css';

const UpdateChartBtn = ({ updateDiagram }) => (
  <button
    type="button"
    className={styles.UpdateChartBtn}
    onClick={updateDiagram}
  >
    Update Diagram
  </button>
);

export default UpdateChartBtn;
