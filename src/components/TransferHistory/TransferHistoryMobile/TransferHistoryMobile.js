import React from 'react';
import { connect } from 'react-redux';
import { financeSelectors } from '../../../redux/finance';
import styles from './TransferHistoryMobile.module.css';
const { list, listItem, listItemRow } = styles;

const randomColor = index => {
  return `#${(index * 123 + 500).toString(16)}`;
};

const TransferHistoryMobile = ({ dataBase }) => (
  <section>
    <ul className={list}>
      {dataBase.map(
        ({ date, type, category, comments, amount, balanceAfter }, index) => (
          <li
            key={index}
            className={listItem}
            style={{ borderLeft: `8px solid ${randomColor(index)}` }}
          >
            <div className={listItemRow}>
              <p>Date</p>
              <p>{new Date(date).toLocaleDateString()}</p>
            </div>
            <div className={listItemRow}>
              <p>Type</p>
              <p>{type}</p>
            </div>
            <div className={listItemRow}>
              <p>Category</p>
              <p>{category}</p>
            </div>
            <div className={listItemRow}>
              <p>Comments</p>
              <p>{comments}</p>
            </div>
            <div className={listItemRow}>
              <p>Amount, UAH</p>
              <p style={{ color: type === '+' ? '#75c16e' : '#ff6c00' }}>
                {amount}
              </p>
            </div>
            <div className={listItemRow}>
              <p>Balance After</p>
              <p>{balanceAfter}</p>
            </div>
          </li>
        ),
      )}
    </ul>
  </section>
);

const mapStateToProps = state => ({
  dataBase: financeSelectors.getTransactionHistory(state),
});

export default connect(mapStateToProps)(TransferHistoryMobile);
