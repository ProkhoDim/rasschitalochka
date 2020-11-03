import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Media } from '../common';
import {
  AddTransactionMobile,
  AppBar,
  // CostMobile,
  CurrencyExchange,
  // IncomeMobile,
  NavBar,
  TotalBalance,
} from '../components';
import * as transactionTypes from '../constants/transactionTypes';
import { costs, income } from '../constants/CategoryValues';
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
          <Route
            path={routes.ADDINCOME}
            exact
            render={props => (
              <AddTransactionMobile
                props={props}
                type={transactionTypes.addIncome}
                radioButtonData={income}
              />
            )}
          />
          <Route
            path={routes.ADDCOST}
            exact
            render={props => (
              <AddTransactionMobile
                props={props}
                type={transactionTypes.addCost}
                radioButtonData={costs}
              />
            )}
          />
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
            <div className="aside_box">
              <NavBar />
              <TotalBalance />
            </div>
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
