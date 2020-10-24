import React from 'react';
import { NavLink } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import SvgIcons from '../../common/SvgIcons';
import routes from '../../routes';
import s from './NavBar.module.css';

const NavBar = () => {
  return (
    <>
      <div className={s.wrap}>
        <div className={s.container}>
          <SvgIcons />
          <NavLink
            exact
            to={routes.HOME}
            className={s.navLink}
            activeClassName={s.navLink__active}
          >
            <svg className={s.icon}>
              <use xlinkHref="#icon-home"></use>
            </svg>
            <MediaQuery minDeviceWidth={768}>Home</MediaQuery>
          </NavLink>
          <NavLink
            exact
            to={routes.STATISTICS}
            className={s.navLink}
            activeClassName={s.navLink__active}
          >
            <svg className={s.icon}>
              <use xlinkHref="#icon-diagram"></use>
            </svg>
            <MediaQuery minDeviceWidth={768}>Diagram</MediaQuery>
          </NavLink>
          <MediaQuery maxDeviceWidth={767}>
            <NavLink
              exact
              to={routes.CURRENCY}
              className={s.navLink}
              activeClassName={s.navLink__active}
            >
              <svg className={s.icon}>
                <use xlinkHref="#icon-currency"></use>
              </svg>
            </NavLink>
          </MediaQuery>
        </div>
      </div>
    </>
  );
};

export default NavBar;
