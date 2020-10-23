import React from 'react';
import { connect } from 'react-redux';
import styles from './Sidebar.module.css';

const SideBar = () => (
  <aside className={styles.sideBar}>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </aside>
);

export default connect()(SideBar);
