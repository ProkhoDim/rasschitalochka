import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Media } from '../common';
import {
  AppBar,
  CostMobile,
  CurrencyExchange,
  IncomeMobile,
  NavBar,
  Sidebar,
  TotalBalance,
} from '../components';
import * as routes from '../constants/routes';

const Layouts = ({ children }) => {
  return (
    <>
      <Media device="mobile">
        <AppBar />
        <div className="page_wrap">
          <Route path={[routes.HOME, routes.STATISTICS, routes.CURRENCY]} exact>
            <NavBar />
          </Route>
          {children}
          <Route path={routes.CURRENCY} exact component={CurrencyExchange} />
          <Route path={routes.ADDINCOME} exact component={IncomeMobile} />
          <Route path={routes.ADDCOST} exact component={CostMobile} />
        </div>
      </Media>
      <Media device="onlyTablet">
        <AppBar />
        <div className="page_wrap">
          <NavBar children={<TotalBalance />} />
          {children}
          <Redirect to={routes.HOME} />
        </div>
      </Media>
      <Media device="desktop">
        <AppBar />
        <div className="page_wrap">
          <div className="aside_container">
            <NavBar />
            <Sidebar />
            <CurrencyExchange />
          </div>
          {children}
          <Redirect to={routes.HOME} />
        </div>
      </Media>
    </>
  );
};

export default Layouts;
