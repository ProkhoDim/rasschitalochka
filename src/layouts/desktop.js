import React, { lazy } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Media } from '../common';
import { AppBar, CurrencyExchange, NavBar, Sidebar } from '../components';
import routes from '../routes';

const HomePage = lazy(() => import('../Views/HomeView'));

const StatPage = lazy(() => import('../Views/StatisticsView'));

const DesktopLayout = () => {
  return (
    <>
      <Media device="desktop">
        <AppBar />
        <div className="page_wrap">
          <div className="aside_container">
            <NavBar />
            <Sidebar />
            <CurrencyExchange />
          </div>
          <Route path={routes.HOME} exact component={HomePage} />
          <Route path={routes.STATISTICS} exact component={StatPage} />
          <Redirect to={routes.HOME} />
        </div>
      </Media>
    </>
  );
};

export default DesktopLayout;
