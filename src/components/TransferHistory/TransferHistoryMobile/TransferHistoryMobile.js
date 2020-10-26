import React from 'react';
import styles from './TransferHistoryMobile.module.css';
const { list, listItem, listItemRow } = styles;

const TransferHistoryMobile = ({ dataBase }) => (
  <section>
    <ul className={list}>
      {dataBase.map(
        ({ date, type, category, comments, amount, balance }, index) => (
          <li key={index} className={listItem}>
            <div className={listItemRow}>
              <p>Date</p>
              <p>{date}</p>
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
              <p>{balance}</p>
            </div>
          </li>
        ),
      )}
    </ul>
  </section>
);

export default TransferHistoryMobile;
