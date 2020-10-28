import React from 'react';
import { toISOString } from '../addons/formatFixer';
import styles from './TransferHistoryMobile.module.css';
const { list, listItem, listItemRow } = styles;

const TransferHistoryMobile = ({ dataBase }) => (
  <section>
    <ul className={list}>
      {dataBase.map(
        ({ id, date, type, category, comments, amount, balanceAfter }) => {
          return (
            <li key={id} className={listItem}>
              <div className={listItemRow}>
                <p>Date</p>
                <p>{toISOString(date)}</p>
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
          );
        },
      )}
    </ul>
    {!dataBase.length && <h2 className={alert}>No new transactions yet</h2>}
  </section>
);

export default TransferHistoryMobile;
