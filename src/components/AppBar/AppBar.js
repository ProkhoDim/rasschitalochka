import React from 'react';
import { connect } from 'react-redux';
import Logo from '../Logo';
import AppName from '../AppName';
import UserMenu from '../UserMenu';
import styles from './AppBar.module.css';

const AppBar = () => (
  <header className={styles.header}>
    <div className={styles.headerNameBox}>
      <Logo />
      <AppName />
    </div>
    <UserMenu />
  </header>
);

export default connect()(AppBar);
