import React, { lazy } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Media } from '../common';
import { AppBar, NavBar, TotalBalance } from '../components';
import routes from '../routes';

const HomePage = lazy(() => import('../Views/HomeView'));

const StatPage = lazy(() => import('../Views/StatisticsView'));

const TabletLayout = () => {
  return (
    <>
      <Media device="onlyTablet">
        <AppBar />
        <div className="page_wrap">
          <NavBar children={<TotalBalance />} />
          <Route path={routes.HOME} exact component={HomePage} />
          <Route path={routes.STATISTICS} exact component={StatPage} />
          <Redirect to={routes.HOME} />
        </div>
      </Media>
    </>
  );
};

export default TabletLayout;
