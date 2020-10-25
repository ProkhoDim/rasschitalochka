import React from 'react';
import T from 'prop-types';
import styles from './ChartWrapper.module.css';

const ChartWrapper = ({ children }) => (
  <div className={styles.ChartWrapper}>{children}</div>
);

ChartWrapper.propTypes = {
  children: T.node.isRequired,
};

export default ChartWrapper;
