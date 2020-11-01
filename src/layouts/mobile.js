import React, { lazy } from 'react';
import { Route } from 'react-router-dom';
import { Media } from '../common';
import {
  AppBar,
  CostMobile,
  CurrencyExchange,
  IncomeMobile,
  NavBar,
} from '../components';
import routes from '../routes';

const HomePage = lazy(() => import('../Views/HomeView'));

const StatPage = lazy(() => import('../Views/StatisticsView'));

const MobileLayout = () => {
  return (
    <>
      <Media device="mobile">
        <AppBar />
        <div className="page_wrap">
          <Route path={[routes.HOME, routes.STATISTICS, routes.CURRENCY]} exact>
            <NavBar />
          </Route>
          <Route path={routes.HOME} exact component={HomePage} />
          <Route path={routes.STATISTICS} exact component={StatPage} />
          <Route path={routes.CURRENCY} exact component={CurrencyExchange} />
          <Route path={routes.ADDINCOME} exact component={IncomeMobile} />
          <Route path={routes.ADDCOST} exact component={CostMobile} />
        </div>
      </Media>
    </>
  );
};

export default MobileLayout;
