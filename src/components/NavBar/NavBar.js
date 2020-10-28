import React from 'react';
import { NavLink } from 'react-router-dom';
import SvgIcons from './SvgIcons';
import routes from '../../routes';
import s from './NavBar.module.css';
import { Media } from '../../common';

const NavBar = ({ children }) => {
  return (
    <>
      <div className={s.wrap}>
        <div className={s.container}>
          <NavLink
            exact
            to={routes.HOME}
            className={s.navLink}
            activeClassName={s.navLink__active}
          >
            <SvgIcons id="icon-home" />
            <Media device="fromTablet">
              <span className={s.navLink_text}>Home</span>
            </Media>
          </NavLink>
          <NavLink
            exact
            to={routes.STATISTICS}
            className={s.navLink}
            activeClassName={s.navLink__active}
          >
            <SvgIcons id="icon-diagram" />
            <Media device="fromTablet">
              <span className={s.navLink_text}>Diagram</span>
            </Media>
          </NavLink>
          <Media device="mobile">
            <NavLink
              exact
              to={routes.CURRENCY}
              className={s.navLink}
              activeClassName={s.navLink__active}
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
