import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { financeSelectors } from '../../../redux/finance';
import styles from './Total.module.css';

const Total = ({ totalCost, totalIncome, totalCostByParameter }) => (
  <ul className={styles.List}>
    {totalCostByParameter ? (
      <>
        <li>
          <span className={styles.Name}>Total Costs selected:</span>
          <span className={(styles.Value, styles.Costs)}>
            {totalCostByParameter}
          </span>
        </li>
        <li>
          <span className={styles.Name}>Total Costs:</span>
          <span className={(styles.Value, styles.Costs)}>{totalCost}</span>
        </li>
      </>
    ) : (
      <li>
        <span className={styles.Name}>Total Costs:</span>
        <span className={(styles.Value, styles.Costs)}>{totalCost}</span>
      </li>
    )}
    <li>
      <span className={styles.Name}>Total Income:</span>
      <span className={(styles.Value, styles.Income)}>{totalIncome}</span>
    </li>
  </ul>
);

Total.defaultProps = {
  totalCost: 0.0,
  totalIncome: 0.0,
};

Total.propTypes = {
  totalCost: T.number,
  totalIncome: T.number,
};

const mapStateToProps = state => ({
  totalCost: financeSelectors.getTotalCost(state),
  totalIncome: financeSelectors.getTotalIncome(state),
});
export default connect(mapStateToProps)(Total);
