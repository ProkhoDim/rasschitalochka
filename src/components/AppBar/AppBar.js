import React from 'react';
import Logo from '../Logo';
import AppName from '../AppName';
import UserMenu from '../UserMenu';
import styles from './AppBar.module.css';
import { NavLink } from 'react-router-dom';
import * as routes from '../../constants/routes';

const AppBar = () => (
  <header className={styles.header}>
    <div className="page_wrap">
      <div className={styles.container}>
        <div className={styles.headerNameBox}>
          <NavLink exact to={routes.HOME}>
            <Logo />
          </NavLink>
          <AppName />
        </div>
        <UserMenu />
      </div>
    </div>
  </header>
);

export default AppBar;
