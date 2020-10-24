import React from 'react';
import { NavLink } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import SvgIcons from './SvgIcons';
import routes from '../../routes';
import s from './NavBar.module.css';

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
            <MediaQuery minDeviceWidth={426}>
              <span className={s.navLink_text}>Home</span>
            </MediaQuery>
          </NavLink>
          <NavLink
            exact
            to={routes.STATISTICS}
            className={s.navLink}
            activeClassName={s.navLink__active}
          >
            <SvgIcons id="icon-diagram" />
            <MediaQuery minDeviceWidth={426}>
              <span className={s.navLink_text}>Diagram</span>
            </MediaQuery>
          </NavLink>
          <MediaQuery maxDeviceWidth={425}>
            <NavLink
              exact
              to={routes.CURRENCY}
              className={s.navLink}
              activeClassName={s.navLink__active}
            >
              <SvgIcons id="icon-currency" />
            </NavLink>
          </MediaQuery>
          <MediaQuery minDeviceWidth={426} maxDeviceWidth={1169}>
            {children}
          </MediaQuery>
        </div>
      </div>
    </>
  );
};

export default NavBar;
