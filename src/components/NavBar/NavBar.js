import React from 'react';
import { NavLink } from 'react-router-dom';
import SvgIcons from './SvgIcons';
import * as routes from '../../constants/routes';
import styles from './NavBar.module.css';
import { Media } from '../../common';

const NavBar = ({ children }) => {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.container}>
          <NavLink
            exact
            to={routes.HOME}
            className={styles.navLink}
            activeClassName={styles.navLink__active}
          >
            <SvgIcons id="icon-home" />

            <span className={styles.navLink_text}>Home</span>
          </NavLink>

          <NavLink
            exact
            to={routes.STATISTICS}
            className={styles.navLink}
            activeClassName={styles.navLink__active}
          >
            <SvgIcons id="icon-diagram" />

            <span className={styles.navLink_text}>Diagram</span>
          </NavLink>

          <Media device="mobile">
            <NavLink
              exact
              to={routes.CURRENCY}
              className={styles.navLink}
              activeClassName={styles.navLink__active}
            >
              <SvgIcons id="icon-currency" />
            </NavLink>
          </Media>

          <Media device="onlyTablet">{children}</Media>
        </div>
      </div>
    </>
  );
};

export default NavBar;
