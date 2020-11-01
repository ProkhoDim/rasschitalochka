import React from 'react';
import styles from './Sidebar.module.css';
import TotalBalance from '../TotalBalance';

const SideBar = () => (
  <aside className={styles.sideBarBox}>
    <TotalBalance />
  </aside>
);

export default SideBar;
