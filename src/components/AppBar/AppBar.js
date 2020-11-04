import React from 'react';
import UserMenu from '../UserMenu';
import styles from './AppBar.module.css';
import { NavLink } from 'react-router-dom';
import * as routes from '../../constants/routes';
import logo from '../../assets/icons/logo.svg';

const AppBar = () => (
  <header className={styles.header}>
    <div className="page_wrap">
      <div className={styles.container}>
        <div className={styles.headerNameBox}>
          <NavLink exact to={routes.HOME}>
            <img src={logo} alt="logo" width="50" className={styles.logo} />
          </NavLink>
          <h1 className={styles.appName}>Rasschitalochka</h1>
        </div>
        <UserMenu />
      </div>
    </div>
  </header>
);

export default AppBar;
