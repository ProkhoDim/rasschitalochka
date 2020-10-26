import React from 'react';
import { connect } from 'react-redux';
import Logo from '../Logo';
import AppName from '../AppName';
import UserMenu from '../UserMenu';
import styles from './AppBar.module.css';

const AppBar = () => (
  <header className={styles.header}>
    <div className="page_wrap">
      <div className={styles.container}>
        <div className={styles.headerNameBox}>
          <Logo />
          <AppName />
        </div>
        <UserMenu />
      </div>
    </div>
  </header>
);

export default connect()(AppBar);
