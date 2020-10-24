import React from 'react';
import { connect } from 'react-redux';
import styles from './Sidebar.module.css';
import TotalBalance from '../TotalBalance';

const SideBar = () => (
  <aside className={styles.sideBar}>
    <div>Navigation</div>
    <TotalBalance />
    <div className={styles.sidebarExchengeRateBox}>exchange rate</div>
  </aside>
);

export default connect()(SideBar);
